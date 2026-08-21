import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/data/content';

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group p-5 rounded-xl border border-ink-200 bg-white transition-all duration-300 hover:border-ink-300 hover:bg-ink-50/50"
    >
      <span className="font-mono text-xs text-ink-400 block mb-3">{item.number}</span>
      <h3 className="font-medium text-ink-900 text-sm mb-2">{item.title}</h3>
      <p className="text-ink-400 text-xs leading-relaxed">{item.description}</p>
    </motion.div>
  );
}
