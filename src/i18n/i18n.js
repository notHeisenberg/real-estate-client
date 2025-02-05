import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json',
      apiKey: 'TwlRMegAjusfPxy3kzBhyQ'
    }
  });

const resources = {
  en: {
    translation: {
      experience: {
        title: "ENJOY A UNIQUE EXPERIENCE",
        description: "We are passionate about providing luxury services and meeting all your demands with excellent and dedicated services.",
        viewMore: "View More"
      },
      about: {
        title: "ABOUT TAILOR MADE CONCIERGE",
        description_1: "Tailor Made Concierge is a luxury and lifestyle services company operating in Marbella, Sotogrande, and Madrid.",
        description_2: "We specialize in delivering exclusive, fully personalized luxury services that guarantee unique experiences, seamless one-call problem solving, significant time savings, and 24/7 support for your daily needs.",
        description_3: "At Tailor Made Concierge, we elevate lifestyle with meticulous attention to detail, discretion, and excellence.",
        image_left_alt: "Luxury Estate Left",
        image_right_alt: "Luxury Estate Right"
      },
      villaRentals: {
        title: "LUXURY VILLA RENTALS",
        description: "Rediscover luxury with our curated selection of premium Villa Rentals in Marbella, Sotogrande and Madrid."
      }
    }
  },
  es: {
    translation: {
      experience: {
        title: "DISFRUTA DE UNA EXPERIENCIA ÚNICA",
        description: "Nos apasiona brindar servicios de lujo y satisfacer todas tus demandas con servicios excelentes y dedicados.",
        viewMore: "Ver Más"
      },
      about: {
        title: "SOBRE TAILOR MADE CONCIERGE",
        description_1: "Tailor Made Concierge es una empresa de servicios de lujo y estilo de vida que opera en Marbella, Sotogrande y Madrid.",
        description_2: "Nos especializamos en brindar servicios de lujo exclusivos y totalmente personalizados que garantizan experiencias únicas, resolución de problemas con una sola llamada, ahorro significativo de tiempo y soporte 24/7 para sus necesidades diarias.",
        description_3: "En Tailor Made Concierge, elevamos el estilo de vida con meticulosa atención al detalle, discreción y excelencia.",
        image_left_alt: "Propiedad de Lujo Izquierda",
        image_right_alt: "Propiedad de Lujo Derecha"
      },
      villaRentals: {
        title: "ALQUILER DE VILLAS DE LUJO",
        description: "Redescubre el lujo con nuestra selección de Villas premium en Marbella, Sotogrande y Madrid."
      }
    }
  }
};

export default i18n; 