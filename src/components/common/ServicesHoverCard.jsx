import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Link } from 'react-router-dom';

const ServicesHoverCard = ({ children }) => {
  const serviceLinks = [
    { name: 'Property Management', path: '/services/property-management' },
    { name: 'Real Estate Consulting', path: '/services/consulting' },
    { name: 'Property Valuation', path: '/services/valuation' },
    { name: 'Investment Advisory', path: '/services/investment' },
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
            <Link
              key={service.name}
              to={service.path}
              className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServicesHoverCard; 