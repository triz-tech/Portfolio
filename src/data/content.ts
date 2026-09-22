import {
  Code2,
  Database,
  GitBranch,
  Layout,
  FileCode2,
  Braces,
  Server,
  Zap,
  Globe,
  Layers,
  Component,
  Network,
  Table,
  FolderTree,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Beatriz L. L. Martins',
  role: 'Estudante de Sistemas de Informação e desenvolvedora em formação',
  location: 'Rio de Janeiro, RJ',
  email: 'triz.codes@gmail.com',
  github: 'https://github.com/triz-tech',
  linkedin: 'https://www.linkedin.com/in/trizdev/',
  interests: ['Desenvolvimento Web', 'Software', 'Dados', 'Experiências Digitais'],
};

export interface Technology {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const technologies: Technology[] = [
  {
    name: 'JavaScript',
    description: 'Desenvolvimento de interfaces e aplicações web interativas.',
    icon: Braces,
  },
  {
    name: 'TypeScript',
    description: 'Desenvolvimento de aplicações com código organizado e tipado.',
    icon: Code2,
  },
  {
    name: 'React',
    description: 'Construção de interfaces reutilizáveis e aplicações modernas.',
    icon: Component,
  },
  {
    name: 'Next.js',
    description: 'Desenvolvimento de aplicações web utilizando React e arquitetura moderna.',
    icon: Layers,
  },
  {
    name: 'Tailwind CSS',
    description: 'Construção de interfaces responsivas e sistemas visuais.',
    icon: Layout,
  },
  {
    name: 'Python',
    description: 'Estudos e desenvolvimento de soluções relacionadas a dados.',
    icon: FileCode2,
  },
  {
    name: 'SQL',
    description: 'Consulta, organização e manipulação de dados.',
    icon: Database,
  },
  {
    name: 'Git & GitHub',
    description: 'Versionamento, organização de código e colaboração.',
    icon: GitBranch,
  },
];

export const secondaryTechs: string[] = [
  'HTML5',
  'CSS3',
  'shadcn/ui',
  'REST API',
  'CRUD',
  'Node.js',
  'Vite',
];

export interface ExperienceItem {
  number: string;
  title: string;
  description: string;
}

export const experienceCards: ExperienceItem[] = [
  {
    number: '01',
    title: 'Dados & Indicadores',
    description: 'Organização, atualização e acompanhamento de informações e indicadores.',
  },
  {
    number: '02',
    title: 'Pacote Office',
    description: 'Utilização de Excel e ferramentas do Pacote Office para organização e análise de dados.',
  },
  {
    number: '03',
    title: 'SAP',
    description: 'Utilização de sistemas e acompanhamento de processos em ambiente corporativo.',
  },
  {
    number: '04',
    title: 'Processos',
    description: 'Organização de rotinas, controle de informações e apoio à melhoria dos processos.',
  },
];

export const experienceTags: string[] = [
  'Excel',
  'Pacote Office',
  'SAP',
  'Dados',
  'Indicadores',
  'Processos',
];

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  techs: string[];
  status?: string;
  route?: string;
  link?: string;
  linkLabel?: string;
  isPrivate?: boolean;
  isHere?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
  number: '01',
  category: 'PRODUCT · SOFTWARE · MANAGEMENT',
  title: 'Prumo',
  description:
    'Sistema de gestão pensado para negócios, conectando operação, estoque e presença digital em uma experiência simples e acessível.',
  techs: ['Next.js', 'TypeScript', 'Supabase', 'Product'],
  status: 'MVP PUBLICADO',
  link: 'https://prumo-fawn-nine.vercel.app/',
  linkLabel: 'Explorar',
  featured: true,
},
{
  number: '02',
  category: 'PRODUCT · FULL STACK · SOCIAL',
  title: 'AUX',
  description:
    'Uma rede social para transformar música em reviews, memórias e conversas. Do conceito ao produto publicado.',
  techs: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
  status: 'LIVE PRODUCT · EM DESENVOLVIMENTO',
  route: '/aux',
  featured: true,
},
  {
    number: '03',
    category: 'ACADEMIC PROJECT · WEB',
    title: 'Website para Arquitetura',
    description: 'Projeto acadêmico de desenvolvimento de um website para uma empresa de arquitetura, trabalhando apresentação visual, organização de conteúdo e experiência do usuário.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/triz-tech/imagemario-portfolio',
  },
  {
    number: '04',
    category: 'PERSONAL PROJECT · FRONTEND',
    title: 'Meu Portfólio',
    description: 'O próprio site que você está navegando. Criado para transformar minha trajetória, projetos e experimentos em uma experiência digital.',
    techs: ['React', 'TypeScript', 'Vite', 'CSS'],
    isHere: true,
  },

  {
  number: '05',
  category: 'REAL PROJECT · FULL STACK',
  title: 'Elias & Ezequiel',
  description:
    'Aplicação web desenvolvida para uma vaquinha real, com reserva automática de cotas, controle de disponibilidade, pagamento via Pix e painel administrativo integrado ao Supabase.',
  techs: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
  status: 'PUBLICADO · EM USO',
  link: 'https://cha-elias-ezequiel.vercel.app/',
  linkLabel: 'Explorar projeto'
},

{
  number: '06',
  category: 'EXPERIMENT · INTERACTIVE PORTFOLIO',
  title: 'Lens',
  description:
    'Uma forma diferente de explorar meu trabalho. Escolha o que você procura e o portfólio encontra os projetos, tecnologias e experiências mais relevantes.',
  techs: ['React', 'TypeScript', 'UX/UI', 'Interaction'],
  status: 'EXPERIMENTO INTERATIVO',
  route: '/lens',
  featured: true,
},
];

export const profileDetails = [
  { label: 'formação', value: 'Sistemas de Informação' },
  { label: 'foco', value: 'Desenvolvimento Web' },
  { label: 'interesses', value: 'Dados · Software · Produto' },
  { label: 'background', value: 'Audiovisual + Tecnologia' },
  { label: 'localização', value: 'Rio de Janeiro, RJ' },
  { label: 'objetivo', value: 'Oportunidade em Tecnologia' },
];

export const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Lab', to: '/lab' },
  { label: 'Contato', to: '/contato' },
];
