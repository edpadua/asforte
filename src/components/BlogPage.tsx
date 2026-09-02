import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_PAGE_ASSETS, HERO_ASSETS } from '../constants/assets';

interface BlogPageProps {
  onOpenQuoteModal?: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato' | 'blog', targetId?: string) => void;
  onSelectPost?: (post: BlogPost) => void;
}

export const BLOG_CATEGORIES = [
  'Todas',
  'Concreto asfáltico',
  'Pavimentação e recapeamento',
  'Conservação viária',
  'Agregados minerais',
  'Logística e fornecimento',
  'Infraestrutura',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  id: string;
  title: string;
  category: Exclude<BlogCategory, 'Todas'>;
  date: string;
  image: string;
  slug?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'O que é concreto asfáltico e onde é utilizado?',
    category: 'Concreto asfáltico',
    date: '10 Jun 2025',
    image: '/imports/pavimentacao-2.jpeg',
  },
  {
    id: 'post-2',
    title: 'Como solicitar orçamento de concreto asfáltico?',
    category: 'Concreto asfáltico',
    date: '17 Jun 2025',
    image: '/imports/ASFORTE-usina1.webp',
  },
  {
    id: 'post-3',
    title: 'Concreto asfáltico para pavimentação: quais informações enviar ao fornecedor?',
    category: 'Pavimentação e recapeamento',
    date: '24 Jun 2025',
    image: '/imports/pavimentacao.jpg',
  },
  {
    id: 'post-4',
    title: 'Recapeamento e conservação viária: quando solicitar concreto asfáltico?',
    category: 'Conservação viária',
    date: '01 Jul 2025',
    image: '/imports/recapeamento.jpg',
  },
  {
    id: 'post-5',
    title: 'Como a integração entre concreto asfáltico e agregados minerais apoia o fornecimento?',
    category: 'Agregados minerais',
    date: '08 Jul 2025',
    image: '/imports/ASFORTE-drone.webp',
  },
  {
    id: 'post-6',
    title: 'Por que o planejamento logístico é importante no fornecimento de materiais para obra?',
    category: 'Logística e fornecimento',
    date: '15 Jul 2025',
    image: '/imports/patios-logisticos-industriais.jpg',
  },
];

export const BlogPage: React.FC<BlogPageProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
  onNavigate,
  onSelectPost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('Todas');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const filteredPosts =
    selectedCategory === 'Todas'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const currentSafePage = Math.min(currentPage, totalPages);
  
  const indexOfLastPost = currentSafePage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const gridElem = document.getElementById('grid-posts');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* DOBRA 01: HERO DA PÁGINA BLOG */}
      <section
        id="hero-blog"
        className="relative w-full min-h-[520px] lg:min-h-[600px] lg:max-h-[800px] lg:h-screen bg-[#192F4D] text-white overflow-hidden flex flex-col justify-center"
      >
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[520px] lg:min-h-[600px]">
          
          {/* Left Column - Dark Blue Blueprint Vector Map Background */}
          <div className="lg:col-span-6 relative bg-[#192F4D] flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-18 min-h-[440px] lg:min-h-full pt-28 sm:pt-32 lg:pt-28 pb-10 sm:pb-12">
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
              {/* Institutional Accent Tag / Line */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-12 h-1 bg-[#E3371E] mb-5"
              />

              {/* H1 Heading - Barlow Extrabold Uppercase */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] uppercase leading-[1.1] tracking-tight mb-6"
              >
                Blog da Asforte
              </motion.h1>

              {/* Subtitle / Texto de Abertura */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-[520px]"
              >
                Conteúdos sobre concreto asfáltico, pavimentação, recapeamento, conservação viária, agregados minerais, logística e infraestrutura.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Imagem Representativa */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] lg:min-h-screen overflow-hidden group bg-slate-900"
          >
            <img
              src={BLOG_PAGE_ASSETS.heroImage}
              alt="Aplicação e pavimentação asfáltica Asforte"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>
      </section>

      {/* DOBRA 02: FILTRO DE CATEGORIAS */}
      <section id="filtro-categorias" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin scrollbar-thumb-slate-300 no-scrollbar flex-nowrap sm:flex-wrap">
            {BLOG_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  id={`categoria-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleCategoryChange(category)}
                  className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 font-condensed font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#E3371E] text-white shadow-md shadow-[#E3371E]/20 scale-102'
                      : 'bg-white text-[#192F4D] border border-slate-300 hover:border-[#192F4D] hover:bg-slate-100 hover:text-[#192F4D]'
                  }`}
                  aria-pressed={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 03: GRID DE POSTS E PAGINAÇÃO */}
      <section id="grid-posts" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    id={`post-card-${post.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => {
                      if (onSelectPost) {
                        onSelectPost(post);
                      }
                    }}
                    className="bg-white border border-slate-200 hover:border-[#192F4D]/40 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    {/* Imagem de Capa */}
                    <div>
                      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Conteúdo do Card */}
                      <div className="p-6">
                        {/* Pill com a Categoria */}
                        <div className="inline-block px-3 py-1 bg-slate-100 text-[#192F4D] text-[11px] font-condensed font-bold uppercase tracking-wider mb-3.5 border border-slate-200">
                          {post.category}
                        </div>

                        {/* Título do Post */}
                        <h3 className="font-barlow font-bold text-lg sm:text-xl text-[#192F4D] leading-snug group-hover:text-[#E3371E] transition-colors mb-3">
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    {/* Rodapé do Card: Data & Link "Leia mais" */}
                    <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-4 border-t border-slate-100 mt-2">
                      {/* Data de Publicação */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{post.date}</span>
                      </div>

                      {/* Link "Leia mais" */}
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-barlow font-bold text-[#E3371E] group-hover:text-[#192F4D] uppercase tracking-wider transition-colors">
                        <span>Leia mais</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* COMPONENTE DE PAGINAÇÃO */}
              <div id="paginacao-posts" className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center sm:justify-between gap-4">
                {/* Informações de Contagem */}
                <div className="text-xs sm:text-sm text-slate-500 font-medium order-2 sm:order-1">
                  Mostrando <span className="font-bold text-[#192F4D]">{indexOfFirstPost + 1}</span> a{' '}
                  <span className="font-bold text-[#192F4D]">{Math.min(indexOfLastPost, filteredPosts.length)}</span> de{' '}
                  <span className="font-bold text-[#192F4D]">{filteredPosts.length}</span> artigos
                </div>

                {/* Controles de Navegação */}
                <nav aria-label="Navegação de páginas do blog" className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2">
                  {/* Botão Anterior */}
                  <button
                    type="button"
                    id="btn-pagina-anterior"
                    onClick={() => handlePageChange(currentSafePage - 1)}
                    disabled={currentSafePage <= 1}
                    className={`inline-flex items-center gap-1 px-3 sm:px-4 py-2 border text-xs sm:text-sm font-barlow font-bold uppercase tracking-wider transition-colors ${
                      currentSafePage <= 1
                        ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                        : 'border-slate-300 text-[#192F4D] bg-white hover:bg-slate-100 hover:border-[#192F4D] cursor-pointer'
                    }`}
                    aria-label="Página anterior"
                  >
                    <ChevronLeft className="w-4 h-4 shrink-0" />
                    <span className="hidden xs:inline">Anterior</span>
                  </button>

                  {/* Numeração de Páginas */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isCurrent = pageNum === currentSafePage;
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          id={`btn-pagina-${pageNum}`}
                          onClick={() => handlePageChange(pageNum)}
                          aria-current={isCurrent ? 'page' : undefined}
                          className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-barlow font-bold transition-all ${
                            isCurrent
                              ? 'bg-[#E3371E] text-white shadow-sm shadow-[#E3371E]/20'
                              : 'bg-white text-[#192F4D] border border-slate-300 hover:border-[#192F4D] hover:bg-slate-100 cursor-pointer'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Botão Próxima */}
                  <button
                    type="button"
                    id="btn-pagina-proxima"
                    onClick={() => handlePageChange(currentSafePage + 1)}
                    disabled={currentSafePage >= totalPages}
                    className={`inline-flex items-center gap-1 px-3 sm:px-4 py-2 border text-xs sm:text-sm font-barlow font-bold uppercase tracking-wider transition-colors ${
                      currentSafePage >= totalPages
                        ? 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed'
                        : 'border-slate-300 text-[#192F4D] bg-white hover:bg-slate-100 hover:border-[#192F4D] cursor-pointer'
                    }`}
                    aria-label="Próxima página"
                  >
                    <span className="hidden xs:inline">Próxima</span>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </button>
                </nav>
              </div>
            </>
          ) : (
            /* Estado quando não há posts na categoria selecionada */
            <div className="py-16 text-center max-w-md mx-auto">
              <p className="text-slate-500 text-base mb-4 font-normal">
                Nenhum artigo encontrado para a categoria <span className="font-bold text-[#192F4D]">"{selectedCategory}"</span> no momento.
              </p>
              <button
                type="button"
                id="btn-limpar-filtro"
                onClick={() => handleCategoryChange('Todas')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#192F4D] hover:bg-[#E3371E] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Ver todos os artigos
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
