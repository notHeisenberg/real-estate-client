import React from 'react';
import { useTranslation } from 'react-i18next';
import { luxuryExperiences } from '../../data/luxury-experiences';

const LuxuryExperiences = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-6">
            {t('luxuryExperiences.title', 'Luxury Experiences')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('luxuryExperiences.subtitle', 'Discover our exclusive collection of luxury experiences, from yacht charters to premium vehicles')}
          </p>
          <div className="w-2/3 border border-gray-800 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {luxuryExperiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={experience.src}
                  alt={experience.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-libre-baskerville font-light mb-3">
                  {t(`luxuryExperiences.items.${index}.title`, experience.title)}
                </h3>
                <p className="text-gray-600">
                  {t(`luxuryExperiences.items.${index}.description`, experience.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperiences; 