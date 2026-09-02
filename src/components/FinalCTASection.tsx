import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants/assets';

interface FinalCTASectionProps {
  onOpenQuoteModal?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = () => {
  const whatsappNumber = CONTACT_INFO.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de solicitar uma cotação de concreto asfáltico com a Asforte.')}`;

  return (
    <section id="contato" className="py-10 sm:py-12 md:py-14 bg-white text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container: Solid Red/Orange Box */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-[#E3371E] text-white p-6 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center justify-center gap-6 sm:gap-8"
        >
          <div className="space-y-3 max-w-3xl text-center flex flex-col items-center">
            <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-tight uppercase tracking-tight text-center">
              PRECISA DE CONCRETO ASFÁLTICO<br className="hidden sm:inline" /> PARA SUA OBRA?
            </h2>

            <p className="text-white/95 text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-center">
              Envie as informações do seu projeto para avaliação comercial.
            </p>
          </div>

          <div className="flex justify-center items-center w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 sm:py-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
            >
              SOLICITAR ORÇAMENTO PELO WHATSAPP
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


