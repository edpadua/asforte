import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { BlogPost, BLOG_POSTS } from './BlogPage';

interface BlogPostPageProps {
  post?: BlogPost;
  onNavigateHome?: () => void;
  onNavigateBlog?: () => void;
  onSelectPost?: (postId: string) => void;
  onOpenQuoteModal?: () => void;
  onNavigate?: (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato' | 'blog', targetId?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post = BLOG_POSTS[0],
  onNavigateHome,
  onNavigateBlog,
  onSelectPost,
  onOpenQuoteModal,
  onNavigate,
}) => {
  // Posts relacionados (excluindo o post atual, pegando os 3 primeiros restantes)
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const handleWhatsAppQuote = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.open(
        `https://wa.me/551125003599?text=${encodeURIComponent(
          `Olá, estava lendo o artigo "${post.title}" e gostaria de solicitar um orçamento de concreto asfáltico.`
        )}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <article className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* 1. BREADCRUMB */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <nav aria-label="Navegação Estrutural (Breadcrumb)" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button
            type="button"
            id="breadcrumb-home"
            onClick={onNavigateHome || (() => onNavigate?.('home'))}
            className="hover:text-[#E3371E] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            type="button"
            id="breadcrumb-blog"
            onClick={onNavigateBlog || (() => onNavigate?.('blog'))}
            className="hover:text-[#E3371E] transition-colors cursor-pointer"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#192F4D] font-semibold truncate max-w-[280px] sm:max-w-md" title={post.title}>
            {post.title}
          </span>
        </nav>
      </div>

      {/* 2. CABEÇALHO DO POST: Pill, H1, Data */}
      <header className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Pill de Categoria */}
          <div className="inline-block px-3.5 py-1.5 bg-[#E3371E]/10 text-[#E3371E] border border-[#E3371E]/20 text-xs font-condensed font-bold uppercase tracking-wider mb-4 sm:mb-5">
            {post.category}
          </div>

          {/* H1 com o Título do Post */}
          <h1 className="font-barlow font-bold text-2xl sm:text-4xl md:text-[44px] text-[#192F4D] leading-tight sm:leading-[1.15] mb-5 tracking-tight w-full">
            {post.title}
          </h1>

          {/* Data de Publicação e Metadados */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Publicado em {post.date}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Por Engenharia e Produção Asforte</span>
          </div>
        </motion.div>
      </header>

      {/* 3. IMAGEM DE CAPA (LARGURA TOTAL DA GRADE) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full h-[300px] sm:h-[450px] md:h-[540px] overflow-hidden border border-slate-200 shadow-md bg-slate-900"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/* 4. CORPO DO TEXTO (CONTEÚDO TÉCNICO ESTRUTURADO) */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="w-full max-w-none prose prose-slate text-[#334155] text-base sm:text-lg leading-relaxed space-y-6">
          <p className="text-lg sm:text-xl text-[#192F4D] font-medium leading-relaxed">
            O concreto asfáltico — tecnicamente denominado <strong>Concreto Betuminoso Usinado a Quente (CBUQ)</strong> — é um dos materiais mais utilizados na engenharia de pavimentação mundial, sendo o elemento fundamental para garantir aderência, estanqueidade e alta resistência mecânica às vias terrestres.
          </p>

          <h2 className="font-barlow font-bold text-xl sm:text-2xl text-[#192F4D] pt-4 border-b border-slate-100 pb-2">
            Composição e Processamento Industrial
          </h2>
          <p>
            Produzido em usinas industriais de alta tecnologia sob rigoroso controle térmico e granulométrico, o concreto asfáltico resulta da mistura precisa entre agregados minerais graduados (brita graduada, pedrisco, areia e fíler calcário) e ligante betuminoso (CAP - Cimento Asfáltico de Petróleo), aquecidos e dosados em temperaturas controladas entre 150°C e 175°C.
          </p>
          <p>
            Essa dosagem calibrada assegura a correta viscosidade do ligante para envolver integralmente as partículas de agregados, criando uma matriz coesa que, após a compactação em pista, atinge elevados índices de suporte e baixa permeabilidade.
          </p>

          <h2 className="font-barlow font-bold text-xl sm:text-2xl text-[#192F4D] pt-4 border-b border-slate-100 pb-2">
            Principais Aplicações na Infraestrutura
          </h2>
          <p>
            A versatilidade e a resposta elástica do CBUQ tornam sua aplicação indispensável em diversos setores da construção pesada e infraestrutura:
          </p>
          
          <ul className="space-y-2.5 my-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E3371E] shrink-0 mt-0.5" />
              <span><strong>Rodovias e Concessões:</strong> Faixas de tráfego intenso com exigência de longevidade, frenagem segura e drenabilidade superficial.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E3371E] shrink-0 mt-0.5" />
              <span><strong>Vias Urbanas e Avenidas:</strong> Pavimentação nova e programas municipais de recapeamento contínuo.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E3371E] shrink-0 mt-0.5" />
              <span><strong>Pátios Logísticos e Industriais:</strong> Áreas de manobra de carretas e empilhadeiras sujeitas a elevadas cargas concentradas estáticas e dinâmicas.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E3371E] shrink-0 mt-0.5" />
              <span><strong>Estacionamentos e Condomínios:</strong> Soluções com acabamento uniforme, alta durabilidade e baixo custo de manutenção periódica.</span>
            </li>
          </ul>

          <h2 className="font-barlow font-bold text-xl sm:text-2xl text-[#192F4D] pt-4 border-b border-slate-100 pb-2">
            Controle de Qualidade e Fornecimento Contínuo
          </h2>
          <p>
            O sucesso da pavimentação depende diretamente da constância volumétrica da massa asfáltica e do cumprimento estrito da faixa granulométrica projetada. Na Asforte, cada lote produzido na Usina Ammann 180 passa por ensaios laboratoriais contínuos de teor de betume, densidade Marshall e estabilidade mecânica, assegurando fornecimento estável e pontual com frota técnica dedicada.
          </p>
        </div>
      </main>

      {/* 5. CTA AO FINAL DO POST */}
      <section id="cta-post" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-[#192F4D] text-white p-8 sm:p-10 md:p-12 border-t-4 border-[#E3371E] shadow-xl relative overflow-hidden">
          {/* Textura geométrica sutil no fundo */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <span className="text-[#E3371E] font-condensed font-bold text-xs uppercase tracking-widest block mb-2">
                Atendimento Técnico Especializado
              </span>
              <h3 className="font-barlow font-bold text-2xl sm:text-3xl text-white leading-tight mb-2">
                Precisa de concreto asfáltico? Solicite orçamento
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Fornecimento direto de usina com capacidade de 180 t/h e suporte logístico para obras de qualquer porte.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                id="btn-orcamento-whatsapp-post"
                onClick={handleWhatsAppQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-[#E3371E] hover:bg-[#c92f1a] text-white font-barlow font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#E3371E]/30 cursor-pointer"
              >
                <span>Solicitar orçamento pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO "OUTROS CONTEÚDOS" (POSTS RELACIONADOS) */}
      <section id="outros-conteudos" className="pt-12 sm:pt-16 border-t border-slate-200 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[#E3371E] font-condensed font-bold text-xs uppercase tracking-widest block mb-1">
                Aprofunde seus conhecimentos
              </span>
              <h2 className="font-barlow font-bold text-2xl sm:text-3xl text-[#192F4D]">
                Outros conteúdos
              </h2>
            </div>

            <button
              type="button"
              id="btn-voltar-todos-posts"
              onClick={onNavigateBlog || (() => onNavigate?.('blog'))}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-barlow font-bold text-[#192F4D] hover:text-[#E3371E] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver todos os posts</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((relPost) => (
              <article
                key={relPost.id}
                id={`relacionado-${relPost.id}`}
                onClick={() => {
                  if (onSelectPost) {
                    onSelectPost(relPost.id);
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-slate-200 hover:border-[#192F4D]/40 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-[#192F4D] text-[11px] font-condensed font-bold uppercase tracking-wider mb-3 border border-slate-200">
                      {relPost.category}
                    </div>

                    <h3 className="font-barlow font-bold text-base sm:text-lg text-[#192F4D] leading-snug group-hover:text-[#E3371E] transition-colors mb-3">
                      {relPost.title}
                    </h3>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex items-center justify-between gap-4 border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{relPost.date}</span>
                  </div>

                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-barlow font-bold text-[#E3371E] group-hover:text-[#192F4D] uppercase tracking-wider transition-colors">
                    <span>Leia mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
