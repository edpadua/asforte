import React from 'react';
import { motion } from 'motion/react';
import { PLANT_STRUCTURE_ASSETS } from '../constants/assets';

interface PlantStructureSectionProps {
  onOpenQuoteModal?: () => void;
}

export const PlantStructureSection: React.FC<PlantStructureSectionProps> = () => {
  return (
    <section id="estrutura" className="py-10 sm:py-12 md:py-14 bg-[#F2F4F7] text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header - 2 Columns Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-6 lg:mb-8"
        >
          
          {/* Left Column: Vertical Red Accent Bar + Title */}
          <div className="lg:col-span-6 flex items-stretch gap-4">
            <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
            <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] uppercase leading-tight tracking-tight">
              Estrutura moderna, automatizada e de alta capacidade produtiva
            </h2>
          </div>

          {/* Right Column: Paragraph Text */}
          <div className="lg:col-span-6 space-y-2 text-slate-700 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
            <p>
              A unidade da Asforte de Santa Isabel integra a produção de concreto asfáltico ao fornecimento de agregados minerais. Equipada com uma Ammann SolidBatch 180, conta com uma estrutura moderna, automatizada e de alta capacidade produtiva, posicionando-se entre as operações mais avançadas de sua categoria no Brasil.
            </p>
          </div>

        </motion.div>

        {/* 2 Side-by-Side Images in 4:3 Proportion */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-300 shadow-lg overflow-hidden bg-slate-900"
        >
          
          {/* Left Image (4:3) */}
          <div className="relative aspect-[4/3] max-h-[380px] lg:max-h-[410px] w-full overflow-hidden group">
            <img
              src={PLANT_STRUCTURE_ASSETS.leftImage}
              alt="Usina de Asfalto Ammann SolidBatch 180 Asforte - Vista Frontal"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Right Image (4:3) */}
          <div className="relative aspect-[4/3] max-h-[380px] lg:max-h-[410px] w-full overflow-hidden group border-t md:border-t-0 md:border-l border-slate-300/40">
            <img
              src={PLANT_STRUCTURE_ASSETS.rightImage}
              alt="Usina de Asfalto Ammann SolidBatch 180 Asforte - Vista Operacional"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};


