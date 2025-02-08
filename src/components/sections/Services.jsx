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
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-libre-caslon font-light max-w-lg mx-auto p-10 leading-relaxed break-words">
              {t('services.title', 'SERVICES DESIGNED AROUND YOU')}
            </h3>
            <p className="text-xl opacity-70 font-libre-caslon px-4 mx-auto mb-24 break-words">
              {t('services.description', 'Thanks to our dedicated team we provide personalized assistance and tailored solutions to meet all your needs.')}
            </p>
          </div>
        </div>

        {currentLanguageServices.map((service, index) => (
          <div key={index} className={`w-full ${service.bgColor} py-10`}>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row min-h-[600px] lg:h-auto">
              {index % 2 === 0 ? (
                <>
                  <div className="lg:w-1/2 h-[300px] lg:h-[600px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`lg:w-1/2 p-6 lg:p-12 flex flex-col ${service.cardBgColor} overflow-hidden`}>
                    <div className="flex-grow space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-libre-caslon font-light break-words">{service.title}</h3>
                      <p className="text-lg lg:text-xl font-libre-caslon font-light break-words">{service.description}</p>
                      {service.extraText && (
                        <p className="font-libre-caslon font-light break-words">{service.extraText}</p>
                      )}
                      <ul className="space-y-1 font-libre-caslon font-semibold text-sm pl-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='list-disc break-words'>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6">
                      <Link
                        to={service.link}
                        className="inline-block px-4 lg:px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm lg:text-base"
                      >
                        {t('common.seeMore', 'See More')}
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`lg:w-1/2 p-6 lg:p-12 flex flex-col ${service.cardBgColor} overflow-hidden`}>
                    <div className="flex-grow space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-libre-caslon font-light break-words">{service.title}</h3>
                      <p className="text-lg lg:text-xl font-libre-caslon font-light break-words">{service.description}</p>
                      {service.extraText && (
                        <p className="font-libre-caslon font-light break-words">{service.extraText}</p>
                      )}
                      <ul className="space-y-1 font-libre-caslon font-semibold text-sm pl-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='list-disc break-words'>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6">
                      <Link
                        to={service.link}
                        className="inline-block px-4 lg:px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm lg:text-base"
                      >
                        {t('common.seeMore', 'See More')}
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/2 h-[300px] lg:h-[600px]">
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