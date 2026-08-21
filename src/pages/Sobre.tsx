import { motion } from 'framer-motion';
import About from '@/components/sections/About';
import CinemaSection from '@/components/sections/CinemaSection';
import Seeking from '@/components/sections/Seeking';
import { profile } from '@/data/content';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Sobre() {
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
              <span className="font-mono text-xs text-ink-400">01</span>
              <span className="h-px w-8 bg-ink-300" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-500">
                SOBRE MIM
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-ink-900 leading-[1.05] text-balance">
              Construindo minha trajetória em tecnologia.
            </h1>
          </motion.div>
        </div>
      </section>

      <About />
      <CinemaSection />
      <Seeking />

      {/* Quick contact */}
      <section className="section-py border-t border-ink-100">
        <div className="container-px max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
            Vamos conversar.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 text-ink-50 hover:bg-ink-800 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-900 hover:bg-ink-100 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-300 text-ink-900 hover:bg-ink-100 px-5 py-2.5 text-sm font-medium transition-all duration-300"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-ink-500">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
