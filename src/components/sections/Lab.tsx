import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Coffee,
  Globe2,
  MousePointerClick,
  Smartphone,
} from 'lucide-react';

export default function Lab() {
  const [clicks, setClicks] = useState(0);
  const [coffeeReady, setCoffeeReady] = useState(false);
  const [coffeeGrinding, setCoffeeGrinding] = useState(false);

  const coffeeMessages = [
    '// alguma coisa está errada aqui',
    '// o café resolveu 3 bugs e criou 2 novos',
    '// status: cafeinado e pronto para commitar',
    '// git push --force com 80% de confiança',
    '// o bug não era um bug. era um feature.',
  ];

  const [coffeeMsg] = useState(
    () =>
      coffeeMessages[Math.floor(Math.random() * coffeeMessages.length)]
  );

  return (
    <section className="section-py border-t border-ink-100">
      <div className="container-px max-w-6xl mx-auto">

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Experiment 01 — Curiosity counter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-2xl border border-ink-200 bg-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <MousePointerClick
                size={16}
                className="text-ink-400"
              />

              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                EXPERIMENTO 01
              </span>
            </div>

            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3">
              Contador de curiosidade
            </h3>

            <p className="text-ink-500 text-sm leading-relaxed mb-8 text-pretty">
              Não tem nenhuma função importante. Eu só queria saber quantas
              vezes você clicaria.
            </p>

            <div className="text-center py-6">
              <motion.span
                key={clicks}
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-5xl font-medium text-ink-900 tabular-nums"
              >
                {clicks}
              </motion.span>

              <p className="font-mono text-xs text-ink-400 mt-2">
                {clicks === 1
                  ? 'curiosidade acumulada'
                  : 'curiosidades acumuladas'}
              </p>
            </div>

            <button
              onClick={() => setClicks((c) => c + 1)}
              className="w-full py-3 rounded-xl border border-ink-200 text-sm font-medium text-ink-700 hover:bg-ink-900 hover:text-ink-50 hover:border-ink-900 transition-all duration-300"
            >
              clicar por nenhum motivo
            </button>
          </motion.div>

          {/* Experiment 02 — Coffee break */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-8 rounded-2xl border border-ink-200 bg-white"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Coffee
                  size={16}
                  className="text-ink-400"
                />

                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                  EXPERIMENTO 02
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
                ONLINE
              </span>
            </div>

            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3">
              coffee.break
            </h3>

            {!coffeeReady ? (
              <>
                <p className="text-ink-500 text-sm leading-relaxed mb-8 text-pretty">
                  Prepare o café para desbloquear a conversa.
                </p>

                <button
                  onClick={() => {
                    setCoffeeGrinding(true);

                    setTimeout(() => {
                      setCoffeeGrinding(false);
                      setCoffeeReady(true);
                    }, 1500);
                  }}
                  disabled={coffeeGrinding}
                  className="w-full py-3 rounded-xl border border-ink-200 text-sm font-medium text-ink-700 hover:bg-ink-900 hover:text-ink-50 hover:border-ink-900 transition-all duration-300 disabled:opacity-50"
                >
                  {coffeeGrinding ? 'moendo...' : 'moer o café'}
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-2"
              >
                <p className="text-ink-500 text-sm leading-relaxed mb-6">
                  Café pronto. Aqui vai uma mensagem do sistema:
                </p>

                <pre className="font-mono text-sm text-ink-600 bg-ink-50 border border-ink-100 rounded-xl p-4 overflow-x-auto">
                  {coffeeMsg}
                </pre>

                <button
                  onClick={() => setCoffeeReady(false)}
                  className="mt-4 text-xs font-mono text-ink-400 hover:text-ink-700 transition-colors"
                >
                  ↻ fazer outro café
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Experiment 03 — Mais um app? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="md:col-span-2"
          >
            <Link
              to="/mais-um-app"
              className="group block relative overflow-hidden rounded-[28px] bg-ink-950 text-white border border-ink-900 p-8 md:p-10 lg:p-12 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <Smartphone
                      size={16}
                      className="text-white/40"
                    />

                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      EXPERIMENTO 03
                    </span>
                  </div>

                  <span className="w-10 h-10 rounded-full border border-white/10 bg-white/5 grid place-items-center">
                    <ArrowUpRight
                      size={16}
                      className="text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </span>
                </div>

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_.75fr] gap-10 lg:gap-16 items-end">
                  <div>
                    <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 mb-5">
                      <Globe2 size={12} />
                      PRODUCT THINKING · WEB · EXPERIMENT
                    </span>

                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.98] tracking-[-0.03em]">
                      Mais um app?
                    </h3>

                    <p className="text-lg md:text-xl text-white/60 mt-5 max-w-xl leading-relaxed">
                      Se eu só quero pedir uma pizza, por que preciso instalar
                      mais um aplicativo?
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-white/45 leading-relaxed max-w-md">
                      Uma crítica à ideia de transformar todo serviço digital
                      em app e um experimento sobre atrito, hábito e o que a web
                      ainda sabe fazer.
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium">
                      explorar manifesto

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-widest text-white/25">
                  <span>web first</span>
                  <span>pwa</span>
                  <span>product thinking</span>
                  <span>ux</span>
                  <span>menos download</span>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}