import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import BarMeter from './BarMeter';

const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
const slots = ['06:00 — 07:00', '07:00 — 08:00', '08:00 — 09:00', '17:00 — 18:00', '18:00 — 19:00'];

// Simulated demand/capacity matrix (hypothetical values)
const scenarios: Record<string, Record<string, { demand: number; capacity: number }>> = {
  'Segunda-feira': {
    '06:00 — 07:00': { demand: 58, capacity: 80 },
    '07:00 — 08:00': { demand: 92, capacity: 71 },
    '08:00 — 09:00': { demand: 95, capacity: 73 },
    '17:00 — 18:00': { demand: 88, capacity: 75 },
    '18:00 — 19:00': { demand: 90, capacity: 72 },
  },
  'Terça-feira': {
    '06:00 — 07:00': { demand: 55, capacity: 80 },
    '07:00 — 08:00': { demand: 85, capacity: 74 },
    '08:00 — 09:00': { demand: 89, capacity: 75 },
    '17:00 — 18:00': { demand: 82, capacity: 76 },
    '18:00 — 19:00': { demand: 84, capacity: 75 },
  },
  'Quarta-feira': {
    '06:00 — 07:00': { demand: 52, capacity: 80 },
    '07:00 — 08:00': { demand: 87, capacity: 72 },
    '08:00 — 09:00': { demand: 91, capacity: 74 },
    '17:00 — 18:00': { demand: 85, capacity: 75 },
    '18:00 — 19:00': { demand: 86, capacity: 73 },
  },
  'Quinta-feira': {
    '06:00 — 07:00': { demand: 54, capacity: 80 },
    '07:00 — 08:00': { demand: 90, capacity: 73 },
    '08:00 — 09:00': { demand: 93, capacity: 72 },
    '17:00 — 18:00': { demand: 87, capacity: 74 },
    '18:00 — 19:00': { demand: 88, capacity: 73 },
  },
  'Sexta-feira': {
    '06:00 — 07:00': { demand: 50, capacity: 80 },
    '07:00 — 08:00': { demand: 82, capacity: 76 },
    '08:00 — 09:00': { demand: 86, capacity: 75 },
    '17:00 — 18:00': { demand: 80, capacity: 77 },
    '18:00 — 19:00': { demand: 83, capacity: 76 },
  },
};

export default function DemandSimulator() {
  const [day, setDay] = useState(days[0]);
  const [slot, setSlot] = useState(slots[1]);
  const [optimized, setOptimized] = useState(false);

  const scenario = scenarios[day][slot];
  const demand = scenario.demand;
  const capacity = scenario.capacity;
  const gap = Math.max(0, demand - capacity);
  const optimizedCapacity = Math.min(100, capacity + gap + 2);

  const handleSimulate = () => {
    setOptimized(true);
    setTimeout(() => setOptimized(false), 4000);
  };

  return (
    <div className="rounded-2xl border border-ink-200 bg-white overflow-hidden">
      {/* Badge */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-ink-100 bg-ink-50">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-500">
          <Zap size={11} className="text-accent-500" />
          SIMULADOR CONCEITO
        </span>
        <span className="font-mono text-[9px] uppercase tracking-widest text-ink-300">
          HIPOTÉTICO
        </span>
      </div>

      <div className="p-5 md:p-7">
        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-3">
              DIA
            </span>
            <div className="flex flex-wrap gap-1.5">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    day === d
                      ? 'bg-ink-900 text-ink-50'
                      : 'bg-ink-50 text-ink-500 hover:bg-ink-100 border border-ink-200'
                  }`}
                >
                  {d.replace('-feira', '')}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-3">
              INTERVALO
            </span>
            <div className="flex flex-wrap gap-1.5">
              {slots.map((s) => (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    slot === s
                      ? 'bg-ink-900 text-ink-50'
                      : 'bg-ink-50 text-ink-500 hover:bg-ink-100 border border-ink-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scenario header */}
        <div className="flex items-center gap-2 mb-5 text-sm text-ink-500">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
            CENÁRIO
          </span>
          <span className="font-medium text-ink-700">{day}</span>
          <span className="text-ink-300">·</span>
          <span className="font-medium text-ink-700">{slot}</span>
        </div>

        {/* Meters */}
        <div className="space-y-4 mb-6">
          <BarMeter label="DEMANDA SIMULADA" value={demand} variant="accent" />
          <BarMeter
            label="CAPACIDADE ATUAL"
            value={optimized ? optimizedCapacity : capacity}
            variant={optimized ? 'dark' : 'default'}
          />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                GAP DE CAPACIDADE
              </span>
              <span className="font-serif font-medium text-ink-900 tabular-nums text-lg">
                {optimized ? Math.max(0, demand - optimizedCapacity) : gap}%
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden bg-ink-100">
              <motion.div
                animate={{
                  width: `${optimized ? Math.max(0, demand - optimizedCapacity) : gap}%`,
                }}
                transition={{ duration: 0.6 }}
                className="h-full rounded-full bg-accent-400"
              />
            </div>
          </div>
        </div>

        {/* Simulate button */}
        <button
          onClick={handleSimulate}
          className="group inline-flex items-center gap-2 rounded-full bg-ink-900 text-ink-50 hover:bg-ink-800 px-5 py-2.5 text-sm font-medium transition-all duration-300"
        >
          simular otimização
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>

        {/* Result message */}
        <AnimatePresence>
          {optimized && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-5 p-4 rounded-xl border border-ink-200 bg-ink-50">
                <p className="text-sm text-ink-600 leading-relaxed">
                  {gap === 0
                    ? 'Neste cenário, a capacidade já cobre a demanda simulada.'
                    : 'A capacidade simulada ainda não cobre toda a demanda prevista.'}
                </p>
                <p className="mt-2 text-xs text-ink-400 leading-relaxed">
                  O sistema identificou um possível desequilíbrio. O Flow poderia
                  sinalizar esse intervalo para análise operacional.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Disclaimer */}
        <p className="mt-5 font-mono text-[9px] uppercase tracking-widest text-ink-300 leading-relaxed">
          SIMULAÇÃO CONCEITUAL · Os valores são hipotéticos e não representam dados reais
          de passageiros, linhas ou capacidade operacional.
        </p>
      </div>
    </div>
  );
}
