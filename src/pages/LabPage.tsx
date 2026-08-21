import { motion } from 'framer-motion';
import Lab from '@/components/sections/Lab';

export default function LabPage() {
  return (
    <div className="pt-20">
      <section className="section-py border-b border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-ink-400">05</span>
              <span className="h-px w-8 bg-ink-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                LAB
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-ink-900 leading-[1.05] text-balance">
              Algumas coisas que fiz só porque podia.
            </h1>
            <p className="mt-5 text-ink-500 text-lg max-w-xl text-pretty">
              Nem tudo precisa virar projeto. Às vezes eu só quero testar uma ideia,
              brincar com uma interface ou descobrir até onde consigo levar uma interação.
            </p>
          </motion.div>
        </div>
      </section>

      <Lab />
    </div>
  );
}
