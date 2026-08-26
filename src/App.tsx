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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'empresa'>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#empresa') {
        setCurrentPage('empresa');
      } else {
        setCurrentPage('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleNavigate = (page: 'home' | 'empresa', targetId?: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'empresa' ? 'empresa' : targetId ? targetId : '';

    if (page === 'empresa') {
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

  const handleOpenQuoteModal = () => {
    window.open(
      `https://wa.me/5511987654321?text=${encodeURIComponent(
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
        ) : (
          <>
            {/* Dobra 1: Hero Impactante & Cinematográfico */}
            <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 2: Produção Própria de Concreto Asfáltico */}
            <ProductionSection />

            {/* Dobra 4: Estrutura Produtiva e Tecnológica (Usina Ammann 180) */}
            <PlantStructureSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 5: Localização Estratégica e Eficiência Operacional */}
            <LocationLogisticsSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dobra 6: Produtos e Aplicações */}
            <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

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

