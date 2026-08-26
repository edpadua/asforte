import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGOS, INDUSTRIAL_IMAGES, COMPANY_HERO_ASSETS, COMPANY_CAROUSEL_IMAGES, COMPANY_UNIDADES_ASSETS, COMPANY_CONTROLE_ASSETS, COMPANY_FROTA_ASSETS, COMPANY_LICENSES_ASSETS } from '../constants/assets';
import { FinalCTASection } from './FinalCTASection';
import {
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  FlaskConical,
  Headphones,
  FileCheck2,
  ChevronRight,
  ChevronLeft,
  Building2,
  Layers,
  Cpu,
  Factory,
  Contact,
  Wrench,
  Check,
  X,
  ZoomIn
} from 'lucide-react';

interface CompanyPageProps {
  onOpenQuoteModal: () => void;
  onNavigateHome: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenQuoteModal, onNavigateHome }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [licenseSlide, setLicenseSlide] = useState(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % COMPANY_CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + COMPANY_CAROUSEL_IMAGES.length) % COMPANY_CAROUSEL_IMAGES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % COMPANY_CAROUSEL_IMAGES.length);
  };

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">

      {/* DOBRA 01 - HERO INTERNO */}
      <section className="relative pt-20 sm:pt-24 bg-[#FF6535] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column: Orange with Vector Map Texture */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center items-start bg-[#FF6535] overflow-hidden"
          >
            {/* Vector Map Background Texture */}
            <img
              src={COMPANY_HERO_ASSETS.bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-80 mix-blend-soft-light"
            />
            
            <div className="relative z-10 max-w-xl">
              <h1 className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] uppercase leading-[1.12] tracking-tight">
                ASFORTE: CONCRETO ASFÁLTICO PARA PAVIMENTAÇÃO E INFRAESTRUTURA
              </h1>
            </div>
          </motion.div>

          {/* Right Column: Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative min-h-[350px] sm:min-h-[450px] lg:min-h-full bg-slate-900 group overflow-hidden"
          >
            <img
              src={COMPANY_HERO_ASSETS.heroImage}
              alt="Laboratório e Estrutura Asforte"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>
      </section>

      {/* DOBRA 02 - APRESENTAÇÃO / CARROSSEL */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Title and Text */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-8"
            >
              {/* Heading with Vertical Red Accent Line */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
                <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl uppercase tracking-tight">
                  QUEM SOMOS
                </h2>
              </div>

              {/* Text Paragraphs */}
              <div className="space-y-6 text-[#192F4D] text-base sm:text-lg md:text-[19px] leading-relaxed font-normal">
                <p>
                  A Asforte atua na produção e no fornecimento de concreto asfáltico para obras de pavimentação, recapeamento, manutenção viária e infraestrutura.
                </p>
                <p>
                  Sua estrutura atende projetos públicos e privados que exigem qualidade, regularidade no fornecimento, suporte técnico e eficiência operacional.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-none shadow-lg group bg-slate-900">
                <img
                  src={COMPANY_CAROUSEL_IMAGES[currentSlide]}
                  alt={`Estrutura Asforte - Foto ${currentSlide + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-102"
                />

                {/* Navigation Chevrons (compact on mobile) */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 transition-colors cursor-pointer"
                  aria-label="Imagem Anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E3371E] text-white p-1.5 sm:p-2.5 transition-colors cursor-pointer"
                  aria-label="Próxima Imagem"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Indicator Dots (compact on mobile) */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2">
                  {COMPANY_CAROUSEL_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 sm:h-2 transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? 'w-4 sm:w-6 bg-[#E3371E]' : 'w-1.5 sm:w-2 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* DOBRA 03 - PARTE DA ESTRUTURA DO GRUPO PEDRAFORTE */}
      <section className="relative w-full py-16 lg:py-24 bg-white overflow-visible">
        {/* Full Width Dark Blue Background Box */}
        <div className="relative w-full bg-[#192F4D] text-white shadow-xl">
          
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Grid Layout - 12 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 lg:py-16">
              
              {/* Left Column: Image bleeding outside top and bottom */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="lg:col-span-5 relative z-20 -mt-10 -mb-10 lg:-mt-20 lg:-mb-20"
              >
                <div className="relative border-l-4 border-[#E3371E] shadow-2xl overflow-hidden bg-slate-900 group">
                  <img
                    src={COMPANY_HERO_ASSETS.dobra3Image}
                    alt="Estrutura do Grupo PedraForte"
                    className="w-full h-[360px] sm:h-[440px] lg:h-[520px] xl:h-[580px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Right Column: Title, Copy and Logos */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-4 py-4"
              >
                
                {/* Title with Vertical Red Bar Accent */}
                <div className="flex items-stretch gap-4">
                  <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[48px]" />
                  <h2 className="font-barlow font-black text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase leading-tight tracking-tight">
                    PARTE DA ESTRUTURA DO<br />GRUPO PEDRAFORTE
                  </h2>
                </div>

                {/* Text Paragraphs */}
                <div className="space-y-4 text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-[620px]">
                  <p>
                    A Asforte integra a estrutura industrial do Grupo PedraForte como a frente especializada em concreto asfáltico.
                  </p>
                  <p>
                    A integração com os agregados minerais fortalece o atendimento a projetos que exigem materiais adequados, planejamento logístico e capacidade operacional.
                  </p>
                </div>

                {/* Side-by-side Logos */}
                <div className="pt-4 flex flex-wrap items-center gap-8 border-t border-white/10">
                  <img
                    src={LOGOS.asforteWhite}
                    alt="Asforte Concreto Asfáltico Logo"
                    className="h-9 sm:h-11 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <div className="h-8 w-px bg-white/20 hidden sm:block" />
                  <img
                    src={LOGOS.pedraForteWhite}
                    alt="Pedreira PedraForte Logo"
                    className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* DOBRA 04: UNIDADES PRODUTIVAS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-10 sm:mb-12"
          >
            <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
            <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl uppercase tracking-tight">
              UNIDADES PRODUTIVAS
            </h2>
          </motion.div>

          {/* UNIDADE 1: São José dos Campos (Orange Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[#FF6535] text-white p-6 sm:p-8 md:p-10 lg:p-12 mb-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-barlow font-bold text-white text-xl sm:text-2xl md:text-3xl text-center mb-8">
              Usina de Asfalto — São José dos Campos
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: 3 Paragraphs */}
              <div className="lg:col-span-6 space-y-4 text-white text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                <p>
                  Unidade estrategicamente localizada para ampliar a cobertura regional e garantir agilidade no atendimento às demandas de pavimentação, recapeamento e infraestrutura.
                </p>
                <p>
                  Além da produção de concreto asfáltico, a unidade também funciona como ponto estratégico dos agregados minerais, ampliando a agilidade e o alcance do atendimento na região.
                </p>
                <p>
                  Sua posição próxima a importantes corredores logísticos fortalece a eficiência operacional e contribui para mais previsibilidade no fornecimento.
                </p>
              </div>

              {/* Right Column: Image + Button */}
              <div className="lg:col-span-6 flex flex-col items-center space-y-5">
                <div 
                  onClick={() => setModalImage({
                    src: COMPANY_UNIDADES_ASSETS.sjcImage,
                    title: 'São José dos Campos | SP',
                    subtitle: 'Usina de Asfalto — Asforte Concreto Asfáltico LTDA'
                  })}
                  className="relative w-full overflow-hidden shadow-md group cursor-pointer"
                >
                  <img
                    src={COMPANY_UNIDADES_ASSETS.sjcImage}
                    alt="Usina de Asfalto - São José dos Campos"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-0 left-0 bg-[#102138]/90 text-white px-2.5 sm:px-4 py-1 sm:py-2 flex items-center border-l-2 sm:border-l-4 border-[#E3371E] z-10">
                    <span className="font-condensed font-bold text-[10px] sm:text-sm uppercase tracking-wider">
                      LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
                    </span>
                  </div>

                  {/* Click to Zoom indicator */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="bg-[#192F4D]/90 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-condensed font-bold uppercase tracking-wider opacity-90 group-hover:opacity-100 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E3371E]" />
                      <span>Clique para ampliar</span>
                    </div>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-0 left-0 bg-white text-[#192F4D] p-1.5 sm:p-4 border-l-2 sm:border-l-4 border-[#E3371E] max-w-[85%] shadow-lg z-10">
                    <div className="flex items-center gap-1 sm:gap-2 font-barlow font-black text-[10px] sm:text-base text-[#192F4D] uppercase tracking-tight leading-tight">
                      <span>SÃO JOSÉ DOS CAMPOS | SP</span>
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#192F4D] shrink-0 fill-[#192F4D]/10" />
                    </div>
                    <p className="font-barlow font-bold text-[9px] sm:text-sm text-[#192F4D] mt-0.5 leading-tight">
                      Asforte Concreto Asfáltico LTDA
                    </p>
                    <p className="font-barlow text-[8px] sm:text-xs text-slate-500 leading-tight">
                      Av. São Afonso Maria, 381, Bairro da Pernambucana
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY_UNIDADES_ASSETS.sjcMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-3.5 bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
                >
                  ABRIR NO MAPA
                </a>
              </div>

            </div>
          </motion.div>

          {/* UNIDADE 2: Santa Isabel (Dark Blue Block) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="bg-[#192F4D] text-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-barlow font-bold text-white text-xl sm:text-2xl md:text-3xl text-center mb-8">
              Usina de Asfalto — Santa Isabel
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: 3 Paragraphs */}
              <div className="lg:col-span-6 space-y-4 text-white text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal">
                <p>
                  Instalada na própria pedreira, a unidade integra a produção de concreto asfáltico ao fornecimento de agregados minerais.
                </p>
                <p>
                  Essa estrutura gera ganhos de eficiência logística, produtividade e controle operacional.
                </p>
                <p>
                  Equipada com uma Ammann SolidBatch 180, conta com uma estrutura moderna, automatizada e de alta capacidade produtiva, posicionando-se entre as operações mais avançadas de sua categoria no Brasil.
                </p>
              </div>

              {/* Right Column: Image + Button */}
              <div className="lg:col-span-6 flex flex-col items-center space-y-5">
                <div 
                  onClick={() => setModalImage({
                    src: COMPANY_UNIDADES_ASSETS.santaIsabelImage,
                    title: 'Santa Isabel | SP',
                    subtitle: 'Usina de Asfalto — Pedreira PedraForte'
                  })}
                  className="relative w-full overflow-hidden shadow-md group cursor-pointer"
                >
                  <img
                    src={COMPANY_UNIDADES_ASSETS.santaIsabelImage}
                    alt="Usina de Asfalto - Santa Isabel"
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-0 left-0 bg-[#102138]/90 text-white px-2.5 sm:px-4 py-1 sm:py-2 flex items-center border-l-2 sm:border-l-4 border-[#E3371E] z-10">
                    <span className="font-condensed font-bold text-[10px] sm:text-sm uppercase tracking-wider">
                      LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
                    </span>
                  </div>

                  {/* Click to Zoom indicator */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="bg-[#192F4D]/90 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-condensed font-bold uppercase tracking-wider opacity-90 group-hover:opacity-100 shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E3371E]" />
                      <span>Clique para ampliar</span>
                    </div>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-0 left-0 bg-white text-[#192F4D] p-1.5 sm:p-4 border-l-2 sm:border-l-4 border-[#E3371E] max-w-[85%] shadow-lg z-10">
                    <div className="flex items-center gap-1 sm:gap-2 font-barlow font-black text-[10px] sm:text-base text-[#192F4D] uppercase tracking-tight leading-tight">
                      <span>SANTA ISABEL | SP</span>
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#192F4D] shrink-0 fill-[#192F4D]/10" />
                    </div>
                    <p className="font-barlow font-bold text-[9px] sm:text-sm text-[#192F4D] mt-0.5 leading-tight">
                      Pedreira PedraForte
                    </p>
                    <p className="font-barlow text-[8px] sm:text-xs text-slate-500 leading-tight">
                      Rod. Pres. Dutra, KM 194,5
                    </p>
                  </div>
                </div>

                <a
                  href={COMPANY_UNIDADES_ASSETS.santaIsabelMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-3.5 bg-[#E3371E] hover:bg-[#FF6535] text-white font-barlow font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
                >
                  ABRIR NO MAPA
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Modal / Pop-up de Ampliação da Imagem das Unidades */}
      <AnimatePresence>
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-[#192F4D] text-white p-4 sm:p-6 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <h3 className="font-barlow font-black text-lg sm:text-2xl uppercase tracking-tight text-white flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-[#E3371E]" />
                    {modalImage.title}
                  </h3>
                  <p className="font-condensed text-xs sm:text-sm text-slate-300 mt-0.5">{modalImage.subtitle}</p>
                </div>
                <button
                  onClick={() => setModalImage(null)}
                  className="p-2 bg-white/10 hover:bg-[#E3371E] text-white transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Preview */}
              <div className="relative w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/40">
                <img
                  src={modalImage.src}
                  alt={modalImage.title}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto shadow-lg"
                />
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setModalImage(null)}
                  className="px-6 py-2 bg-[#E3371E] hover:bg-[#102138] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  FECHAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DOBRA 05: CAPACIDADE OPERACIONAL (CARROSSEL) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#EEEEEE] text-[#192F4D] border-b border-slate-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
            <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
              CAPACIDADE OPERACIONAL
            </h2>
          </motion.div>

          {/* Copy Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-[850px] mb-10"
          >
            <p>
              A operação reúne produção própria de concreto asfáltico, agregados minerais integrados, unidades estratégicas, controle de qualidade, frota própria e suporte técnico/comercial.
            </p>
            <p>
              Na prática, essa estrutura apoia obras que precisam de materiais adequados à aplicação e planejamento logístico.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative w-full overflow-hidden shadow-xl bg-slate-900 group"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[580px] w-full">
              <img
                src={COMPANY_CAROUSEL_IMAGES[currentSlide]}
                alt={`Capacidade Operacional - Imagem ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Previous / Next Buttons (compact on mobile) */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#192F4D]/85 hover:bg-[#192F4D] text-white p-1.5 sm:p-3 transition-colors cursor-pointer shadow-lg z-10"
                aria-label="Imagem Anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#192F4D]/85 hover:bg-[#192F4D] text-white p-1.5 sm:p-3 transition-colors cursor-pointer shadow-lg z-10"
                aria-label="Próxima Imagem"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              {/* Dots / Indicators (compact on mobile) */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-[#192F4D]/80 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full z-10">
                {COMPANY_CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-5 sm:w-8 bg-[#E3371E]' : 'w-1.5 sm:w-2.5 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* DOBRA 06: CAPACIDADE OPERACIONAL EM NÚMEROS */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden border-b border-slate-700">
        {/* Background Image with Dark Blue Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${COMPANY_HERO_ASSETS.dobra6Bg})` }}
        />
        <div className="absolute inset-0 bg-[#102138]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102138] via-[#102138]/80 to-[#102138]/60" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-10 lg:mb-12"
          >
            <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
            <h2 className="font-barlow font-bold text-white text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
              CAPACIDADE OPERACIONAL EM NÚMEROS
            </h2>
          </motion.div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="bg-white p-6 sm:p-8 border-t-4 border-t-[#E3371E] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center h-full group"
            >
              <div>
                <h3 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-3xl leading-tight mb-3 group-hover:text-[#E3371E] transition-colors">
                  3 unidades produtivas
                </h3>
                <div className="w-10 h-0.5 bg-[#E3371E] mx-auto mb-4" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  Estrutura integrada em Santa Isabel e São José dos Campos.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="bg-white p-6 sm:p-8 border-t-4 border-t-[#E3371E] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center h-full group"
            >
              <div>
                <h3 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-3xl leading-tight mb-3 group-hover:text-[#E3371E] transition-colors">
                  +2,5 milhões de toneladas fornecidas
                </h3>
                <div className="w-10 h-0.5 bg-[#E3371E] mx-auto mb-4" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  Agregados e concreto asfáltico entregues a obras da região.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="bg-white p-6 sm:p-8 border-t-4 border-t-[#E3371E] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center h-full group"
            >
              <div>
                <h3 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-3xl leading-tight mb-3 group-hover:text-[#E3371E] transition-colors">
                  +500 clientes atendidos
                </h3>
                <div className="w-10 h-0.5 bg-[#E3371E] mx-auto mb-4" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  Construtoras, prefeituras e indústrias atendidas pelo grupo.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
              className="bg-white p-6 sm:p-8 border-t-4 border-t-[#E3371E] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center h-full group"
            >
              <div>
                <h3 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-3xl leading-tight mb-3 group-hover:text-[#E3371E] transition-colors">
                  2 marcas integradas
                </h3>
                <div className="w-10 h-0.5 bg-[#E3371E] mx-auto mb-4" />
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  Asforte e Pedreira PedraForte em uma cadeia produtiva conectada para construção, infraestrutura e pavimentação.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* DOBRA 07: CONTROLE TECNOLÓGICO E SUPORTE TÉCNICO */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
            <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
              CONTROLE TECNOLÓGICO E SUPORTE TÉCNICO
            </h2>
          </motion.div>

          {/* Top Two Paragraphs Side-by-Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-10 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal"
          >
            <p>
              O laboratório interno realiza ensaios, análises e validação dos materiais, contribuindo para o controle de qualidade, validação técnica e regularidade no fornecimento.
            </p>
            <p>
              O suporte técnico e comercial orienta a escolha dos materiais conforme a necessidade técnica do projeto, considerando requisitos, disponibilidade, logística e planejamento do fornecimento.
            </p>
          </motion.div>

          {/* Two Images Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="overflow-hidden shadow-lg border border-slate-200 group"
            >
              <img
                src={COMPANY_CONTROLE_ASSETS.image1}
                alt="Laboratório Interno e Controle Tecnológico"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="overflow-hidden shadow-lg border border-slate-200 group"
            >
              <img
                src={COMPANY_CONTROLE_ASSETS.image2}
                alt="Suporte Técnico e Comercial Asforte"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* DOBRA 08: FROTA PRÓPRIA E LOGÍSTICA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#EEEEEE] text-[#192F4D] border-b border-slate-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
            <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
              FROTA PRÓPRIA E LOGÍSTICA
            </h2>
          </motion.div>

          {/* Copy Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-[850px] mb-12"
          >
            <p>
              A estrutura conta com frota própria para apoiar a movimentação de materiais entre produção, carregamento e entrega.
            </p>
            <p>
              Esse controle contribui para uma programação mais eficiente, maior previsibilidade operacional, regularidade de fornecimento e suporte às demandas da construção, infraestrutura e pavimentação.
            </p>
          </motion.div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-300 bg-white group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={COMPANY_FROTA_ASSETS.card1}
                  alt="Controle Operacional - Frota Própria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#192F4D] text-white p-6 sm:p-7 flex-1 flex flex-col justify-between border-t-2 border-[#E3371E]">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-barlow font-bold text-white text-lg sm:text-xl uppercase tracking-tight">
                      CONTROLE OPERACIONAL
                    </h3>
                    <div className="p-2 border border-[#FF6535]/30 rounded bg-[#FF6535]/10 text-[#FF6535] shrink-0">
                      <Contact className="w-6 h-6" />
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-slate-200 text-xs sm:text-sm font-normal">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Frota própria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Programação logística</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Acompanhamento das entregas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-300 bg-white group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={COMPANY_FROTA_ASSETS.card2}
                  alt="Disponibilidade - Frota Própria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#192F4D] text-white p-6 sm:p-7 flex-1 flex flex-col justify-between border-t-2 border-[#E3371E]">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-barlow font-bold text-white text-lg sm:text-xl uppercase tracking-tight">
                      DISPONIBILIDADE
                    </h3>
                    <div className="p-2 border border-[#FF6535]/30 rounded bg-[#FF6535]/10 text-[#FF6535] shrink-0">
                      <Wrench className="w-6 h-6" />
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-slate-200 text-xs sm:text-sm font-normal">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Suporte às operações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Flexibilidade de atendimento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Atendimento regional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-300 bg-white group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={COMPANY_FROTA_ASSETS.card3}
                  alt="Eficiência Logística - Frota Própria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#192F4D] text-white p-6 sm:p-7 flex-1 flex flex-col justify-between border-t-2 border-[#E3371E]">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <h3 className="font-barlow font-bold text-white text-lg sm:text-xl uppercase tracking-tight">
                      EFICIÊNCIA LOGÍSTICA
                    </h3>
                    <div className="p-2 border border-[#FF6535]/30 rounded bg-[#FF6535]/10 text-[#FF6535] shrink-0">
                      <Truck className="w-6 h-6" />
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-slate-200 text-xs sm:text-sm font-normal">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Menor dependência de terceiros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Maior previsibilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF6535] shrink-0 stroke-[3]" />
                      <span>Regularidade de fornecimento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* DOBRA 09: LICENCIAMENTO E COMPROMISSO OPERACIONAL */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Text Area (7 Columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#E3371E] shrink-0" />
                <h2 className="font-barlow font-bold text-[#192F4D] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight">
                  LICENCIAMENTO E COMPROMISSO OPERACIONAL
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                <p>
                  As operações contam com Licenças de Operação CETESB vigentes, reforçando o compromisso com a regularidade das atividades e a confiança dos clientes.
                </p>
                <p>
                  Esse ponto deve ser apresentado como argumento de responsabilidade, controle e organização operacional.
                </p>
              </div>
            </motion.div>

            {/* Image (5 Columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="overflow-hidden shadow-lg border border-slate-200 group">
                <img
                  src={COMPANY_LICENSES_ASSETS.mainImage}
                  alt="Licenciamento e Compromisso Operacional"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[380px] object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </motion.div>

          </div>

          {/* Button VER LICENÇAS */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 sm:mt-12 flex justify-center"
          >
            <button
              onClick={() => {
                setLicenseSlide(0);
                setIsLicenseModalOpen(true);
              }}
              className="bg-[#E3371E] hover:bg-[#c62810] text-white font-barlow font-bold text-sm sm:text-base uppercase tracking-wider px-8 sm:px-12 py-3.5 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              VER LICENÇAS
            </button>
          </motion.div>

        </div>
      </section>

      {/* MODAL / CARROSSEL LICENÇAS */}
      {isLicenseModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsLicenseModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#192F4D] border border-white/20 shadow-2xl overflow-hidden p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLicenseModalOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors z-20 cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="mb-4 text-center pr-8">
              <h3 className="font-barlow font-bold text-white text-xl sm:text-2xl uppercase tracking-tight">
                LICENÇAS DE OPERAÇÃO CETESB
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Documento {licenseSlide + 1} de {COMPANY_LICENSES_ASSETS.licenses.length}
              </p>
            </div>

            {/* License Image View */}
            <div className="relative w-full bg-slate-950 rounded flex items-center justify-center min-h-[300px] sm:min-h-[480px] max-h-[72vh] overflow-hidden p-2 sm:p-4">
              <img
                src={COMPANY_LICENSES_ASSETS.licenses[licenseSlide]}
                alt={`Licença CETESB ${licenseSlide + 1}`}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto transition-all duration-300 shadow-md"
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={() => setLicenseSlide((prev) => (prev - 1 + COMPANY_LICENSES_ASSETS.licenses.length) % COMPANY_LICENSES_ASSETS.licenses.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#192F4D]/90 hover:bg-[#E3371E] text-white p-2.5 sm:p-3 transition-colors rounded-full shadow-lg z-10 cursor-pointer"
                aria-label="Licença Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setLicenseSlide((prev) => (prev + 1) % COMPANY_LICENSES_ASSETS.licenses.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#192F4D]/90 hover:bg-[#E3371E] text-white p-2.5 sm:p-3 transition-colors rounded-full shadow-lg z-10 cursor-pointer"
                aria-label="Próxima Licença"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
              {COMPANY_LICENSES_ASSETS.licenses.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLicenseSlide(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === licenseSlide ? 'w-8 bg-[#E3371E]' : 'w-2.5 bg-white/40 hover:bg-white'
                  }`}
                  aria-label={`Ir para licença ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      )}

      {/* DOBRA CTA FINAL: PRECISA DE CONCRETO ASFÁLTICO OU AGREGADOS PARA SUA OBRA? */}
      <FinalCTASection onOpenQuoteModal={onOpenQuoteModal} />

    </div>
  );
};

