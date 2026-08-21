import { motion } from 'framer-motion';

interface BarMeterProps {
  label: string;
  value: number;
  max?: number;
  variant?: 'default' | 'accent' | 'dark';
  size?: 'sm' | 'md';
}

export default function BarMeter({
  label,
  value,
  max = 100,
  variant = 'default',
  size = 'md',
}: BarMeterProps) {
  const pct = Math.min(100, (value / max) * 100);
  const barColor =
    variant === 'accent'
      ? 'bg-accent-500'
      : variant === 'dark'
        ? 'bg-ink-900'
        : 'bg-ink-700';

  const trackColor = variant === 'dark' ? 'bg-ink-800' : 'bg-ink-100';

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span
          className={`font-mono uppercase tracking-widest text-ink-400 ${
            size === 'sm' ? 'text-[9px]' : 'text-[10px]'
          }`}
        >
          {label}
        </span>
        <span
          className={`font-serif font-medium text-ink-900 tabular-nums ${
            size === 'sm' ? 'text-sm' : 'text-lg'
          }`}
        >
          {value}%
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${trackColor}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
    </div>
  );
}
