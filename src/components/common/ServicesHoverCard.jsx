import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslation } from 'react-i18next';

const ServicesHoverCard = ({ children }) => {
  const { t } = useTranslation();

  const serviceLinks = [
    t('navbar.serviceLinks.propertyManagement'),
    t('navbar.serviceLinks.consulting'),
    t('navbar.serviceLinks.valuation'),
    t('navbar.serviceLinks.investment'),
  ];

  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const navHeight = 112; // height of navbar (28px * 4)
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild onClick={scrollToServices}>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex flex-col space-y-2">
          {serviceLinks.map((service) => (
            <span
              key={service}
              className="text-sm text-gray-500 hover:text-[#034079] transition-colors duration-500 cursor-default"
            >
              {service}
            </span>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServicesHoverCard; 