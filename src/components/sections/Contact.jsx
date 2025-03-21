import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { sendContactForm } from '../../utils/emailService';

const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const formRef = useRef();
  const isContactRoute = location.pathname === '/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await sendContactForm(formData);

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setError(t('contact.form.error'));
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`relative ${isContactRoute ? 'pt-32' : ''} min-h-screen bg-white`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/estates/estate_11.jpeg"
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
              Email: {' '}
              <a href="mailto:infoauramade@gmail.com" className="hover:underline">
                {t('contact.address.email')}
              </a>
            </p>
            <p>{t('contact.address.tel')}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6  mx-auto w-full justify-center">
            <a
              href="https://www.facebook.com/share/18ZTa39KMG/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-gray-400 transition-colors duration-300"
            >
              <span className="sr-only">{t('contact.social.facebook')}</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/caviarconcierge2025?utm_source=qr&igsh=MTQwbXl5MnkwMjVsOA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-red-400 transition-colors duration-300"
            >
              <span className="sr-only">{t('contact.social.instagram')}</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto bg-transparent p-8 rounded-sm shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name')}
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white/90 text-gray-900 placeholder-gray-500"
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
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white/90 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phone')}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white/90 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.form.subject')}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white/90 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                rows="4"
                required
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white/90 text-gray-900 placeholder-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`md:w-1/3 bg-[#506B84] text-white py-3 px-6 hover:bg-black/70 transition-colors duration-500 font-libre-caslon whitespace-nowrap font-light shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? t('contact.form.sending', 'Sending...') : t('contact.form.send')}
              </button>
            </div>

            {isSuccess && (
              <p className="text-green-500 text-center font-semibold">
                {t('contact.form.success')}
              </p>
            )}
            {error && (
              <p className="text-red-500 text-center font-semibold">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 