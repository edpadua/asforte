import React from 'react';
import { motion } from 'motion/react';
import { PRODUCT_ASSETS } from '../constants/assets';

interface ProductsSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteModal }) => {
  const productCards = [
    {
      id: 'concreto-asfaltico',
      title: 'Concreto Asfáltico',
      image: PRODUCT_ASSETS.card1,
    },
    {
      id: 'materiais-necessidade-tecnica',
      title: 'Materiais Conforme Necessidade Técnica do Projeto',
      image: PRODUCT_ASSETS.card3,
    },
  ];

  return (
    <section id="produtos" className="py-10 sm:py-12 md:py-14 bg-white text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-8">
        
        {/* Top Header - 2 Columns Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
        >
          
          {/* Left Column: Vertical Red Accent Bar + Title */}
          <div className="lg:col-span-6 flex items-stretch gap-4">
            <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
            <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] uppercase leading-tight tracking-tight">
              Materiais para diferentes etapas da obra
            </h2>
          </div>

          {/* Right Column: Paragraph Text */}
          <div className="lg:col-span-6 space-y-2 text-slate-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
            <p>
              A Asforte fornece concreto asfáltico usinado a quente de alto desempenho para atender demandas de pavimentação, infraestrutura, rodovias, vias urbanas e empreendimentos.
            </p>
          </div>

        </motion.div>

      </div>

      {/* 2 Full-Width Side-by-Side Cards Container touching lateral extremities */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 bg-slate-900 border-y border-slate-200"
      >
        {productCards.map((product, idx) => (
          <motion.div
            key={product.id}
            onClick={onOpenQuoteModal}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
            className="group relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] w-full min-w-full overflow-hidden cursor-pointer flex items-center justify-center p-6 sm:p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-slate-200/20 last:border-r-0"
          >
            {/* Image with Darkened Default & Brightened Zoom Hover Effect */}
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out filter brightness-[0.60] group-hover:brightness-100 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay that fades on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#192F4D]/80 via-[#192F4D]/40 to-[#192F4D]/20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

            {/* Centered Title Content */}
            <div className="relative z-10 max-w-lg mx-auto">
              <h3 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[32px] uppercase tracking-tight leading-tight drop-shadow-lg transition-transform duration-300 group-hover:scale-105">
                {product.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};



