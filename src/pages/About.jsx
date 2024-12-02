import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'


const About = () => {
  const { t, i18n } = useTranslation();

  
  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full p-8 relative">
        <motion.h2
          className="text-4xl font-semibold text-gray-800 text-center mb-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        {t('biza')}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
      {t('ijod')}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://via.placeholder.com/300"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('missiya')}</h3>
            <p className="text-gray-600 text-lg">
          {t('servis')}
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('jamoa')}</h3>
          <div className="flex justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 rounded-full shadow-md mb-2"
              />
              <h4 className="text-lg font-medium text-gray-800">Iroda</h4>
              <p className="text-sm text-gray-600">{t('dir')}</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 rounded-full shadow-md mb-2"
              />
              <h4 className="text-lg font-medium text-gray-800">Dilfuza</h4>
              <p className="text-sm text-gray-600">{t('veb')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
