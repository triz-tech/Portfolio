import { motion } from 'framer-motion';
import type { Technology } from '@/data/content';

interface TechnologyCardProps {
  tech: Technology;
  index: number;
}

export default function TechnologyCard({ tech, index }: TechnologyCardProps) {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="group relative p-5 rounded-xl border border-ink-200 bg-white transition-colors duration-300 hover:border-ink-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ink-50 border border-ink-100 flex items-center justify-center text-ink-600 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-ink-50 group-hover:border-ink-900">
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-medium text-ink-900 text-sm mb-1">{tech.name}</h3>
          <p className="text-ink-400 text-xs leading-relaxed">{tech.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
