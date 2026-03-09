import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ServiceContract = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 bg-white">
        <h1 className="text-2xl font-bold text-center mb-8">
          {t('contract.title')}
        </h1>
        
        <div className="space-y-6">
          {/* Contract Parties */}
          <div>
            <p className="mb-2"><strong>{t('contract.between')}</strong></p>
            <p>{t('contract.providerParty', {
              name: '[Nombre del Proveedor]',
              address: '[Dirección]',
              nif: '[Número]'
            })}</p>
            
            <p className="mt-4 mb-2"><strong>{t('contract.and')}</strong></p>
            <p>{t('contract.beneficiaryParty', {
              name: '[Nombre del Beneficiario]',
              address: '[Dirección]',
              nif: '[Número]'
            })}</p>
            
            <p className="mt-4">{t('contract.agreement')}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">{t('contract.clausesTitle')}</h2>

            {/* Primera Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.firstClause.title')}</h3>
              <p>{t('contract.firstClause.content')}</p>
            </div>

            {/* Segunda Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.secondClause.title')}</h3>
              <p>{t('contract.secondClause.content', {
                date: '[fecha]',
                duration: '[periodo de duración]',
                noticeDays: '[número de días]'
              })}</p>
            </div>

            {/* Tercera Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.thirdClause.title')}</h3>
              <p>{t('contract.thirdClause.intro')}</p>
              <ol className="list-decimal ml-6 mt-2">
                <li className="mb-2">{t('contract.thirdClause.obligations.first')}</li>
                <li className="mb-2">{t('contract.thirdClause.obligations.second')}</li>
                <li>{t('contract.thirdClause.obligations.third')}</li>
              </ol>
            </div>

            {/* Cuarta Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.fourthClause.title')}</h3>
              <p>{t('contract.fourthClause.intro')}</p>
              <ol className="list-decimal ml-6 mt-2">
                <li className="mb-2">{t('contract.fourthClause.obligations.first')}</li>
                <li className="mb-2">{t('contract.fourthClause.obligations.second')}</li>
                <li>{t('contract.fourthClause.obligations.third')}</li>
              </ol>
            </div>

            {/* Quinta Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.fifthClause.title')}</h3>
              <p>{t('contract.fifthClause.commission', {
                percentage: '[porcentaje acordado]'
              })}</p>
              <p>{t('contract.fifthClause.payment', {
                days: '[número de días]'
              })}</p>
            </div>

            {/* Sexta Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.sixthClause.title')}</h3>
              <p>{t('contract.sixthClause.content')}</p>
            </div>

            {/* Séptima Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.seventhClause.title')}</h3>
              <p>{t('contract.seventhClause.intro')}</p>
              <ol className="list-decimal ml-6 mt-2">
                <li className="mb-2">{t('contract.seventhClause.reasons.first')}</li>
                <li className="mb-2">{t('contract.seventhClause.reasons.second')}</li>
                <li>{t('contract.seventhClause.reasons.third')}</li>
              </ol>
            </div>

            {/* Octava Cláusula */}
            <div className="mb-6">
              <h3 className="font-bold">{t('contract.eighthClause.title')}</h3>
              <p>{t('contract.eighthClause.content', {
                location: '[localidad]'
              })}</p>
            </div>

            {/* Signatures */}
            <div className="mt-12">
              <p className="mb-8">{t('contract.closing', {
                location: '[localidad]',
                date: '[fecha]'
              })}</p>
              
              <p className="font-bold mb-4">{t('contract.signatures')}</p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="border-t border-black pt-2">
                    <p>{t('contract.providerName', { name: '[Nombre del Proveedor]' })}</p>
                    <p>{t('contract.providerTitle')}</p>
                  </div>
                </div>
                <div>
                  <div className="border-t border-black pt-2">
                    <p>{t('contract.beneficiaryName', { name: '[Nombre del Beneficiario]' })}</p>
                    <p>{t('contract.beneficiaryTitle')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContract; 