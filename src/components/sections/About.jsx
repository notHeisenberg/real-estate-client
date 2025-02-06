import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative w-full bg-white py-8 md:py-16">
      <div className="flex flex-col md:flex-row w-full h-full min-h-[400px] md:min-h-[600px] lg:min-h-[800px]">
        {/* Left Image - Only on Desktop */}
        <div className="hidden md:block md:w-1/3 lg:w-1/3 min-h-[600px] lg:min-h-[800px]">
          <div className="w-full h-full sticky top-0">
            <img 
              src="/images/estate_1.jpeg" 
              alt={t('about.image_left_alt', 'Luxury Estate Left')} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Center Content */}
        <div className="w-full md:w-1/3 lg:w-2/4 px-4 md:px-8 py-8 md:py-16 flex items-center justify-center">
          <div className="w-full max-w-2xl text-center">
            <h2 className="font-libre-baskerville text-2xl md:text-3xl tracking-[0.2em] text-gray-800 mb-8 md:mb-12 font-medium">
              {t('about.title', 'ABOUT TAILOR MADE CONCIERGE')}
            </h2>
            <div className="space-y-6 md:space-y-8 flex flex-col items-center justify-center">
              <p className="font-libre-caslon text-lg md:text-xl leading-relaxed tracking-wider text-gray-800 max-w-full md:max-w-[420px]">
                {t('about.description_1', 'Tailor Made Concierge is a luxury and lifestyle services company operating in Marbella, Sotogrande, and Madrid.')}
              </p>
              <p className="font-libre-caslon text-lg md:text-xl leading-relaxed tracking-wider text-gray-800 max-w-full md:max-w-[420px]">
                {t('about.description_2', 'We specialize in delivering exclusive, fully personalized luxury services that guarantee unique experiences, seamless one-call problem solving, significant time savings, and 24/7 support for your daily needs.')}
              </p>
              <p className="font-libre-caslon text-lg md:text-xl leading-relaxed tracking-wider text-gray-800 max-w-full md:max-w-[420px]">
                {t('about.description_3', 'At Tailor Made Concierge, we elevate lifestyle with meticulous attention to detail, discretion, and excellence.')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Image - Desktop */}
        <div className="hidden md:block md:w-1/3 lg:w-1/3 min-h-[600px] lg:min-h-[800px]">
          <div className="w-full h-full sticky top-0">
            <img 
              src="/images/estate_2.jpeg" 
              alt={t('about.image_right_alt', 'Luxury Estate Right')} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Image - Below Content */}
        <div className="md:hidden w-full h-[300px] mt-4">
          <img 
            src="/images/estate_2.jpeg" 
            alt={t('about.image_right_alt', 'Luxury Estate Right')} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About; 