import React, { useState } from 'react';
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

  const currentLanguageYachts = yachtData[i18n.language] || yachtData.en;
  const yacht = currentLanguageYachts.find(y => y.id === id);

  if (!yacht) {
    return navigate('/');
  }

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-libre-baskerville font-light text-gray-900 mb-8 text-center">
          {yacht.title}
        </h1>

        {/* Main Image */}
        <div className="mb-12">
          <img
            src={yacht.src}
            alt={yacht.alt}
            className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          />
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
            {yacht.details.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={t('yacht.imageAlt', '{{title}} - Image {{number}}', {
                    title: yacht.title,
                    number: index + 1
                  })}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back to Yachts Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-block px-6 py-3 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-colors rounded-sm"
          >
            {t('yacht.backToYachts', 'Back to Yachts')}
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={yacht.details.images.map(src => ({ src }))}
          plugins={[Zoom]}
        />
      </div>
    </div>
  );
};

export default YachtDetail; 