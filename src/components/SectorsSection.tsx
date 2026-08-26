import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface SectorsSectionProps {
  onOpenQuoteModal: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal }) => {
  const sectors = [
    'PAVIMENTAÇÃO',
    'RECAPEAMENTO',
    'CONSERVAÇÃO VIÁRIA',
    'PÁTIOS INDUSTRIAIS E LOGÍSTICOS',
    'ACESSOS',
    'ESTACIONAMENTOS',
    'OBRAS PÚBLICAS E PRIVADAS DE INFRAESTRUTURA.',
  ];

  const leftImage = 'https://d335luupugsy2.cloudfront.net/cms/files/38500/1785504703/$b15e223gn1c';

  return (
    <section id="setores" className="w-full bg-[#192F4D] text-white overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-stretch">
        
        {/* Left Column: Full-Width Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden group"
        >
          <img
            src={leftImage}
            alt="Atendimento para diferentes aplicações - Pavimentação Asforte"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
        </motion.div>

        {/* Right Column: Dark Blue Content Area */}
        <div className="lg:col-span-6 px-6 sm:px-12 lg:px-14 xl:px-20 2xl:px-24 py-10 sm:py-12 lg:py-12 flex flex-col justify-center items-center lg:items-start bg-[#192F4D]">
          <div className="w-full max-w-xl my-auto flex flex-col justify-center">
            {/* Section Header: Vertical Red Accent Bar + Title */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-stretch gap-4 mb-6"
            >
              <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
              <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] uppercase leading-tight tracking-tight">
                ATENDIMENTO PARA<br />DIFERENTES APLICAÇÕES
              </h2>
            </motion.div>

            {/* List of 7 Sector Cards */}
            <div className="space-y-2 mb-6 w-full">
              {sectors.map((sector, idx) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                  className="bg-[#2B4366]/80 border border-white/5 px-4 py-2.5 flex items-center gap-3 text-white font-barlow font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#324f79] hover:translate-x-1.5 transition-all duration-200 cursor-default shadow-sm"
                >
                  <Check className="w-4 h-4 text-[#E3371E] stroke-[2.5] shrink-0" />
                  <span>{sector}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              className="self-start"
            >
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#E3371E] hover:bg-[#c92d16] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                FALAR COM O COMERCIAL
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};


