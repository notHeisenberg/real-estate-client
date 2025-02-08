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
              src="/images/estates/estate_1.jpeg" 
              alt={t('about.image_left_alt', 'Luxury Estate Left')} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Center Content */}
        <div className="w-full md:w-1/3 lg:w-2/4 px-4 md:px-8 py-12 md:py-0 flex items-center justify-center">
          <div className="w-full max-w-2xl text-center">

            <h2 className="text-4xl font-libre-caslon font-light mb-8 max-w-lg mx-auto">
              {t('about.title', 'ABOUT AURA MADE LUXURY CONCIERGE')}
            </h2>

            <div className="space-y-6 text-lg max-w-md mx-auto">
              <p>
                {t('about.description_1', 'AURA MADE Luxury Concierge Service is a luxury and lifestyle services company operating in IBIZA.')}
              </p>
              <p>
                {t('about.description_2')}
              </p>
              <p>
                {t('about.description_3', 'At AURA MADE, we elevate lifestyle with meticulous attention to detail, discretion, and excellence.')}
              </p>
            </div>
          </div>
        </div>

        {/* Right Image - Desktop */}
        <div className="hidden md:block md:w-1/3 lg:w-1/3 min-h-[600px] lg:min-h-[800px]">
          <div className="w-full h-full sticky top-0">
            <img 
              src="/images/estates/estate_2.jpeg" 
              alt={t('about.image_right_alt', 'Luxury Estate Right')} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile Image - Below Content */}
        <div className="md:hidden w-full h-[300px] mt-4">
          <img 
            src="/images/estates/estate_2.jpeg" 
            alt={t('about.image_right_alt', 'Luxury Estate Right')} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About; 