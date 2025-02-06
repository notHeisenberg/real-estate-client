import React from 'react';
import { useTranslation } from 'react-i18next';
import { partnerLogos } from '../../data/partners';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl h-screen mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-6">
            {t('partners.title', 'Our Partners')}
          </h2>
          <div className="w-2/3 border border-gray-800 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center justify-items-center">


          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 

              className="flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo.src}
                alt={t('partners.logoAlt', { partner: logo.alt })}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-32"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 