import React from 'react';
import { motion } from 'motion/react';
import { SECTORS_PAGE_ASSETS, CONTACT_INFO } from '../constants/assets';

interface SectorsPageProps {
  onOpenQuoteModal: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato', targetId?: string) => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onOpenQuoteModal, onNavigateHome, onNavigate }) => {
  const sectorsList = [
    {
      id: 'card-pavimentacao',
      title: 'Pavimentação',
      text: 'Concreto asfáltico para obras que exigem desempenho, regularidade no fornecimento e suporte na avaliação da aplicação.',
      image: SECTORS_PAGE_ASSETS.cards.pavimentacao,
    },
    {
      id: 'card-recapeamento',
      title: 'Recapeamento',
      text: 'Atendimento a demandas de recapeamento com suporte para avaliação da aplicação, volume estimado e prazo desejado.',
      image: SECTORS_PAGE_ASSETS.cards.recapeamento,
    },
    {
      id: 'card-conservacao-viaria',
      title: 'Conservação viária',
      text: 'Fornecimento para obras de conservação viária que exigem regularidade no abastecimento e organização operacional.',
      image: SECTORS_PAGE_ASSETS.cards.conservacaoViaria,
    },
    {
      id: 'card-patios-industriais',
      title: 'Pátios industriais e logísticos',
      text: 'Atendimento a áreas de circulação, operação, movimentação de veículos e pátios industriais ou logísticos.',
      image: SECTORS_PAGE_ASSETS.cards.patiosLogisticos,
    },
    {
      id: 'card-acessos-estacionamentos',
      title: 'Acessos e estacionamentos',
      text: 'Materiais para acessos, estacionamentos, áreas internas e circulação de veículos.',
      image: SECTORS_PAGE_ASSETS.cards.estacionamentos,
    },
    {
      id: 'card-obras-infraestrutura',
      title: 'Obras públicas e privadas de infraestrutura',
      text: 'Fornecimento de concreto asfáltico e agregados para obras públicas e privadas de infraestrutura, com suporte técnico e comercial para avaliação da necessidade do projeto.',
      image: SECTORS_PAGE_ASSETS.cards.infraestrutura,
    },
  ];

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* DOBRA 01: HERO DA PÁGINA SETORES ATENDIDOS */}
      <section
        id="hero-setores"
        className="relative w-full min-h-[580px] lg:min-h-[640px] lg:max-h-[850px] lg:h-screen bg-[#192F4D] text-white overflow-hidden flex flex-col justify-center"
      >
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Column - Dark Blue Blueprint Vector Map Background */}
          <div className="lg:col-span-6 relative bg-[#192F4D] flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-18 min-h-[480px] lg:min-h-full pt-28 sm:pt-32 lg:pt-28 pb-10 sm:pb-12">
            {/* Blueprint Map Background Image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-95"
              style={{ backgroundImage: `url(${SECTORS_PAGE_ASSETS.backgroundMap})` }}
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
                className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] uppercase leading-[1.12] tracking-tight mb-6"
              >
                Concreto asfáltico para pavimentação, conservação e infraestrutura viária
              </motion.h1>

              {/* Subtitle / Texto de Abertura */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-[520px]"
              >
                A Asforte atende obras públicas e privadas com produção própria de concreto asfáltico e apoio de agregados minerais integrados à operação. A estrutura é voltada a aplicações que exigem desempenho, planejamento logístico e fornecimento adequado à necessidade da obra.
              </motion.p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  id="btn-orcamento-hero-setores"
                  onClick={onOpenQuoteModal}
                  className="bg-[#E3371E] hover:bg-[#103778] text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-8 sm:px-10 py-4 rounded-none border-none transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Solicitar orçamento
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Pavimentação em Execução Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative min-h-[360px] sm:min-h-[480px] lg:min-h-screen overflow-hidden group bg-slate-900"
          >
            <img
              src={SECTORS_PAGE_ASSETS.heroImage}
              alt="Pavimentação asfáltica em execução Asforte"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>
      </section>

      {/* DOBRA 02: GRID DE SETORES */}
      <section
        id="grid-setores"
        className="py-16 sm:py-20 md:py-24 bg-[#F2F4F7] text-[#1D2A3A] border-b border-slate-200"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid de Cards de Setores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectorsList.map((sector, idx) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-white border-t-4 border-t-[#E3371E] border-x border-b border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start h-full group overflow-hidden"
              >
                {/* Imagem do Setor Acima dos Textos */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={sector.image}
                    alt={`${sector.title} - Asforte`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo Textual do Card */}
                <div className="p-6 sm:p-7 md:p-8 flex flex-col flex-grow">
                  {/* Título do Setor */}
                  <h3 className="font-barlow font-bold text-[#192F4D] text-xl sm:text-2xl lg:text-[24px] uppercase tracking-tight mb-3 group-hover:text-[#E3371E] transition-colors">
                    {sector.title}
                  </h3>

                  {/* Linha Divisora */}
                  <div className="w-10 h-0.5 bg-[#E3371E] mb-3.5" />

                  {/* Texto Descritivo */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {sector.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* DOBRA 03: BLOCO CTA FINAL DA PÁGINA SETORES ATENDIDOS */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-[#1D2A3A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[#E3371E] text-white p-6 sm:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center justify-center gap-6 sm:gap-8"
          >
            <div className="space-y-4 max-w-3xl text-center flex flex-col items-center">
              <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] leading-tight uppercase tracking-tight text-center">
                Cada projeto pode exigir diferentes materiais, volumes, prazos e condições logísticas.
              </h2>

              <p className="text-white/95 text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-center">
                Envie as informações da sua obra para que a equipe comercial possa avaliar a melhor forma de atendimento.
              </p>
            </div>

            {/* Botões CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                id="btn-orcamento-whatsapp-setores"
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento de concreto asfáltico para meu projeto com a Asforte.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 sm:py-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                SOLICITAR ORÇAMENTO PELO WHATSAPP
              </a>

              <button
                type="button"
                id="btn-falar-comercial-setores"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contato');
                  } else if (onNavigateHome) {
                    onNavigateHome();
                    setTimeout(() => {
                      const el = document.getElementById('contato');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 sm:py-4 border border-white/80 transition-all duration-200 cursor-pointer hover:-translate-y-0.5 text-center"
              >
                <span>Falar com o comercial</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
