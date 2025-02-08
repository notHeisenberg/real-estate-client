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
          address: "Pl / Eusebi Güell, 12 B, 08034, Barcelona (España)",
          tel: "Tel",
          mail: "Mail",
          copyright: "By Inscale Media ©2025",
          privacyPolicy: "Privacy policy"
        }
      },
      services: {
        title: "SERVICES TAILORED TO YOU",
        description: "Our team is always available to provide personalized assistance and solutions that meet your highest expectations."
      },
      experience: {
        title: "ENJOY A UNIQUE EXPERIENCE",
        description: "We are passionate about offering luxury services and making all your needs a reality with excellence and dedication.",
        viewMore: "View More"
      },
      about: {
        title: "ABOUT AURA MADE CONCIERGE",
        description_1: "Aura Made Concierge is your trusted partner in luxury experiences and lifestyle in Ibiza and Barcelona.",
        description_2: "We specialize in exclusive, fully personalized services, ensuring unique experiences, quick solutions with just one call, significant time savings, and 24/7 support for all your daily needs.",
        description_3: "At Aura Made Concierge, we elevate the concept of luxury with meticulous attention to detail, discretion, and excellence.",
        image_left_alt: "Luxury Estate Left",
        image_right_alt: "Luxury Estate Right"
      },
      villaRentals: {
        title: "YOUR LIFESTYLE, HASSLE-FREE",
        subtitle: "Dreaming of a stunning villa for your vacation?",
        description: "Discover our exclusive selection of premium villas in Ibiza, Barcelona, and Marbella, where luxury and comfort meet in every detail.",
        serviceDescription: "Our concierge service is designed to exceed expectations, offering personalized, efficient, and top-quality support so you can enjoy your experience without worries.",
        serviceDescription2: "We take care of every detail of your stay, allowing you to make the most of your time without stress or inconvenience.",
        seeMore: "See More"
      },
      ibizaInsider: {
        title: "IBIZA INSIDER",
        description: "Monthly Tips and Referrals for Embracing the Luxury Lifestyle in IBIZA. Discover the Island's Most Exclusive Experiences.",
        seeMore: "See More",
        imageAlt: "IBIZA Luxury Lifestyle"
      },
      partners: {
        title: "Our Partners",
        logoAlt: "{{partner}} - Partner of AURA MADE"
      },
      contact: {
        title: "CONTACT US",
        backgroundAlt: "Luxury Lifestyle Background",
        address: {
          line1: "Pl / Eusebi Güell, 12 B,",
          line2: "08034, Barcelona (España)",
          email: "info@conciergetailormade.com",
          tel: "Tel. y Whatsapp: +34 653 57 45 59"
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
          sending: "Sending...",
          success: "Success! Message received.",
          error: "Failed to send message. Please try again."
        }
      },
      conciergeServices: {
        title: "CONCIERGE SERVICES IN IBIZA AND BARCELONA",
        description: "24/7 full availability",
        features: [
          "Exclusive villas",
          "Private transfers and yacht rentals",
          "Private chefs",
          "Reservations at luxury restaurants and VIP access",
          "Spa and massage services",
          "Household staff: butlers, waiters, housekeepers, and nannies",
          "Personalized shopping",
          "Private event organization"
        ],
        footer: "A fully customized concierge service for you."
      },
      yacht: {
        overview: "Overview",
        features: "Features",
        gallery: "Gallery",
        specifications: "Specifications",
        length: "Length",
        capacity: "Capacity",
        crew: "Crew",
        speed: "Speed",
        backToYachts: "Back to Yachts",
        imageAlt: "{{title}} - Image {{number}}",
        details: {
          inspiration: {
            title: "Inspiration Yacht",
            description: "Experience luxury at sea with our flagship yacht"
          },
          majestic: {
            title: "Majestic Yacht",
            description: "Elegance and comfort combined in perfect harmony"
          },
          manbero: {
            title: "Manbero Yacht",
            description: "Modern sophistication meets maritime excellence"
          },
          seanfinity: {
            title: "Seanfinity Yacht",
            description: "Where luxury meets infinite possibilities"
          },
          autumn: {
            title: "Autumn Yacht",
            description: "Modern sophistication on the water"
          },
          ella: {
            title: "Ella Yacht",
            description: "Classic design with contemporary comfort"
          }
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
          address: "Pl / Eusebi Güell, 12 B, 08034, Barcelona (España)",
          tel: "Tel",
          mail: "Correo",
          copyright: "Por Inscale Media ©2025",
          privacyPolicy: "Política de privacidad"
        }
      },
      services: {
        title: "SERVICIOS DISEÑADOS PARA TI",
        description: "Nuestro equipo está siempre disponible para brindarte asistencia personalizada y soluciones que cumplan con tus más altas expectativas."
      },
      experience: {
        title: "DISFRUTA DE UNA EXPERIENCIA ÚNICA",
        description: "Nos apasiona ofrecer servicios de lujo y hacer realidad todas tus necesidades con excelencia y dedicación.",
        viewMore: "Ver Más"
      },
      about: {
        title: "SOBRE AURA MADE CONCIERGE",
        description_1: "Aura Made Concierge es tu socio de confianza en experiencias de lujo y estilo de vida en Ibiza y Barcelona.",
        description_2: "Nos especializamos en servicios exclusivos y totalmente personalizados, garantizando experiencias únicas, soluciones rápidas con una sola llamada, ahorro significativo de tiempo y soporte 24/7 para todas tus necesidades diarias.",
        description_3: "En Aura Made Concierge, elevamos el concepto de lujo con meticulosa atención al detalle, discreción y excelencia.",
        image_left_alt: "Propiedad de Lujo Izquierda",
        image_right_alt: "Propiedad de Lujo Derecha"
      },
      villaRentals: {
        title: "TU ESTILO DE VIDA, SIN COMPLICACIONES",
        subtitle: "¿Sueñas con una villa impresionante para tus vacaciones?",
        description: "Descubre nuestra selección exclusiva de villas premium en Ibiza, Barcelona y Marbella, donde el lujo y el confort se encuentran en cada detalle.",
        serviceDescription: "Nuestro servicio de conserjería está diseñado para superar expectativas, ofreciendo soporte personalizado, eficiente y de máxima calidad para que disfrutes de tu experiencia sin preocupaciones.",
        serviceDescription2: "Nos ocupamos de cada detalle de tu estancia, permitiéndote aprovechar al máximo tu tiempo sin estrés ni inconvenientes.",
        seeMore: "Ver Más"
      },
      ibizaInsider: {
        title: "IBIZA INSIDER",
        description: "Consejos y Referencias Mensuales para Disfrutar del Estilo de Vida de Lujo en IBIZA. Descubre las Experiencias Más Exclusivas de la Isla.",
        seeMore: "Ver Más",
        imageAlt: "Estilo de Vida de Lujo en IBIZA"
      },
      partners: {
        title: "Nuestros Colaboradores",
        logoAlt: "{{partner}} - Colaborador de Tailor Made Concierge"
      },
      contact: {
        title: "CONTÁCTENOS",
        backgroundAlt: "Fondo de Estilo de Vida de Lujo",
        address: {
          line1: "Pl / Eusebi Güell, 12 B,",
          line2: "08034, Barcelona (España)",
          email: "info@conciergetailormade.com",
          tel: "Tel: +34 653 57 45 59"
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
          sending: "Enviando...",
          success: "¡Éxito! Mensaje recibido.",
          error: "Error al enviar el mensaje. Por favor, inténtelo de nuevo."
        }
      },
      conciergeServices: {
        title: "SERVICIOS DE CONSERJERÍA EN IBIZA Y BARCELONA",
        description: "Disponibilidad total 24/7",
        features: [
          "Villas exclusivas",
          "Transfers privados y alquiler de yates",
          "Chefs privados",
          "Reservas en restaurantes de lujo y acceso VIP",
          "Servicios de spa y masajes",
          "Personal doméstico: mayordomos, camareros, personal de limpieza y niñeras",
          "Compras personalizadas",
          "Organización de eventos privados"
        ],
        footer: "Un servicio de conserjería totalmente personalizado para ti."
      },
      yacht: {
        overview: "Descripción General",
        features: "Características",
        gallery: "Galería",
        specifications: "Especificaciones",
        length: "Longitud",
        capacity: "Capacidad",
        crew: "Tripulación",
        speed: "Velocidad",
        backToYachts: "Volver a Yates",
        imageAlt: "{{title}} - Imagen {{number}}",
        details: {
          inspiration: {
            title: "Yate Inspiration",
            description: "Experimenta el lujo en el mar con nuestro yate insignia"
          },
          majestic: {
            title: "Yate Majestic",
            description: "Elegancia y comodidad combinadas en perfecta armonía"
          },
          manbero: {
            title: "Yate Manbero",
            description: "Sofisticación moderna y excelencia marítima"
          },
          seanfinity: {
            title: "Yate Seanfinity",
            description: "Donde el lujo se encuentra con las posibilidades infinitas"
          },
          autumn: {
            title: "Yate Autumn",
            description: "Sofisticación moderna en el agua"
          },
          ella: {
            title: "Yate Ella",
            description: "Diseño clásico con comodidad contemporánea"
          }
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
        description: "Мы увлечены предоставлением роскошных услуг и воплощением всех ваших потребностей в реальность с превосходством и самоотдачей.",
        viewMore: "Подробнее"
      },
      about: {
        title: "О AURA MADE CONCIERGE",
        description_1: "Aura Made Concierge - ваш надежный партнер в сфере роскошных впечатлений и образа жизни в Ибице и Барселоне.",
        description_2: "Мы специализируемся на эксклюзивных, полностью персонализированных услугах, обеспечивая уникальные впечатления, быстрые решения одним звонком, значительную экономию времени и поддержку 24/7 для всех ваших повседневных потребностей.",
        description_3: "В Aura Made Concierge мы поднимаем концепцию роскоши на новый уровень, уделяя пристальное внимание деталям, проявляя деликатность и стремясь к совершенству.",
        image_left_alt: "Роскошная Недвижимость Слева",
        image_right_alt: "Роскошная Недвижимость Справа"
      },
      villaRentals: {
        title: "АРЕНДА РОСКОШНЫХ ВИЛЛ",
        description: "Откройте для себя роскошь заново с нашей тщательно подобранной коллекцией премиальных вилл в IBIZA.",
        serviceDescription: "Наш консьерж-сервис разработан для удовлетворения самых высоких ожиданий, предлагая персонализированную, эффективную и первоклассную поддержку для обеспечения беззаботного и незабываемого опыта.",
        serviceDescription2: "Мы заботимся о каждой детали вашего пребывания, позволяя вам полностью наслаждаться временем без стресса и неудобств.",
        seeMore: "Подробнее"
      },
      ibizaInsider: {
        title: "IBIZA INSIDER",
        description: "Ежемесячные советы и рекомендации для погружения в роскошный образ жизни IBIZA. Откройте для себя самые эксклюзивные впечатления острова.",
        seeMore: "Подробнее",
        imageAlt: "Роскошный Образ Жизни в IBIZA"
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
          sending: "Отправка...",
          success: "Успех! Сообщение получено.",
          error: "Ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз."
        }
      },
      conciergeServices: {
        title: "SERVICIOS DE CONSERJERÍA EN IBIZA Y BARCELONA",
        description: "Disponibilidad total 24/7",
        features: [
          "Villas exclusivas",
          "Transfers privados y alquiler de yates",
          "Chefs privados",
          "Reservas en restaurantes de lujo y acceso VIP",
          "Servicios de spa y masajes",
          "Personal doméstico: mayordomos, camareros, personal de limpieza y niñeras",
          "Compras personalizadas",
          "Organización de eventos privados"
        ],
        footer: "Un servicio de conserjería totalmente personalizado para ti."
      },
      yacht: {
        overview: "Обзор",
        features: "Особенности",
        gallery: "Галерея",
        specifications: "Характеристики",
        length: "Длина",
        capacity: "Вместимость",
        crew: "Экипаж",
        speed: "Скорость",
        backToYachts: "Назад к Яхтам",
        imageAlt: "{{title}} - Изображение {{number}}",
        details: {
          inspiration: {
            title: "Яхта Inspiration",
            description: "Испытайте роскошь на море с нашей флагманской яхтой"
          },
          majestic: {
            title: "Яхта Majestic",
            description: "Элегантность и комфорт в идеальной гармонии"
          },
          manbero: {
            title: "Яхта Manbero",
            description: "Современная изысканность и морское совершенство"
          },
          seanfinity: {
            title: "Яхта Seanfinity",
            description: "Где роскошь встречается с безграничными возможностями"
          },
          autumn: {
            title: "Яхта Autumn",
            description: "Современная изысканность на воде"
          },
          ella: {
            title: "Яхта Ella",
            description: "Классический дизайн с современным комфортом"
          }
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