import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-px max-w-6xl mx-auto py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <Link to="/" className="font-serif text-2xl font-medium text-ink-900">
              Beatriz L. L. Martins
            </Link>
            <p className="mt-2 text-sm text-ink-400 max-w-xs">
              Construindo soluções com tecnologia.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-ink-500">
              <MapPin size={14} className="text-ink-400" />
              {profile.location}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="text-ink-500 hover:text-ink-900 transition-colors"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-500 hover:text-ink-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-500 hover:text-ink-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-100 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-400 font-mono">
          <span>© {new Date().getFullYear()} Beatriz L. L. Martins</span>
          <span className="hidden sm:inline">menos, mas melhor.</span>
        </div>
      </div>
    </footer>
  );
}
