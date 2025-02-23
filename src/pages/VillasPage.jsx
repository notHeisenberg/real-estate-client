import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { villasData } from '../data/luxury-experiences';

const VillasPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguageVillas = villasData[i18n.language] || villasData.en;

  if (!currentLanguageVillas?.length) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-libre-baskerville text-gray-900 mb-4">
            {t('villas.noVillas', 'No Villas Available')}
          </h1>
          <p className="text-gray-600">
            {t('villas.noVillasDescription', 'Please check back later for our villa listings.')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-4 text-center">
          {t('luxuryExperiences.villas.pageTitle', 'Luxury Villa Collection')}
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {t('luxuryExperiences.villas.pageDescription', 'Discover our exclusive collection of luxury villas in Ibiza.')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentLanguageVillas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => navigate(`/villas/${villa.id}`)}
              >
                <img
                  src={villa.images[0]}
                  alt={villa.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-libre-baskerville font-light mb-4">
                  {villa.title}
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">Bedrooms</span>
                    <span className="font-semibold">{villa.amenities.bedrooms}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">Bathrooms</span>
                    <span className="font-semibold">{villa.amenities.bathrooms}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-sm text-gray-500">Guests</span>
                    <span className="font-semibold">{villa.amenities.capacity}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {villa.description}
                </p>

                <button
                  onClick={() => navigate(`/villas/${villa.id}`)}
                  className="w-full px-6 py-3 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-all duration-300 mt-auto"
                >
                  {t('villa.viewDetails', 'View Details')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-16 bg-[#EEF7FF]/70">
          <h2 className="text-3xl font-libre-baskerville font-light mb-4">
            {t('villa.enquiry.title', 'Looking for Your Perfect Villa?')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('villa.enquiry.description', 'Contact us for personalized assistance in finding your ideal luxury villa in Ibiza.')}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-block px-8 py-4 bg-[#506B84] text-white hover:bg-[#506B84]/90 transition-colors duration-300"
          >
            {t('villa.enquiry.button', 'Contact Us')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillasPage; 