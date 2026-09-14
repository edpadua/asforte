import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Phone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_PAGE_ASSETS, LOCATION_ASSETS, COMPANY_UNIDADES_ASSETS, CONTACT_INFO } from '../constants/assets';

interface ContactPageProps {
  onOpenQuoteModal?: () => void;
  onNavigateHome?: () => void;
  onNavigate?: (page: 'home' | 'empresa' | 'produtos' | 'setores' | 'contato', targetId?: string) => void;
  preselectedProduct?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    cidadeObra: '',
    produtoInteresse: preselectedProduct || '',
    aplicacao: '',
    volumeEstimado: '',
    prazoDesejado: '',
    telefone: '',
    whatsapp: '',
    mensagem: preselectedProduct ? `Solicitação de cotação para o produto: ${preselectedProduct}.` : '',
  });

  React.useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        produtoInteresse: preselectedProduct,
        mensagem: prev.mensagem && !prev.mensagem.includes('Solicitação de cotação para o produto:')
          ? `${prev.mensagem}\n(Produto: ${preselectedProduct})`
          : `Solicitação de cotação para o produto: ${preselectedProduct}.`,
      }));
    }
  }, [preselectedProduct]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const santaIsabelDistances = [
    { city: 'São Paulo', distance: '35 km | 32 minutos' },
    { city: 'São José dos Campos', distance: '40 km | 36 minutos' },
    { city: 'Litoral', distance: '130 km | 1h46 minutos' },
    { city: 'Mogi das Cruzes', distance: '36 km | 29 minutos' },
    { city: 'Guarulhos', distance: '12 km | 15 minutos' },
    { city: 'Campinas', distance: '130 km | 1h45 minutos' },
    { city: 'Jundiaí', distance: '109 km | 1h29 minutos' },
    { city: 'Taubaté', distance: '80 km | 1h10 minutos' },
  ];

  const sjcDistances = [
    { city: 'São Paulo', distance: '85 km | 1h15 minutos' },
    { city: 'São José dos Campos', distance: '16 km | 20 minutos' },
    { city: 'Litoral', distance: '82 km | 1h' },
    { city: 'Mogi das Cruzes', distance: '55 km | 50 minutos' },
    { city: 'Guarulhos', distance: '58 km | 1h10 minutos' },
    { city: 'Campinas', distance: '150 km | 1h50 minutos' },
    { city: 'Jundiaí', distance: '145 km | 2h' },
    { city: 'Taubaté', distance: '64 km | 45 minutos' },
  ];

  const whatsappUrl = `https://wa.me/551125003599?text=${encodeURIComponent(
    'Olá, gostaria de solicitar um orçamento com a Asforte.'
  )}`;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe seu nome.';
    }
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Por favor, informe o nome da sua empresa.';
    }
    if (!formData.cidadeObra.trim()) {
      newErrors.cidadeObra = 'Por favor, informe a cidade da obra.';
    }
    if (!formData.produtoInteresse) {
      newErrors.produtoInteresse = 'Selecione o produto de interesse.';
    }
    if (!formData.aplicacao) {
      newErrors.aplicacao = 'Selecione o tipo de aplicação.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        (firstErrorField as HTMLElement).focus();
      }
      return;
    }

    setIsSubmitting(true);

    const subject = `Solicitação de Orçamento - ${formData.empresa ? formData.empresa + ' (' + formData.nome + ')' : formData.nome} - Asforte`;
    const bodyLines = [
      '==================================================',
      'SOLICITAÇÃO DE ORÇAMENTO - ASFORTE CONCRETO ASFÁLTICO',
      '==================================================',
      '',
      `• Nome: ${formData.nome}`,
      `• Empresa: ${formData.empresa}`,
      formData.email ? `• E-mail do Solicitante: ${formData.email}` : '',
      `• Cidade da Obra: ${formData.cidadeObra}`,
      `• Produto de Interesse: ${formData.produtoInteresse}`,
      `• Tipo de Aplicação: ${formData.aplicacao}`,
      `• Volume Estimado: ${formData.volumeEstimado || 'Não informado'}`,
      `• Prazo Desejado: ${formData.prazoDesejado || 'A combinar'}`,
      `• Telefone: ${formData.telefone || 'Não informado'}`,
      `• WhatsApp: ${formData.whatsapp || 'Não informado'}`,
      '',
      '--------------------------------------------------',
      'MENSAGEM / ESPECIFICAÇÕES TÉCNICAS:',
      formData.mensagem || 'Sem observações adicionais.',
      '==================================================',
    ].filter(Boolean);

    const mailtoUrl = `mailto:comercial@asforte.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    setTimeout(() => {
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Fallback se o navegador bloquear redirecionamento
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="bg-white text-[#1D2A3A] font-barlow selection:bg-[#E3371E] selection:text-white">
      {/* DOBRA 01: HERO DA PÁGINA CONTATO / SOLICITAR ORÇAMENTO */}
      <section
        id="hero-contato"
        className="relative w-full min-h-[520px] lg:min-h-[580px] lg:max-h-[750px] bg-[#192F4D] text-white overflow-hidden flex flex-col justify-center border-b-4 border-[#E3371E]"
      >
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column - Dark Blue Blueprint Vector Map Background */}
          <div className="lg:col-span-6 xl:col-span-6 relative bg-[#192F4D] flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-18 min-h-[420px] lg:min-h-full pt-28 sm:pt-32 lg:pt-28 pb-10 sm:pb-12">
            {/* Blueprint Map Background Image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-95"
              style={{ backgroundImage: `url(${CONTACT_PAGE_ASSETS.backgroundMap})` }}
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
              {/* Linha de Destaque Vermelha Institucional */}
              <div className="w-12 h-1 bg-[#E3371E] mb-6" />

              {/* H1 Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="font-barlow font-black text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] uppercase leading-[1.12] tracking-tight mb-6"
              >
                Solicite orçamento de concreto asfáltico
              </motion.h1>

              {/* Texto de Abertura */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="text-slate-100 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-[520px]"
              >
                Envie as informações da sua obra para que a equipe comercial possa avaliar a demanda com mais precisão.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Drone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden group bg-slate-900"
          >
            <img
              src={CONTACT_PAGE_ASSETS.heroImage}
              alt="Vista aérea da usina e estrutura Asforte"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </motion.div>

        </div>
      </section>

      {/* DOBRA 02: FORMULÁRIO DE ORÇAMENTO + CANAIS DIRETOS DE CONTATO */}
      <section id="formulario-orcamento" className="py-16 sm:py-20 md:py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Coluna Principal: Formulário de Solicitação */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white border-t-4 border-t-[#E3371E] border-x border-b border-slate-200/80 shadow-md p-6 sm:p-10 md:p-12">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-barlow font-bold text-2xl sm:text-3xl text-[#192F4D] uppercase mb-3">
                    Formulário enviado com sucesso!
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto mb-3">
                    Sua mensagem foi direcionada para <strong className="text-[#192F4D]">comercial@asforte.com.br</strong>.
                  </p>
                  <p className="text-slate-500 text-sm max-w-lg mx-auto mb-8">
                    Nossa equipe técnica e comercial analisará as informações da sua obra e retornará em breve.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nome: '',
                        empresa: '',
                        email: '',
                        cidadeObra: '',
                        produtoInteresse: '',
                        aplicacao: '',
                        volumeEstimado: '',
                        prazoDesejado: '',
                        telefone: '',
                        whatsapp: '',
                        mensagem: '',
                      });
                    }}
                    className="inline-flex items-center justify-center bg-[#192F4D] hover:bg-[#102138] text-white font-barlow font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Enviar outra solicitação
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* 1. Nome & 2. Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Nome <span className="text-[#E3371E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        aria-invalid={!!errors.nome}
                        placeholder="Seu nome completo"
                        className={`w-full px-4 py-3 bg-slate-50 border ${
                          errors.nome ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all`}
                      />
                      {errors.nome && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Empresa <span className="text-[#E3371E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        aria-invalid={!!errors.empresa}
                        placeholder="Nome da empresa / construtora"
                        className={`w-full px-4 py-3 bg-slate-50 border ${
                          errors.empresa ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all`}
                      />
                      {errors.empresa && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.empresa}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Cidade da obra */}
                  <div>
                    <label htmlFor="cidadeObra" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                      Cidade da obra <span className="text-[#E3371E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="cidadeObra"
                      name="cidadeObra"
                      value={formData.cidadeObra}
                      onChange={handleChange}
                      aria-invalid={!!errors.cidadeObra}
                      placeholder="Ex: São Paulo, Guarulhos, Campinas..."
                      className={`w-full px-4 py-3 bg-slate-50 border ${
                        errors.cidadeObra ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all`}
                    />
                    {errors.cidadeObra && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.cidadeObra}
                      </p>
                    )}
                  </div>

                  {/* 4. Produto de interesse & 5. Aplicação */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="produtoInteresse" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Produto de interesse <span className="text-[#E3371E]">*</span>
                      </label>
                      <select
                        id="produtoInteresse"
                        name="produtoInteresse"
                        value={formData.produtoInteresse}
                        onChange={handleChange}
                        aria-invalid={!!errors.produtoInteresse}
                        className={`w-full px-4 py-3 bg-slate-50 border ${
                          errors.produtoInteresse ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all`}
                      >
                        <option value="">Selecione o produto</option>
                        {formData.produtoInteresse &&
                          !['Concreto asfáltico', 'Agregados minerais', 'Não sei ainda'].includes(
                            formData.produtoInteresse
                          ) && (
                            <option value={formData.produtoInteresse}>
                              {formData.produtoInteresse} (Selecionado)
                            </option>
                          )}
                        <option value="Concreto asfáltico">Concreto asfáltico (Geral)</option>
                        <option value="Agregados minerais">Agregados minerais</option>
                        <option value="Não sei ainda">Não sei ainda / A definir</option>
                      </select>
                      {errors.produtoInteresse && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.produtoInteresse}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="aplicacao" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Aplicação <span className="text-[#E3371E]">*</span>
                      </label>
                      <select
                        id="aplicacao"
                        name="aplicacao"
                        value={formData.aplicacao}
                        onChange={handleChange}
                        aria-invalid={!!errors.aplicacao}
                        className={`w-full px-4 py-3 bg-slate-50 border ${
                          errors.aplicacao ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all`}
                      >
                        <option value="">Selecione a aplicação</option>
                        <option value="Pavimentação">Pavimentação</option>
                        <option value="Recapeamento">Recapeamento</option>
                        <option value="Conservação viária">Conservação viária</option>
                        <option value="Pátio industrial ou logístico">Pátio industrial ou logístico</option>
                        <option value="Acesso e estacionamento">Acesso e estacionamento</option>
                        <option value="Obras de infraestrutura">Obras de infraestrutura</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {errors.aplicacao && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.aplicacao}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 6. Volume estimado & 7. Prazo desejado */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="volumeEstimado" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Volume estimado
                      </label>
                      <input
                        type="text"
                        id="volumeEstimado"
                        name="volumeEstimado"
                        value={formData.volumeEstimado}
                        onChange={handleChange}
                        placeholder="Ex: 500 toneladas, 30 caminhões..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="prazoDesejado" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Prazo desejado
                      </label>
                      <input
                        type="text"
                        id="prazoDesejado"
                        name="prazoDesejado"
                        value={formData.prazoDesejado}
                        onChange={handleChange}
                        placeholder="Ex: Imediato, próxima semana, 30 dias..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* 8. Telefone, 9. WhatsApp & 10. E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="telefone" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 0000-0000"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 90000-0000"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                        Seu E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@empresa.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* 11. Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#192F4D] mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva detalhes da obra, especificação técnica exigida, horários de entrega ou outras observações..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-[#1D2A3A] text-sm focus:bg-white focus:border-[#192F4D] focus:ring-1 focus:ring-[#192F4D] outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E3371E] hover:bg-[#103778] disabled:bg-slate-400 text-white font-barlow font-black text-sm sm:text-base uppercase tracking-wider px-10 py-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? 'Enviando formulário...' : 'Enviar formulário'}
                    </button>
                  </div>

                  {/* Texto de Apoio Abaixo do Formulário */}
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-200 pt-6">
                    Informe material, cidade da obra, aplicação, volume estimado e prazo desejado. Se houver especificação técnica, inclua também no campo de mensagem. Os dados são direcionados diretamente para <strong className="text-slate-700">comercial@asforte.com.br</strong>.
                  </p>

                </form>
              )}

            </div>

            {/* Coluna Lateral: Bloco Canais Diretos de Contato */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              
              <div className="bg-[#192F4D] text-white p-7 sm:p-9 border-t-4 border-t-[#E3371E] shadow-md flex flex-col justify-between">
                <div>
                  {/* Linha de Destaque Vermelha */}
                  <div className="w-10 h-1 bg-[#E3371E] mb-4" />

                  {/* Título do Bloco */}
                  <h3 className="font-barlow font-bold text-2xl sm:text-[26px] text-white uppercase tracking-tight mb-4">
                    Prefere falar direto?
                  </h3>

                  <p className="text-slate-200 text-sm leading-relaxed font-normal mb-6">
                    Fale diretamente com nossa equipe comercial e de atendimento para tirar dúvidas ou agilizar seu orçamento:
                  </p>

                  {/* Lista de Canais */}
                  <div className="space-y-4 mb-8">
                    
                    {/* Canal E-mail Comercial */}
                    <div className="p-4 bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/10 transition-colors">
                      <div className="p-2 bg-[#E3371E] text-white shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs uppercase font-bold text-slate-300 block tracking-wider mb-0.5">
                          E-mail Comercial
                        </span>
                        <a
                          href="mailto:comercial@asforte.com.br"
                          className="font-barlow font-bold text-base sm:text-lg text-white hover:text-[#FF7A48] transition-colors break-all block"
                        >
                          comercial@asforte.com.br
                        </a>
                      </div>
                    </div>

                    {/* Canal 1 */}
                    <div className="p-4 bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/10 transition-colors">
                      <div className="p-2 bg-[#E3371E] text-white shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold text-slate-300 block tracking-wider mb-0.5">
                          Telefone / WhatsApp
                        </span>
                        <a
                          href="tel:1125003599"
                          className="font-barlow font-bold text-lg text-white hover:text-[#FF7A48] transition-colors"
                        >
                          11.2500.3599
                        </a>
                      </div>
                    </div>

                    {/* Canal 2 */}
                    <div className="p-4 bg-white/5 border border-white/10 flex items-start gap-3.5 hover:bg-white/10 transition-colors">
                      <div className="p-2 bg-[#E3371E] text-white shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold text-slate-300 block tracking-wider mb-0.5">
                          Telefone / WhatsApp
                        </span>
                        <a
                          href="tel:1154680130"
                          className="font-barlow font-bold text-lg text-white hover:text-[#FF7A48] transition-colors"
                        >
                          11.5468.0130
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Botão de Destaque WhatsApp */}
                <div>
                  <a
                    id="btn-orcamento-whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-barlow font-black uppercase tracking-wider text-xs sm:text-sm py-4 px-6 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Solicitar orçamento pelo WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DOBRA 03: NOSSAS UNIDADES */}
      <section id="nossas-unidades" className="py-16 sm:py-20 md:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Cabeçalho da Seção */}
          <div className="mb-10 sm:mb-12">
            <div className="w-12 h-1 bg-[#E3371E] mb-4" />
            <h2 className="font-barlow font-black text-2xl sm:text-3xl md:text-4xl text-[#192F4D] uppercase tracking-tight">
              Nossas unidades
            </h2>
          </div>

          {/* 2 Main Location Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: SANTA ISABEL (Dark Blue Wrapper) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="bg-[#192F4D] p-4 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              
              {/* Top Bar Label */}
              <div className="flex items-center gap-2 mb-3 text-white/80">
                <span className="w-6 h-0.5 bg-[#E3371E]" />
                <span className="font-condensed font-bold text-xs uppercase tracking-wider text-white/90">
                  LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
                </span>
              </div>

              {/* Header Box */}
              <div className="bg-white p-4 sm:p-5 text-[#192F4D] mb-4 shadow-sm">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                  <h3 className="font-barlow font-black text-2xl sm:text-3xl text-[#192F4D] uppercase tracking-tight flex items-center gap-2">
                    Santa Isabel <span className="text-slate-400 font-light">|</span> SP
                  </h3>
                  <img
                    src={LOCATION_ASSETS.distancePinIcon}
                    alt="Ícone de Localização"
                    className="w-7 h-7 object-contain shrink-0"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#192F4D]">
                  <div className="flex items-center gap-3">
                    <img
                      src={LOCATION_ASSETS.santaIsabelIcon}
                      alt="Ícone Usina Asforte Santa Isabel"
                      className="w-10 h-10 object-contain shrink-0"
                    />
                    <div>
                      <div className="font-condensed font-extrabold text-base sm:text-lg uppercase text-[#192F4D] leading-tight">
                        Usina Asforte — Santa Isabel
                      </div>
                      <div className="font-condensed text-xs sm:text-sm text-slate-600 font-semibold">
                        Rod. Pres. Dutra, KM 194,5
                      </div>
                      <div className="font-condensed text-[11px] text-slate-500 mt-0.5">
                        Unidade integrada à estrutura do Grupo PedraForte.
                      </div>
                    </div>
                  </div>
                  <a
                    href={COMPANY_UNIDADES_ASSETS.santaIsabelMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#E3371E] hover:bg-[#102138] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0 text-center cursor-pointer self-start sm:self-auto"
                  >
                    ABRIR NO MAPA
                  </a>
                </div>
              </div>

              {/* Satellite Map Box Image */}
              <div className="relative w-full overflow-hidden mb-4 shadow-md bg-[#0c1829] border border-white/20 group">
                <img
                  src={LOCATION_ASSETS.santaIsabelMap}
                  alt="Mapa de Localização - Santa Isabel / SP - Usina Asforte"
                  className="w-full h-auto max-h-[320px] object-cover object-center block group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Distances Box (Orange Header/Background) */}
              <div className="bg-[#E3371E] p-4 sm:p-5 text-white shadow-md">
                <h4 className="font-condensed font-black text-center text-xs sm:text-sm uppercase tracking-wider mb-3.5 border-b border-white/20 pb-2">
                  DISTÂNCIAS ATÉ A USINA ASFORTE SANTA ISABEL
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-condensed text-xs sm:text-sm">
                  {santaIsabelDistances.map((item) => (
                    <div key={item.city} className="flex items-center justify-between gap-1">
                      <span className="font-bold shrink-0">{item.city}</span>
                      <span className="border-b border-white/40 grow mx-1 my-auto"></span>
                      <span className="font-bold shrink-0 whitespace-nowrap text-right">{item.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* CARD 2: SÃO JOSÉ DOS CAMPOS (Orange Wrapper) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="bg-[#FF6A3B] p-4 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              
              {/* Top Bar Label */}
              <div className="flex items-center gap-2 mb-3 text-white/90">
                <span className="w-6 h-0.5 bg-white" />
                <span className="font-condensed font-bold text-xs uppercase tracking-wider text-white">
                  LOCALIZAÇÃO E EFICIÊNCIA OPERACIONAL
                </span>
              </div>

              {/* Header Box */}
              <div className="bg-white p-4 sm:p-5 text-[#192F4D] mb-4 shadow-sm">
                <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-3">
                  <h3 className="font-barlow font-black text-2xl sm:text-3xl text-[#192F4D] uppercase tracking-tight flex items-center gap-2">
                    São José dos Campos <span className="text-slate-400 font-light">|</span> SP
                  </h3>
                  <img
                    src={LOCATION_ASSETS.distancePinIcon}
                    alt="Ícone de Localização"
                    className="w-7 h-7 object-contain shrink-0"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#192F4D]">
                  <div className="flex items-center gap-3">
                    <img
                      src={LOCATION_ASSETS.sjcIcon}
                      alt="Ícone Asforte LTDA"
                      className="w-10 h-10 object-contain shrink-0"
                    />
                    <div>
                      <div className="font-condensed font-extrabold text-base sm:text-lg uppercase text-[#192F4D] leading-tight">
                        Asforte Concreto Asfáltico LTDA
                      </div>
                      <div className="font-condensed text-xs sm:text-sm text-slate-600 font-semibold">
                        Av. São Afonso Maria, 381, Bairro da Pernambucana
                      </div>
                      <div className="font-condensed text-[11px] text-slate-500 mt-0.5">
                        Unidade estrategicamente localizada para atender a RMSP e o Vale do Paraíba.
                      </div>
                    </div>
                  </div>
                  <a
                    href={COMPANY_UNIDADES_ASSETS.sjcMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#E3371E] hover:bg-[#102138] text-white font-barlow font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 shrink-0 text-center cursor-pointer self-start sm:self-auto"
                  >
                    ABRIR NO MAPA
                  </a>
                </div>
              </div>

              {/* Satellite Map Box Image */}
              <div className="relative w-full overflow-hidden mb-4 shadow-md bg-[#0c1829] border border-white/20 group">
                <img
                  src={LOCATION_ASSETS.sjcMap}
                  alt="Mapa de Localização - São José dos Campos / SP - Asforte"
                  className="w-full h-auto max-h-[320px] object-cover object-center block group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Distances Box (Dark Blue Background) */}
              <div className="bg-[#192F4D] p-4 sm:p-5 text-white shadow-md">
                <h4 className="font-condensed font-black text-center text-xs sm:text-sm uppercase tracking-wider mb-3.5 border-b border-white/20 pb-2">
                  DISTÂNCIAS ATÉ A ASFORTE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-condensed text-xs sm:text-sm">
                  {sjcDistances.map((item) => (
                    <div key={item.city} className="flex items-center justify-between gap-1">
                      <span className="font-bold shrink-0">{item.city}</span>
                      <span className="border-b border-white/30 grow mx-1 my-auto"></span>
                      <span className="font-bold shrink-0 whitespace-nowrap text-right">{item.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
};

