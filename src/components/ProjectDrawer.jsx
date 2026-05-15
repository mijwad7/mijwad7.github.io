import { AnimatePresence, motion } from 'framer-motion';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const colorMap = {
  cyan: { border: 'border-accent-cyan/20', badge: 'bg-accent-cyan/8 border-accent-cyan/15 text-accent-cyan/80' },
  violet: { border: 'border-accent-violet/20', badge: 'bg-accent-violet/8 border-accent-violet/15 text-accent-violet/80' },
  emerald: { border: 'border-accent-emerald/20', badge: 'bg-accent-emerald/8 border-accent-emerald/15 text-accent-emerald/80' },
};

export default function ProjectDrawer({ project, onClose }) {
  if (!project) return null;
  const c = colorMap[project.color] || colorMap.cyan;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xl z-50 overflow-y-auto"
            style={{ background: '#111318', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Close */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/5"
              style={{ background: '#111318' }}>
              <div>
                <h2 className="text-white font-bold text-lg">{project.name}</h2>
                <p className="text-white/40 text-xs mt-0.5">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close drawer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Project Image Header */}
            {project.image && (
              <div className="w-full aspect-[2/1] overflow-hidden relative border-b border-white/5 bg-white/[0.02]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            <div className="px-6 py-6 space-y-6">
              {/* Description */}
              <div>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-2">About</p>
                <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Key features */}
              <div>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Key features</p>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                      <CheckCircle size={13} className="mt-0.5 shrink-0 text-accent-cyan/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I learned */}
              <div className={`glass-card p-4 border ${c.border}`}>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-2">What I learned</p>
                <p className="text-white/55 text-sm leading-relaxed">{project.learned}</p>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-2.5">Tech stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s, i) => (
                    <span key={i} className={`inline-flex items-center px-2.5 py-1 rounded text-xs border ${c.badge}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                  <FaGithub size={13} /> View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                    <ExternalLink size={13} /> Watch Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
