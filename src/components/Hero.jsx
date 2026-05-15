import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '../data/links';

const COMMANDS = {
  journey: {
    output: 'Redirecting to Developer Journey timeline...',
    href: '#journey',
  },
  projects: {
    output: 'Opening main projects showcase...',
    href: '#projects',
  },
  stack: {
    output: 'Initializing core technical skill mapping...',
    href: '#stack',
  },
  experience: {
    output: 'Accessing professional work history...',
    href: '#experience',
  },
  contact: {
    output: 'Opening contact information portal...',
    href: '#contact',
  },
  whoami: {
    output: 'Muhammed Mijwad — Full Stack Developer based in Bahrain.',
  },
  help: {
    output: 'Available commands: journey, projects, stack, experience, contact, whoami, clear',
  },
};

function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'System initialized. Type "help" to view commands.' },
  ]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', content: rawCmd }];

    if (cmd === 'clear') {
      setHistory([{ type: 'output', content: 'Terminal history cleared.' }]);
      return;
    }

    const response = COMMANDS[cmd];

    if (response) {
      newHistory.push({ type: 'output', content: response.output });
      
      // If command corresponds to navigation, scroll after a tiny delay
      if (response.href) {
        const targetId = response.href.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 600);
      }
    } else {
      newHistory.push({
        type: 'error',
        content: `Command not recognized: "${cmd}". Type "help" for list of commands.`,
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  return (
    <div 
      className="glass-card p-5 font-mono text-sm flex flex-col h-[380px] relative"
      onClick={() => document.getElementById('terminal-input')?.focus()}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5 shrink-0 cursor-default">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-white/30 text-xs flex-1">interactive-shell — zsh</span>
        <span className="text-[10px] text-accent-cyan/60 border border-accent-cyan/20 px-1.5 py-0.5 rounded animate-pulse">
          LIVE
        </span>
      </div>

      {/* Scrollable History Output */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-2.5 pr-1 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === 'input' ? (
              <div className="flex items-center gap-2">
                <span className="text-accent-cyan/70 font-bold">{'>'}</span>
                <span className="text-white/90">{line.content}</span>
              </div>
            ) : line.type === 'error' ? (
              <div className="text-red-400/80 pl-4 text-xs">{line.content}</div>
            ) : (
              <div className="text-white/45 pl-4 text-xs">{line.content}</div>
            )}
          </div>
        ))}
        
        {/* Form Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <label htmlFor="terminal-input" className="text-accent-cyan/70 font-bold">{'>'}</label>
          <div className="relative flex-1">
            <input
              id="terminal-input"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="w-full bg-transparent border-none outline-none text-white/90 p-0 caret-accent-cyan focus:ring-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Try "journey" or type command...'
            />
          </div>
        </form>
      </div>

      {/* Quick Nav Buttons (Terminal Footer) */}
      <div className="pt-3 border-t border-white/5 shrink-0">
        <div className="text-white/20 text-[10px] uppercase tracking-widest mb-2 font-bold cursor-default">
          // Quick execution shortcuts
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['journey', 'projects', 'stack', 'experience', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                executeCommand(cmd);
              }}
              className="px-2 py-1 rounded bg-white/4 border border-white/8 hover:border-accent-cyan/30 hover:bg-accent-cyan/5 text-xs font-mono text-white/40 hover:text-accent-cyan transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>
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
                onClick={() => {
                  const el = document.getElementById('production');
                  if (el) {
                    const yOffset = -80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                View My Work <ArrowRight size={14} />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('journey');
                  if (el) {
                    const yOffset = -80;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
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

          {/* Right: interactive terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col"
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
