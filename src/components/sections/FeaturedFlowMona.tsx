import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedFlowMona() {
  return (
    <section className="section-py border-t border-ink-100 bg-ink-950 text-ink-50">
      <div className="container-px max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-ink-700" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            EM DESTAQUE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Flow card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/flow"
              className="group block p-8 md:p-10 rounded-2xl border border-ink-800 bg-ink-900 hover:border-ink-600 transition-all duration-500 h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                  PRODUCT · DATA · SOFTWARE
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400" />
                  EM PESQUISA
                </span>
              </div>

              <h3 className="font-serif text-5xl md:text-6xl font-medium text-ink-50 mb-4">
                Flow
              </h3>
              <p className="text-ink-400 text-base leading-relaxed mb-8 max-w-sm">
                Inteligência de dados aplicada ao transporte público.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Python', 'Data', 'Simulation'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-ink-400 bg-ink-800 border border-ink-700 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-50 group-hover:text-accent-400 transition-colors">
                Explorar Flow
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>

          {/* Mona card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Link
              to="/mona"
              className="group block p-8 md:p-10 rounded-2xl border border-ink-800 bg-ink-900 hover:border-ink-600 transition-all duration-500 h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                  PRODUCT CONCEPT · UX/UI · PROTOTYPE
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-500" />
                  CONCEPT
                </span>
              </div>

              <h3 className="font-serif text-5xl md:text-6xl font-medium text-ink-50 mb-4">
                Mona
              </h3>
              <p className="text-ink-400 text-base leading-relaxed mb-8 max-w-sm">
                Música como memória, descoberta e histórias compartilhadas.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['UX/UI', 'Product', 'Prototype'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-ink-400 bg-ink-800 border border-ink-700 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-50 group-hover:text-accent-400 transition-colors">
                Explorar Mona
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
