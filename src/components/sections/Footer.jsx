import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    // Here you would typically handle the email subscription
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-[#5e7c94] to-[#5e7c94]/80 text-white py-10">
      <div className="max-w-5xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
          {/* Newsletter Subscription */}
          <div className="space-y-1">
            <h5 className="font-didot-italic text-3xl">
              {t('footer.subscribe.title')}
            </h5>
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col md:flex-row gap-0 relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.subscribe.placeholder')}
                required
                pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                maxLength={250}
                className="px-4 py-2 text-sm bg-white/10 border-2 border-[var(--corvid-background-color)] rounded-none focus:outline-none placeholder-white/60 font-libre-caslon"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-none hover:bg-black transition-colors duration-500 font-libre-caslon whitespace-nowrap bg-[var(--corvid-background-color)]"
              >
                {t('footer.subscribe.button')}
              </button>

              {isSubmitted && (
                <p className="text-sm font-libre-caslon mt-2">
                  {t('footer.subscribe.success')}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <p className="font-libre-caslon font-extrabold tracking-wide">
              {t('footer.contact.address')}
            </p>
            <p className="font-libre-caslon font-bold tracking-wide">
              {t('footer.contact.tel')}:{' '}
              <a
                href="tel:+34638387366"
                className="underline hover:text-gray-300 transition-colors duration-200"
              >
                +34 638 38 73 66
              </a>
            </p>
            <p className="font-libre-caslon font-bold tracking-wide">
              {t('footer.contact.mail')}:{' '}
              <a
                href="mailto:info@conciergetailormade.com"
                className="underline hover:text-gray-300 transition-colors duration-200"
              >
                info@conciergetailormade.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm tracking-wide">
          <p className="font-libre-caslon">
            {t('footer.contact.copyright')}{' '}|{' '}
            <Link
              to="/privacy-policy"
              className="underline hover:text-gray-300 transition-colors duration-200"
            >
              {t('footer.contact.privacyPolicy')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 