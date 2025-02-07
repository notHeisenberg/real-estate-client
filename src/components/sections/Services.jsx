import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();
  const currentLanguageServices = servicesData[i18n.language] || servicesData.en;

  return (
    <section id="services" className="bg-white">
      <div className="w-full">
        <div className="w-full bg-[#fefdf9] text-center py-14">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-libre-caslon font-light max-w-lg mx-auto p-10 leading-relaxed">
              {t('services.title', 'SERVICES DESIGNED AROUND YOU')}
            </h3>
            <p className="text-xl opacity-70 font-libre-caslon px-4 mx-auto mb-24">
              {t('services.description', 'Thanks to our dedicated team we provide personalized assistance and tailored solutions to meet all your needs.')}
            </p>
          </div>
        </div>

        {currentLanguageServices.map((service, index) => (
          <div key={index} className={`w-full ${service.bgColor} py-10`}>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row min-h-[600px] lg:h-[600px]">
              {index % 2 === 0 ? (
                <>
                  <div className="lg:w-1/2 h-[300px] lg:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`lg:w-1/2 p-8 lg:p-16 space-y-4 lg:space-y-6 ${service.cardBgColor}`}>
                    <h3 className="text-2xl lg:text-3xl font-libre-caslon font-light">{service.title}</h3>
                    <p className="text-lg lg:text-xl font-libre-caslon font-light">{service.description}</p>
                    {service.extraText && (
                      <p className="font-libre-caslon font-light">{service.extraText}</p>
                    )}
                    <ul className="space-y-1 font-libre-caslon font-semibold text-sm pl-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='list-disc'>{feature}</li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link
                        to={service.link}
                        className="inline-block px-6 lg:px-8 py-2 lg:py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                      >
                        {t('common.seeMore', 'See More')}
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`lg:w-1/2 p-8 lg:p-16 space-y-4 lg:space-y-6 ${service.cardBgColor}`}>
                    <h3 className="text-2xl lg:text-3xl font-libre-caslon font-light">{service.title}</h3>
                    <p className="text-lg lg:text-xl font-libre-caslon font-light">{service.description}</p>
                    {service.extraText && (
                      <p className="font-libre-caslon font-light">{service.extraText}</p>
                    )}
                    <ul className="space-y-1 font-libre-caslon font-semibold text-sm pl-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className='list-disc'>{feature}</li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link
                        to={service.link}
                        className="inline-block px-6 lg:px-8 py-2 lg:py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
                      >
                        {t('common.seeMore', 'See More')}
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-[300px] lg:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 