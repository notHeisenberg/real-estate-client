import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { 
      code: 'en', 
      label: 'English',
      flag: 'https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/GBR.png'
    },
    { 
      code: 'es', 
      label: 'Español',
      flag: 'https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/ESP.png'
    },
    { 
      code: 'ru', 
      label: 'Русский',
      flag: 'https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/RUS.png'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [i18n]);

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('i18nextLng', langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-shadow bg-white text-gray-900"
      >
        <img src={getCurrentLanguage().flag} alt={getCurrentLanguage().label} className="w-4 h-4 mr-2" />
        {getCurrentLanguage().label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
            >
              <img src={lang.flag} alt={lang.label} className="w-4 h-4 mr-2" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 