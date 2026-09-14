import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Search,
  ArrowRight,
  MessageCircle,
  Layers,
  ShieldCheck,
  Maximize2,
  Minimize2,
  SlidersHorizontal,
  X,
  FileCheck2,
  Hammer
} from 'lucide-react';
import { HERO_ASSETS, PRODUCT_ASSETS, CONTACT_INFO } from '../constants/assets';
import { PRODUCT_FAMILIES, ProductFamily, ProductItemData } from '../data/productsData';

interface ProductsPageProps {
  onOpenQuoteModal: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato', targetId?: string) => void;
  onSelectProductForQuote?: (productName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuoteModal,
  onNavigateHome,
  onNavigate,
  onSelectProductForQuote,
}) => {
  // Estado dos Accordions expandidos (guarda IDs das famílias abertas)
  // Inicia com todos os acordeons fechados
  const [expandedFamilies, setExpandedFamilies] = useState<Record<string, boolean>>({});

  // Estado para busca e filtro
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');

  // Tags para filtro rápido no topo do catálogo
  const filterTags = [
    { id: 'todos', label: 'Todas as famílias (16)' },
    { id: 'der', label: 'Norma DER/SP' },
    { id: 'pmsp', label: 'PMSP (Urbano)' },
    { id: 'dnit', label: 'DNIT' },
    { id: 'modificado', label: 'Polímero & Borracha' },
    { id: 'especiais', label: 'Especiais (SMA / Drenante / Alto Módulo)' },
    { id: 'reciclado', label: 'Sustentáveis & RAP' },
  ];

  // Alternar abertura de uma família
  const toggleFamily = (familyId: string) => {
    setExpandedFamilies((prev) => ({
      ...prev,
      [familyId]: !prev[familyId],
    }));
  };

  // Expandir todas
  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    PRODUCT_FAMILIES.forEach((fam) => {
      allExpanded[fam.id] = true;
    });
    setExpandedFamilies(allExpanded);
  };

  // Recolher todas
  const collapseAll = () => {
    setExpandedFamilies({});
  };

  // Filtragem inteligente baseada na busca e tag
  const filteredFamilies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCT_FAMILIES.filter((family) => {
      // Filtro de Tag
      if (selectedTag === 'der') {
        const isDer =
          family.id.includes('der') ||
          family.name.toLowerCase().includes('der') ||
          family.items.some((i) => i.normTag?.toLowerCase().includes('der'));
        if (!isDer) return false;
      } else if (selectedTag === 'pmsp') {
        const isPmsp =
          family.id.includes('pmsp') ||
          family.name.toLowerCase().includes('pmsp') ||
          family.items.some((i) => i.normTag?.toLowerCase().includes('pmsp'));
        if (!isPmsp) return false;
      } else if (selectedTag === 'dnit') {
        const isDnit =
          family.id.includes('dnit') ||
          family.name.toLowerCase().includes('dnit') ||
          family.items.some((i) => i.normTag?.toLowerCase().includes('dnit'));
        if (!isDnit) return false;
      } else if (selectedTag === 'modificado') {
        const isMod =
          family.id.includes('modificado') ||
          family.id.includes('borracha') ||
          family.items.some(
            (i) =>
              i.name.toLowerCase().includes('polímero') ||
              i.name.toLowerCase().includes('borracha') ||
              i.technicalDescription.toLowerCase().includes('polímero') ||
              i.technicalDescription.toLowerCase().includes('borracha')
          );
        if (!isMod) return false;
      } else if (selectedTag === 'especiais') {
        const isSpecial =
          family.id === 'sma-stone-matrix-asphalt' ||
          family.id === 'mistura-drenante' ||
          family.id === 'alto-modulo' ||
          family.id === 'gap-graded';
        if (!isSpecial) return false;
      } else if (selectedTag === 'reciclado') {
        const isRec =
          family.id === 'reciclado' ||
          family.id === 'mistura-morna' ||
          family.items.some((i) => i.name.toLowerCase().includes('rap'));
        if (!isRec) return false;
      }

      // Se não houver busca textual, passa direto
      if (!query) return true;

      // Busca no nome da família ou descrição
      if (
        family.name.toLowerCase().includes(query) ||
        family.description.toLowerCase().includes(query) ||
        family.badge.toLowerCase().includes(query)
      ) {
        return true;
      }

      // Busca nos itens da família
      return family.items.some(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.technicalDescription.toLowerCase().includes(query) ||
          item.application.toLowerCase().includes(query) ||
          (item.normTag && item.normTag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedTag]);

  // Contagem total de produtos cadastrados
  const totalProductsCount = useMemo(() => {
    return PRODUCT_FAMILIES.reduce((acc, fam) => acc + fam.items.length, 0);
  }, []);

  // Handler para solicitar orçamento de um produto específico
  const handleQuoteForProduct = (productName: string) => {
    if (onSelectProductForQuote) {
      onSelectProductForQuote(productName);
    } else if (onNavigate) {
      onNavigate('contato', 'formulario-orcamento');
    } else {
      onOpenQuoteModal();
    }
  };

  // Handler para scroll suave até os accordions
  const handleScrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('familias-de-produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* ========================================================================= */}
      {/* SEÇÃO 1: HERO / ABERTURA COMERCIAL                                       */}
      {/* ========================================================================= */}
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
              className="relative z-10 max-w-[620px]"
            >
              {/* Linha Vermelha de Acento Asforte */}
              <div className="w-12 h-1 bg-[#E3371E] mb-6" />

              {/* Título Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] uppercase leading-[1.1] tracking-tight mb-6"
              >
                Concreto Asfáltico para diferentes aplicações
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 max-w-[540px]"
              >
                A Asforte fornece misturas asfálticas para obras de pavimentação, recapeamento,
                conservação viária e infraestrutura, com diferentes soluções conforme
                especificação técnica do projeto.
              </motion.p>

              {/* Botões de Ação */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Botão CTA Principal: Primary CTA do Projeto */}
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('contato', 'formulario-orcamento');
                    } else {
                      onOpenQuoteModal();
                    }
                  }}
                  className="bg-[#E3371E] hover:bg-[#103778] text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-4 rounded-none border-none transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2.5"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Botão Secundário: Rolar até as Famílias */}
                <a
                  href="#familias-de-produtos"
                  onClick={handleScrollToCatalog}
                  className="bg-transparent hover:bg-white/10 text-white font-condensed font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 sm:px-9 py-4 rounded-none border border-white/80 transition-all duration-200 cursor-pointer hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Ver catálogo de famílias ({totalProductsCount} traços)</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Usina Asforte Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative min-h-[360px] sm:min-h-[480px] lg:min-h-screen overflow-hidden group bg-slate-900"
          >
            <img
              src={PRODUCT_ASSETS.heroImage}
              alt="Usina de Concreto Asfáltico Asforte em operação"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
            {/* Gradiente sutil para integração visual */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#192F4D]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 2: BLOCOS DE PRODUTOS POR FAMÍLIA (ACCORDION)                       */}
      {/* ========================================================================= */}
      <section
        id="familias-de-produtos"
        className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-[#1D2A3A] border-b border-slate-200"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da Seção */}
          <div className="mb-10 lg:mb-14">
            <div className="flex items-stretch gap-4 mb-3">
              <div className="w-1.5 bg-[#E3371E] shrink-0 min-h-[44px]" />
              <div>
                <h2 className="font-barlow font-black text-[#192F4D] text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] uppercase leading-tight tracking-tight">
                  Catálogo Técnico de Misturas Asfálticas
                </h2>
              </div>
            </div>
            <p className="font-barlow text-slate-600 text-base sm:text-lg font-normal leading-relaxed ml-0 sm:ml-5.5 max-w-3xl">
              Navegue pelas 16 famílias de misturas asfálticas fornecidas pela Asforte. Cada categoria
              pode ser expandida para visualização de especificações normativas, descrições técnicas
              e indicações de aplicação.
            </p>
          </div>

          {/* Barra de Busca, Filtros e Ações Rápidas de UX */}
          <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-6 mb-8 lg:mb-10">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Campo de Busca */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por traço, norma (DER, PMSP, DNIT), polímero, aplicação..."
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    title="Limpar busca"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Botões de Ação: Expandir / Recolher Tudo */}
              <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-auto">
                <button
                  type="button"
                  onClick={expandAll}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#192F4D] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#E3371E]" />
                  <span>Expandir todos</span>
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#192F4D] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Minimize2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Recolher todos</span>
                </button>
              </div>
            </div>

            {/* Chips de Categorias / Normas */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filtros:
              </span>
              {filterTags.map((tag) => {
                const isActive = selectedTag === tag.id;
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => setSelectedTag(tag.id)}
                    className={`px-3 py-1.5 rounded-none text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#192F4D] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#192F4D]'
                    }`}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback caso a busca não retorne itens */}
          {filteredFamilies.length === 0 ? (
            <div className="bg-white p-12 border border-slate-200 text-center">
              <p className="font-barlow font-bold text-xl text-[#192F4D] mb-2">
                Nenhum produto encontrado para sua busca
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Tente buscar com outros termos (ex: DER, PMSP, binder, rolamento, polímero, DNIT).
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('todos');
                }}
                className="bg-[#192F4D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#E3371E] transition-colors"
              >
                Limpar filtros e ver catálogo completo
              </button>
            </div>
          ) : (
            /* Lista de Accordions das Famílias */
            <div className="space-y-4">
              {filteredFamilies.map((family) => {
                const isExpanded = !!expandedFamilies[family.id];
                const itemsCount = family.items.length;

                return (
                  <div
                    key={family.id}
                    id={`familia-${family.id}`}
                    className={`bg-white border transition-all duration-200 shadow-sm ${
                      isExpanded
                        ? 'border-l-4 border-l-[#E3371E] border-t-slate-200 border-r-slate-200 border-b-slate-200 ring-1 ring-black/5'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Botão Header do Accordion */}
                    <button
                      type="button"
                      onClick={() => toggleFamily(family.id)}
                      aria-expanded={isExpanded}
                      className="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#192F4D]"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                        {/* Número Sequencial da Família */}
                        <span
                          className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 font-barlow font-bold text-xs sm:text-sm tracking-wider transition-colors ${
                            isExpanded
                              ? 'bg-[#192F4D] text-white'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-[#192F4D] group-hover:text-white'
                          }`}
                        >
                          {String(family.number).padStart(2, '0')}
                        </span>

                        {/* Nome da Família e Badge */}
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <h3
                              className={`font-barlow font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-tight transition-colors ${
                                isExpanded ? 'text-[#192F4D]' : 'text-[#192F4D] group-hover:text-[#E3371E]'
                              }`}
                            >
                              {family.name}
                            </h3>
                            <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider border border-slate-200 shrink-0">
                              {family.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Lado Direito: Contador de Itens e Ícone Chevron */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {itemsCount} {itemsCount === 1 ? 'mistura' : 'misturas'}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-none flex items-center justify-center transition-transform duration-300 ${
                            isExpanded
                              ? 'rotate-180 bg-[#E3371E] text-white'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </button>

                    {/* Conteúdo Expansível do Accordion */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-8 pb-7 pt-2 border-t border-slate-100">
                            {/* Descrição da Família */}
                            <div className="bg-[#F8FAFC] border-l-2 border-[#192F4D] p-4 sm:p-5 mb-6 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                              <p className="font-normal">
                                <strong className="text-[#192F4D] font-bold block uppercase text-xs tracking-wider mb-1">
                                  Visão Geral da Família
                                </strong>
                                {family.description}
                              </p>
                            </div>

                            {/* Lista de Produtos da Família */}
                            <div className="divide-y divide-slate-200">
                              {family.items.map((item, itemIdx) => (
                                <div
                                  key={item.id}
                                  className="py-5 sm:py-6 first:pt-2 last:pb-2 group/item"
                                >
                                  {/* Cabeçalho do Produto */}
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-2.5">
                                      <div className="w-2 h-2 bg-[#E3371E] shrink-0" />
                                      <h4 className="font-barlow font-bold text-lg sm:text-xl text-[#192F4D] uppercase tracking-tight">
                                        {item.name}
                                      </h4>
                                    </div>
                                    {item.normTag && (
                                      <span className="self-start sm:self-auto text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 border border-slate-200">
                                        Ref: {item.normTag}
                                      </span>
                                    )}
                                  </div>

                                  {/* Grid de Informações Técnicas: Descrição Técnica & Aplicação */}
                                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 bg-slate-50/70 p-4 sm:p-5 border border-slate-200/80 mb-4">
                                    {/* Descrição Técnica */}
                                    <div className="lg:col-span-7">
                                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#192F4D] mb-1.5">
                                        <FileCheck2 className="w-3.5 h-3.5 text-[#E3371E]" />
                                        Descrição Técnica
                                      </span>
                                      <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.technicalDescription}
                                      </p>
                                    </div>

                                    {/* Aplicação */}
                                    <div className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-6">
                                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#192F4D] mb-1.5">
                                        <Hammer className="w-3.5 h-3.5 text-[#192F4D]" />
                                        Aplicação Recomendada
                                      </span>
                                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                                        {item.application}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Botão/Link Sutil para Solicitar Orçamento deste Produto */}
                                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                                    <div className="text-xs text-slate-500 italic">
                                      Especificação sujeita a validação de traço e projeto executivo.
                                    </div>

                                    <div className="flex items-center gap-3">
                                      {/* WhatsApp Direto do Produto */}
                                      <a
                                        href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                                          `Olá! Gostaria de solicitar cotação para o produto: ${item.name} (${family.name}).`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#E3371E] transition-colors py-1.5 px-2.5"
                                        title="Cotar via WhatsApp"
                                      >
                                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        <span className="hidden sm:inline">WhatsApp</span>
                                      </a>

                                      {/* Botão Primário Sutil de Solicitação no Formulário */}
                                      <button
                                        type="button"
                                        onClick={() => handleQuoteForProduct(item.name)}
                                        className="inline-flex items-center gap-2 bg-[#192F4D] hover:bg-[#E3371E] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-none transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
                                      >
                                        <span>Solicitar orçamento deste produto</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SEÇÃO 3: BLOCO CTA FINAL DA PÁGINA PRODUTOS (PADRÃO INSTITUCIONAL)        */}
      {/* ========================================================================= */}
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
                Precisa de concreto asfáltico para sua obra?
              </h2>

              <p className="text-white/95 text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-center">
                Envie as informações do seu projeto para avaliação comercial. Nossa equipe orienta a
                escolha dos materiais conforme a necessidade técnica, volume e prazo.
              </p>
            </div>

            {/* Botões CTAs Centralizados */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                  'Olá! Gostaria de solicitar um orçamento de concreto asfáltico para meu projeto com a Asforte.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 sm:py-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                SOLICITAR ORÇAMENTO PELO WHATSAPP
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contato', 'formulario-orcamento');
                  } else if (onNavigateHome) {
                    onNavigateHome();
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
