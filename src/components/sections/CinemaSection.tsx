import { motion } from 'framer-motion';

export default function CinemaSection() {
  return (
    <section className="py-20 md:py-28 border-t border-ink-100 bg-ink-50">
      <div className="container-px max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-4">
              BEFORE CODE
            </span>
            <p className="font-serif text-xl md:text-2xl text-ink-700 leading-relaxed text-pretty">
              Antes de pensar em componentes, interfaces e sistemas, eu pensava em
              cenas, imagens e histórias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400 block mb-4">
              NOW
            </span>
            <p className="font-serif text-xl md:text-2xl text-ink-700 leading-relaxed text-pretty">
              Hoje continuo gostando de contar histórias — só mudei algumas das
              ferramentas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
