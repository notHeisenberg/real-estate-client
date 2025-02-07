import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const IbizaInsider = () => {
  const { t } = useTranslation();

  return (
    <section id="ibiza-insider" className="relative h-[650px] w-full">
      <div className="absolute inset-0">
        <img
          src="/images/estate_10.jpeg"
          alt={t('ibizaInsider.imageAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h2 className="text-5xl font-libre-baskerville mb-6">
          {t('ibizaInsider.title', 'IBIZA INSIDER')}
        </h2>
        <p className="max-w-2xl text-lg mb-8">
          {t('ibizaInsider.description')}
        </p>
        <Link
          to="/blog"
          className="inline-block bg-[#506B84] text-white py-3 px-8 hover:bg-black/70 transition-colors duration-500 font-libre-caslon whitespace-nowrap font-light shadow-lg"
        >
          {t('ibizaInsider.seeMore')}
        </Link>
      </div>
    </section>
  );
};

export default IbizaInsider; 