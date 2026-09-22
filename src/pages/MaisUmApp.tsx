import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Globe2,
  HardDrive,
  Home,
  Link2,
  PackageOpen,
  Pizza,
  Share,
  Smartphone,
  Sparkles,
  Store,
  X,
  Zap,
} from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.45 },
};

const appSteps = [
  'Abrir a loja',
  'Encontrar o aplicativo',
  'Baixar',
  'Esperar instalar',
  'Abrir',
  'Criar conta',
  'Entrar',
  'Finalmente pedir',
];

const webSteps = [
  'Abrir o link',
  'Escolher',
  'Pedir',
];

export default function MaisUmApp() {
  const [flow, setFlow] = useState<'app' | 'web'>('app');

  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallHelp, setShowInstallHelp] = useState(false);

  useEffect(() => {
    const navigatorWithStandalone = window.navigator as Navigator & {
      standalone?: boolean;
    };

    const ios =
      /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
      !(window as Window & { MSStream?: unknown }).MSStream;

    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      navigatorWithStandalone.standalone === true;

    setIsIOS(ios);
    setIsStandalone(standalone);

    const handleBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstall
    );

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstall
      );
    };
  }, []);

  const handleInstall = async () => {
    if (isStandalone) return;

    if (installPrompt) {
      await installPrompt.prompt();
      const result = await installPrompt.userChoice;

      if (result.outcome === 'accepted') {
        setInstallPrompt(null);
      }

      return;
    }

    setShowInstallHelp(true);
  };

  return (
    <div className="pt-20 bg-ink-50 text-ink-900">

      {/* HERO */}
      <section className="section-py border-b border-ink-100 overflow-hidden">
        <div className="container-px max-w-6xl mx-auto">

          <Link
            to="/lab"
            className="group inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-900 transition-colors mb-12"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            voltar ao lab
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="font-mono text-xs text-ink-400">
                EXPERIMENTO
              </span>

              <span className="h-px w-8 bg-ink-300" />

              <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                PRODUCT THINKING · WEB
              </span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-[0.84] tracking-[-0.055em] text-ink-950">
              Você não precisa
              <br />
              de mais um app.
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
              <p className="text-xl md:text-2xl text-ink-500 max-w-2xl leading-[1.35]">
                Às vezes você só quer
                <span className="text-ink-950"> pedir uma pizza.</span>
              </p>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">
                um pequeno manifesto da web
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPENING */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-14">

            <span className="font-mono text-xs text-ink-400">
              01 / A PERGUNTA
            </span>

            <motion.div {...reveal} className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em]">
                Quando foi que todo serviço decidiu que precisava morar no meu celular?
              </h2>

              <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-ink-500">
                <p>
                  Restaurante, loja, farmácia, mercado, academia, estacionamento.
                  Cada negócio parece chegar à mesma conclusão: se existe digitalmente,
                  precisa ter um aplicativo.
                </p>

                <p>
                  Só que instalar não é gratuito para quem está do outro lado.
                  Existe armazenamento, cadastro, senha, notificações, atualização e,
                  principalmente, <strong className="text-ink-800">mais uma coisa para lembrar que existe.</strong>
                </p>
              </div>

              <blockquote className="mt-12 border-l-2 border-ink-900 pl-6 py-1 font-serif text-2xl md:text-3xl text-ink-900 leading-snug">
                Um app deveria ser consequência de um hábito.
                Não pré-requisito para uma compra.
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FRICTION */}
      <section className="section-py border-b border-ink-100 bg-white">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div {...reveal}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              02 / UM EXEMPLO
            </span>

            <h2 className="font-serif text-4xl md:text-6xl max-w-3xl mt-5 leading-[1.03]">
              Eu só queria pedir a pizza.
            </h2>

            <p className="mt-5 text-ink-500 max-w-xl leading-relaxed">
              O mesmo objetivo. Duas portas de entrada.
              Este não é um benchmark científico, só uma ilustração de atrito.
            </p>
          </motion.div>

          <div className="mt-12 rounded-[32px] border border-ink-200 overflow-hidden">

            <div className="grid grid-cols-2 border-b border-ink-200">
              <button
                onClick={() => setFlow('app')}
                className={[
                  'p-5 md:p-6 text-left transition-colors',
                  flow === 'app'
                    ? 'bg-ink-950 text-white'
                    : 'bg-white text-ink-400 hover:text-ink-900',
                ].join(' ')}
              >
                <Smartphone size={18} />

                <span className="block font-serif text-xl md:text-2xl mt-5">
                  Instalar o app
                </span>
              </button>

              <button
                onClick={() => setFlow('web')}
                className={[
                  'p-5 md:p-6 text-left transition-colors border-l border-ink-200',
                  flow === 'web'
                    ? 'bg-ink-950 text-white'
                    : 'bg-white text-ink-400 hover:text-ink-900',
                ].join(' ')}
              >
                <Globe2 size={18} />

                <span className="block font-serif text-xl md:text-2xl mt-5">
                  Abrir o site
                </span>
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={flow}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">

                  <div className="space-y-0">
                    {(flow === 'app' ? appSteps : webSteps).map(
                      (step, index) => (
                        <div
                          key={step}
                          className="flex items-center gap-4 py-4 border-b border-ink-100 last:border-b-0"
                        >
                          <span className="font-mono text-[9px] text-ink-300 w-6">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className="text-sm text-ink-700">
                            {step}
                          </span>

                          {index ===
                            (flow === 'app'
                              ? appSteps.length - 1
                              : webSteps.length - 1) && (
                            <Pizza
                              size={15}
                              className="ml-auto text-ink-400"
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>

                  <div className="md:w-48">
                    <div className="rounded-[24px] bg-ink-50 border border-ink-100 p-6">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">
                        neste exemplo
                      </span>

                      <strong className="block font-serif text-6xl mt-5">
                        {flow === 'app'
                          ? appSteps.length
                          : webSteps.length}
                      </strong>

                      <span className="text-xs text-ink-400">
                        etapas até a pizza
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* IFOOD */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-14">
            <span className="font-mono text-xs text-ink-400">
              03 / A EXCEÇÃO
            </span>

            <motion.div {...reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-ink-500">
                <Store size={12} />
                marketplace
              </span>

              <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.035em] mt-6 max-w-4xl">
                O iFood ganhou o direito de ocupar espaço.
              </h2>

              <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-ink-500 max-w-4xl">
                <p>
                  O valor de um marketplace está justamente na concentração.
                  Um único aplicativo pode resolver pizza hoje, sushi amanhã,
                  mercado depois e milhares de outros possíveis pedidos.
                </p>

                <p>
                  Nesse contexto, instalar faz sentido porque o aplicativo não
                  representa um restaurante. Ele representa
                  <strong className="text-ink-800"> uma categoria inteira de necessidade.</strong>
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard
                  value="12%"
                  label="comissão publicada no plano Básico"
                />
                <StatCard
                  value="23%"
                  label="comissão publicada no plano Entrega"
                />
                <StatCard
                  value="3,2%"
                  label="taxa publicada para pagamento via iFood"
                />
              </div>

              <p className="font-mono text-[9px] uppercase tracking-wider text-ink-300 mt-4">
                valores exibidos pelo iFood para restaurantes na consulta deste experimento
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESTAURANT APP */}
      <section className="section-py border-b border-ink-100 bg-ink-950 text-white">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div {...reveal} className="max-w-4xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              04 / O PARADOXO
            </span>

            <h2 className="font-serif text-4xl md:text-7xl leading-[1] mt-6">
              Sair do intermediário faz sentido.
              <br />
              Virar mais um app, talvez não.
            </h2>

            <p className="mt-8 text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
              Para um restaurante, criar um canal próprio pode significar
              relacionamento direto, promoções próprias e menor dependência de
              plataformas de terceiros.
            </p>

            <p className="mt-5 text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
              Mas <strong className="text-white">canal próprio não é sinônimo de aplicativo.</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">

            <DarkCard
              icon={<Download size={18} />}
              title="A empresa pensa"
              text="Se a pessoa instalar meu app, eu tenho um canal direto."
            />

            <DarkCard
              icon={<HardDrive size={18} />}
              title="A pessoa pensa"
              text="Eu realmente vou manter um aplicativo para algo que uso uma vez por mês?"
            />

            <DarkCard
              icon={<Globe2 size={18} />}
              title="A web pergunta"
              text="Por que não entregar o mesmo pedido imediatamente por uma URL?"
            />

          </div>
        </div>
      </section>

      {/* DATA */}
      <section className="section-py border-b border-ink-100 bg-white">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div
            {...reveal}
            className="grid grid-cols-1 lg:grid-cols-[.75fr_1.25fr] gap-10 lg:gap-20 items-center"
          >
            <div>
              <span className="font-serif text-[110px] md:text-[160px] leading-[0.8] tracking-[-0.08em] text-ink-950">
                44%
              </span>

              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400 mt-8">
                pesquisa Mobile Time / Opinion Box
              </span>
            </div>

            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Quase metade dos brasileiros pesquisados disse precisar apagar apps para instalar outros.
              </h2>

              <p className="text-sm md:text-base text-ink-500 leading-relaxed mt-7 max-w-2xl">
                Na pesquisa de 2024, 10% disseram precisar liberar memória
                sempre e outros 34% de vez em quando. O levantamento ouviu
                1.176 brasileiros com smartphone.
              </p>

              <p className="text-sm md:text-base text-ink-500 leading-relaxed mt-5 max-w-2xl">
                E 42% disseram já ter desistido de baixar um aplicativo por
                falta de espaço.
              </p>

              <div className="mt-9 border-l-2 border-ink-900 pl-6">
                <p className="font-serif text-2xl md:text-3xl leading-snug">
                  Mas talvez armazenamento nem seja o custo mais interessante.
                  Atenção também ocupa espaço.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WEBSITE AS WAITING ROOM */}
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div {...reveal} className="max-w-5xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              05 / A WEB
            </span>

            <h2 className="font-serif text-4xl md:text-7xl leading-[1] mt-6">
              Transformamos o site em sala de espera do aplicativo.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">

            <motion.div
              {...reveal}
              className="rounded-[28px] border border-ink-200 bg-white p-7 md:p-9"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink-400">
                hoje
              </span>

              <div className="mt-10 rounded-2xl border border-ink-200 p-5">
                <strong className="block text-lg">
                  Baixe nosso app!
                </strong>

                <p className="text-xs text-ink-400 mt-2">
                  Tenha uma experiência melhor.
                </p>

                <button className="mt-5 rounded-full bg-ink-950 text-white px-4 py-2 text-xs">
                  instalar
                </button>
              </div>

              <p className="text-sm text-ink-500 leading-relaxed mt-8">
                Muitas experiências pedem permanência antes de provar utilidade.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              className="rounded-[28px] bg-ink-950 text-white p-7 md:p-9"
            >
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/35">
                talvez
              </span>

              <h3 className="font-serif text-3xl md:text-4xl mt-10">
                Primeiro me dê utilidade.
                <br />
                Depois me peça permanência.
              </h3>

              <p className="text-sm text-white/45 leading-relaxed mt-8">
                Uma URL já é distribuível, compartilhável, pesquisável e
                imediatamente acessível.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="section-py border-b border-ink-100 bg-white">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div {...reveal}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              06 / UMA PROPOSTA
            </span>

            <h2 className="font-serif text-5xl md:text-8xl leading-[0.9] tracking-[-0.045em] mt-6">
              Web first.
              <br />
              App earned.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">

            <Stage
              number="01"
              title="Primeiro acesso"
              text="QR Code, Instagram, Google ou WhatsApp levam direto para o site. Nada para instalar."
            />

            <Stage
              number="02"
              title="Voltou?"
              text="O produto lembra preferências quando apropriado e reduz ainda mais o atrito."
            />

            <Stage
              number="03"
              title="Virou hábito?"
              text="Agora existe motivo para oferecer instalação, atalho, notificações ou uma experiência mais persistente."
            />

          </div>

          <motion.blockquote
            {...reveal}
            className="mt-20 max-w-4xl font-serif text-3xl md:text-5xl leading-[1.08] text-ink-900"
          >
            A pergunta não é “como fazemos nosso site virar um app?”.
            <span className="text-ink-400">
              {' '}É “o que nosso produto precisa fazer para merecer ser instalado?”.
            </span>
          </motion.blockquote>
        </div>
      </section>

      {/* INSTALL EXPERIMENT */}
      <section className="section-py">
        <div className="container-px max-w-6xl mx-auto">

          <motion.div
            {...reveal}
            className="relative overflow-hidden rounded-[36px] bg-ink-950 text-white p-8 md:p-14"
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl translate-x-1/3 -translate-y-1/3" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">

              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                  <Sparkles size={12} />
                  fim do manifesto
                </span>

                <h2 className="font-serif text-4xl md:text-7xl leading-[0.98] mt-6">
                  Isso tudo era por causa de um ícone na tela principal?
                </h2>

                <p className="text-sm md:text-base text-white/50 leading-relaxed mt-7 max-w-xl">
                  Tá bom. Você venceu. Coloque este portfólio na sua tela inicial.
                  A ironia faz parte do experimento.
                </p>
              </div>

              <button
                onClick={handleInstall}
                disabled={isStandalone}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white text-ink-950 px-6 py-4 text-sm font-medium disabled:opacity-40 disabled:cursor-default"
              >
                {isStandalone ? (
                  <>
                    <Check size={16} />
                    já está instalado
                  </>
                ) : (
                  <>
                    <Home size={16} />
                    quero meu ícone
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

            </div>
          </motion.div>

          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-300">
              às vezes um site já era o aplicativo
            </p>

            <Link
              to="/lab"
              className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900"
            >
              voltar ao lab
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALL HELP */}
      <AnimatePresence>
        {showInstallHelp && (
          <>
            <motion.button
              aria-label="Fechar"
              onClick={() => setShowInstallHelp(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 30,
              }}
              className="fixed z-50 bottom-0 inset-x-0 bg-white rounded-t-[32px] border-t border-ink-200 p-6 md:p-8"
            >
              <div className="max-w-xl mx-auto">

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">
                      {isIOS
                        ? 'IPHONE · SAFARI'
                        : 'ADICIONAR À TELA INICIAL'}
                    </span>

                    <h3 className="font-serif text-3xl text-ink-950 mt-3">
                      Parabéns. Você está instalando um site.
                    </h3>
                  </div>

                  <button
                    onClick={() => setShowInstallHelp(false)}
                    className="w-9 h-9 rounded-full bg-ink-100 grid place-items-center"
                  >
                    <X size={16} />
                  </button>
                </div>

                {isIOS ? (
                  <div className="mt-8 space-y-3">
                    <InstallStep
                      number="1"
                      icon={<Share size={15} />}
                      text="No Safari, toque em Compartilhar."
                    />

                    <InstallStep
                      number="2"
                      icon={<Home size={15} />}
                      text="Escolha Adicionar à Tela de Início."
                    />

                    <InstallStep
                      number="3"
                      icon={<Smartphone size={15} />}
                      text="Ative Abrir como App Web."
                    />

                    <InstallStep
                      number="4"
                      icon={<Check size={15} />}
                      text="Toque em Adicionar. Pronto."
                    />
                  </div>
                ) : (
                  <div className="mt-8">
                    <p className="text-sm text-ink-500 leading-relaxed">
                      Seu navegador não disponibilizou um prompt automático.
                      Abra o menu do navegador e procure por
                      <strong className="text-ink-800">
                        {' '}“Adicionar à tela inicial”
                      </strong>
                      {' '}ou
                      <strong className="text-ink-800">
                        {' '}“Instalar app”
                      </strong>.
                    </p>
                  </div>
                )}

                <p className="font-mono text-[8px] uppercase tracking-wider text-ink-300 mt-8">
                  nenhum app store foi ferido durante este experimento
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[24px] border border-ink-200 bg-white p-6">
      <strong className="block font-serif text-4xl text-ink-950">
        {value}
      </strong>

      <span className="block text-xs text-ink-400 leading-relaxed mt-3">
        {label}
      </span>
    </div>
  );
}

function DarkCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      {...reveal}
      className="rounded-[26px] border border-white/10 bg-white/5 p-6 md:p-7 min-h-[250px] flex flex-col"
    >
      <span className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-white/70">
        {icon}
      </span>

      <h3 className="font-serif text-2xl mt-10">
        {title}
      </h3>

      <p className="text-sm text-white/45 leading-relaxed mt-3">
        {text}
      </p>
    </motion.article>
  );
}

function Stage({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      {...reveal}
      className="rounded-[26px] border border-ink-200 bg-ink-50 p-6 md:p-7 min-h-[260px] flex flex-col"
    >
      <span className="font-mono text-[9px] text-ink-300">
        {number}
      </span>

      <h3 className="font-serif text-2xl text-ink-900 mt-12">
        {title}
      </h3>

      <p className="text-sm text-ink-500 leading-relaxed mt-3">
        {text}
      </p>
    </motion.article>
  );
}

function InstallStep({
  number,
  icon,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-ink-50 border border-ink-100 p-4">
      <span className="w-8 h-8 rounded-full bg-ink-950 text-white grid place-items-center text-[10px] font-mono flex-none">
        {number}
      </span>

      <span className="text-ink-500">
        {icon}
      </span>

      <span className="text-sm text-ink-700">
        {text}
      </span>
    </div>
  );
}