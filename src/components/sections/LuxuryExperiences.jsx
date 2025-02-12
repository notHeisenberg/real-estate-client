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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentLanguageYachts.map((yacht) => (
              <div 
                key={yacht.id}
                className="relative group overflow-hidden cursor-pointer h-[400px]"
              >
                <img
                  src={yacht.src}
                  alt={yacht.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Glass Overlay with Content - Only visible on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-libre-baskerville font-light mb-3 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {yacht.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 transform-gpu translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 line-clamp-3">
                    {yacht.description}
                  </p>
                  <Link
                    to={yacht.route}
                    className="inline-block max-w-fit px-6 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 delay-300"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {currentLanguageVehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="relative group cursor-pointer aspect-square"
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* Image Container */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={vehicle.src}
                      alt={vehicle.alt}
                      className="min-w-full min-h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Glass Overlay with Content - Only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-libre-baskerville font-light mb-2 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {vehicle.title}
                  </h3>
                  <p className="text-white/90 text-sm transform-gpu translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 line-clamp-2">
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