import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yachtData } from '../data/luxury-experiences';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const YachtsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLanguageYachts = yachtData[i18n.language] || yachtData.en;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const rentalImages = [
    {
      src: "/Productos/Yates/PDFs/Xaloc Chárter/Selva 650 Sport PIPO_2022.jpg",
      alt: "Selva 650 Sport Rental Information"
    },
    {
      src: "/Productos/Yates/PDFs/Xaloc Chárter/Astondoa 53 VIDA BOA_2022.jpg",
      alt: "Astondoa 53 Rental Information"
    }
  ];

  if (!currentLanguageYachts?.length) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-libre-baskerville text-gray-900 mb-4">
            {t('yachts.noYachts', 'No Yachts Available')}
          </h1>
          <p className="text-gray-600">
            {t('yachts.noYachtsDescription', 'Please check back later for our yacht listings.')}
          </p>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-4 text-center">
          {t('luxuryExperiences.yachts.pageTitle', 'Luxury Yacht Collection')}
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {t('luxuryExperiences.yachts.pageDescription', 'Discover our exclusive fleet of luxury yachts available for charter in Ibiza and Barcelona.')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentLanguageYachts.map((yacht) => (
            <div
              key={yacht.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={yacht.src}
                  alt={yacht.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-libre-baskerville font-light mb-4">
                  {yacht.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600">
                    <span className="font-semibold">{t('yacht.length', 'Length')}: </span>
                    {yacht.details.specs.length}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">{t('yacht.capacity', 'Capacity')}: </span>
                    {yacht.details.specs.capacity}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {yacht.description}
                </p>

                <button
                  onClick={() => navigate(`/yachts/${yacht.id}`)}
                  className="w-full px-6 py-3 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-all duration-300 mt-auto"
                >
                  {t('yacht.viewDetails', 'View Details')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Yacht Rental Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-libre-baskerville font-light text-gray-900 text-center mb-8">
            {t('yacht.rentalInformation', 'Yacht Rental Information')}
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {rentalImages.map((image, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-2/5 h-[800px] shadow-lg rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="text-center py-16 bg-[#EEF7FF]/70 mt-16">
            <h2 className="text-3xl font-libre-baskerville font-light mb-4">Ready to Rent Your Dream Yacht?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us for personalized assistance, detailed pricing, and to schedule your luxury yacht rental experience.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500"
            >
              Contact Us
            </Link>
          </div>

          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={rentalImages}
          />
        </div>
      </div>
    </div>
  );
};

export default YachtsPage; 