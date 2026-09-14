import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductionSection } from './components/ProductionSection';
import { IntegrationSection } from './components/IntegrationSection';
import { PlantStructureSection } from './components/PlantStructureSection';
import { LocationLogisticsSection } from './components/LocationLogisticsSection';
import { ProductsSection } from './components/ProductsSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { SectorsSection } from './components/SectorsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CompanyPage } from './components/CompanyPage';
import { ProductsPage } from './components/ProductsPage';
import { SectorsPage } from './components/SectorsPage';
import { ContactPage } from './components/ContactPage';
import { BlogPage, BlogPost, BLOG_POSTS } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'empresa' | 'produtos' | 'setores' | 'contato' | 'blog' | 'blog-post'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string>('');

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#empresa') {
        setCurrentPage('empresa');
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#produtos' || hash === '#produtos-page') {
        setCurrentPage('produtos');
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#setores' || hash === '#setores-atendidos') {
        setCurrentPage('setores');
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#post-') || hash.startsWith('#blog/')) {
        const foundPost = BLOG_POSTS.find((p) => hash.includes(p.id)) || BLOG_POSTS[0];
        setSelectedPost(foundPost);
        setCurrentPage('blog-post');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#blog') {
        setCurrentPage('blog');
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contato' || hash === '#orcamento') {
        setCurrentPage('contato');
        setSelectedPost(null);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
        setSelectedPost(null);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleNavigate = (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato' | 'blog', targetId?: string) => {
    setSelectedPost(null);
    setCurrentPage(page);
    window.location.hash = page === 'empresa' ? 'empresa' : page === 'produtos' ? 'produtos' : page === 'setores' ? 'setores' : page === 'blog' ? 'blog' : page === 'contato' ? 'contato' : targetId ? targetId : '';

    if (page === 'empresa' || page === 'produtos' || page === 'setores' || page === 'blog' || page === 'contato') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('blog-post');
    window.location.hash = post.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductForQuote = (productName: string) => {
    setPreselectedProduct(productName);
    setSelectedPost(null);
    setCurrentPage('contato');
    window.location.hash = 'contato';
    setTimeout(() => {
      const el = document.getElementById('formulario-orcamento');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenQuoteModal = () => {
    window.open(
      `https://wa.me/551125003599?text=${encodeURIComponent(
        'Olá, gostaria de solicitar uma cotação de concreto asfáltico com a Asforte.'
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* Header with initial transparent & scroll solid background */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Flow */}
      <main>
        {currentPage === 'empresa' ? (
          <CompanyPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentPage === 'produtos' ? (
          <ProductsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onSelectProductForQuote={handleSelectProductForQuote}
          />
        ) : currentPage === 'setores' ? (
          <SectorsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        ) : currentPage === 'contato' ? (
          <ContactPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            preselectedProduct={preselectedProduct}
          />
        ) : currentPage === 'blog' ? (
          <BlogPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onSelectPost={handleSelectPost}
          />
        ) : currentPage === 'blog-post' ? (
          <BlogPostPage
            post={selectedPost || BLOG_POSTS[0]}
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateBlog={() => handleNavigate('blog')}
            onNavigate={handleNavigate}
            onSelectPost={(postId) => {
              const target = BLOG_POSTS.find((p) => p.id === postId) || BLOG_POSTS[0];
              handleSelectPost(target);
            }}
          />
        ) : (
          <>
            {/* Dobra 1: Hero Impactante & Cinematográfico */}
            <HeroSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onNavigate={handleNavigate}
            />

            {/* Dobra 2: Produção Própria de Concreto Asfáltico */}
            <ProductionSection />

            {/* Dobra 4: Estrutura Produtiva e Tecnológica (Usina Ammann 180) */}
            <PlantStructureSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 5: Localização Estratégica e Eficiência Operacional */}
            <LocationLogisticsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 6: Produtos e Aplicações */}
            <ProductsSection
              onOpenQuoteModal={handleOpenQuoteModal}
              onNavigate={handleNavigate}
            />

            {/* Dobra 7: Diferenciais Operacionais */}
            <DifferentialsSection />

            {/* Dobra 8: Setores Atendidos */}
            <SectorsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 9: CTA Final de Conversão */}
            <FinalCTASection onOpenQuoteModal={handleOpenQuoteModal} />
          </>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Proposal Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </div>
  );
}

