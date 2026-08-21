import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/content';

export default function Contact() {
  return (
    <section className="section-py border-t border-ink-100 bg-ink-950 text-ink-50">
      <div className="container-px max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-ink-500">07</span>
          <span className="h-px w-8 bg-ink-700" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            CONTATO
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink-50 leading-[1.05] text-balance"
        >
          Vamos construir algo juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-ink-400 text-lg max-w-xl text-pretty"
        >
          Estou aberta a oportunidades, projetos e conversas sobre tecnologia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-6"
        >
          {/* Email — primary */}
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-serif font-medium text-ink-50 hover:text-accent-400 transition-colors"
          >
            {profile.email}
            <ArrowUpRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-700 text-ink-300 hover:text-ink-50 hover:border-ink-500 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              GitHub
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-700 text-ink-300 hover:text-ink-50 hover:border-ink-500 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              LinkedIn
              <Linkedin size={15} />
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-ink-500 pt-4">
            <MapPin size={14} />
            {profile.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
