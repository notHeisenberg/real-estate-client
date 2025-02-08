import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { yachtData, vehicleData } from '../../data/luxury-experiences';

const LuxuryExperiences = () => {
    const { t, i18n } = useTranslation();
  const currentLanguageVehicles = vehicleData[i18n.language] || vehicleData.en;
  const currentLanguageYachts = yachtData[i18n.language] || yachtData.en;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-6">
            {t('luxuryExperiences.title', 'Luxury Experiences')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('luxuryExperiences.subtitle', 'Discover our exclusive collection of luxury experiences')}
          </p>
          <div className="w-2/3 border border-gray-800 mx-auto"></div>
        </div>

        {/* Yachts Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
            {t('luxuryExperiences.yachts.title', 'Luxury Yachts')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentLanguageYachts.map((yacht) => (
              <div 
                key={yacht.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 h-[300px]">
                  <img
                    src={yacht.src}
                    alt={yacht.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-libre-baskerville font-light mb-3">
                    {yacht.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {yacht.description}
                  </p>
                  <Link
                    to={yacht.route}
                    className="inline-block px-6 py-2 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-colors rounded-sm"
                  >
                    {t('luxuryExperiences.seeDetails', 'See Details')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicles Section */}
        <div>
          <h3 className="text-3xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
            {t('luxuryExperiences.vehicles.title', 'Luxury Vehicles')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentLanguageVehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 h-[200px]">
                  <img
                    src={vehicle.src}
                    alt={vehicle.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-libre-baskerville font-light mb-2">
                    {vehicle.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperiences; 