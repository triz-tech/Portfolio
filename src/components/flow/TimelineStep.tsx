import { motion } from 'framer-motion';

interface TimelineStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
  index?: number;
}

export default function TimelineStep({
  number,
  title,
  children,
  isLast = false,
  index = 0,
}: TimelineStepProps) {
  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Line + number */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-ink-300 bg-white font-mono text-xs text-ink-500 flex-shrink-0"
        >
          {number}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 bg-ink-200 mt-2 min-h-[40px]" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex-1 ${isLast ? '' : 'pb-12'}`}
      >
        <h3 className="font-serif text-xl md:text-2xl font-medium text-ink-900 mb-3">
          {title}
        </h3>
        <div className="text-ink-500 text-sm md:text-base leading-relaxed text-pretty max-w-xl">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
