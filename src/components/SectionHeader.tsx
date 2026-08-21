import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  number,
  label,
  title,
  intro,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-xs text-ink-400">{number}</span>
        <span className="h-px w-8 bg-ink-300" />
        <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
          {label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-ink-900 text-balance leading-[1.1]"
      >
        {title}
      </motion.h2>

      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-ink-500 text-base md:text-lg max-w-xl text-pretty leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
