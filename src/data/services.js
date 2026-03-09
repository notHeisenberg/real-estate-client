export const servicesData = {
    en: [
        {
            id: 'drivers',
            title: 'Professional Drivers',
            description: 'Luxury chauffeur service with experienced and reliable drivers available 24/7.',
            image: '/Productos/Servicios/Drivers/drivers_1.avif',
            ratesImage: '/Productos/Servicios/Drivers/servicios driver.JPG',
            bgColor: 'bg-[#fefdf9]',
            cardBgColor: 'bg-white',
            features: [
                'Low Season (April 1st - May 31st & October 1st - November 31st)',
                '- 8 hours: 600€',
                '- 12 hours: 750€',
                '- 24 hours: 1100€',
                'High Season (June 1st - September 30th)',
                '- 8 hours: 650€',
                '- 12 hours: 800€',
                '- 24 hours: 1200€',
                'Single Transfers',
                '- Ibiza: 100€',
                '- Sant Antoni & Santa Eulalia: 120€',
                '- Portinax: 150€'
            ],
            notes: [
                '*Single transfers available between 6:00 to 00:00',
                '*Minimum rental time is 8 hours. Single transfers available around the island.',
                '**Fuel & VAT not included'
            ]
        },
        {
            id: 'medical',
            title: 'Medical & Wellness Services',
            description: 'Premium wellness and medical support services with specialized IV drip treatments and vitamin therapies.',
            image: '/Productos/Servicios/Medicos/medical_0.avif',
            ratesImage: '/Productos/Servicios/Medicos/Suero Vitaminas.jpg',
            bgColor: 'bg-white',
            cardBgColor: 'bg-[#fefdf9]',
            treatments: {
                ivDrips: [
                    {
                        name: 'MYERS ENERGISER DRIP',
                        price: '250€',
                        components: 'Magnesium | Calcium | B complex | Vitamin B5, B6, B12 | Vitamin C | Glutathione'
                    },
                    {
                        name: 'VITAMIN C DRIP',
                        price: '230€',
                        components: 'B12 | High dosage of Vitamin C | Coenzyme | B complex | Glutathione'
                    },
                    {
                        name: 'HANGOVER HEAVEN DRIP',
                        price: '290€',
                        components: 'Magnesium | Zinc | Selenium | B complex | Vitamin B5, B6, B12 | Vitamin C | Aminoacids'
                    },
                    {
                        name: 'IMMUNO BOOSTER DRIP',
                        price: '290€',
                        components: 'Magnesium | Vitamin B5, B6, B12 | B complex | Minerals | Glutathione | Vitamin C | Aminoacids'
                    },
                    {
                        name: 'ANTI-AGING DRIP',
                        price: '230€',
                        components: 'Coenzyme | High dosage of Vitamin C | Vitamin B12 | Glutathione'
                    },
                    {
                        name: 'DETOX DRIP',
                        price: '200€',
                        components: 'Highly recommended in cases of anaemia and low energy levels.'
                    },
                    {
                        name: 'NAD DRIP',
                        price: '480€',
                        components: 'Nicotinamide Adenine Dinucleotide (contact us for more info)'
                    }
                ],
                shots: [
                    {
                        name: 'Vitamin B12',
                        price: '80€'
                    },
                    {
                        name: 'Vitamin B6',
                        price: '80€'
                    },
                    {
                        name: 'Vitamin C',
                        price: '100€'
                    },
                    {
                        name: 'Glutathione',
                        price: '120€'
                    },
                    {
                        name: 'L-Carnitine',
                        price: '80€'
                    },
                    {
                        name: 'NAD shot',
                        price: '200€'
                    },
                    {
                        name: 'Collagen shot (oral)',
                        price: '50€'
                    }
                ],
                notes: [
                    '*Extra 30€ for mobile service transport.'
                ]
            },
            features: [
                'IV Drip Therapies',
                'Vitamin Shots',
                'Mobile Service Available',
                'Professional Medical Staff',
                'Personalized Treatment Plans',
                'Wellness Consultations'
            ]
        },
        {
            id: 'seabob',
            title: 'SEABOB F5s ',
            description: 'Experience the ultimate underwater adventure with our high-performance SEABOB F5s.',
            image: '/Productos/Servicios/Seabob/Seabob.webp',
            detailsImage: '/Productos/Servicios/Seabob/SEABOB SL 2022.jpg',
            bgColor: 'bg-[#F1F8F8]',
            cardBgColor: 'bg-[#E5F2F2]',
            rates: {
                highSeason: {
                    period: 'High Season (July/August)',
                    price: '300€/day'
                },
                lowSeason: {
                    period: 'Low Season (Rest of the year)',
                    price: '250€/day'
                }
            },
            features: [
                'High-performance underwater scooter',
                'Speed up to 11 knots',
                '50€ deposit for goggles and buoy',
                '50% to reserve and the rest the same day of rental',
                '85€ price fast charger for the day',
                'Professional instruction available',
                'Perfect for underwater exploration'
            ]
        }
    ],
    es: [
        {
            id: 'drivers',
            title: 'Conductores Profesionales',
            description: 'Servicio de chófer de lujo con conductores experimentados y confiables disponibles 24/7.',
            image: '/Productos/Servicios/Drivers/drivers_1.avif',
            ratesImage: '/Productos/Servicios/Drivers/servicios driver.JPG',
            bgColor: 'bg-[#fefdf9]',
            cardBgColor: 'bg-white',
            features: [
                'Temporada Baja (1 de abril - 31 de mayo y 1 de octubre - 31 de noviembre)',
                '- 8 horas: 600€',
                '- 12 horas: 750€',
                '- 24 horas: 1100€',
                'Temporada Alta (1 de junio - 30 de septiembre)',
                '- 8 horas: 650€',
                '- 12 horas: 800€',
                '- 24 horas: 1200€',
                'Traslados Individuales',
                '- Ibiza: 100€',
                '- Sant Antoni y Santa Eulalia: 120€',
                '- Portinax: 150€'
            ],
            notes: [
                '*Traslados individuales disponibles entre 6:00 y 00:00',
                '*Tiempo mínimo de alquiler 8 horas. Traslados individuales disponibles por toda la isla.',
                '**Combustible e IVA no incluidos'
            ]
        },
        {
            id: 'medical',
            title: 'Servicios Médicos y Bienestar',
            description: 'Servicios premium de bienestar y apoyo médico con tratamientos especializados de suero IV y terapias vitamínicas.',
            image: '/Productos/Servicios/Medicos/medical_0.avif',
            ratesImage: '/Productos/Servicios/Medicos/Suero Vitaminas.jpg',
            bgColor: 'bg-white',
            cardBgColor: 'bg-[#fefdf9]',
            treatments: {
                ivDrips: [
                    {
                        name: 'MYERS ENERGISER DRIP',
                        price: '250€',
                        components: 'Magnesio | Calcio | Complejo B | Vitamina B5, B6, B12 | Vitamina C | Glutatión'
                    },
                    {
                        name: 'VITAMIN C DRIP',
                        price: '230€',
                        components: 'B12 | Alta dosis de Vitamina C | Coenzima | Complejo B | Glutatión'
                    },
                    {
                        name: 'HANGOVER HEAVEN DRIP',
                        price: '290€',
                        components: 'Magnesio | Zinc | Selenio | Complejo B | Vitamina B5, B6, B12 | Vitamina C | Aminoácidos'
                    },
                    {
                        name: 'IMMUNO BOOSTER DRIP',
                        price: '290€',
                        components: 'Magnesio | Vitamina B5, B6, B12 | Complejo B | Minerales | Glutatión | Vitamina C | Aminoácidos'
                    },
                    {
                        name: 'ANTI-AGING DRIP',
                        price: '230€',
                        components: 'Coenzima | Alta dosis de Vitamina C | Vitamina B12 | Glutatión'
                    },
                    {
                        name: 'DETOX DRIP',
                        price: '200€',
                        components: 'Altamente recomendado en casos de anemia y niveles bajos de energía.'
                    },
                    {
                        name: 'NAD DRIP',
                        price: '480€',
                        components: 'Nicotinamida Adenina Dinucleótido (contáctenos para más información)'
                    }
                ],
                shots: [
                    {
                        name: 'Vitamina B12',
                        price: '80€'
                    },
                    {
                        name: 'Vitamina B6',
                        price: '80€'
                    },
                    {
                        name: 'Vitamina C',
                        price: '100€'
                    },
                    {
                        name: 'Glutatión',
                        price: '120€'
                    },
                    {
                        name: 'L-Carnitina',
                        price: '80€'
                    },
                    {
                        name: 'NAD shot',
                        price: '200€'
                    },
                    {
                        name: 'Shot de Colágeno (oral)',
                        price: '50€'
                    }
                ],
                notes: [
                    '*30€ extra por servicio de transporte móvil.'
                ]
            },
            features: [
                'Terapias de Suero IV',
                'Shots de Vitaminas',
                'Servicio Móvil Disponible',
                'Personal Médico Profesional',
                'Planes de Tratamiento Personalizados',
                'Consultas de Bienestar'
            ]
        },
        {
            id: 'seabob',
            title: 'SEABOB F5s ',
            description: 'Experimenta la última aventura submarina con nuestro SEABOB F5s de alto rendimiento.',
            image: '/Productos/Servicios/Seabob/Seabob.webp',
            detailsImage: '/Productos/Servicios/Seabob/SEABOB SL 2022.jpg',
            bgColor: 'bg-[#F1F8F8]',
            cardBgColor: 'bg-[#E5F2F2]',
            rates: {
                highSeason: {
                    period: 'Temporada alta (Julio/Agosto)',
                    price: '300€/día'
                },
                lowSeason: {
                    period: 'Temporada baja (Resto del año)',
                    price: '250€/día'
                }
            },
            features: [
                'Scooter submarino de alto rendimiento',
                'Velocidad hasta 11 nudos',
                '50€ de depósito para las gafas y la boya',
                '50% para reservar y el resto el mismo día del alquiler',
                '85€ precio del cargador rápido por día',
                'Instrucción profesional disponible',
                'Perfecto para exploración submarina'
            ]
        }
    ],
    ru: [
        {
            id: 'drivers',
            title: 'Профессиональные Водители',
            description: 'Роскошный сервис водителей с опытными и надежными шоферами, доступными 24/7.',
            image: '/Productos/Servicios/Drivers/drivers_1.avif',
            ratesImage: '/Productos/Servicios/Drivers/servicios driver.JPG',
            bgColor: 'bg-[#fefdf9]',
            cardBgColor: 'bg-white',
            features: [
                'Низкий сезон (1 апреля - 31 мая и 1 октября - 31 ноября)',
                '- 8 часов: 600€',
                '- 12 часов: 750€',
                '- 24 часа: 1100€',
                'Высокий сезон (1 июня - 30 сентября)',
                '- 8 часов: 650€',
                '- 12 часов: 800€',
                '- 24 часа: 1200€',
                'Индивидуальные трансферы',
                '- Ибица: 100€',
                '- Сант-Антони и Санта-Эулалия: 120€',
                '- Портинакс: 150€'
            ],
            notes: [
                '*Индивидуальные трансферы доступны с 6:00 до 00:00',
                '*Минимальное время аренды 8 часов. Индивидуальные трансферы доступны по всему острову.',
                '**Топливо и НДС не включены'
            ]
        },
        {
            id: 'medical',
            title: 'Медицинские услуги и велнес',
            description: 'Премиальные услуги велнеса и медицинской поддержки со специализированными IV-капельницами и витаминной терапией.',
            image: '/Productos/Servicios/Medicos/medical_0.avif',
            ratesImage: '/Productos/Servicios/Medicos/Suero Vitaminas.jpg',
            bgColor: 'bg-white',
            cardBgColor: 'bg-[#fefdf9]',
            treatments: {
                ivDrips: [
                    {
                        name: 'MYERS ENERGISER DRIP',
                        price: '250€',
                        components: 'Магний | Кальций | B-комплекс | Витамин B5, B6, B12 | Витамин C | Глутатион'
                    },
                    {
                        name: 'VITAMIN C DRIP',
                        price: '230€',
                        components: 'B12 | Высокая доза Витамина C | Коэнзим | B-комплекс | Глутатион'
                    },
                    {
                        name: 'HANGOVER HEAVEN DRIP',
                        price: '290€',
                        components: 'Магний | Цинк | Селен | B-комплекс | Витамин B5, B6, B12 | Витамин C | Аминокислоты'
                    },
                    {
                        name: 'IMMUNO BOOSTER DRIP',
                        price: '290€',
                        components: 'Магний | Витамин B5, B6, B12 | B-комплекс | Минералы | Глутатион | Витамин C | Аминокислоты'
                    },
                    {
                        name: 'ANTI-AGING DRIP',
                        price: '230€',
                        components: 'Коэнзим | Высокая доза Витамина C | Витамин B12 | Глутатион'
                    },
                    {
                        name: 'DETOX DRIP',
                        price: '200€',
                        components: 'Особенно рекомендуется при анемии и низком уровне энергии.'
                    },
                    {
                        name: 'NAD DRIP',
                        price: '480€',
                        components: 'Никотинамид Аденин Динуклеотид (свяжитесь с нами для получения дополнительной информации)'
                    }
                ],
                shots: [
                    {
                        name: 'Витамин B12',
                        price: '80€'
                    },
                    {
                        name: 'Витамин B6',
                        price: '80€'
                    },
                    {
                        name: 'Витамин C',
                        price: '100€'
                    },
                    {
                        name: 'Глутатион',
                        price: '120€'
                    },
                    {
                        name: 'L-Карнитин',
                        price: '80€'
                    },
                    {
                        name: 'NAD шот',
                        price: '200€'
                    },
                    {
                        name: 'Коллаген шот (оральный)',
                        price: '50€'
                    }
                ],
                notes: [
                    '*Дополнительно 30€ за мобильный сервис.'
                ]
            },
            features: [
                'IV-Капельницы',
                'Витаминные Инъекции',
                'Выездной Сервис',
                'Профессиональный Медицинский Персонал',
                'Персонализированные Планы Лечения',
                'Велнес-Консультации'
            ]
        },
        {
            id: 'seabob',
            title: 'SEABOB F5s ',
            description: 'Испытайте непревзойденное подводное приключение с нашим высокопроизводительным SEABOB F5s.',
            image: '/Productos/Servicios/Seabob/Seabob.webp',
            detailsImage: '/Productos/Servicios/Seabob/SEABOB SL 2022.jpg',
            bgColor: 'bg-[#F1F8F8]',
            cardBgColor: 'bg-[#E5F2F2]',
            rates: {
                highSeason: {
                    period: 'Высокий сезон (Июль/Август)',
                    price: '300€/день'
                },
                lowSeason: {
                    period: 'Низкий сезон (Остальная часть года)',
                    price: '250€/день'
                }
            },
            features: [
                'Высокопроизводительный подводный скутер',
                'Скорость до 11 узлов',
                'Залог 50€ за очки и буй',
                '50% для бронирования и остаток в день аренды',
                '85€ стоимость быстрого зарядного устройства в день',
                'Доступно профессиональное обучение',
                'Идеально подходит для подводных исследований'
            ]
        }
    ]
};