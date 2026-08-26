import React from 'react';
import { LOGOS, NAV_LINKS, CONTACT_INFO, FOOTER_ASSETS } from '../constants/assets';

interface FooterProps {
  onNavigate?: (page: 'home' | 'empresa', targetId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '#empresa') {
      if (onNavigate) {
        onNavigate('empresa');
      } else {
        window.location.hash = 'empresa';
      }
    } else if (href === '#hero' || href === '#') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '';
      }
    } else {
      const targetId = href.startsWith('#') ? href.substring(1) : href;
      if (onNavigate) {
        onNavigate('home', targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer id="footer" className="relative bg-[#192F4D] text-white pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={FOOTER_ASSETS.bgImage}
          alt=""
          className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#192F4D]/85" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Column 1: Institutional & Asforte + PedraForte Logos (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="inline-block">
              <img
                src={LOGOS.asforteWhite}
                alt="Asforte Concreto Asfáltico Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-slate-300 text-sm leading-relaxed font-normal max-w-sm">
              Fornecimento contínuo de concreto asfáltico usinado a quente (CBUQ) com elevado rigor tecnológico, logística otimizada e suprimento integrado de agregados minerais.
            </p>

            {/* Institutional Endorsement - PedraForte Logo */}
            <div className="pt-2 w-full">
              <span className="text-[11px] font-barlow font-bold tracking-widest text-slate-300 uppercase block mb-3">
                INTEGRANTE DO GRUPO INSTITUCIONAL
              </span>
              <img
                src={LOGOS.pedraForteWhite}
                alt="Pedreira PedraForte"
                className="h-8 w-auto object-contain opacity-90"
              />
            </div>
          </div>

          {/* Column 2: Navegação (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-barlow font-bold text-[#E3371E] text-xs uppercase tracking-widest">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs font-normal text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Produtos & Setores (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlow font-bold text-[#E3371E] text-xs uppercase tracking-widest">
              PRODUTOS & SETORES
            </h4>
            <ul className="space-y-2.5 text-xs font-normal text-slate-300">
              <li className="hover:text-white">Concreto Asfáltico (CBUQ)</li>
              <li className="hover:text-white">Asfalto Polímero de Alta Viscosidade</li>
              <li className="hover:text-white">Binder Asfáltico Estrutural</li>
              <li className="hover:text-white">Pavimentação de Rodovias & Concessões</li>
              <li className="hover:text-white">Obras Públicas & Vias Urbanas</li>
              <li className="hover:text-white">Pátios Industriais & Centros Logísticos</li>
            </ul>
          </div>

          {/* Column 4: Unidades & Atendimento (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-barlow font-bold text-[#E3371E] text-xs uppercase tracking-widest">
              UNIDADES & ATENDIMENTO
            </h4>

            <div className="space-y-4 text-xs text-slate-300">
              <div>
                <span className="font-bold text-white block mb-0.5">Usina Santa Isabel</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">{CONTACT_INFO.plantAddress}</p>
              </div>

              <div>
                <span className="font-bold text-white block mb-0.5">Polo São José dos Campos</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">{CONTACT_INFO.hqAddress}</p>
              </div>

              <div className="pt-2 space-y-1.5 text-xs text-slate-300">
                <p>{CONTACT_INFO.phone}</p>
                <p>{CONTACT_INFO.email}</p>
                <p className="text-slate-400">Segunda a Sexta: 07:00 às 17:00</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
          <p>© {new Date().getFullYear()} Asforte Concreto Asfáltico Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
