import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isContactRoute = location.pathname === '/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className={`relative ${isContactRoute ? 'pt-32' : ''} min-h-screen bg-white`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/estate_11.jpeg"
          alt={t('contact.backgroundAlt')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 ${isContactRoute ? 'py-16' : 'py-32'}`}>
        <div className="text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          <h2 className="text-5xl font-libre-baskerville mb-12">
            {t('contact.title')}
          </h2>

          <div className="text-white space-y-2 font-libre-baskerville mb-8">
            <p>{t('contact.address.line1')}</p>
            <p>{t('contact.address.line2')}</p>
            <p>
              <a href="mailto:info@conciergetailormade.com" className="hover:underline">
                {t('contact.address.email')}
              </a>
            </p>
            <p>{t('contact.address.tel')}</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-2 py-6">
            <a
              href="https://www.facebook.com/TailorMadeConcierge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent p-2 rounded-full transition-colors"
              aria-label={t('contact.social.facebook')}
            >
              <FaFacebook className="w-6 h-6 text-white hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/conciergetailormade"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent p-2 rounded-full transition-colors"
              aria-label={t('contact.social.instagram')}
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-rose-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-transparent p-8 rounded-sm shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name')}
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.email')}
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phone')}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.form.subject')}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="md:w-1/3 bg-[#506B84] text-white py-3 px-6 hover:bg-black/70 transition-colors duration-500 font-libre-caslon whitespace-nowrap font-light shadow-lg"
              >
                {t('contact.form.send')}
              </button>
            </div>

            {isSuccess && (
              <p className="text-green-600 text-center">
                {t('contact.form.success')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 