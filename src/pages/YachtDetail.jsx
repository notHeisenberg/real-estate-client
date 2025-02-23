import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { yachtData } from '../data/luxury-experiences';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const YachtDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentLanguageYachts = yachtData[i18n.language] || yachtData.en;
  const yacht = currentLanguageYachts.find(y => y.id === id);

  if (!yacht) {
    return navigate('/');
  }

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleBackClick = () => {
    navigate('/yachts');

    setTimeout(() => {
      const yachtsSection = document.querySelector('#luxury-experiences');
      if (yachtsSection) {
        const navHeight = 128; // height of navbar
        const offsetPosition = yachtsSection.offsetTop - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 200);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
          {yacht.title}
        </h1>

        {/* Main Image */}
        <div className="mb-12">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer" onClick={() => handleImageClick(0)}>
            <img
              src={yacht.src}
              alt={yacht.alt}
              className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Description and Specs */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-libre-baskerville font-light mb-6">
              {t('yacht.overview', 'Overview')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {yacht.details.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(yacht.details.specs).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold capitalize mb-2">
                    {t(`yacht.specs.${key}`, key)}
                  </h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-libre-baskerville font-light mb-6">
              {t('yacht.features', 'Features')}
            </h2>
            <ul className="space-y-4">
              {yacht.details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-[#506B84]">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-3xl font-libre-baskerville font-light mb-8 text-center">
            {t('yacht.gallery', 'Gallery')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Main Image First */}
            <div
              className="relative aspect-[4/3] cursor-pointer group overflow-hidden bg-gray-100"
              onClick={() => handleImageClick(0)}
            >
              <img
                src={yacht.src}
                alt={yacht.alt}
                className="absolute inset-0 w-full h-full object-contain hover:object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Other Images */}
            {yacht.details.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] cursor-pointer group overflow-hidden bg-gray-100"
                onClick={() => handleImageClick(index + 1)}
              >
                <img
                  src={image}
                  alt={t('yacht.imageAlt', '{{title}} - Image {{number}}', {
                    title: yacht.title,
                    number: index + 2
                  })}
                  className="absolute inset-0 w-full h-full object-contain hover:object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Back to Yachts Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleBackClick}
            className="inline-block px-6 py-3 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-all duration-300"
          >
            {t('yacht.backToYachts', 'Back to Yachts')}
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={[{ src: yacht.src }, ...yacht.details.images.map(src => ({ src }))]}
          plugins={[Zoom]}
          animation={{ zoom: 500 }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
          }}
          render={{
            iconZoomIn: () => (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            ),
            iconZoomOut: () => (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            ),
          }}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
            button: { filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, .5))' },
          }}
        />
      </div>
    </div>
  );
};

export default YachtDetail; 