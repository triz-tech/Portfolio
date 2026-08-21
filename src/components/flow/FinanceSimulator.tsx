import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FinanceSimulator() {
  const [trips, setTrips] = useState(100);
  const [costPerTrip, setCostPerTrip] = useState(1000);
  const [reduction, setReduction] = useState(8);

  const currentCost = trips * costPerTrip;
  const optimizedCost = Math.round(currentCost * (1 - reduction / 100));
  const difference = currentCost - optimizedCost;

  const fmt = (val: number) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

  return (
    <div className="rounded-2xl border border-ink-200 bg-white overflow-hidden">
      <div className="px-5 py-3 border-b border-ink-100 bg-ink-50">
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
          SIMULAÇÃO FINANCEIRA · HIPOTÉTICA
        </span>
      </div>

      <div className="p-5 md:p-7">
        {/* Controls */}
        <div className="space-y-6 mb-8">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                VIAGENS ANALISADAS
              </span>
              <span className="font-serif text-lg font-medium text-ink-900 tabular-nums">
                {trips}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={trips}
              onChange={(e) => setTrips(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-100 accent-ink-900"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                CUSTO HIPOTÉTICO / VIAGEM
              </span>
              <span className="font-serif text-lg font-medium text-ink-900 tabular-nums">
                {fmt(costPerTrip)}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={costPerTrip}
              onChange={(e) => setCostPerTrip(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-100 accent-ink-900"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                REDUÇÃO HIPOTÉTICA
              </span>
              <span className="font-serif text-lg font-medium text-ink-900 tabular-nums">
                {reduction}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={reduction}
              onChange={(e) => setReduction(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-ink-100 accent-ink-900"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
          {/* Current */}
          <div className="p-4 rounded-xl border border-ink-200 bg-ink-50 text-center">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mb-2">
              CENÁRIO ATUAL
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium text-ink-900 tabular-nums">
              {fmt(currentCost)}
            </p>
            <p className="mt-1 text-xs text-ink-400">custo hipotético</p>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1">
            <div className="h-px w-6 bg-ink-300" />
            <span className="font-mono text-[9px] text-ink-400">→</span>
          </div>

          {/* Optimized */}
          <div className="p-4 rounded-xl border border-ink-200 bg-ink-50 text-center">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mb-2">
              CENÁRIO OTIMIZADO
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium text-ink-900 tabular-nums">
              {fmt(optimizedCost)}
            </p>
            <p className="mt-1 text-xs text-ink-400">simulação</p>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1">
            <div className="h-px w-6 bg-ink-300" />
            <span className="font-mono text-[9px] text-ink-400">→</span>
          </div>

          {/* Difference */}
          <motion.div
            key={difference}
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-xl border border-ink-900 bg-ink-900 text-ink-50 text-center"
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink-400 mb-2">
              DIFERENÇA HIPOTÉTICA
            </p>
            <p className="font-serif text-2xl md:text-3xl font-medium tabular-nums">
              {fmt(difference)}
            </p>
          </motion.div>
        </div>

        {/* Transparency note */}
        <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-ink-200 bg-ink-50">
          <span className="font-mono text-xs text-ink-400 mt-0.5">!</span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-1">
              TRANSPARÊNCIA
            </p>
            <p className="text-xs text-ink-500 leading-relaxed">
              <strong className="text-ink-700">Simulação não é dado real.</strong> Todos
              os números são hipotéticos e servem exclusivamente para demonstrar como uma
              ferramenta desse tipo poderia funcionar. Não representam quantidade real de
              passageiros, custos, frota, linhas ou economia do transporte público do Rio
              de Janeiro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
