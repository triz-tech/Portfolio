import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/content';

export default function Projetos() {
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
              <span className="font-mono text-xs text-ink-400">04</span>
              <span className="h-px w-8 bg-ink-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                PROJETOS
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-ink-900 leading-[1.05] text-balance">
              Projetos que colocam conhecimento em prática.
            </h1>
            <p className="mt-5 text-ink-500 text-lg max-w-xl text-pretty">
              Alguns projetos nasceram de necessidades reais. Outros começaram como
              perguntas, ideias ou simplesmente vontade de descobrir se alguma coisa
              poderia funcionar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-px max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.number}
                project={project}
                featured={project.featured}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
