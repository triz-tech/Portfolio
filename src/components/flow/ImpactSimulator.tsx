import { useState } from 'react';
import { motion } from 'framer-motion';
import BarMeter from './BarMeter';

export default function ImpactSimulator() {
  const [demand, setDemand] = useState(100);
  const [capacity, setCapacity] = useState(80);

  const gap = Math.max(0, demand - capacity);
  const optimized = Math.min(100, capacity + gap);
  const hasImbalance = demand > capacity;

  return (
    <div className="p-6 md:p-8 rounded-2xl border border-ink-200 bg-white">
      <p className="text-sm text-ink-500 mb-6 text-pretty">
        Ajuste os valores e observe como o Flow poderia identificar um desequilíbrio
        entre demanda e capacidade.
      </p>

      {/* Sliders */}
      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
              DEMANDA OBSERVADA
            </span>
            <span className="font-serif text-lg font-medium text-ink-900 tabular-nums">
              {demand}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={demand}
            onChange={(e) => setDemand(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-100 accent-ink-900"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
              CAPACIDADE DISPONÍVEL
            </span>
            <span className="font-serif text-lg font-medium text-ink-900 tabular-nums">
              {capacity}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-100 accent-ink-900"
          />
        </div>
      </div>

      {/* Gap display */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-ink-100">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
          GAP IDENTIFICADO
        </span>
        <span
          className={`font-serif text-2xl font-medium tabular-nums ${
            hasImbalance ? 'text-accent-600' : 'text-ink-900'
          }`}
        >
          {hasImbalance ? '+' : ''}
          {gap}%
        </span>
      </div>

      {/* Scenario comparison */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
        <div className="text-center">
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mb-2">
            CENÁRIO ATUAL
          </p>
          <p className="font-serif text-3xl font-medium text-ink-900 tabular-nums">
            {capacity}%
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-8 bg-ink-300" />
          <span className="font-mono text-[9px] text-ink-400">→</span>
        </div>
        <div className="text-center">
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mb-2">
            CENÁRIO OTIMIZADO
          </p>
          <p className="font-serif text-3xl font-medium text-ink-900 tabular-nums">
            {optimized}%
          </p>
        </div>
      </div>

      {/* Message */}
      <motion.div
        animate={{ opacity: 1 }}
        className="p-4 rounded-xl border border-ink-200 bg-ink-50"
      >
        {hasImbalance ? (
          <>
            <p className="text-sm text-ink-600 leading-relaxed">
              O sistema identificou um possível desequilíbrio.
            </p>
            <p className="mt-1 text-xs text-ink-400 leading-relaxed">
              Neste cenário hipotético, a capacidade disponível não acompanha toda a
              demanda. O Flow poderia sinalizar esse período para análise operacional.
            </p>
          </>
        ) : (
          <p className="text-sm text-ink-600 leading-relaxed">
            Neste cenário, a capacidade disponível cobre a demanda observada.
          </p>
        )}
      </motion.div>
    </div>
  );
}
