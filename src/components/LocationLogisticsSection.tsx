import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LOCATION_ASSETS } from '../constants/assets';

interface LocationLogisticsSectionProps {
  onOpenQuoteModal: () => void;
}

export const LocationLogisticsSection: React.FC<LocationLogisticsSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % LOCATION_ASSETS.carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? LOCATION_ASSETS.carouselSlides.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentSlide = LOCATION_ASSETS.carouselSlides[currentSlideIndex];

  const santaIsabelDistances = [
    { city: 'São Paulo', distance: '60 km | 59min' },
    { city: 'Guarulhos', distance: '42,5 km | 38min' },
    { city: 'S.J.Campos', distance: '42,6 km | 41min' },
    { city: 'Campinas', distance: '129 km | 1h47min' },
    { city: 'Litoral', distance: '133 km | 1h48min' },
    { city: 'Jundiaí', distance: '111 km | 1h32min' },
    { city: 'Mogi das Cruzes', distance: '40,3 km | 46min' },
    { city: 'Taubaté', distance: '81,4 km | 1h11min' },
  ];

  const sjcDistances = [
    { city: 'São Paulo', distance: '89,5 km | 1h40min' },
    { city: 'Guarulhos', distance: '74,9 km | 1h09min' },
    { city: 'Santa Isabel', distance: '42,6 km | 41min' },
    { city: 'Campinas', distance: '150 km | 2h09min' },
    { city: 'Litoral', distance: '91,3 km | 1h18min' },
    { city: 'Jundiaí', distance: '149 km | 2h07min' },
    { city: 'Mogi das Cruzes', distance: '63 km | 1h' },
    { city: 'Taubaté', distance: '44,9 km | 47min' },
  ];

  return (
    <section id="localizacao" className="py-10 sm:py-12 md:py-14 bg-white text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header - 2 Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-6 lg:mb-8"
        >
          
          {/* Left Column: Vertical Red Bar + Title */}
          <div className="lg:col-span-6 flex items-stretch gap-4">
            <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
            <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] uppercase leading-tight tracking-tight">
              Localização estratégica para atender os principais mercados da região
            </h2>
          </div>

          {/* Right Column: Text Paragraphs */}
          <div className="lg:col-span-6 space-y-2 text-slate-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
            <p>
              Com unidades em São José dos Campos e Santa Isabel, a operação está posicionada para atender a Região Metropolitana de São Paulo, o Vale do Paraíba e importantes corredores logísticos do Estado.
            </p>
            <p>
              Essa presença regional contribui para reduzir deslocamentos, ampliar a capacidade de atendimento e proporcionar mais eficiência logística, regularidade no fornecimento e previsibilidade para obras de diferentes portes.
            </p>
          </div>

        </motion.div>

        {/* Operational Location Carousel Container (4:3 ratio) */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative w-full overflow-hidden border border-slate-200 shadow-md mb-8 lg:mb-10 group bg-slate-900"
        >
          
          {/* Carousel Image viewport (4:3 aspect ratio) */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[380px] lg:max-h-[400px] w-full overflow-hidden">
            {LOCATION_ASSETS.carouselSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Logística e Unidade Operacional Asforte - ${slide.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            ))}

            {/* Top Badge Overlay */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 bg-[#192F4D]/90 backdrop-blur-sm text-white px-2.5 py-1 sm:px-4 sm:py-2 flex items-center gap-2 border-l-2 border-[#E3371E]">
              <span className="font-condensed font-extrabold uppercase text-[10px] sm:text-xs md:text-sm tracking-wider">
                LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
              </span>
            </div>

            {/* Bottom Overlay Badge - Current Slide Info */}
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20 hidden sm:flex items-stretch gap-3">
              <div className="bg-white text-[#192F4D] p-3 shadow-lg border-l-4 border-[#E3371E]">
                <div className="font-barlow font-black text-sm uppercase flex items-center gap-1.5">
                  <span>{currentSlide.title}</span>
                  <img
                    src={LOCATION_ASSETS.distancePinIcon}
                    alt="Ícone de Localização"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                </div>
                <div className="font-condensed text-xs text-slate-600 font-bold">{currentSlide.subtitle1}</div>
                <div className="font-condensed text-xs text-slate-500">{currentSlide.subtitle2}</div>
              </div>
            </div>

            {/* Arrows (compact on mobile) */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#192F4D]/80 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 md:p-3 transition-colors rounded-none border-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#192F4D]/80 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 md:p-3 transition-colors rounded-none border-none cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Carousel Dots (compact on mobile) */}
            <div className="absolute bottom-2.5 right-3 sm:bottom-4 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2">
              {LOCATION_ASSETS.carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`h-1.5 sm:h-2 transition-all duration-300 rounded-none border-none cursor-pointer ${
                    index === currentSlideIndex ? 'w-5 sm:w-8 bg-[#E3371E]' : 'w-1.5 sm:w-2 bg-white/70 hover:bg-white'
                  }`}
                />
              ))}
            </div>

          </div>

        </motion.div>

        {/* 2 Main Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* CARD 1: SANTA ISABEL (Dark Blue Wrapper) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="bg-[#192F4D] p-4 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            
            {/* Top Bar Label */}
            <div className="flex items-center gap-2 mb-3 text-white/80">
              <span className="w-6 h-0.5 bg-[#E3371E]" />
              <span className="font-condensed font-bold text-xs uppercase tracking-wider text-white/90">
                LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
              </span>
            </div>

            {/* Header Box */}
            <div className="bg-white p-4 sm:p-5 text-[#192F4D] mb-4 shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                <h3 className="font-barlow font-black text-2xl sm:text-3xl text-[#192F4D] uppercase tracking-tight flex items-center gap-2">
                  Santa Isabel <span className="text-slate-400 font-light">|</span> SP
                </h3>
                <img
                  src={LOCATION_ASSETS.distancePinIcon}
                  alt="Ícone de Localização"
                  className="w-7 h-7 object-contain shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#192F4D]">
                <div className="flex items-center gap-3">
                  <img
                    src={LOCATION_ASSETS.santaIsabelIcon}
                    alt="Ícone Pedreira PedraForte"
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <div>
                    <div className="font-condensed font-extrabold text-base sm:text-lg uppercase text-[#192F4D] leading-tight">
                      Pedreira PedraForte
                    </div>
                    <div className="font-condensed text-xs sm:text-sm text-slate-600 font-semibold">
                      Rod. Pres. Dutra, KM 194,5
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/EBj6tJi75qXJ9T5WA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#E3371E] hover:bg-[#102138] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0 text-center cursor-pointer self-start sm:self-auto"
                >
                  ABRIR NO MAPA
                </a>
              </div>
            </div>

            {/* Satellite Map Box Image */}
            <div className="relative w-full overflow-hidden mb-4 shadow-md bg-[#0c1829] border border-white/20 group">
              <img
                src={LOCATION_ASSETS.santaIsabelMap}
                alt="Mapa de Localização - Santa Isabel / SP - Pedreira PedraForte"
                className="w-full h-auto max-h-[320px] object-cover object-center block group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Distances Box (Orange Header/Background) */}
            <div className="bg-[#E3371E] p-4 sm:p-5 text-white shadow-md">
              <h4 className="font-condensed font-black text-center text-xs sm:text-sm uppercase tracking-wider mb-3.5 border-b border-white/20 pb-2">
                DISTÂNCIAS ATÉ A PEDREIRA PEDRAFORTE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-condensed text-xs sm:text-sm">
                {santaIsabelDistances.map((item) => (
                  <div key={item.city} className="flex items-center justify-between gap-1">
                    <span className="font-bold shrink-0">{item.city}</span>
                    <span className="border-b border-white/40 grow mx-1 my-auto"></span>
                    <span className="font-bold shrink-0 whitespace-nowrap text-right">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* CARD 2: SÃO JOSÉ DOS CAMPOS (Orange Wrapper) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="bg-[#FF6A3B] p-4 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            
            {/* Top Bar Label */}
            <div className="flex items-center gap-2 mb-3 text-white/90">
              <span className="w-6 h-0.5 bg-white" />
              <span className="font-condensed font-bold text-xs uppercase tracking-wider text-white">
                LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
              </span>
            </div>

            {/* Header Box */}
            <div className="bg-white p-4 sm:p-5 text-[#192F4D] mb-4 shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                <h3 className="font-barlow font-black text-2xl sm:text-3xl text-[#192F4D] uppercase tracking-tight flex items-center gap-2">
                  São José dos Campos <span className="text-slate-400 font-light">|</span> SP
                </h3>
                <img
                  src={LOCATION_ASSETS.distancePinIcon}
                  alt="Ícone de Localização"
                  className="w-7 h-7 object-contain shrink-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#192F4D]">
                <div className="flex items-center gap-3">
                  <img
                    src={LOCATION_ASSETS.sjcIcon}
                    alt="Ícone Asforte LTDA"
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <div>
                    <div className="font-condensed font-extrabold text-base sm:text-lg uppercase text-[#192F4D] leading-tight">
                      Asforte Concreto Asfáltico LTDA
                    </div>
                    <div className="font-condensed text-xs sm:text-sm text-slate-600 font-semibold">
                      Av. São Afonso Maria, 381, Bairro da Pernambucana
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/duyeoyU9t2aQpZt17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#E3371E] hover:bg-[#102138] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0 text-center cursor-pointer self-start sm:self-auto"
                >
                  ABRIR NO MAPA
                </a>
              </div>
            </div>

            {/* Satellite Map Box Image */}
            <div className="relative w-full overflow-hidden mb-4 shadow-md bg-[#0c1829] border border-white/20 group">
              <img
                src={LOCATION_ASSETS.sjcMap}
                alt="Mapa de Localização - São José dos Campos / SP - Asforte"
                className="w-full h-auto max-h-[320px] object-cover object-center block group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Distances Box (Dark Blue Background) */}
            <div className="bg-[#192F4D] p-4 sm:p-5 text-white shadow-md">
              <h4 className="font-condensed font-black text-center text-xs sm:text-sm uppercase tracking-wider mb-3.5 border-b border-white/20 pb-2">
                DISTÂNCIAS ATÉ A ASFORTE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-condensed text-xs sm:text-sm">
                {sjcDistances.map((item) => (
                  <div key={item.city} className="flex items-center justify-between gap-1">
                    <span className="font-bold shrink-0">{item.city}</span>
                    <span className="border-b border-white/30 grow mx-1 my-auto"></span>
                    <span className="font-bold shrink-0 whitespace-nowrap text-right">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Commercial Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#E3371E] hover:bg-[#103778] text-white font-condensed font-extrabold uppercase tracking-wider text-sm sm:text-base px-10 py-4.5 rounded-none border-none transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            FALAR COM O COMERCIAL
          </button>
        </motion.div>

      </div>
    </section>
  );
};



