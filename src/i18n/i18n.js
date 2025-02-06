import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
        viewAllServices: "View All Services",
        serviceLinks: {
          propertyManagement: "Property Management",
          consulting: "Real Estate Consulting",
          valuation: "Property Valuation",
          investment: "Investment Advisory"
        }
      },
      common: {
        seeMore: "See More"
      },
      footer: {
        subscribe: {
          title: "Subscribe for Updates",
          placeholder: "Enter your email here",
          button: "Subscribe",
          success: "Thanks for submitting!"
        },
        contact: {
          address: "Av. Ricardo Soriano, 72, Portal B, 1st Floor, 29601 Marbella, Málaga",
          tel: "Tel",
          mail: "Mail",
          copyright: "By Inscale Media ©2025",
          privacyPolicy: "Privacy policy"
        }
      },
      services: {
        title: "SERVICES DESIGNED AROUND YOU",
        description: "Thanks to our dedicated team we provide personalized assistance and tailored solutions to meet all your needs."
      },
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
      },
      marbellaInsider: {
        title: "Marbella Insider",
        description: "Monthly Tips and Referrals for Embracing the Luxury Lifestyle of the city.",
        seeMore: "See More",
        imageAlt: "Marbella Luxury Lifestyle"
      },
      partners: {
        title: "Our Partners",
        logoAlt: "{{partner}} - Partner of Tailor Made Concierge"
      },
      contact: {
        title: "CONTACT US",
        backgroundAlt: "Luxury Lifestyle Background",
        address: {
          line1: "Av. Ricardo Soriano, 72, Portal B, 1st Floor,",
          line2: "29601 Marbella, Málaga",
          email: "info@conciergetailormade.com",
          tel: "Tel: +34 638 38 73 66"
        },
        social: {
          facebook: "Follow us on Facebook",
          instagram: "Follow us on Instagram"
        },
        form: {
          name: "Name *",
          email: "Email *",
          phone: "Phone",
          subject: "Subject",
          message: "Message",
          send: "Send",
          success: "Success! Message received."
        }
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
        viewAllServices: "Ver Todos los Servicios",
        serviceLinks: {
          propertyManagement: "Gestión de Propiedades",
          consulting: "Consultoría Inmobiliaria",
          valuation: "Valoración de Propiedades",
          investment: "Asesoría de Inversiones"
        }
      },
      common: {
        seeMore: "Ver Más"
      },
      footer: {
        subscribe: {
          title: "Suscríbete para Actualizaciones",
          placeholder: "Ingresa tu correo electrónico aquí",
          button: "Suscribirse",
          success: "¡Gracias por suscribirte!"
        },
        contact: {
          address: "Av. Ricardo Soriano, 72, Portal B, 1ª Planta, 29601 Marbella, Málaga",
          tel: "Tel",
          mail: "Correo",
          copyright: "Por Inscale Media ©2025",
          privacyPolicy: "Política de privacidad"
        }
      },
      services: {
        title: "SERVICIOS DISEÑADOS PARA TI",
        description: "Gracias a nuestro equipo dedicado, brindamos asistencia personalizada y soluciones a medida para satisfacer todas tus necesidades."
      },
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
      },
      marbellaInsider: {
        title: "Marbella Insider",
        description: "Consejos y Referencias Mensuales para Disfrutar del Estilo de Vida de Lujo de la ciudad.",
        seeMore: "Ver Más",
        imageAlt: "Estilo de Vida de Lujo en Marbella"
      },
      partners: {
        title: "Nuestros Colaboradores",
        logoAlt: "{{partner}} - Colaborador de Tailor Made Concierge"
      },
      contact: {
        title: "CONTÁCTENOS",
        backgroundAlt: "Fondo de Estilo de Vida de Lujo",
        address: {
          line1: "Av. Ricardo Soriano, 72, Portal B, 1ª Planta,",
          line2: "29601 Marbella, Málaga",
          email: "info@conciergetailormade.com",
          tel: "Tel: +34 638 38 73 66"
        },
        social: {
          facebook: "Síguenos en Facebook",
          instagram: "Síguenos en Instagram"
        },
        form: {
          name: "Nombre *",
          email: "Correo electrónico *",
          phone: "Teléfono",
          subject: "Asunto",
          message: "Mensaje",
          send: "Enviar",
          success: "¡Éxito! Mensaje recibido."
        }
      }
    }
  },
  ru: {
    translation: {
      navbar: {
        home: "Главная",
        services: "Услуги",
        blog: "Блог",
        contact: "Контакты",
        viewAllServices: "Все Услуги",
        serviceLinks: {
          propertyManagement: "Управление Недвижимостью",
          consulting: "Консультации по Недвижимости",
          valuation: "Оценка Недвижимости",
          investment: "Инвестиционный Консалтинг"
        }
      },
      common: {
        seeMore: "Подробнее"
      },
      footer: {
        subscribe: {
          title: "Подпишитесь на обновления",
          placeholder: "Введите ваш email здесь",
          button: "Подписаться",
          success: "Спасибо за подписку!"
        },
        contact: {
          address: "Av. Ricardo Soriano, 72, Portal B, 1-й этаж, 29601 Марбелья, Малага",
          tel: "Тел",
          mail: "Почта",
          copyright: "От Inscale Media ©2025",
          privacyPolicy: "Политика конфиденциальности"
        }
      },
      services: {
        title: "УСЛУГИ, СОЗДАННЫЕ ДЛЯ ВАС",
        description: "Благодаря нашей преданной команде мы предоставляем персонализированную помощь и индивидуальные решения для удовлетворения всех ваших потребностей."
      },
      experience: {
        title: "НАСЛАДИТЕСЬ УНИКАЛЬНЫМ ОПЫТОМ",
        description: "Мы увлечены предоставлением роскошных услуг и удовлетворением всех ваших требований с превосходным и преданным сервисом.",
        viewMore: "Подробнее"
      },
      about: {
        title: "О TAILOR MADE CONCIERGE",
        description_1: "Tailor Made Concierge - это компания, предоставляющая услуги класса люкс и лайфстайл в Марбелье, Сотогранде и Мадриде.",
        description_2: "Мы специализируемся на предоставлении эксклюзивных, полностью персонализированных услуг класса люкс, которые гарантируют уникальный опыт, решение проблем одним звонком, значительную экономию времени и поддержку 24/7 для ваших ежедневных потребностей.",
        description_3: "В Tailor Made Concierge мы поднимаем стиль жизни на новый уровень, уделяя пристальное внимание деталям, проявляя деликатность и стремясь к совершенству.",
        image_left_alt: "Роскошная Недвижимость Слева",
        image_right_alt: "Роскошная Недвижимость Справа"
      },
      villaRentals: {
        title: "АРЕНДА РОСКОШНЫХ ВИЛЛ",
        description: "Откройте для себя роскошь заново с нашей тщательно подобранной коллекцией премиальных вилл в Марбелье, Сотогранде и Мадриде."
      },
      marbellaInsider: {
        title: "Марбелья Инсайдер",
        description: "Ежемесячные советы и рекомендации для погружения в роскошный образ жизни города.",
        seeMore: "Подробнее",
        imageAlt: "Роскошный Образ Жизни в Марбелье"
      },
      partners: {
        title: "Наши Партнеры",
        logoAlt: "{{partner}} - Партнер Tailor Made Concierge"
      },
      contact: {
        title: "СВЯЖИТЕСЬ С НАМИ",
        backgroundAlt: "Фон Роскошного Образа Жизни",
        address: {
          line1: "Av. Ricardo Soriano, 72, Portal B, 1-й этаж,",
          line2: "29601 Марбелья, Малага",
          email: "info@conciergetailormade.com",
          tel: "Тел: +34 638 38 73 66"
        },
        social: {
          facebook: "Следите за нами на Facebook",
          instagram: "Следите за нами на Instagram"
        },
        form: {
          name: "Имя *",
          email: "Эл. почта *",
          phone: "Телефон",
          subject: "Тема",
          message: "Сообщение",
          send: "Отправить",
          success: "Успех! Сообщение получено."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 