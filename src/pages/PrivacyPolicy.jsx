import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>{t('privacyPolicy.title')} | Aura Made</title>
                <meta name="description" content={t('privacyPolicy.whatWeCollect.content')} />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-libre-baskerville font-light text-gray-900 mb-12 text-center">
                    {t('privacyPolicy.title')}
                </h1>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.whatWeCollect.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.whatWeCollect.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.howWeCollect.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.howWeCollect.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.whyWeCollect.title')}
                        </h2>
                        <p className="leading-relaxed mb-4">
                            {t('privacyPolicy.whyWeCollect.content')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t('privacyPolicy.whyWeCollect.purposes', { returnObjects: true }).map((purpose, index) => (
                                <li key={index}>{purpose}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.howWeStore.title')}
                        </h2>
                        <p className="leading-relaxed mb-4">
                            {t('privacyPolicy.howWeStore.content1').split('Wix.com').map((text, i, arr) => 
                                i === arr.length - 1 ? text : (
                                    <React.Fragment key={i}>
                                        {text}
                                        <a 
                                            href="https://www.wix.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            Wix.com
                                        </a>
                                    </React.Fragment>
                                )
                            )}
                        </p>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.howWeStore.content2').split('Wix.com').map((text, i, arr) => 
                                i === arr.length - 1 ? text : (
                                    <React.Fragment key={i}>
                                        {text}
                                        <a 
                                            href="https://www.wix.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            Wix.com
                                        </a>
                                    </React.Fragment>
                                )
                            )}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.howWeCommunicate.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.howWeCommunicate.content')}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.withdrawConsent.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.withdrawConsent.content')}{' '}
                            <a
                                href="mailto:info@ernestomoratogomez@gmail.com"
                                className="underline text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                                info@ernestomoratogomez@gmail.com
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-libre-baskerville mb-4">
                            {t('privacyPolicy.questions.title')}
                        </h2>
                        <p className="leading-relaxed">
                            {t('privacyPolicy.questions.content')}{' '}
                            <a
                                href="mailto:info@ernestomoratogomez@gmail.com"
                                className="underline text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                                 info@ernestomoratogomez@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy; 