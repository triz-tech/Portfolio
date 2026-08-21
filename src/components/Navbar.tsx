import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-50/80 backdrop-blur-md border-b border-ink-100'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-px max-w-6xl mx-auto flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl font-medium text-ink-900">b</span>
            <span className="font-mono text-xs text-ink-400 group-hover:text-ink-600 transition-colors">
              /beatriz
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-3 right-3 h-px bg-ink-900"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-ink-50/95 backdrop-blur-md pt-20 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-3 text-2xl font-serif font-medium border-b border-ink-100 ${
                      location.pathname === link.to ? 'text-ink-900' : 'text-ink-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
