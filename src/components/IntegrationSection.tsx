import React from 'react';
import { motion } from 'motion/react';
import { INTEGRATION_ASSETS, LOGOS } from '../constants/assets';

export const IntegrationSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-visible">
      {/* Full Width Dark Blue Background Box */}
      <div className="relative w-full bg-[#192F4D] text-white shadow-xl">
        
        {/* Dark Blue Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${INTEGRATION_ASSETS.background})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#192F4D]/95 via-[#192F4D]/90 to-[#192F4D]/85 pointer-events-none" />

        {/* Centered Content Container */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Grid Layout - 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 lg:py-16">
            
            {/* Left Column: Overlapping "Vazada" Image extending beyond top and bottom */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-5 relative z-20 -mt-10 -mb-10 lg:-mt-20 lg:-mb-20"
            >
              <div className="relative border-l-4 border-[#E3371E] shadow-2xl overflow-hidden bg-slate-900 group">
                <img
                  src={INTEGRATION_ASSETS.overlappingTruckImage}
                  alt="Caminhão Pedreira PedraForte - Integração com Agregados"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[540px] xl:h-[580px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Right Column: Title, Copy and Logos */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-4 py-4"
            >
              
              {/* Title with Vertical Red Bar */}
              <div className="flex items-stretch gap-4">
                <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[48px]" />
                <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase leading-tight tracking-tight">
                  Integração que fortalece o fornecimento
                </h2>
              </div>

              {/* Text Paragraph */}
              <p className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-[620px]">
                Como parte da estrutura do Grupo PedraForte, a Asforte conta com integração aos agregados minerais, fortalecendo sua capacidade de atendimento para projetos de pavimentação, infraestrutura, bases, sub-bases, drenagem e construção.
              </p>

              {/* Side-by-side Logos */}
              <div className="pt-4 flex flex-wrap items-center gap-8 border-t border-white/10">
                <img
                  src={LOGOS.asforteWhite}
                  alt="Asforte Concreto Asfáltico Logo"
                  className="h-9 sm:h-11 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="h-8 w-px bg-white/20 hidden sm:block" />
                <img
                  src={LOGOS.pedraForteWhite}
                  alt="Pedreira PedraForte Logo"
                  className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};


