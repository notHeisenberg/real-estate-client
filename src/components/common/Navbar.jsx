import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ServicesHoverCard from './ServicesHoverCard';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const serviceLinks = [
    { 
      name: t('navbar.serviceLinks.propertyManagement'), 
      id: 'property-management',
      onClick: () => scrollToService('property-management')
    },
    { 
      name: t('navbar.serviceLinks.consulting'), 
      id: 'consulting',
      onClick: () => scrollToService('consulting')
    },
    { 
      name: t('navbar.serviceLinks.valuation'), 
      id: 'valuation',
      onClick: () => scrollToService('valuation')
    },
    { 
      name: t('navbar.serviceLinks.investment'), 
      id: 'investment',
      onClick: () => scrollToService('investment')
    },
  ];

  const scrollToService = (serviceId) => {
    const servicesSection = document.getElementById('services');
    const serviceElement = document.getElementById(serviceId);
    if (servicesSection && serviceElement) {
      const navHeight = 112; // height of navbar
      const servicesPosition = servicesSection.getBoundingClientRect().top;
      const servicePosition = serviceElement.getBoundingClientRect().top;
      const offsetPosition = servicePosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setServiceMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 112;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 500;

      // Check if scrolled more than 10px for background change
      setScrolled(currentScrollY > 10);

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY.current || currentScrollY < scrollThreshold) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Hide navbar only when scrolling down and past threshold
        if (currentScrollY > scrollThreshold) {
          setVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const navItems = [
    { name: t('navbar.home'), path: '/' },
    { isServices: true },
    { 
      name: t('navbar.contact'), 
      onClick: scrollToContact,
      className: "relative text-gray-400 hover:text-[#034079] font-medium transition-colors duration-500 group"
    }
  ];

  return (
    <nav
      className={`fixed top-0 w-full h-32 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-transparent backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">

        <div className="flex items-center justify-between h-28 space-x-10 ">
          {/* Logo and Website Name */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <img
              src="/images/Logo_cccc.svg"
              alt="Logo"
              className="h-24 w-24 rounded-full object-cover hover:scale-110 transition-all duration-300"
            />
            <Link to="/" className="flex items-center space-x-3 text-[#034079] hover:text-[#034079]/60 transition-all duration-500 font-system">
              <p className="flex flex-col items-center text-2xl font-semibold w-44 text-center">
                Aura Made
                <span className="text-sm font-semibold mt-1">
                  Luxury consierge service
                </span>
              </p>
            </Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden bg-transparent">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 bg-transparent rounded-md hover:text-indigo-600 hover:bg-transparent transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation Items - Hidden on Mobile */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                item.isServices ? (
                  <ServicesHoverCard key="services">
                    <h1
                      className="relative text-gray-400 hover:text-[#034079] font-medium transition-colors duration-500 group cursor-pointer"
                    >
                      {t('navbar.services')}

                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#034079] transition-all duration-500 group-hover:w-full" />
                    </h1>
                  </ServicesHoverCard>
                ) : item.onClick ? (
                  <h1
                    key={item.name}
                    onClick={item.onClick}
                    className={item.className}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#034079] transition-all duration-500 group-hover:w-full" />
                  </h1>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative text-gray-400 hover:text-[#034079] font-medium transition-colors duration-500 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#034079] transition-all duration-500 group-hover:w-full" />
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Language Switcher - Hidden on Mobile */}
          <div className="hidden md:flex flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown when mobileMenuOpen is true */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 bg-white/95 backdrop-blur-sm shadow-lg">
          {navItems.map((item) => (
            item.isServices ? (
              <div key="services" className="block">
                <button
                  onClick={() => setServiceMenuOpen(!serviceMenuOpen)}
                  className="w-full flex items-center justify-between text-gray-400 hover:text-[#034079] font-medium py-2"
                >
                  <span>{t('navbar.services')}</span>
                  {serviceMenuOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {/* Service Links Dropdown */}
                <div
                  className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    serviceMenuOpen ? 'max-h-48 mt-2' : 'max-h-0'
                  }`}
                >
                  {serviceLinks.map((service) => (
                    <button
                      key={service.name}
                      onClick={service.onClick}
                      className="block w-full text-left text-sm text-gray-400 hover:text-[#034079] py-1"
                    >
                      {service.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        const navHeight = 112;
                        const elementPosition = servicesSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                      setServiceMenuOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-sm text-gray-400 hover:text-[#034079] py-1"
                  >
                    {t('navbar.viewAllServices')}
                  </button>
                </div>
              </div>
            ) : item.onClick ? (
              <button
                key={item.name}
                onClick={item.onClick}
                className={item.className}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#034079] transition-all duration-500 group-hover:w-full" />
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-400 hover:text-[#034079] font-medium py-2"
              >
                {item.name}
              </Link>
            )
          ))}
          {/* Language Switcher in Mobile Menu */}
          <div className="pt-2 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;