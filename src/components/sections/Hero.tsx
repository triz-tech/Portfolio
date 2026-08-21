import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1c1c1a 1px, transparent 1px), linear-gradient(to bottom, #1c1c1a 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-px max-w-6xl mx-auto w-full relative">
        <div className="max-w-3xl">
          {/* Status label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
              Aberta a oportunidades em tecnologia
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-ink-900 leading-[0.95] text-balance"
          >
            Construindo soluções com tecnologia.
          </motion.h1>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-2 max-w-xl"
          >
            <p className="text-lg text-ink-700 leading-relaxed">
              Olá, eu sou <span className="font-medium text-ink-900">{profile.name}</span>.
            </p>
            <p className="text-base md:text-lg text-ink-500 leading-relaxed text-pretty">
              Sou estudante de Sistemas de Informação e desenvolvedora em formação,
              interessada em desenvolvimento web, software, dados e experiências digitais.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm text-ink-500"
          >
            <MapPin size={14} className="text-ink-400" />
            {profile.location}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 text-ink-50 hover:bg-ink-800 border border-ink-900 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              Ver projetos
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-ink-900 hover:bg-ink-100 border border-ink-300 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              GitHub
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-ink-900 hover:bg-ink-100 border border-ink-300 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              LinkedIn
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-transparent text-ink-900 hover:bg-ink-100 border border-ink-300 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              E-mail
              <Mail size={15} />
            </a>
          </motion.div>

          {/* Code detail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 font-mono text-xs text-ink-300 select-none"
          >
            <span className="text-ink-400">const</span>{' '}
            <span className="text-ink-600">filosofia</span>{' '}
            <span className="text-ink-400">=</span>{' '}
            <span className="text-ink-500">'menos, mas melhor'</span>
            <span className="animate-blink text-ink-400">|</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
