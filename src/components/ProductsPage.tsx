import React from 'react';
import { motion } from 'motion/react';
import { 
  Route, 
  Layers, 
  Wrench, 
  Warehouse, 
  SquareParking, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { HERO_ASSETS, COMPANY_UNIDADES_ASSETS } from '../constants/assets';

interface ProductsPageProps {
  onOpenQuoteModal: () => void;
  onNavigateHome?: () => void;
}

const ASPHALT_APPLICATIONS = [
  {
    icon: Route,
    title: 'Pavimentação',
    desc: 'Implantação e execução de pavimentos asfálticos para vias urbanas, rodovias e loteamentos.',
  },
  {
    icon: Layers,
    title: 'Recapeamento',
    desc: 'Renovação e reforço estrutural de pistas com aplicação de camada asfáltica de alto desempenho.',
  },
  {
    icon: Wrench,
    title: 'Conservação viária',
    desc: 'Manutenção preventiva e corretiva de malhas viárias com máxima durabilidade operacional.',
  },
  {
    icon: Warehouse,
    title: 'Pátios industriais e logísticos',
    desc: 'Pisos e pátios de alta capacidade de carga para tráfego pesado e manobra de carretas.',
  },
  {
    icon: SquareParking,
    title: 'Acessos e estacionamentos',
    desc: 'Pavimentos funcionais, nivelados e de rápida liberação de tráfego para empreendimentos.',
  },
  {
    icon: Building2,
    title: 'Obras públicas e privadas de infraestrutura',
    desc: 'Atendimento a projetos com exigências rigorosas de normas técnicas do DNIT e DER.',
  },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const handleScrollToApplications = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('concreto-asfaltico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* DOBRA 01: HERO DA PÁGINA PRODUTOS */}
      <section
        id="hero-produtos"
        className="relative w-full min-h-[580px] lg:min-h-[640px] lg:max-h-[850px] lg:h-screen bg-[#192F4D] text-white overflow-hidden flex flex-col justify-center"
      >
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
                Concreto asfáltico e agregados minerais para pavimentação, infraestrutura e construção
              </motion.h1>

              {/* Subtitle / Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-[520px]"
              >
                A Asforte produz e fornece concreto asfáltico para obras públicas e privadas, com suporte técnico, logística e capacidade operacional.
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
                  href="#concreto-asfaltico"
                  onClick={handleScrollToApplications}
                  className="bg-transparent hover:bg-white/10 text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-4 rounded-none border border-white/80 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                >
                  Ver aplicações
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Usina Asforte São José dos Campos Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative min-h-[360px] sm:min-h-[480px] lg:min-h-screen overflow-hidden group bg-slate-900"
          >
            <img
              src={COMPANY_UNIDADES_ASSETS.sjcImage}
              alt="Usina de Concreto Asfáltico Asforte - São José dos Campos"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>
      </section>

      {/* DOBRA 02: CATEGORIA 1 — CONCRETO ASFÁLTICO (DESTAQUE PRINCIPAL) */}
      <section
        id="concreto-asfaltico"
        className="py-16 sm:py-20 md:py-24 bg-[#F2F4F7] text-[#1D2A3A] border-b border-slate-200"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-stretch gap-4 mb-3">
              <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
              <div>
                <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase leading-tight tracking-tight">
                  Concreto asfáltico para obras públicas e privadas
                </h2>
              </div>
            </div>
            <p className="font-barlow text-slate-600 text-base sm:text-lg font-normal leading-relaxed ml-0 sm:ml-5.5 max-w-3xl">
              A Asforte produz e fornece concreto asfáltico para obras de pavimentação e infraestrutura.
            </p>
          </div>

          {/* Grid de Aplicações: 6 Cards (3 colunas no desktop, 2 no tablet, 1 no mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-14">
            {ASPHALT_APPLICATIONS.map((app, idx) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className="bg-white p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start group"
                >
                  {/* Theme Icon */}
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 origin-left">
                    <IconComponent className="w-7 h-7 text-[#E3371E] stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-barlow font-extrabold text-[#192F4D] text-lg sm:text-xl uppercase tracking-tight mb-2.5 transition-colors duration-200 group-hover:text-[#E3371E]">
                    {app.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {app.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action Bar / Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#102138] text-white p-8 sm:p-10 border-l-4 border-[#E3371E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-slate-300 font-condensed uppercase tracking-wider text-xs font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#E3371E]" />
                <span>Atendimento Técnico & Logística Própria</span>
              </div>
              <p className="font-barlow text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                Pronto para cotar fornecimento contínuo ou pontual para a sua obra?
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-3 bg-[#E3371E] hover:bg-[#103778] text-white font-condensed font-extrabold uppercase tracking-wider text-sm px-8 py-4 rounded-none border-none transition-all duration-200 cursor-pointer shadow hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Solicitar orçamento de concreto asfáltico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

