import React from 'react';
import { useTranslation } from 'react-i18next';

const IbizaInsider = () => {
  const { t } = useTranslation();

  return (
    <section id="ibiza-insider" className="relative h-[650px] w-full">
      <div className="absolute inset-0">
        <img
          src="/images/estates/estate_10.jpeg"
          alt={t('ibizaInsider.imageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h2 className="text-5xl font-libre-baskerville mb-6">
          {t('ibizaInsider.title', 'IBIZA INSIDER')}
        </h2>
        <p className="max-w-2xl text-lg">
          {t('ibizaInsider.description')}
        </p>
      </div>
    </section>
  );
};

export default IbizaInsider; 