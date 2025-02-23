import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yachtData, featuredYachts } from '../../data/luxury-experiences';
import { villasData } from '../../data/luxury-experiences';
import CarGallery from './CarGallery';
import { getAllCars } from '../../data/cars';

const LuxuryExperiences = ({ id }) => {
  const { t, i18n } = useTranslation();
  const currentLanguageYachts = yachtData[i18n.language] || yachtData.en;
  const currentLanguageVillas = villasData[i18n.language] || villasData.en;
  const cars = getAllCars();
  const navigate = useNavigate();

  // Filter featured yachts
  const featuredYachtData = currentLanguageYachts.filter(yacht => 
    featuredYachts.includes(yacht.id)
  );

  return (
    <section id={id} className="py-20 bg-white">
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

        {/* Villas Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
            {t('luxuryExperiences.villas.title', 'Luxury Villas')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentLanguageVillas.map((villa) => (
              <div 
                key={villa.id}
                className="relative group overflow-hidden cursor-pointer h-[400px]"
              >
                <img
                  src={villa.images[0]}
                  alt={villa.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Glass Overlay with Content */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h4 className="text-white text-2xl font-libre-baskerville mb-2">{villa.title}</h4>
                  <p className="text-white text-lg mb-4">{villa.shortDescription}</p>
                  <div className="flex gap-4 text-white text-sm mb-4">
                    <span>{villa.amenities.bedrooms} Bedrooms</span>
                    <span>{villa.amenities.bathrooms} Bathrooms</span>
                    <span>Up to {villa.amenities.capacity} Guests</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/villas/${villa.id}`);
                    }}
                    className="w-1/3 px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t('villa.viewDetails', 'View Details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Yachts Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
            {t('luxuryExperiences.yachts.title', 'Luxury Yachts')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {featuredYachtData.map((yacht) => (
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
                
                {/* Glass Overlay with Content */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h4 className="text-white text-2xl font-libre-baskerville mb-2">{yacht.title}</h4>
                  <p className="text-white text-lg mb-4">{yacht.description}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/yachts/${yacht.id}`);
                    }}
                    className="w-1/3 px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {t('yacht.viewDetails', 'View Details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/yachts"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-all duration-300 text-lg"
            >
              {t('luxuryExperiences.yachts.viewAll', 'View All Yachts')}
            </Link>
          </div>
        </div>

        {/* Vehicles Section */}
        <div>
          <h3 className="text-3xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
            {t('luxuryExperiences.vehicles.title', 'Luxury Vehicles')}
          </h3>
          <CarGallery cars={cars} />
          <div className="text-center mt-8">
            <Link
              to="/car-rental"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-all duration-300 text-lg"
            >
              {t('luxuryExperiences.seeAllVehicles', 'See All Vehicles')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperiences; 