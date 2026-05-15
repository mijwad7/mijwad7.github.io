import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../data/links';

const terminalLines = [
  { prompt: '>', cmd: 'whoami', output: 'Muhammed Mijwad', delay: 0 },
  { prompt: '>', cmd: 'location', output: 'Bahrain', delay: 0.4 },
  { prompt: '>', cmd: 'current_focus', output: 'Backend systems, APIs, automation, real-time workflows, AI-assisted tools', delay: 0.8 },
  { prompt: '>', cmd: 'stack', output: 'Django, React, PostgreSQL, Redis, AWS, DRF', delay: 1.2 },
];

const milestones = [
  { year: '2023', text: 'Discovered web development' },
  { year: '2024', text: 'Built full-stack projects while working part-time' },
  { year: '2025', text: 'Joined SaasyWay as Backend Developer' },
  { year: 'Now', text: 'Growing into backend-heavy product engineering' },
];

const commandSuggestions = [
  { cmd: 'view journey', href: '#journey' },
  { cmd: 'open production systems', href: '#production' },
  { cmd: 'open projects', href: '#projects' },
  { cmd: 'inspect backend experience', href: '#experience' },
  { cmd: 'see skill map', href: '#stack' },
  { cmd: 'contact developer', href: '#contact' },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-5 font-mono text-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-white/30 text-xs">terminal — developer@portfolio</span>
      </div>

      {/* Lines */}
      <div className="space-y-3">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-accent-cyan/60">{line.prompt}</span>
              <span className="text-white/70">{line.cmd}</span>
            </div>
            <div className="text-white/40 pl-4 text-xs mt-0.5 leading-relaxed">{line.output}</div>
          </motion.div>
        ))}
        {visibleLines >= terminalLines.length && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-accent-cyan/60">{'>'}</span>
            <span className="w-2 h-4 bg-accent-cyan/70 animate-cursor-blink inline-block" />
          </div>
        )}
      </div>

      {/* Milestones */}
      <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
        <div className="text-white/30 text-xs mb-3">// milestones</div>
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 + i * 0.15 }}
            className="flex items-start gap-3"
          >
            <span className="text-accent-cyan/50 text-xs shrink-0 w-10">{m.year}</span>
            <span className="text-white/40 text-xs leading-relaxed">{m.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CommandPalette() {
  const handleClick = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="glass-card p-4 mt-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white/30 text-xs font-mono">// quick navigation</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {commandSuggestions.map((s, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 + i * 0.08 }}
            onClick={() => handleClick(s.href)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono text-white/40 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all text-left border border-transparent hover:border-accent-cyan/10"
          >
            <ChevronRight size={10} className="shrink-0" />
            {s.cmd}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                Backend Developer at SaasyWay
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <MapPin size={11} />
                Bahrain
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white/40 font-mono text-sm mb-2 tracking-wider">Muhammed Mijwad</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                Building the kind of{' '}
                <span className="gradient-text">systems</span> I once only wanted to{' '}
                <span className="gradient-text">understand.</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              I'm a full-stack developer focused on backend-heavy web applications, automation workflows, APIs, and real-time systems built with Django, React, PostgreSQL, Redis, and modern deployment tools.
            </motion.p>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/30 text-sm leading-relaxed max-w-xl font-mono border-l-2 border-accent-cyan/30 pl-3"
            >
              My portfolio is not a services page. It is a record of my journey, the projects I built, the systems I contributed to, and the engineering skills I'm developing every day.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => document.getElementById('production')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work <ArrowRight size={14} />
              </button>
              <button
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Explore My Journey
              </button>
            </motion.div>

            {/* Icon links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a href={links.github} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                <FaGithub size={13} /> GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                <FaLinkedin size={13} /> LinkedIn
              </a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                <Code2 size={13} /> LeetCode
              </a>
              <a href={links.resume} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                <Download size={13} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Right: terminal + command palette */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col"
          >
            <TerminalCard />
            <CommandPalette />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
