import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MarbellaInsider = () => {
  const { t } = useTranslation();

  return (
    <section id="marbella-insider" className="relative h-[650px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/estate_8.jpeg"
          alt={t('marbellaInsider.imageAlt')}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container - White Card Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 text-gray-700 font-libre-baskerville">
        <div className="bg-[#efefef]/90 w-[600px] p-12 py-16 max-w-2xl mx-auto text-center shadow-lg">
          <h1 className="text-[40px] md:text-[56px] mb-6 leading-tight font-light">
            {t('marbellaInsider.title', 'Marbella Insider')}
          </h1>
          <p className="mb-8 px-4 text-lg tracking-wide max-w-xl mx-auto font-semibold">
            {t('marbellaInsider.description', 'Monthly Tips and Referrals for Embracing the Luxury Lifestyle of the city.')}



          </p>
          <Link
            to="/blog"
            className="bg-[#506B84] text-white px-9 py-2.5 text-xs tracking-wider hover:border hover:border-[#506B84] hover:bg-transparent hover:text-[#506B84] transition-colors duration-300"
          >
            {t('marbellaInsider.seeMore', 'See More')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarbellaInsider; 