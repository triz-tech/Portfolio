import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Eye,
  Layers,
  MousePointer2,
  Palette,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';

type Mode = 'quick' | 'explore' | null;

type Focus =
  | 'Frontend'
  | 'Full Stack'
  | 'Produto & UX'
  | 'Dados'
  | 'Só explorando';

interface LensProject {
  title: string;
  eyebrow: string;
  description: string;
  techs: string[];
  focuses: Focus[];
  route?: string;
  link?: string;
}

const focusOptions: {
  label: Focus;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    label: 'Frontend',
    description: 'Interfaces, responsividade e experiência.',
    icon: <Code2 size={17} />,
  },
  {
    label: 'Full Stack',
    description: 'Produto, banco, autenticação e regras.',
    icon: <Layers size={17} />,
  },
  {
    label: 'Produto & UX',
    description: 'Ideia, fluxo, interface e decisões.',
    icon: <Palette size={17} />,
  },
  {
    label: 'Dados',
    description: 'Estrutura, informação e lógica.',
    icon: <Database size={17} />,
  },
  {
    label: 'Só explorando',
    description: 'Sem filtro. Quero conhecer tudo.',
    icon: <Eye size={17} />,
  },
];

const lensProjects: LensProject[] = [
  {
    title: 'AUX',
    eyebrow: 'SOCIAL PRODUCT · FULL STACK',
    description:
      'Rede social de música com reviews, memórias, perfis, interações sociais e integrações musicais.',
    techs: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
    focuses: ['Frontend', 'Full Stack', 'Produto & UX', 'Dados'],
    route: '/aux',
  },
  {
    title: 'Elias & Ezequiel',
    eyebrow: 'REAL PROJECT · FULL STACK',
    description:
      'Aplicação real de rifa com reservas automáticas, controle de disponibilidade, Pix e painel administrativo.',
    techs: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    focuses: ['Frontend', 'Full Stack', 'Produto & UX', 'Dados'],
    link: 'https://cha-elias-ezequiel.vercel.app/',
  },
  {
    title: 'Flow',
    eyebrow: 'PRODUCT · DATA · SOFTWARE',
    description:
      'Projeto voltado a produto, operação e organização de informações em uma experiência digital.',
    techs: ['React', 'TypeScript', 'Product', 'Data'],
    focuses: ['Frontend', 'Produto & UX', 'Dados'],
    link: 'https://prumo-fawn-nine.vercel.app/',
  },
  {
    title: 'Meu Portfólio',
    eyebrow: 'PERSONAL PROJECT · FRONTEND',
    description:
      'O próprio ambiente que você está navegando, pensado como produto e experiência digital.',
    techs: ['React', 'TypeScript', 'Vite', 'UX/UI'],
    focuses: ['Frontend', 'Produto & UX'],
    route: '/',
  },
];

const skillGroups = [
  {
    icon: <Code2 size={18} />,
    title: 'Interface',
    text: 'React, Next.js, TypeScript, responsividade e componentes.',
  },
  {
    icon: <Database size={18} />,
    title: 'Dados',
    text: 'PostgreSQL, Supabase, modelagem e regras de acesso.',
  },
  {
    icon: <Palette size={18} />,
    title: 'Produto',
    text: 'UX/UI, fluxos, decisões de produto e prototipação.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Entrega',
    text: 'Deploy, integração, testes e produto funcionando.',
  },
];

export default function Lens() {
  const [mode, setMode] = useState<Mode>(null);
  const [selected, setSelected] = useState<Focus[]>([]);

  const toggleFocus = (focus: Focus) => {
    if (focus === 'Só explorando') {
      setSelected(['Só explorando']);
      return;
    }

    setSelected((current) => {
      const withoutExplore = current.filter(
        (item) => item !== 'Só explorando'
      );

      return withoutExplore.includes(focus)
        ? withoutExplore.filter((item) => item !== focus)
        : [...withoutExplore, focus];
    });
  };

  const filteredProjects = useMemo(() => {
    if (
      selected.length === 0 ||
      selected.includes('Só explorando')
    ) {
      return lensProjects.map((project) => ({
        ...project,
        matches: null,
      }));
    }

    return lensProjects
      .map((project) => ({
        ...project,
        matches: selected.filter((focus) =>
          project.focuses.includes(focus)
        ).length,
      }))
      .filter((project) => project.matches > 0)
      .sort((a, b) => (b.matches ?? 0) - (a.matches ?? 0));
  }, [selected]);

  const reset = () => {
    setMode(null);
    setSelected([]);
  };

  return (
    <div className="pt-20 bg-ink-50 min-h-screen">
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">

          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors mb-12"
          >
            <ArrowLeft size={15} />
            voltar aos projetos
          </Link>

          <AnimatePresence mode="wait">

            {!mode && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="font-mono text-xs text-ink-400">
                    06
                  </span>
                  <span className="h-px w-8 bg-ink-300" />
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                    LENS
                  </span>
                </div>

                <div className="max-w-4xl">
                  <h1 className="font-serif text-5xl md:text-7xl lg:text-[86px] font-medium leading-[0.95] tracking-[-0.04em] text-ink-950">
                    Um portfólio não precisa ser igual para todo mundo.
                  </h1>

                  <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-2xl leading-relaxed">
                    Escolha como você quer me conhecer e o Lens reorganiza
                    meus projetos, habilidades e experiências para mostrar
                    primeiro o que faz sentido para você.
                  </p>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">

                  <button
                    onClick={() => setMode('quick')}
                    className="group text-left rounded-[28px] bg-ink-950 text-white p-7 md:p-9 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-11 h-11 rounded-2xl bg-white/10 grid place-items-center">
                        <Zap size={18} />
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-white/40 group-hover:text-white transition-colors"
                      />
                    </div>

                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 mt-12">
                      modo rápido
                    </span>

                    <h2 className="font-serif text-3xl md:text-4xl mt-2">
                      Tenho 30 segundos.
                    </h2>

                    <p className="text-sm text-white/50 mt-4 max-w-sm leading-relaxed">
                      Uma versão curta com o essencial sobre mim, minha
                      stack e os projetos que melhor representam meu trabalho.
                    </p>
                  </button>

                  <button
                    onClick={() => setMode('explore')}
                    className="group text-left rounded-[28px] bg-white border border-ink-200 p-7 md:p-9 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-11 h-11 rounded-2xl bg-ink-100 text-ink-700 grid place-items-center">
                        <MousePointer2 size={18} />
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-ink-300 group-hover:text-ink-900 transition-colors"
                      />
                    </div>

                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400 mt-12">
                      modo interativo
                    </span>

                    <h2 className="font-serif text-3xl md:text-4xl text-ink-900 mt-2">
                      Quero fuçar.
                    </h2>

                    <p className="text-sm text-ink-500 mt-4 max-w-sm leading-relaxed">
                      Me diga o que você procura e eu mostro os projetos
                      mais relacionados à sua escolha.
                    </p>
                  </button>

                </div>
              </motion.div>
            )}

            {mode === 'quick' && (
              <motion.div
                key="quick"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-ink-900 mb-10"
                >
                  <RotateCcw size={13} />
                  escolher outro modo
                </button>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                  BEATRIZ EM 30 SEGUNDOS
                </span>

                <h1 className="font-serif text-5xl md:text-7xl text-ink-950 mt-5 max-w-4xl leading-[0.98]">
                  Eu gosto de transformar ideia em coisa que funciona.
                </h1>

                <p className="mt-7 text-lg text-ink-500 leading-relaxed max-w-2xl">
                  Estudante de Sistemas de Informação com foco em desenvolvimento
                  web. Construo interfaces, penso produto e gosto de entender
                  também o que acontece depois do botão.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
                  {skillGroups.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] bg-white border border-ink-200 p-6"
                    >
                      <span className="w-10 h-10 rounded-xl bg-ink-100 grid place-items-center text-ink-600">
                        {item.icon}
                      </span>

                      <h3 className="font-serif text-xl mt-7 text-ink-900">
                        {item.title}
                      </h3>

                      <p className="text-xs text-ink-500 leading-relaxed mt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-20">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                    SE FOR VER SÓ TRÊS COISAS
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                    <QuickProject
                      number="01"
                      title="AUX"
                      text="Produto social full stack, da identidade visual ao banco."
                      route="/aux"
                    />

                    <QuickProject
                      number="02"
                      title="Elias & Ezequiel"
                      text="Aplicação real com reservas, dados e painel administrativo."
                      link="https://cha-elias-ezequiel.vercel.app/"
                    />

                    <QuickProject
                      number="03"
                      title="Flow"
                      text="Produto digital pensado para organização, operação e experiência."
                      link="https://prumo-fawn-nine.vercel.app/"
                    />

                  </div>
                </div>

                <div className="mt-16 flex flex-wrap gap-2">
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Supabase',
                    'PostgreSQL',
                    'UX/UI',
                    'Product',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink-200 bg-white px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-ink-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-14">
                  <Link
                    to="/contato"
                    className="group inline-flex items-center gap-2 bg-ink-950 text-white rounded-full px-5 py-3 text-sm"
                  >
                    falar comigo
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            )}

            {mode === 'explore' && (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-ink-900 mb-10"
                >
                  <RotateCcw size={13} />
                  começar de novo
                </button>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                  PERSONALIZE A EXPERIÊNCIA
                </span>

                <h1 className="font-serif text-5xl md:text-7xl text-ink-950 mt-5 max-w-3xl leading-[0.98]">
                  O que você veio procurar?
                </h1>

                <p className="mt-6 text-ink-500 max-w-xl leading-relaxed">
                  Pode escolher mais de uma opção. Os projetos abaixo mudam
                  conforme o que importa para você.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-12">
                  {focusOptions.map((option) => {
                    const active = selected.includes(option.label);

                    return (
                      <button
                        key={option.label}
                        onClick={() => toggleFocus(option.label)}
                        className={[
                          'relative text-left rounded-[22px] border p-5 min-h-[150px] transition-all',
                          active
                            ? 'bg-ink-950 border-ink-950 text-white'
                            : 'bg-white border-ink-200 text-ink-900 hover:border-ink-400',
                        ].join(' ')}
                      >
                        <div className="flex justify-between items-start">
                          <span
                            className={[
                              'w-9 h-9 rounded-xl grid place-items-center',
                              active
                                ? 'bg-white/10'
                                : 'bg-ink-100 text-ink-600',
                            ].join(' ')}
                          >
                            {option.icon}
                          </span>

                          {active && (
                            <span className="w-5 h-5 rounded-full bg-white text-ink-950 grid place-items-center">
                              <Check size={12} />
                            </span>
                          )}
                        </div>

                        <strong className="block text-sm mt-7">
                          {option.label}
                        </strong>

                        <span
                          className={[
                            'block text-[10px] leading-relaxed mt-1',
                            active ? 'text-white/45' : 'text-ink-400',
                          ].join(' ')}
                        >
                          {option.description}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-20 flex items-end justify-between gap-8 border-b border-ink-200 pb-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">
                      SUA LENTE
                    </span>

                    <h2 className="font-serif text-3xl md:text-4xl text-ink-900 mt-2">
                      {selected.length === 0
                        ? 'Escolha um foco para começar.'
                        : selected.includes('Só explorando')
                          ? 'Tudo, sem filtro.'
                          : selected.join(' + ')}
                    </h2>
                  </div>

                  {selected.length > 0 && (
                    <button
                      onClick={() => setSelected([])}
                      className="text-xs text-ink-400 hover:text-ink-900"
                    >
                      limpar
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
                  {filteredProjects.map((project, index) => (
                    <motion.article
                      layout
                      key={project.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="rounded-[28px] border border-ink-200 bg-white p-6 md:p-7 flex flex-col min-h-[300px]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-ink-400">
                          {project.eyebrow}
                        </span>

                        {project.matches !== null &&
                          selected.length > 0 && (
                            <span className="font-mono text-[9px] text-ink-400 whitespace-nowrap">
                              {project.matches}/{selected.length} critérios
                            </span>
                          )}
                      </div>

                      <h3 className="font-serif text-3xl text-ink-900 mt-8">
                        {project.title}
                      </h3>

                      <p className="text-sm text-ink-500 leading-relaxed mt-3 max-w-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-7">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1.5 font-mono text-[9px] text-ink-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-7">
                        {project.route ? (
                          <Link
                            to={project.route}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900"
                          >
                            explorar
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </Link>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900"
                          >
                            explorar
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>

                <div className="mt-20 rounded-[30px] bg-ink-950 text-white p-7 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">

                    <div>
                      <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                        <Sparkles size={12} />
                        por trás do experimento
                      </span>

                      <h2 className="font-serif text-4xl md:text-5xl mt-5 max-w-2xl leading-tight">
                        O Lens também é parte do portfólio.
                      </h2>

                      <p className="text-sm text-white/50 leading-relaxed mt-5 max-w-xl">
                        A ideia é tratar o portfólio como produto: em vez de
                        obrigar todo mundo a percorrer a mesma sequência,
                        a interface responde ao interesse de quem está olhando.
                      </p>
                    </div>

                    <Link
                      to="/contato"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-5 py-3 text-sm font-medium"
                    >
                      contato
                      <ArrowUpRight size={14} />
                    </Link>

                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

function QuickProject({
  number,
  title,
  text,
  route,
  link,
}: {
  number: string;
  title: string;
  text: string;
  route?: string;
  link?: string;
}) {
  const content = (
    <div className="group rounded-[24px] bg-white border border-ink-200 p-6 h-full transition-transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] text-ink-400">
          {number}
        </span>

        <ArrowUpRight
          size={15}
          className="text-ink-300 group-hover:text-ink-900 transition-colors"
        />
      </div>

      <h3 className="font-serif text-2xl text-ink-900 mt-10">
        {title}
      </h3>

      <p className="text-xs text-ink-500 leading-relaxed mt-3">
        {text}
      </p>
    </div>
  );

  if (route) {
    return <Link to={route}>{content}</Link>;
  }

  return (
    <a href={link} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}