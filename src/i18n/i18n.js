import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
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
          investment: "Asesoría de Inversiones",
          drivers: "Choferes Profesionales",
          medical: "Salud y Bienestar",
          seabob: "SEABOB F5s"
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
          address: "Su dirección, C/ Colon, 12, 46004 Valencia, España",
          tel: "+34 657 20 68 01",
          mail: "infoauramade@gmail.com",
          copyright: "Por Inscale Media ©2025",
          privacyPolicy: "Política de privacidad",
          serviceContract: "Contrato de Servicios"
        }
      },
      services: {
        title: "SERVICIOS A TU MEDIDA",
        description: "Nuestro equipo está siempre disponible para brindarte asistencia personalizada y soluciones que cumplan con tus más altas expectativas."
      },
      experience: {
        title: "DISFRUTA DE UNA EXPERIENCIA ÚNICA",
        description: "Nos apasiona ofrecer servicios de lujo y hacer realidad todas tus necesidades con excelencia y dedicación.",
        viewMore: "Ver Más"
      },
      about: {
        title: "SOBRE CAVIAR CONCIERGE",
        description_1: "Caviar Concierge es tu socio de confianza en experiencias de lujo y estilo de vida en Ibiza y Barcelona.",
        description_2: "Nos especializamos en servicios exclusivos y totalmente personalizados, garantizando experiencias únicas, soluciones rápidas con una sola llamada, ahorro significativo de tiempo y soporte 24/7 para todas tus necesidades diarias.",
        description_3: "En Caviar Concierge, elevamos el concepto de lujo con meticulosa atención al detalle, discreción y excelencia.",
        image_left_alt: "Propiedad de Lujo Izquierda",
        image_right_alt: "Propiedad de Lujo Derecha"
      },
      villaRentals: {
        title: "TU ESTILO DE VIDA, SIN PREOCUPACIONES",
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
        logoAlt: "{{partner}} - Colaborador de CAVIAR CONCIERGE"
      },
      contact: {
        title: "CONTÁCTANOS",
        backgroundAlt: "Fondo de Estilo de Vida de Lujo",
        address: {
          line1: "Su dirección, C/ Colon, 12,",
          line2: "46004 Valencia, España",
          email: "infoauramade@gmail.com",
          tel: "Tel. | Whatsapp: +34 657 20 68 01"
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
        viewDetails: "Ver Detalles",
        imageAlt: "{{title}} - Imagen {{number}}",
        pageTitle: "Colección de Yates de Lujo",
        pageDescription: "Descubra nuestra exclusiva flota de yates de lujo disponibles para alquiler en Ibiza y Barcelona.",
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
      },
      luxuryExperiences: {
        title: "EXPERIENCIAS DE LUJO",
        subtitle: "Descubre nuestra colección exclusiva de experiencias de lujo",
        yachts: {
          title: "YATES DE LUJO",
          viewAll: "Ver Todos los Yates",
          pageTitle: "Colección de Yates de Lujo",
          pageDescription: "Descubra nuestra exclusiva flota de yates de lujo disponibles para alquiler en Ibiza y Barcelona."
        },
        vehicles: {
          title: "VEHÍCULOS DE LUJO"
        }
      },
      medical: {
        ivDripTitle: "Tratamientos de Suero IV",
        vitaminShotsTitle: "Inyecciones de Vitaminas",
        servicesInclude: "Nuestros Servicios Incluyen"
      },
      contract: {
        title: "CONTRATO DE COMISIÓN DE SERVICIOS",
        between: "Entre",
        and: "Y",
        providerParty: "De una parte, {{name}}, con domicilio en {{address}}, y con NIF/CIF {{nif}}, en adelante, el PROVEEDOR.",
        beneficiaryParty: "De otra parte, {{name}}, con domicilio en {{address}}, y con NIF {{nif}}, en adelante, el BENEFICIARIO.",
        agreement: "Ambas partes acuerdan celebrar el presente Contrato de Comisión de Servicios, que se regirá por las siguientes cláusulas:",
        clausesTitle: "CLÁUSULAS",
        firstClause: {
          title: "Primera. Objeto del Contrato",
          content: "El PROVEEDOR encarga al BENEFICIARIO la prestación de servicios de intermediación y promoción en la contratación de servicios vacacionales, tales como alquiler de coches, barcos, viviendas vacacionales y otros servicios relacionados."
        },
        secondClause: {
          title: "Segunda. Duración del Contrato",
          content: "Este contrato entrará en vigor el día {{date}} y tendrá una duración de {{duration}} renovable automáticamente, salvo que cualquiera de las partes notifique por escrito su voluntad de no renovar con una antelación mínima de {{noticeDays}} días antes de la finalización del mismo."
        },
        thirdClause: {
          title: "Tercera. Obligaciones del Beneficiario",
          intro: "El BENEFICIARIO se compromete a:",
          obligations: {
            first: "Promover los servicios vacacionales ofrecidos por el PROVEEDOR a potenciales clientes.",
            second: "Facilitar el cierre de acuerdos entre los clientes y el PROVEEDOR para el alquiler de los bienes o servicios vacacionales.",
            third: "Informar al PROVEEDOR de las contrataciones y ventas realizadas, proporcionando los datos necesarios para su correcta facturación."
          }
        },
        fourthClause: {
          title: "Cuarta. Obligaciones del Proveedor",
          intro: "El PROVEEDOR se compromete a:",
          obligations: {
            first: "Facilitar al BENEFICIARIO toda la información y recursos necesarios para la promoción de los servicios vacacionales.",
            second: "Aceptar y cumplir los contratos de servicios vacacionales gestionados por el BENEFICIARIO.",
            third: "Pagar la comisión correspondiente según lo pactado en este contrato."
          }
        },
        fifthClause: {
          title: "Quinta. Comisión",
          commission: "El BENEFICIARIO recibirá una comisión por cada contrato de alquiler de servicios vacacionales gestionado con éxito. El porcentaje de la comisión será del {{percentage}}% sobre el valor total de cada contrato o transacción efectuada con éxito.",
          payment: "El pago de la comisión se realizará en un plazo de {{days}} días desde la fecha de la transacción, mediante transferencia bancaria a la cuenta indicada por el BENEFICIARIO."
        },
        sixthClause: {
          title: "Sexta. Confidencialidad",
          content: "Ambas partes se comprometen a mantener la confidencialidad de la información proporcionada por la otra parte en virtud de este contrato y a no divulgarla a terceros sin el consentimiento expreso por escrito."
        },
        seventhClause: {
          title: "Séptima. Resolución",
          intro: "Este contrato podrá ser resuelto en los siguientes casos:",
          reasons: {
            first: "Por mutuo acuerdo entre las partes.",
            second: "Por incumplimiento de cualquiera de las partes de las obligaciones establecidas en el presente contrato.",
            third: "Por imposibilidad sobrevenida de cumplir el objeto del contrato."
          }
        },
        eighthClause: {
          title: "Octava. Jurisdicción",
          content: "Para la resolución de cualquier controversia derivada de este contrato, las partes se someten a los juzgados y tribunales de {{location}}, renunciando expresamente a cualquier otro fuero que pudiera corresponderles."
        },
        closing: "Y en prueba de conformidad, firman ambas partes el presente contrato en dos ejemplares y a un solo efecto, en {{location}}, a {{date}}.",
        signatures: "FIRMAS:",
        providerName: "{{name}}",
        providerTitle: "(PROVEEDOR)",
        beneficiaryName: "{{name}}",
        beneficiaryTitle: "(BENEFICIARIO)"
      }
    }
  },
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
          investment: "Investment Advisory",
          drivers: "Professional Drivers",
          medical: "Medical & Wellness",
          seabob: "SEABOB F5s"
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
          address: "Su dirección, C/ Colon, 12, 46004 Valencia, España",
          tel: "+34 657 20 68 01",
          mail: "infoauramade@gmail.com",
          copyright: "By Inscale Media ©2025",
          privacyPolicy: "Privacy policy",
          serviceContract: "Service Contract"
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
        title: "ABOUT CAVIAR CONCIERGE",
        description_1: "Caviar Concierge is your trusted partner in luxury experiences and lifestyle in Ibiza and Barcelona.",
        description_2: "We specialize in exclusive, fully personalized services, ensuring unique experiences, quick solutions with just one call, significant time savings, and 24/7 support for all your daily needs.",
        description_3: "At Caviar Concierge, we elevate the concept of luxury with meticulous attention to detail, discretion, and excellence.",
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
        logoAlt: "{{partner}} - Partner of CAVIAR CONCIERGE"
      },
      contact: {
        title: "CONTACT US",
        backgroundAlt: "Luxury Lifestyle Background",
        address: {
          line1: "Su dirección, C/ Colon, 12,",
          line2: "46004 Valencia, España",
          email: "infoauramade@gmail.com",
          tel: "Tel. | Whatsapp: +34 657 20 68 01"
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
        viewDetails: "View Details",
        imageAlt: "{{title}} - Image {{number}}",
        pageTitle: "Luxury Yacht Collection",
        pageDescription: "Discover our exclusive fleet of luxury yachts available for charter in Ibiza and Barcelona.",
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
      },
      luxuryExperiences: {
        title: "LUXURY EXPERIENCES",
        subtitle: "Discover our exclusive collection of luxury experiences",
        yachts: {
          title: "LUXURY YACHTS",
          viewAll: "View All Yachts",
          pageTitle: "Luxury Yacht Collection",
          pageDescription: "Discover our exclusive fleet of luxury yachts available for charter in Ibiza and Barcelona."
        },
        vehicles: {
          title: "LUXURY VEHICLES"
        }
      },
      medical: {
        ivDripTitle: "IV Drip Treatments",
        vitaminShotsTitle: "Vitamin Shots",
        servicesInclude: "Our Services Include"
      },
      contract: {
        title: "SERVICE COMMISSION CONTRACT",
        between: "Between",
        and: "And",
        providerParty: "On one part, {{name}}, with address at {{address}}, and Tax ID/CIF {{nif}}, hereinafter referred to as the PROVIDER.",
        beneficiaryParty: "On the other part, {{name}}, with address at {{address}}, and Tax ID {{nif}}, hereinafter referred to as the BENEFICIARY.",
        agreement: "Both parties agree to enter into this Service Commission Contract, which shall be governed by the following clauses:",
        clausesTitle: "CLAUSES",
        firstClause: {
          title: "First. Purpose of the Contract",
          content: "The PROVIDER entrusts the BENEFICIARY with the provision of intermediation and promotion services in the contracting of vacation services, such as car rentals, boats, vacation homes, and other related services."
        },
        secondClause: {
          title: "Second. Duration of the Contract",
          content: "This contract shall come into effect on {{date}} and shall have a duration of {{duration}}, automatically renewable unless either party notifies in writing their intention not to renew with a minimum notice of {{noticeDays}} days before its termination."
        },
        thirdClause: {
          title: "Third. Obligations of the Beneficiary",
          intro: "The BENEFICIARY commits to:",
          obligations: {
            first: "Promote the vacation services offered by the PROVIDER to potential clients.",
            second: "Facilitate the closing of agreements between clients and the PROVIDER for the rental of goods or vacation services.",
            third: "Inform the PROVIDER of the contracts and sales made, providing the necessary data for proper invoicing."
          }
        },
        fourthClause: {
          title: "Fourth. Obligations of the Provider",
          intro: "The PROVIDER commits to:",
          obligations: {
            first: "Provide the BENEFICIARY with all the information and resources necessary for the promotion of vacation services.",
            second: "Accept and fulfill the vacation service contracts managed by the BENEFICIARY.",
            third: "Pay the corresponding commission as agreed in this contract."
          }
        },
        fifthClause: {
          title: "Fifth. Commission",
          commission: "The BENEFICIARY shall receive a commission for each successfully managed vacation service rental contract. The commission percentage will be {{percentage}}% of the total value of each successfully completed contract or transaction.",
          payment: "The commission payment will be made within {{days}} days from the transaction date, via bank transfer to the account indicated by the BENEFICIARY."
        },
        sixthClause: {
          title: "Sixth. Confidentiality",
          content: "Both parties commit to maintaining the confidentiality of information provided by the other party under this contract and not to disclose it to third parties without express written consent."
        },
        seventhClause: {
          title: "Seventh. Termination",
          intro: "This contract may be terminated in the following cases:",
          reasons: {
            first: "By mutual agreement between the parties.",
            second: "Due to breach by either party of the obligations established in this contract.",
            third: "Due to supervening impossibility to fulfill the purpose of the contract."
          }
        },
        eighthClause: {
          title: "Eighth. Jurisdiction",
          content: "For the resolution of any controversy arising from this contract, the parties submit to the courts and tribunals of {{location}}, expressly waiving any other jurisdiction that may correspond to them."
        },
        closing: "In witness whereof, both parties sign this contract in duplicate and to one effect, in {{location}}, on {{date}}.",
        signatures: "SIGNATURES:",
        providerName: "{{name}}",
        providerTitle: "(PROVIDER)",
        beneficiaryName: "{{name}}",
        beneficiaryTitle: "(BENEFICIARY)"
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
          investment: "Инвестиционный Консалтинг",
          drivers: "Профессиональные Водители",
          medical: "Медицина и Здоровье",
          seabob: "SEABOB F5s"
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
          address: "Su dirección, C/ Colon, 12, 46004 Valencia, España",
          tel: "+34 657 20 68 01",
          mail: "infoauramade@gmail.com",
          copyright: "От Inscale Media ©2025",
          privacyPolicy: "Политика конфиденциальности",
          serviceContract: "Договор на Услуги"
        }
      },
      services: {
        title: "SERVICES TAILORED TO YOU",
        description: "Наша команда всегда готова предоставить персонализированную помощь и решения, соответствующие вашим самым высоким ожиданиям."
      },
      experience: {
        title: "ENJOY A UNIQUE EXPERIENCE",
        description: "Мы увлечены предоставлением роскошных услуг и воплощением всех ваших потребностей в реальность с превосходством и самоотдачей.",
        viewMore: "Подробнее"
      },
      about: {
        title: "О CAVIAR CONCIERGE",
        description_1: "Caviar Concierge - ваш надежный партнер в сфере роскошных впечатлений и образа жизни в Ибице и Барселоне.",
        description_2: "Мы специализируемся на эксклюзивных, полностью персонализированных услугах, обеспечивая уникальные впечатления, быстрые решения одним звонком, значительную экономию времени и поддержку 24/7 для всех ваших повседневных потребностей.",
        description_3: "В Caviar Concierge мы поднимаем концепцию роскоши на новый уровень, уделяя пристальное внимание деталям, проявляя деликатность и стремясь к совершенству.",
        image_left_alt: "Роскошная Недвижимость Слева",
        image_right_alt: "Роскошная Недвижимость Справа"
      },
      villaRentals: {
        title: "YOUR LIFESTYLE, HASSLE-FREE",
        subtitle: "Мечтаете о потрясающей вилле для отдыха?",
        description: "Откройте для себя наш эксклюзивный выбор премиальных вилл в Ибице, Барселоне и Марбелье, где роскошь и комфорт встречаются в каждой детали."
      },
      ibizaInsider: {
        title: "IBIZA INSIDER",
        description: "Ежемесячные советы и рекомендации для погружения в роскошный образ жизни IBIZA. Откройте для себя самые эксклюзивные впечатления острова."
      },
      partners: {
        title: "Наши Партнеры",
        logoAlt: "{{partner}} - Партнер Tailor Made Concierge"
      },
      contact: {
        title: "СВЯЖИТЕСЬ С НАМИ",
        backgroundAlt: "Фон Роскошного Образа Жизни",
        address: {
          line1: "Su dirección, C/ Colon, 12,",
          line2: "46004 Valencia, España",
          email: "infoauramade@gmail.com",
          tel: "Тел. | Whatsapp: +34 657 20 68 01"
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
        footer: "Un servicio de conserjería totalmente personalizado для ti."
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
        viewDetails: "Подробнее",
        imageAlt: "{{title}} - Изображение {{number}}",
        pageTitle: "Коллекция Яхт Роскоши",
        pageDescription: "Откройте для себя нашу эксклюзивную коллекцию роскошных яхт, доступных для аренды в Ибице и Барселоне.",
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
      },
      luxuryExperiences: {
        title: "LUXURY EXPERIENCES",
        subtitle: "Откройте для себя нашу эксклюзивную коллекцию роскошных впечатлений",
        yachts: {
          title: "LUXURY YACHTS",
          viewAll: "Посмотреть все Яхты",
          pageTitle: "Коллекция Яхт Роскоши",
          pageDescription: "Откройте для себя нашу эксклюзивную коллекцию роскошных яхт, доступных для аренды в Ибице и Барселоне."
        },
        vehicles: {
          title: "LUXURY VEHICLES"
        }
      },
      medical: {
        ivDripTitle: "IV-Капельницы",
        vitaminShotsTitle: "Витаминные Инъекции",
        servicesInclude: "Наши Услуги Включают"
      },
      contract: {
        title: "ДОГОВОР КОМИССИИ НА УСЛУГИ",
        between: "Между",
        and: "И",
        providerParty: "С одной стороны, {{name}}, с юридическим адресом {{address}}, и ИНН {{nif}}, далее именуемый ПОСТАВЩИК.",
        beneficiaryParty: "С другой стороны, {{name}}, с адресом {{address}}, и ИНН {{nif}}, далее именуемый БЕНЕФИЦИАР.",
        agreement: "Обе стороны соглашаются заключить настоящий Договор Комиссии на Услуги, который будет регулироваться следующими положениями:",
        clausesTitle: "ПОЛОЖЕНИЯ",
        firstClause: {
          title: "Первое. Предмет Договора",
          content: "ПОСТАВЩИК поручает БЕНЕФИЦИАРУ оказание посреднических и рекламных услуг при заключении договоров на отпускные услуги, такие как аренда автомобилей, лодок, отпускного жилья и других связанных услуг."
        },
        secondClause: {
          title: "Второе. Срок Действия Договора",
          content: "Настоящий договор вступает в силу {{date}} и имеет срок действия {{duration}}, автоматически продлеваемый, если одна из сторон не уведомит в письменной форме о своем намерении не продлевать его не менее чем за {{noticeDays}} дней до его окончания."
        },
        thirdClause: {
          title: "Третье. Обязательства Бенефициара",
          intro: "БЕНЕФИЦИАР обязуется:",
          obligations: {
            first: "Продвигать отпускные услуги, предлагаемые ПОСТАВЩИКОМ, потенциальным клиентам.",
            second: "Способствовать заключению соглашений между клиентами и ПОСТАВЩИКОМ на аренду имущества или отпускных услуг.",
            third: "Информировать ПОСТАВЩИКА о заключенных договорах и совершенных продажах, предоставляя необходимые данные для правильного выставления счетов."
          }
        },
        fourthClause: {
          title: "Четвертое. Обязательства Поставщика",
          intro: "ПОСТАВЩИК обязуется:",
          obligations: {
            first: "Предоставлять БЕНЕФИЦИАРУ всю информацию и ресурсы, необходимые для продвижения отпускных услуг.",
            second: "Принимать и выполнять договоры на отпускные услуги, оформленные БЕНЕФИЦИАРОМ.",
            third: "Выплачивать комиссионное вознаграждение согласно условиям настоящего договора."
          }
        },
        fifthClause: {
          title: "Пятое. Комиссионное Вознаграждение",
          commission: "БЕНЕФИЦИАР получает комиссионное вознаграждение за каждый успешно оформленный договор аренды отпускных услуг. Размер комиссии составляет {{percentage}}% от общей стоимости каждого успешно заключенного договора или транзакции.",
          payment: "Выплата комиссионного вознаграждения производится в течение {{days}} дней с даты транзакции путем банковского перевода на счет, указанный БЕНЕФИЦИАРОМ."
        },
        sixthClause: {
          title: "Шестое. Конфиденциальность",
          content: "Обе стороны обязуются сохранять конфиденциальность информации, предоставленной другой стороной в рамках настоящего договора, и не разглашать ее третьим лицам без письменного согласия."
        },
        seventhClause: {
          title: "Седьмое. Расторжение",
          intro: "Настоящий договор может быть расторгнут в следующих случаях:",
          reasons: {
            first: "По взаимному согласию сторон.",
            second: "В случае нарушения любой из сторон обязательств, установленных в настоящем договоре.",
            third: "В случае невозможности выполнения предмета договора."
          }
        },
        eighthClause: {
          title: "Восьмое. Юрисдикция",
          content: "Для разрешения любых споров, вытекающих из настоящего договора, стороны подчиняются судам и трибуналам {{location}}, прямо отказываясь от любой другой юрисдикции, которая может им соответствовать."
        },
        closing: "В подтверждение чего обе стороны подписывают настоящий договор в двух экземплярах и с одинаковым эффектом, в {{location}}, {{date}}.",
        signatures: "ПОДПИСИ:",
        providerName: "{{name}}",
        providerTitle: "(ПОСТАВЩИК)",
        beneficiaryName: "{{name}}",
        beneficiaryTitle: "(БЕНЕФИЦИАР)"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 