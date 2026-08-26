import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO, FOOTER_ASSETS } from '../constants/assets';

interface FinalCTASectionProps {
  onOpenQuoteModal?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = () => {
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de solicitar uma cotação de concreto asfáltico com a Asforte.')}`;

  return (
    <section id="contato" className="py-10 sm:py-12 md:py-14 bg-white text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container: Red/Orange Box Left + Image Right */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          
          {/* Left Column (Orange Background) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-[#E3371E] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between items-start text-left">
            
            <div className="space-y-3 mb-6">
              <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-tight uppercase tracking-tight">
                PRECISA DE CONCRETO ASFÁLTICO<br className="hidden sm:inline" /> PARA SUA OBRA?
              </h2>

              <p className="text-white/95 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl">
                Envie as informações do seu projeto para avaliação comercial.
              </p>
            </div>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                SOLICITAR ORÇAMENTO PELO WHATSAPP
              </a>
            </div>

          </div>

          {/* Right Column (Laboratory/Aggregate Image in 4:3) */}
          <div className="lg:col-span-5 xl:col-span-4 relative aspect-[4/3] lg:aspect-auto min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden group">
            <img
              src={FOOTER_ASSETS.ctaContainerImage}
              alt="Avaliação de agregados em laboratório - Asforte"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};


