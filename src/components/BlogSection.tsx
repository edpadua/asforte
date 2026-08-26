import React, { useState } from 'react';
import { INDUSTRIAL_IMAGES } from '../constants/assets';
import { Calendar, ArrowRight, Clock, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Especificações Técnicas e Aplicação do CBUQ Faixa C',
    category: 'Técnico & Engenharia',
    date: '18 Julho, 2026',
    readTime: '5 min de leitura',
    summary: 'Entenda os critérios de granulometria, teor de ligante e resistência mecânica exigidos pelas normas DNIT para aplicação de Concreto Asfáltico Usinado a Quente.',
    content: `O CBUQ (Concreto Asfáltico Usinado a Quente) Faixa C é uma das misturas granulométricas mais utilizadas no Brasil para camadas de rolamento em vias urbanas, rodovias de tráfego médio e pátios industriais.

### Principais Características
- **Granulometria Controlada:** Combinação precisa de agregados graúdos, miúdos e filler mineral.
- **Teor Ótimo de Ligante:** Asfalto CAP 50/70 dosado via laboratório por ensaio Marshall.
- **Resistência Mecânica:** Alta estabilidade para suportar deformações sob carga pesada.

### Recomendações de Aplicação
A aplicação deve ser realizada com vibroacabadoras a temperaturas controladas (mínimo de 130°C na descarga da pista), seguida por rolagem imediata com rolos pneumáticos e tandem de chapas de aço.`,
    image: INDUSTRIAL_IMAGES.concretoAsfalticoMain,
  },
  {
    id: 'post-2',
    title: 'Vantagens da Integração entre Usina de Asfalto e Pedreira Própria',
    category: 'Logística & Operações',
    date: '02 Julho, 2026',
    readTime: '4 min de leitura',
    summary: 'Como a sinergia entre a Pedreira PedraForte e a Usina Asforte garante padronização mineral, eliminação de gargalos e fornecimento ininterrupto.',
    content: `Em obras viárias de grande porte, o desabastecimento de agregados minerais é uma das principais causas de paralisação e prejuízo operacional.

### Garantia de Abastecimento
Com a Pedreira PedraForte integrada à Usina Asforte, garantimos:
1. **Controle de Qualidade Mineral:** Brito de rocha basáltica/gnaisse com ensaios permanentes de sanidade e abrasão Los Angeles.
2. **Logística Sem Gargalos:** Abastecimento contínuo por esteiras e frota dedicada.
3. **Escala de Produção:** Usina Ammann com capacidade de até 180 toneladas por hora.`,
    image: INDUSTRIAL_IMAGES.aggregatesQuarry,
  },
  {
    id: 'post-3',
    title: 'Pavimentação Asfáltica Industrial: Durabilidade para Tráfego Pesado',
    category: 'Infraestrutura Industrial',
    date: '20 Junho, 2026',
    readTime: '6 min de leitura',
    summary: 'Boas práticas de dimensionamento de pavimento para pátios logísticos, centros de distribuição e vias de atracação de carretas.',
    content: `Pátios industriais e centros de distribuição exigem pavimentos capazes de suportar cargas estáticas elevadas e solicitações dinâmicas repetitivas de empilhadeiras e rodotrens.

### Soluções Asforte para Pátios Industriais
- Misturas asfálticas de módulo elevado.
- Utilização de ligantes modificados quando indicado no projeto.
- Drenagem e selagem de juntas para prevenir infiltrações no subleito.`,
    image: INDUSTRIAL_IMAGES.sectorIndustrialYard,
  },
];

interface BlogSectionProps {
  onOpenQuoteModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#F4F6F8] text-[#1D2A3A] border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-300 pb-8">
          <div className="max-w-2xl">
            <span className="w-12 h-1 bg-[#E3371E] block mb-4" />
            <span className="text-[#E3371E] font-condensed tracking-widest text-xs uppercase font-extrabold mb-2 block">
              BLOG & INFORMAÇÕES TÉCNICAS
            </span>
            <h2 className="font-barlow font-extrabold text-[#223A5E] text-2xl sm:text-4xl lg:text-[40px] leading-[1.15] uppercase tracking-tight">
              Artigos, Normas e Atualizações do Setor Asfáltico
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-slate-600 text-sm max-w-md font-normal">
            Acompanhe especificações técnicas, boas práticas de aplicação de CBUQ e notícias sobre infraestrutura viária e industrial.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200 flex flex-col justify-between group hover:border-[#223A5E] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#223A5E] text-white text-[11px] font-condensed uppercase tracking-wider font-bold px-3 py-1">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-condensed uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E3371E]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E3371E]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-barlow font-bold text-[#223A5E] text-lg leading-snug group-hover:text-[#E3371E] transition-colors duration-200 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full pt-3 flex items-center justify-between text-xs font-bold font-condensed uppercase tracking-wider text-[#223A5E] hover:text-[#E3371E] transition-colors cursor-pointer"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-4 h-4 text-[#E3371E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#223A5E] p-6 sm:p-8 relative text-left">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-[#223A5E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="bg-[#223A5E] text-white text-[11px] font-condensed uppercase tracking-wider font-bold px-3 py-1 inline-block mb-3">
              {selectedPost.category}
            </span>

            <h2 className="font-barlow font-bold text-[#223A5E] text-xl sm:text-2xl uppercase mb-3 pr-8">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-slate-500 text-xs font-condensed uppercase tracking-wider mb-6 border-b border-slate-200 pb-3">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="relative h-56 w-full mb-6 overflow-hidden bg-slate-900">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line mb-8">
              {selectedPost.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#223A5E] text-xs font-bold uppercase font-condensed"
              >
                Fechar
              </button>

              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenQuoteModal();
                }}
                className="px-5 py-2.5 bg-[#E3371E] hover:bg-[#103778] text-white text-xs font-bold uppercase font-condensed flex items-center gap-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
