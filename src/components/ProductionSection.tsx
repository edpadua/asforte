import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { PRODUCTION_CAROUSEL_IMAGES } from '../constants/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductionSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTION_CAROUSEL_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PRODUCTION_CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    );
  }, []);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white text-[#1D2A3A]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        
        {/* Top Header - 2 Columns (Matching reference layout exactly) */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-6 lg:mb-8"
        >
          
          {/* Left Column: Vertical Red Accent Line + Title */}
          <div className="lg:col-span-6 flex items-stretch gap-4">
            <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
            <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] uppercase leading-tight tracking-tight">
              Produção própria para obras públicas e privadas
            </h2>
          </div>

          {/* Right Column: Paragraph Text */}
          <div className="lg:col-span-6 space-y-2 text-slate-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
            <p>
              A Asforte atende obras que exigem qualidade, regularidade e eficiência no fornecimento de concreto asfáltico.
            </p>
            <p>
              Sua estrutura produtiva apoia demandas de diferentes portes, com suporte técnico e comercial para orientar a solicitação conforme a aplicação, disponibilidade e necessidade da obra.
            </p>
          </div>

        </motion.div>

        {/* Carousel Container with 4:3 aspect ratio */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative w-full overflow-hidden border border-slate-200 shadow-md group"
        >
          {/* Image Display */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[420px] lg:max-h-[440px] w-full bg-slate-900 overflow-hidden">
            {PRODUCTION_CAROUSEL_IMAGES.map((imgUrl, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Usina e Operação de Pavimentação Asforte - Imagem ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            ))}
          </div>

          {/* Carousel Arrows (compact on mobile) */}
          <button
            onClick={prevSlide}
            aria-label="Imagem Anterior"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#192F4D]/80 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 md:p-3 transition-colors duration-200 rounded-none border-none cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Próxima Imagem"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#192F4D]/80 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 md:p-3 transition-colors duration-200 rounded-none border-none cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Indicators / Dots (compact on mobile) */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
            {PRODUCTION_CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para a imagem ${index + 1}`}
                className={`h-1.5 sm:h-2.5 transition-all duration-300 rounded-none border-none cursor-pointer ${
                  index === currentIndex ? 'w-5 sm:w-8 bg-[#E3371E]' : 'w-1.5 sm:w-2.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};


