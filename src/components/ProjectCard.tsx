import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const cardClass = `group relative block overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all duration-500 hover:border-ink-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] ${
    featured ? 'p-7 md:p-10' : 'p-6'
  }`;

  const inner = (
    <>
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink-400">{project.number}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
            {project.category}
          </span>
        </div>
        {project.isHere && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
            You are here
          </span>
        )}
        {project.isPrivate && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-400">
            <Lock size={11} />
            Projeto privado
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-serif font-medium text-ink-900 mb-3 ${
          featured ? 'text-4xl md:text-5xl' : 'text-2xl'
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-ink-500 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
        {project.description}
      </p>

      {/* Techs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] text-ink-500 bg-ink-50 border border-ink-100 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Status + Link */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-ink-100">
        {project.status ? (
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mr-2 align-middle" />
            {project.status}
          </span>
        ) : (
          <span />
        )}

        {(project.route || project.link) && (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-900 group-hover:text-ink-700 transition-colors">
            {project.route ? 'Explorar' : 'Ver no GitHub'}
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        )}
      </div>
    </>
  );

  let content: React.ReactNode;
  if (project.route) {
    content = (
      <Link to={project.route} className={cardClass}>
        {inner}
      </Link>
    );
  } else if (project.link) {
    content = (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    );
  } else {
    content = <div className={cardClass}>{inner}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {content}
    </motion.div>
  );
}
