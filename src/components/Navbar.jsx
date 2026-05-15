import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../data/links';

const navItems = [
  { label: 'Focus', href: '#current-focus' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Production', href: '#production' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-accent-cyan font-semibold text-sm tracking-wider hover:opacity-80 transition-opacity"
          >
            mijwad<span className="text-white/40">_</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="px-3 py-1.5 text-sm text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-white/40 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs px-3 py-1.5 ml-2"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="px-3 py-2.5 text-sm text-white/60 hover:text-white text-left transition-colors rounded-lg hover:bg-white/5"
                >
                  {label}
                </button>
              ))}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
                <a href={links.github} target="_blank" rel="noreferrer" className="btn-secondary text-xs flex-1 justify-center">
                  <FaGithub size={13} /> GitHub
                </a>
                <a href={links.resume} target="_blank" rel="noreferrer" className="btn-primary text-xs flex-1 justify-center">
                  <Download size={13} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
