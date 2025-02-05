import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ServicesHoverCard from './ServicesHoverCard';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const serviceLinks = [
    { name: 'Property Management', path: '/services/property-management' },
    { name: 'Real Estate Consulting', path: '/services/consulting' },
    { name: 'Property Valuation', path: '/services/valuation' },
    { name: 'Investment Advisory', path: '/services/investment' },
  ];

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
    { name: 'Home', path: '/' },
    { isServices: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=64&h=64&fit=crop&auto=format"
              alt="Logo"
              className="h-14 w-14 rounded-lg object-cover"
            />
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-xl uppercase font-semibold">
                RealEstate
              </span>
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
              {navItems.map((item, index) => (
                item.isServices ? (
                  <ServicesHoverCard key="services">
                    <h1
                      className="relative text-gray-400 hover:text-indigo-600 font-medium transition-colors duration-200 group cursor-pointer"
                    >
                      Services
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full" />
                    </h1>
                  </ServicesHoverCard>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative text-gray-400 hover:text-indigo-600 font-medium transition-colors duration-200 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full" />
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
                  className="w-full flex items-center justify-between text-gray-400 hover:text-indigo-600 font-medium py-2"
                >
                  <span>Services</span>
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
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => {
                        setServiceMenuOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-sm text-gray-400 hover:text-indigo-600 py-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      const servicesSection = document.getElementById('services');
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                        setServiceMenuOpen(false);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="block w-full text-left text-sm text-gray-400 hover:text-indigo-600 py-1"
                  >
                    View All Services
                  </button>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-400 hover:text-indigo-600 font-medium py-2"
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