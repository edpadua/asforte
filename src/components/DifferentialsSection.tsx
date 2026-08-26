import React from 'react';
import { motion } from 'motion/react';
import {
  Factory,
  ShieldCheck,
  Headphones,
  Truck,
  Building2,
  Combine,
} from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      title: 'Produção própria',
      description:
        'Concreto asfáltico para obras de pavimentação, recapeamento, conservação viária e infraestrutura.',
      icon: <Factory className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
    {
      title: 'Controle de qualidade',
      description:
        'Apoio ao controle dos materiais e atendimento às especificações técnicas.',
      icon: <ShieldCheck className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
    {
      title: 'Suporte técnico e comercial',
      description:
        'Orientação na escolha dos materiais conforme a necessidade técnica do projeto.',
      icon: <Headphones className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
    {
      title: 'Planejamento logístico',
      description:
        'Análise de requisitos técnicos, disponibilidade e logística.',
      icon: <Truck className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
    {
      title: 'Capacidade de atendimento',
      description:
        'Estrutura para apoiar obras que exigem organização no fornecimento.',
      icon: <Building2 className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
    {
      title: 'Integração operacional',
      description:
        'Agregados minerais integrados à operação como reforço para diferentes aplicações.',
      icon: <Combine className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />,
    },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-20 md:py-24 bg-[#F2F4F7] text-[#1D2A3A]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Vertical Red Accent Bar + Title */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-stretch gap-4 mb-12 lg:mb-16"
        >
          <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[50px]" />
          <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase leading-tight tracking-tight">
            ESTRUTURA, CONTROLE E ATENDIMENTO<br className="hidden sm:inline" /> PARA DECISÕES MAIS SEGURAS
          </h2>
        </motion.div>

        {/* 6 White Cards Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="bg-white p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start group"
            >
              {/* Theme Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-barlow font-extrabold text-[#192F4D] text-lg sm:text-xl uppercase tracking-tight mb-2.5 transition-colors duration-200 group-hover:text-[#E3371E]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


