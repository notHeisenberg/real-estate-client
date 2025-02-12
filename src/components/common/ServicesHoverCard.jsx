import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslation } from 'react-i18next';

const ServicesHoverCard = ({ children }) => {
  const { t } = useTranslation();

  const serviceLinks = [
    {
      name: t('navbar.serviceLinks.propertyManagement'),
      id: 'property-management'
    },
    {
      name: t('navbar.serviceLinks.consulting'),
      id: 'consulting'
    },
    {
      name: t('navbar.serviceLinks.valuation'),
      id: 'valuation'
    },
    {
      name: t('navbar.serviceLinks.investment'),
      id: 'investment'
    }
  ];

  const scrollToService = (e, serviceId) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    const serviceElement = document.getElementById(serviceId);
    
    if (servicesSection && serviceElement) {
      const navHeight = 128; // height of navbar
      const offsetPosition = serviceElement.offsetTop - navHeight;
      
      // First scroll to services section
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      
      // Then after a small delay, scroll to the specific service
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex flex-col space-y-2">
          {serviceLinks.map((service) => (
            <span
              key={service.id}
              onClick={(e) => scrollToService(e, service.id)}
              className="text-sm text-gray-500 hover:text-[#034079] transition-colors duration-500 cursor-pointer"
            >
              {service.name}
            </span>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServicesHoverCard; 