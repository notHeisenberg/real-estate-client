import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLanguageServices = servicesData[i18n.language] || servicesData.en;
  const service = currentLanguageServices.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[400px] mb-12 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-libre-baskerville font-light text-white text-center max-w-3xl">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-libre-caslon mb-8">
              {service.description}
            </p>

            {/* Rates Image for Drivers Service */}
            {service.id === 'drivers' && service.ratesImage && (
              <div className="my-12">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={service.ratesImage}
                    alt="Driver Service Rates"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}

            {service.extraText && (
              <h2 className="text-2xl font-libre-baskerville font-light mb-6">
                {service.extraText}
              </h2>
            )}

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-libre-baskerville font-light mb-6">
                {t('services.features', 'Our Services Include')}
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-[#506B84]">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical Service Specific Content */}
            {service.id === 'medical' && service.treatments && (
              <div className="mt-12">
                {/* IV Drips Section */}
                <div className="mb-16">
                  <h2 className="text-4xl font-libre-baskerville font-light mb-8">IV Drip Treatments</h2>
                  <div className="space-y-6">
                    {service.treatments.ivDrips.map((drip, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold">{drip.name}</h3>
                          <span className="text-xl">{drip.price}</span>
                        </div>
                        <p className="text-gray-600 mt-2">{drip.components}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shots Section */}
                <div className="mb-16">
                  <h2 className="text-4xl font-libre-baskerville font-light mb-8">Vitamin Shots</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.treatments.shots.map((shot, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50">
                        <span className="text-lg">{shot.name}</span>
                        <span className="text-lg font-semibold">{shot.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes Section */}
                {service.treatments.notes && (
                  <div className="mt-8 p-4 bg-gray-50">
                    {service.treatments.notes.map((note, index) => (
                      <p key={index} className="text-sm text-gray-600">{note}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Contact Section */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-libre-baskerville font-light mb-6">
                {t('services.contact.title', 'Interested in our services?')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('services.contact.description', 'Contact us to learn more about how we can help you.')}
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-transparent border-2 border-[#506B84] text-[#506B84] hover:bg-[#506B84] hover:text-white transition-colors duration-500"
              >
                {t('services.contact.button', 'Contact Us')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 