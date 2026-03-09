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
      privacyPolicy: {
        title: "Privacy Policy",
        whatWeCollect: {
          title: "What type of information do we collect?",
          content: "We receive, collect and store any information you enter on our website or otherwise provide to us. In addition, we collect the Internet protocol (IP) address used to connect your computer to the Internet; login data, email address, password, computer and connection information and purchase history. We may use software tools to measure and collect session information, including page response times, length of visits to certain pages, page interaction information, and methods used to navigate away from the page. We also collect personally identifiable information (including names, email, password, communications), payment details (including credit card information), comments, suggestions, product reviews, recommendations and personal profile."
        },
        howWeCollect: {
          title: "How do we collect information?",
          content: "When you complete a transaction on our website, as part of the process, we collect personal information that you provide to us, such as your name, physical address and email address. Your personal information will be used only for the specific reasons stated above."
        },
        whyWeCollect: {
          title: "Why do we collect such personal information?",
          content: "We collect such personal and non-personal information for the following purposes:",
          purposes: [
            "To provide and operate the Services;",
            "To provide our users with ongoing customer and technical support;",
            "In order to contact our visitors and users with general and personalized service-related notices and promotional messages;",
            "To create aggregate statistical data and other aggregated or inferred non-personal information, which we or our business partners may use to provide and improve our respective services;",
            "To comply with applicable laws and regulations."
          ]
        },
        howWeStore: {
          title: "How do we store, use, share and disclose the personal information of visitors to our website?",
          content1: "Our company is hosted on the Wix.com platform. Wix.com provides us with the online platform that allows us to sell our products and services to you. Your data may be stored through Wix.com's data storage, databases and general Wix.com applications. They store your data on secure servers behind a firewall.",
          content2: "All direct payment gateways offered by Wix.com and used by our company adhere to the standards set by PCI-DSS administered by the PCI Security Standards Council, which is a joint effort of brands such as Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers."
        },
        howWeCommunicate: {
          title: "How do we communicate with visitors to our site?",
          content: "We may contact you to notify you about your account, to troubleshoot problems with your account, resolve a dispute, collect fees or money owed, to solicit your opinions through surveys or questionnaires, to send updates about our company, or when necessary to contact you to enforce our User Agreement, applicable national laws, and any agreements we may have with you. For these purposes, we may communicate with you by email, telephone, text message and postal mail."
        },
        withdrawConsent: {
          title: "How can website visitors withdraw their consent?",
          content: "If you do not want us to process your data, please contact us at"
        },
        questions: {
          title: "Questions and your contact information",
          content: "If you wish to: access, correct, amend or delete any personal information we hold about you, you are invited to contact us at"
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
          address: "Ctra. Cala Llonga, s/n, 07849 Cala Llonga, Ibiza",
          tel: "+34 653 57 45 59",
          mail: "infoauramade@gmail.com",
          copyright: "Por Inscale Media ©2025",
          privacyPolicy: "Política de privacidad"
        }
      },
      services: {
        title: "SERVICES TAILORED TO YOU",
        description: "Nuestro equipo está siempre disponible para brindarte asistencia personalizada y soluciones que cumplan con tus más altas expectativas."
      },
      experience: {
        title: "ENJOY A UNIQUE EXPERIENCE",
        description: "Nos apasiona ofrecer servicios de lujo y hacer realidad todas tus necesidades con excelencia y dedicación.",
        viewMore: "Ver Más"
      },
      about: {
        title: "ABOUT AURA MADE CONCIERGE",
        description_1: "Aura Made Concierge es tu socio de confianza en experiencias de lujo y estilo de vida en Ibiza y Barcelona.",
        description_2: "Nos especializamos en servicios exclusivos y totalmente personalizados, garantizando experiencias únicas, soluciones rápidas con una sola llamada, ahorro significativo de tiempo y soporte 24/7 para todas tus necesidades diarias.",
        description_3: "En Aura Made Concierge, elevamos el concepto de lujo con meticulosa atención al detalle, discreción y excelencia.",
        image_left_alt: "Propiedad de Lujo Izquierda",
        image_right_alt: "Propiedad de Lujo Derecha"
      },
      villaRentals: {
        title: "YOUR LIFESTYLE, HASSLE-FREE",
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
          line1: "Ctra. Cala Llonga, s/n,",
          line2: "07849 Cala Llonga, Ibiza",
          email: "infoauramade@gmail.com",
          tel: "Tel. | Whatsapp: +34 653 57 45 59"
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
      privacyPolicy: {
        title: "Política de Privacidad",
        whatWeCollect: {
          title: "¿Qué tipo de información recopilamos?",
          content: "Recibimos, recopilamos y almacenamos cualquier información que ingrese en nuestro sitio web o nos proporcione de otra manera. Además, recopilamos la dirección de protocolo de Internet (IP) utilizada para conectar su computadora a Internet; datos de inicio de sesión, dirección de correo electrónico, contraseña, información de la computadora y conexión e historial de compras. Podemos utilizar herramientas de software para medir y recopilar información de la sesión, incluidos los tiempos de respuesta de la página, la duración de las visitas a determinadas páginas, la información de interacción de la página y los métodos utilizados para navegar fuera de la página. También recopilamos información de identificación personal (incluidos nombres, correo electrónico, contraseña, comunicaciones), detalles de pago (incluida la información de tarjetas de crédito), comentarios, sugerencias, reseñas de productos, recomendaciones y perfil personal."
        },
        howWeCollect: {
          title: "¿Cómo recopilamos la información?",
          content: "Cuando completa una transacción en nuestro sitio web, como parte del proceso, recopilamos la información personal que nos proporciona, como su nombre, dirección física y dirección de correo electrónico. Su información personal se utilizará solo para los fines específicos mencionados anteriormente."
        },
        whyWeCollect: {
          title: "¿Por qué recopilamos dicha información personal?",
          content: "Recopilamos dicha información personal y no personal para los siguientes propósitos:",
          purposes: [
            "Para proporcionar y operar los Servicios;",
            "Para proporcionar a nuestros usuarios asistencia técnica y de cliente continua;",
            "Para contactar a nuestros visitantes y usuarios con avisos generales y personalizados relacionados con el servicio y mensajes promocionales;",
            "Para crear datos estadísticos agregados y otra información no personal agregada o inferida, que nosotros o nuestros socios comerciales podemos usar para proporcionar y mejorar nuestros respectivos servicios;",
            "Para cumplir con las leyes y regulaciones aplicables."
          ]
        },
        howWeStore: {
          title: "¿Cómo almacenamos, usamos, compartimos y divulgamos la información personal de los visitantes de nuestro sitio web?",
          content1: "Nuestra empresa está alojada en la plataforma Wix.com. Wix.com nos proporciona la plataforma en línea que nos permite venderle nuestros productos y servicios. Sus datos pueden almacenarse a través del almacenamiento de datos de Wix.com, bases de datos y aplicaciones generales de Wix.com. Almacenan sus datos en servidores seguros detrás de un firewall.",
          content2: "Todas las pasarelas de pago directo ofrecidas por Wix.com y utilizadas por nuestra empresa se adhieren a los estándares establecidos por PCI-DSS administrados por el PCI Security Standards Council, que es un esfuerzo conjunto de marcas como Visa, MasterCard, American Express y Discover. Los requisitos de PCI-DSS ayudan a garantizar el manejo seguro de la información de tarjetas de crédito por parte de nuestra tienda y sus proveedores de servicios."
        },
        howWeCommunicate: {
          title: "¿Cómo nos comunicamos con los visitantes del sitio?",
          content: "Podemos contactarlo para notificarle sobre su cuenta, resolver problemas con su cuenta, resolver una disputa, cobrar tarifas o dinero adeudado, solicitar sus opiniones a través de encuestas o cuestionarios, enviar actualizaciones sobre nuestra empresa o cuando sea necesario contactarlo para hacer cumplir nuestro Acuerdo de Usuario, las leyes nacionales aplicables y cualquier acuerdo que podamos tener con usted. Para estos fines, podemos comunicarnos con usted por correo electrónico, teléfono, mensajes de texto y correo postal."
        },
        withdrawConsent: {
          title: "¿Cómo pueden los visitantes del sitio web retirar su consentimiento?",
          content: "Si no desea que procesemos sus datos, contáctenos en"
        },
        questions: {
          title: "Preguntas e información de contacto",
          content: "Si desea: acceder, corregir, modificar o eliminar cualquier información personal que tengamos sobre usted, lo invitamos a contactarnos en"
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
      privacyPolicy: {
        title: "Политика конфиденциальности",
        whatWeCollect: {
          title: "Какую информацию мы собираем?",
          content: "Мы получаем, собираем и храним любую информацию, которую вы вводите на нашем веб-сайте или предоставляете нам иным образом. Кроме того, мы собираем IP-адрес, используемый для подключения вашего компьютера к Интернету; данные для входа, адрес электронной почты, пароль, информацию о компьютере и соединении, а также историю покупок. Мы можем использовать программные инструменты для измерения и сбора информации о сеансе, включая время отклика страницы, продолжительность посещений определенных страниц, информацию о взаимодействии со страницей и методы, используемые для перехода с страницы. Мы также собираем личную информацию (включая имена, электронную почту, пароль, сообщения), платежные данные (включая информацию о кредитных картах), комментарии, предложения, отзывы о продуктах, рекомендации и личный профиль."
        },
        howWeCollect: {
          title: "Как мы собираем информацию?",
          content: "Когда вы совершаете транзакцию на нашем веб-сайте, в рамках процесса мы собираем личную информацию, которую вы нам предоставляете, такую как ваше имя, физический адрес и адрес электронной почты. Ваша личная информация будет использоваться только для указанных выше целей."
        },
        whyWeCollect: {
          title: "Почему мы собираем такую личную информацию?",
          content: "Мы собираем такую личную и неличную информацию для следующих целей:",
          purposes: [
            "Для предоставления и управления Услугами;",
            "Для предоставления нашим пользователям постоянной клиентской и технической поддержки;",
            "Для связи с нашими посетителями и пользователями с общими и персонализированными уведомлениями об услугах и рекламными сообщениями;",
            "Для создания агрегированных статистических данных и другой агрегированной или выведенной неличной информации, которую мы или наши деловые партнеры можем использовать для предоставления и улучшения наших соответствующих услуг;",
            "Для соблюдения применимых законов и правил."
          ]
        },
        howWeStore: {
          title: "Как мы храним, используем, передаем и раскрываем личную информацию посетителей нашего веб-сайта?",
          content1: "Наша компания размещена на платформе Wix.com. Wix.com предоставляет нам онлайн-платформу, которая позволяет нам продавать вам наши продукты и услуги. Ваши данные могут храниться через хранилище данных Wix.com, базы данных и общие приложения Wix.com. Они хранят ваши данные на защищенных серверах за брандмауэром.",
          content2: "Все прямые платежные шлюзы, предлагаемые Wix.com и используемые нашей компанией, соответствуют стандартам PCI-DSS, управляемым Советом по стандартам безопасности PCI, который является совместным усилием таких брендов, как Visa, MasterCard, American Express и Discover. Требования PCI-DSS помогают обеспечить безопасную обработку информации о кредитных картах нашим магазином и его поставщиками услуг."
        },
        howWeCommunicate: {
          title: "Как мы общаемся с посетителями сайта?",
          content: "Мы можем связаться с вами, чтобы уведомить вас о вашей учетной записи, устранить проблемы с вашей учетной записью, разрешить спор, собрать платежи или причитающиеся деньги, запросить ваши мнения через опросы или анкеты, отправить обновления о нашей компании или когда необходимо связаться с вами для обеспечения соблюдения нашего Пользовательского соглашения, применимых национальных законов и любых соглашений, которые мы можем иметь с вами. Для этих целей мы можем связаться с вами по электронной почте, телефону, текстовым сообщениям и почте."
        },
        withdrawConsent: {
          title: "Как посетители веб-сайта могут отозвать свое согласие?",
          content: "Если вы не хотите, чтобы мы обрабатывали ваши данные, свяжитесь с нами по адресу"
        },
        questions: {
          title: "Вопросы и контактная информация",
          content: "Если вы хотите: получить доступ, исправить, изменить или удалить любую личную информацию, которую мы храним о вас, приглашаем вас связаться с нами по адресу"
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