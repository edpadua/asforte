import React from 'react';
import { motion } from 'motion/react';
import { HERO_ASSETS } from '../constants/assets';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative w-full min-h-[580px] lg:min-h-[640px] lg:max-h-[850px] lg:h-screen bg-[#192F4D] text-white overflow-hidden flex flex-col justify-center">
      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[580px] lg:min-h-[640px]">
        
        {/* Left Column - Dark Blue Blueprint Vector Map Background */}
        <div className="lg:col-span-6 relative bg-[#192F4D] flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-18 min-h-[480px] lg:min-h-full pt-28 sm:pt-32 lg:pt-28 pb-10 sm:pb-12">
          {/* Blueprint Map Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-95"
            style={{ backgroundImage: `url(${HERO_ASSETS.backgroundMap})` }}
          />
          
          {/* Subtle Dark Blue Vignette Tint */}
          <div className="absolute inset-0 z-0 bg-[#192F4D]/30 pointer-events-none" />

          {/* Left Column Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 max-w-[580px]"
          >
            {/* H1 Heading - Barlow Extrabold Uppercase */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] uppercase leading-[1.1] tracking-tight mb-6"
            >
              Concreto asfáltico para pavimentação, conservação e infraestrutura viária
            </motion.h1>

            {/* Subtitle / Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-[520px]"
            >
              A Asforte produz e fornece concreto asfáltico para obras de pavimentação, recapeamento, manutenção viária, pátios industriais e logísticos, acessos, estacionamentos e infraestrutura.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#E3371E] hover:bg-[#103778] text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-4 rounded-none border-none transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Solicitar orçamento
              </button>

              <a
                href="#produtos"
                className="bg-transparent hover:bg-white/10 text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-4 rounded-none border border-white/80 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                Ver produtos
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Ammann Asphalt Plant Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 relative min-h-[360px] sm:min-h-[480px] lg:min-h-screen overflow-hidden group"
        >
          <img
            src={HERO_ASSETS.heroPlantImage}
            alt="Usina de Concreto Asfáltico Asforte"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
        </motion.div>

      </div>
    </section>
  );
};


