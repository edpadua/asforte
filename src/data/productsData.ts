export interface ProductItemData {
  id: string;
  name: string;
  technicalDescription: string;
  application: string;
  normTag?: string;
  commonApplications?: string;
  fullApplication?: string;
  technicalNotes?: string;
  spreadsheetLink?: string;
}

export interface ProductFamily {
  id: string;
  number: number;
  name: string;
  badge: string;
  description: string;
  items: ProductItemData[];
}

export const PRODUCT_FAMILIES: ProductFamily[] = [
  {
    id: 'cbuq-der',
    number: 1,
    name: 'CBUQ / DER',
    badge: 'Norma DER/SP',
    description:
      'Concreto Betuminoso Usinado a Quente (CBUQ) conforme especificações DER, desenvolvido para aplicações em diferentes camadas de pavimentos, conforme projeto e requisitos técnicos da obra.',
    items: [
      {
        id: 'cbuq-faixa-ii-der',
        name: 'CBUQ Faixa II DER',
        technicalDescription:
          'Mistura asfáltica usinada a quente conforme nomenclatura tradicional DER, de granulometria relativamente mais graúda. Necessário validar o traço atualmente utilizado e sua correspondência com a classificação DER vigente.',
        application: 'Camada de ligação, binder e aplicações estruturais conforme projeto.',
        normTag: 'DER',
      },
      {
        id: 'cbuq-faixa-iii-der',
        name: 'CBUQ Faixa III DER',
        technicalDescription:
          'Concreto betuminoso usinado a quente conforme classificação tradicional Faixa III do DER. Produto cadastrado sem indicação explícita de TNM ou ligante.',
        application: 'Principalmente camada de rolamento/revestimento, conforme projeto e especificação contratual.',
        normTag: 'DER',
      },
      {
        id: 'cbuq-faixa-iii-der-12-5',
        name: 'CBUQ Faixa III DER 12,5 mm',
        technicalDescription:
          'Mistura asfáltica densa com referência granulométrica de 12,5 mm, associada à Faixa III DER.',
        application: 'Camada de rolamento e revestimento superficial.',
        normTag: 'DER',
      },
      {
        id: 'cbuq-faixa-iv-der',
        name: 'CBUQ Faixa IV DER',
        technicalDescription:
          'Mistura asfáltica de granulometria fina conforme nomenclatura tradicional DER. Necessário validar correspondência com classificação atual.',
        application: 'Reperfilagem, regularização e revestimentos de menor espessura.',
        normTag: 'DER',
      },
      {
        id: 'cbuq-fx-12-5-der-sp-cap-50-70',
        name: 'CBUQ FX 12,5 – DER/SP – CAP 50/70',
        technicalDescription:
          'Concreto asfáltico com TNM de 12,5 mm produzido com CAP 50/70. É uma das descrições tecnicamente mais completas do cadastro atual.',
        application: 'Camada de rolamento/revestimento.',
        normTag: 'DER / CAP 50/70',
      },
      {
        id: 'cbuq-binder-19-0-der',
        name: 'CBUQ Binder 19,0 mm DER',
        technicalDescription:
          'Concreto asfáltico com TNM de 19 mm destinado principalmente à camada intermediária de ligação — binder.',
        application: 'Binder entre base e camada de rolamento; reforço estrutural do pavimento.',
        normTag: 'DER',
      },
    ],
  },
  {
    id: 'cauq-convencional-der',
    number: 2,
    name: 'CAUQ Convencional DER',
    badge: 'Norma DER/SP',
    description:
      'Misturas asfálticas conforme especificações DER para aplicações convencionais de pavimentação.',
    items: [
      {
        id: 'cauq-der-25',
        name: 'CAUQ DER 25',
        technicalDescription:
          'Concreto asfáltico denso com TNM de aproximadamente 25 mm segundo classificação atual DER/SP.',
        application: 'Principalmente camada de ligação/binder e função estrutural.',
        normTag: 'DER 25',
      },
      {
        id: 'cauq-der-19',
        name: 'CAUQ DER 19',
        technicalDescription:
          'Concreto asfáltico denso com TNM de aproximadamente 19 mm.',
        application: 'Camada de ligação/binder ou rolamento, conforme projeto.',
        normTag: 'DER 19',
      },
      {
        id: 'cauq-der-12-5',
        name: 'CAUQ DER 12,5',
        technicalDescription:
          'Concreto asfáltico denso com TNM de aproximadamente 12,5 mm.',
        application: 'Principalmente camada de rolamento.',
        normTag: 'DER 12,5',
      },
      {
        id: 'cauq-der-9-5',
        name: 'CAUQ DER 9,5',
        technicalDescription:
          'Mistura asfáltica densa de granulometria mais fina, com TNM aproximado de 9,5 mm.',
        application: 'Rolamento, reperfilagem e camadas de menor espessura.',
        normTag: 'DER 9,5',
      },
      {
        id: 'cauq-der-4-75',
        name: 'CAUQ DER 4,75',
        technicalDescription:
          'Mistura asfáltica fina da família convencional DER.',
        application: 'Reperfilagem, regularização e correções superficiais.',
        normTag: 'DER 4,75',
      },
    ],
  },
  {
    id: 'cauq-modificado',
    number: 3,
    name: 'CAUQ Modificado',
    badge: 'Polímero Especial',
    description:
      'Misturas asfálticas modificadas com polímero, desenvolvidas para aplicações que demandam características específicas de desempenho.',
    items: [
      {
        id: 'cauq-der-25-polimero',
        name: 'CAUQ DER 25 com polímero',
        technicalDescription:
          'Concreto asfáltico DER 25 produzido com ligante asfáltico modificado por polímero.',
        application: 'Camadas estruturais submetidas a solicitações superiores às misturas convencionais.',
        normTag: 'Polímero',
      },
      {
        id: 'cauq-der-19-polimero',
        name: 'CAUQ DER 19 com polímero',
        technicalDescription:
          'Mistura DER 19 utilizando ligante modificado por polímero para aumento de desempenho.',
        application: 'Binder, ligação e aplicações de tráfego elevado.',
        normTag: 'Polímero',
      },
      {
        id: 'cauq-der-12-5-polimero',
        name: 'CAUQ DER 12,5 com polímero',
        technicalDescription:
          'Mistura de rolamento DER 12,5 utilizando ligante modificado por polímero.',
        application: 'Revestimento de rodovias, corredores e pavimentos de maior solicitação.',
        normTag: 'Polímero',
      },
      {
        id: 'cauq-der-9-5-polimero',
        name: 'CAUQ DER 9,5 com polímero',
        technicalDescription:
          'Mistura fina DER 9,5 utilizando ligante asfáltico modificado por polímero.',
        application: 'Rolamento e revestimentos finos de alto desempenho.',
        normTag: 'Polímero',
      },
    ],
  },
  {
    id: 'cbuq-pmsp',
    number: 4,
    name: 'CBUQ / PMSP',
    badge: 'Urbano PMSP',
    description:
      'Misturas asfálticas conforme especificações PMSP para aplicações em pavimentação urbana.',
    items: [
      {
        id: 'cbuq-faixa-ii-pmsp',
        name: 'CBUQ Faixa II PMSP',
        technicalDescription:
          'Mistura asfáltica segundo especificações/contratações municipais da PMSP, usualmente associada a camada de ligação.',
        application: 'Binder e pavimentação urbana conforme projeto PMSP.',
        normTag: 'PMSP',
      },
      {
        id: 'cbuq-faixa-iii-pmsp',
        name: 'CBUQ Faixa III PMSP',
        technicalDescription:
          'Concreto betuminoso usinado a quente conforme especificação própria da Prefeitura de São Paulo.',
        application: 'Camada asfáltica de vias urbanas, recapeamento e pavimentação conforme especificação PMSP.',
        normTag: 'PMSP',
      },
      {
        id: 'cbuq-faixa-iv-pmsp',
        name: 'CBUQ Faixa IV PMSP',
        technicalDescription:
          'Mistura asfáltica produzida conforme especificação própria da Prefeitura de São Paulo, distinta da especificação DER.',
        application: 'Pavimentação, manutenção e recapeamento de vias municipais conforme projeto PMSP.',
        normTag: 'PMSP',
      },
      {
        id: 'cbuq-faixa-v',
        name: 'CBUQ Faixa V',
        technicalDescription:
          'Mistura asfáltica fina cadastrada como Faixa V. A origem normativa e o respectivo traço precisam ser confirmados.',
        application: 'Manutenção, reperfilagem ou revestimento fino, conforme especificação contratual.',
        normTag: 'PMSP / Urbano',
      },
    ],
  },
  {
    id: 'concreto-asfaltico-dnit',
    number: 5,
    name: 'Concreto Asfáltico DNIT',
    badge: 'Norma DNIT 031/2024',
    description:
      'Misturas asfálticas conforme especificações DNIT para aplicações em obras de pavimentação.',
    items: [
      {
        id: 'ca-dnit-a-25',
        name: 'CA DNIT A-25',
        technicalDescription:
          'Concreto asfáltico conforme DNIT 031/2024, Faixa A-25, com TNM de 25 mm.',
        application: 'Base, ligação, regularização, reforço ou aplicação definida em projeto rodoviário.',
        normTag: 'DNIT A-25',
      },
      {
        id: 'ca-dnit-b-19',
        name: 'CA DNIT B-19',
        technicalDescription:
          'Concreto asfáltico conforme DNIT 031/2024, Faixa B-19, com TNM de 19 mm.',
        application: 'Binder, base, reforço e revestimento conforme dimensionamento.',
        normTag: 'DNIT B-19',
      },
      {
        id: 'ca-dnit-c-12-5',
        name: 'CA DNIT C-12,5',
        technicalDescription:
          'Concreto asfáltico conforme DNIT 031/2024, Faixa C-12,5.',
        application: 'Principalmente revestimento e camada de rolamento.',
        normTag: 'DNIT C-12,5',
      },
      {
        id: 'ca-dnit-d-9-5',
        name: 'CA DNIT D-9,5',
        technicalDescription:
          'Concreto asfáltico conforme DNIT 031/2024, Faixa D-9,5.',
        application: 'Revestimentos mais finos, regularizações e rolamento.',
        normTag: 'DNIT D-9,5',
      },
    ],
  },
  {
    id: 'gap-graded',
    number: 6,
    name: 'Gap Graded',
    badge: 'Graduação Descontínua',
    description:
      'Misturas asfálticas com graduação diferenciada para aplicações específicas de pavimentação.',
    items: [
      {
        id: 'gap-graded-polimero',
        name: 'Gap Graded com polímero',
        technicalDescription:
          'Mistura asfáltica de granulometria descontínua utilizando ligante modificado por polímero.',
        application: 'Camada de rolamento de alto desempenho e obras rodoviárias especiais.',
        normTag: 'Polímero',
      },
      {
        id: 'gap-graded-asfalto-borracha',
        name: 'Gap Graded com asfalto-borracha',
        technicalDescription:
          'Mistura de granulometria descontínua utilizando ligante asfalto-borracha.',
        application: 'Revestimentos rodoviários de alto desempenho e tráfego intenso.',
        normTag: 'Asfalto-Borracha',
      },
    ],
  },
  {
    id: 'sma-stone-matrix-asphalt',
    number: 7,
    name: 'SMA — Stone Matrix Asphalt',
    badge: 'Alto Desempenho',
    description:
      'Mistura asfáltica de graduação descontínua com estrutura formada por agregado graúdo e matriz asfáltica.',
    items: [
      {
        id: 'sma-stone-matrix-asphalt-item',
        name: 'SMA – Stone Matrix Asphalt',
        technicalDescription:
          'Mistura de alto desempenho com esqueleto pétreo descontínuo, elevado contato pedra-pedra e mástique asfáltico estabilizado, normalmente utilizando ligante modificado.',
        application: 'Rodovias, concessionárias, tráfego pesado e revestimentos de alta solicitação.',
        normTag: 'SMA Especial',
      },
    ],
  },
  {
    id: 'asfalto-borracha',
    number: 8,
    name: 'Asfalto-Borracha',
    badge: 'Ecológico / Durabilidade',
    description:
      'Misturas asfálticas produzidas com asfalto-borracha para aplicações específicas de pavimentação.',
    items: [
      {
        id: 'cauq-asfalto-borracha-faixa-i',
        name: 'CAUQ com Asfalto-Borracha Faixa I',
        technicalDescription:
          'Concreto asfáltico produzido com cimento asfáltico modificado por borracha moída de pneus, conforme graduação específica.',
        application: 'Revestimentos rodoviários de maior desempenho.',
        normTag: 'Borracha Faixa I',
      },
      {
        id: 'cauq-asfalto-borracha-faixa-ii',
        name: 'CAUQ com Asfalto-Borracha Faixa II',
        technicalDescription:
          'Mistura asfáltica com ligante modificado por borracha, em graduação própria.',
        application: 'Camadas intermediárias ou de revestimento conforme projeto.',
        normTag: 'Borracha Faixa II',
      },
      {
        id: 'cauq-asfalto-borracha-faixa-iii',
        name: 'CAUQ com Asfalto-Borracha Faixa III',
        technicalDescription:
          'Mistura asfáltica com ligante modificado por borracha, produto já identificado em fornecimentos públicos da Asforte.',
        application: 'Camada de rolamento e pavimentos sujeitos a tráfego relevante.',
        normTag: 'Borracha Faixa III',
      },
      {
        id: 'cauq-asfalto-borracha-faixa-iv',
        name: 'CAUQ com Asfalto-Borracha Faixa IV',
        technicalDescription:
          'Variante granulométrica mais fina da família de concreto asfáltico com borracha.',
        application: 'Revestimento e aplicações específicas conforme projeto.',
        normTag: 'Borracha Faixa IV',
      },
    ],
  },
  {
    id: 'alto-modulo',
    number: 9,
    name: 'Alto Módulo',
    badge: 'Alta Capacidade Estrutural',
    description:
      'Mistura asfáltica com asfalto de alto módulo para aplicações estruturais conforme projeto.',
    items: [
      {
        id: 'cbuq-alto-modulo-10-20-15-25',
        name: 'CBUQ com Asfalto Alto Módulo 10/20 e 15/25',
        technicalDescription:
          'Concreto asfáltico usinado a quente produzido com ligante asfáltico de alta consistência, nas classes 10/20 ou 15/25, proporcionando elevada rigidez e maior capacidade de suporte às solicitações do pavimento.',
        application: 'Camadas estruturais de pavimentos, especialmente base e binder, indicadas para vias e rodovias submetidas a tráfego pesado e elevadas solicitações.',
        normTag: 'Classes 10/20 & 15/25',
      },
    ],
  },
  {
    id: 'base-asfaltica',
    number: 10,
    name: 'Base Asfáltica',
    badge: 'Camada Estrutural',
    description:
      'Material destinado a aplicações estruturais dentro da composição do pavimento.',
    items: [
      {
        id: 'base-negra-bn-25-d',
        name: 'Base Negra – BN-25 D',
        technicalDescription:
          'Mistura asfáltica usinada destinada à execução de camada estrutural de base do pavimento, composta por agregados minerais e ligante asfáltico, conforme granulometria e projeto de dosagem aplicável.',
        application: 'Camada de base asfáltica situada abaixo das camadas de ligação e/ou rolamento, utilizada para aumentar a capacidade estrutural do pavimento.',
        normTag: 'BN-25 D',
      },
    ],
  },
  {
    id: 'pre-misturado-a-quente',
    number: 11,
    name: 'Pré-Misturado a Quente',
    badge: 'PMQ DER',
    description:
      'Misturas asfálticas produzidas conforme especificações para diferentes aplicações de pavimentação.',
    items: [
      {
        id: 'pmq-faixa-i',
        name: 'PMQ Faixa I',
        technicalDescription:
          'Pré-misturado a quente de graduação mais graúda segundo especificação DER.',
        application: 'Camadas de base ou ligação conforme projeto.',
        normTag: 'DER Faixa I',
      },
      {
        id: 'pmq-faixa-ii',
        name: 'PMQ Faixa II',
        technicalDescription:
          'Pré-misturado a quente de graduação intermediária.',
        application: 'Base, binder e aplicações intermediárias.',
        normTag: 'DER Faixa II',
      },
      {
        id: 'pmq-faixa-iii',
        name: 'PMQ Faixa III',
        technicalDescription:
          'Pré-misturado a quente de graduação mais fina entre as graduações previstas pelo DER.',
        application: 'Revestimento e aplicações específicas conforme projeto.',
        normTag: 'DER Faixa III',
      },
    ],
  },
  {
    id: 'mistura-drenante',
    number: 12,
    name: 'Mistura Drenante',
    badge: 'Segurança Hidráulica',
    description:
      'Mistura asfáltica desenvolvida para aplicações que demandam características drenantes.',
    items: [
      {
        id: 'cpa-camada-porosa-de-atrito',
        name: 'CPA – Camada Porosa de Atrito',
        technicalDescription:
          'Mistura asfáltica aberta, com elevado volume de vazios e ligante modificado, projetada para permitir drenagem superficial através da camada.',
        application: 'Camada de rolamento drenante em rodovias, especialmente onde o desempenho em pista molhada é relevante.',
        normTag: 'CPA Drenante',
      },
    ],
  },
  {
    id: 'microrrevestimento',
    number: 13,
    name: 'Microrrevestimento',
    badge: 'Manutenção / Revestimento Fino',
    description:
      'Material destinado a aplicações específicas de manutenção e conservação de pavimentos.',
    items: [
      {
        id: 'microrrevestimento-asfaltico-a-quente',
        name: 'Microrrevestimento Asfáltico a Quente',
        technicalDescription:
          'Revestimento asfáltico delgado usinado a quente, normalmente utilizando ligante modificado por polímero.',
        application: 'Recuperação superficial e camada de rolamento de pequena espessura.',
        normTag: 'Delgado a Quente',
      },
    ],
  },
  {
    id: 'mistura-morna',
    number: 14,
    name: 'Mistura Morna',
    badge: 'Sustentabilidade / Menor Emissão',
    description:
      'Mistura asfáltica produzida com tecnologia de menor temperatura de usinagem.',
    items: [
      {
        id: 'wma-mistura-asfaltica-morna',
        name: 'WMA – Mistura Asfáltica Morna',
        technicalDescription:
          'Mistura asfáltica produzida em temperatura inferior à mistura quente convencional mediante tecnologia/aditivação específica.',
        application: 'Rolamento, binder, regularização e outras camadas, conforme projeto.',
        normTag: 'WMA Morna',
      },
    ],
  },
  {
    id: 'reciclado',
    number: 16,
    name: 'Reciclado',
    badge: 'Economia Circular / RAP',
    description:
      'Materiais asfálticos reciclados para aplicações conforme necessidade do projeto.',
    items: [
      {
        id: 'cauq-reciclado-usina-rap',
        name: 'CAUQ Reciclado em Usina com RAP',
        technicalDescription:
          'Concreto asfáltico produzido incorporando material fresado recuperado — RAP — juntamente com agregados e ligante novo, conforme dosagem.',
        application: 'Base, binder, regularização, reforço ou revestimento conforme especificação.',
        normTag: 'RAP Usina',
      },
      {
        id: 'mistura-asfaltica-morna-rap',
        name: 'Mistura Asfáltica Morna com RAP',
        technicalDescription:
          'Mistura que combina tecnologia de produção morna com incorporação de pavimento asfáltico recuperado.',
        application: 'Pavimentação com redução de temperatura e reaproveitamento de material reciclado, conforme projeto.',
        normTag: 'WMA + RAP',
      },
      {
        id: 'rap-fresado-beneficiado',
        name: 'RAP / Fresado Asfáltico Beneficiado',
        technicalDescription:
          'Material proveniente da fresagem de pavimentos, segregado, processado e caracterizado para reutilização.',
        application: 'Matéria-prima para misturas recicladas e outras aplicações tecnicamente aprovadas.',
        normTag: 'RAP Beneficiado',
      },
    ],
  },
  {
    id: 'areia-asfalto',
    number: 17,
    name: 'Areia-Asfalto',
    badge: 'Agregado Miúdo',
    description:
      'Mistura asfáltica produzida com areia e ligante asfáltico para aplicações específicas.',
    items: [
      {
        id: 'aauq-areia-asfalto-usinada-a-quente',
        name: 'AAUQ – Areia-Asfalto Usinada a Quente',
        technicalDescription:
          'Mistura usinada a quente constituída predominantemente por agregado miúdo, fíler/material de enchimento e cimento asfáltico.',
        application: 'Revestimento, base, regularização ou reforço do pavimento.',
        normTag: 'AAUQ',
      },
    ],
  },
];
