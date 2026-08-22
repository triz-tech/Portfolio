import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, MousePointerClick } from 'lucide-react';


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
  const [coffeeMsg] = useState(() => coffeeMessages[Math.floor(Math.random() * coffeeMessages.length)]);

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
              <MousePointerClick size={16} className="text-ink-400" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                EXPERIMENTO 01
              </span>
            </div>

            <h3 className="font-serif text-2xl font-medium text-ink-900 mb-3">
              Contador de curiosidade
            </h3>
            <p className="text-ink-500 text-sm leading-relaxed mb-8 text-pretty">
              Não tem nenhuma função importante. Eu só queria saber quantas vezes você
              clicaria.
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
                {clicks === 1 ? 'curiosidade acumulada' : 'curiosidades acumuladas'}
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
                <Coffee size={16} className="text-ink-400" />
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
                  onClick={() => {
                    setCoffeeReady(false);
                  }}
                  className="mt-4 text-xs font-mono text-ink-400 hover:text-ink-700 transition-colors"
                >
                  ↻ fazer outro café
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
