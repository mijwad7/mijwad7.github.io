import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const colorMap = {
  cyan: {
    accent: 'text-accent-cyan',
    border: 'border-accent-cyan/20',
    tag: 'bg-accent-cyan/8 border-accent-cyan/15 text-accent-cyan/80',
    glow: 'hover:border-accent-cyan/35',
    dot: 'bg-accent-cyan',
  },
  violet: {
    accent: 'text-accent-violet',
    border: 'border-accent-violet/20',
    tag: 'bg-accent-violet/8 border-accent-violet/15 text-accent-violet/80',
    glow: 'hover:border-accent-violet/35',
    dot: 'bg-accent-violet',
  },
  emerald: {
    accent: 'text-accent-emerald',
    border: 'border-accent-emerald/20',
    tag: 'bg-accent-emerald/8 border-accent-emerald/15 text-accent-emerald/80',
    glow: 'hover:border-accent-emerald/35',
    dot: 'bg-accent-emerald',
  },
};

export default function ProjectCard({ project, index, onClick }) {
  const c = colorMap[project.color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`glass-card border ${c.border} ${c.glow} transition-all duration-300 hover:shadow-card-hover flex flex-col cursor-pointer group overflow-hidden`}
      onClick={() => onClick(project)}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full ${c.dot}`} style={{ background: `var(--color-${c.dot.replace('bg-', '')})` }} />

      {/* Project Image Preview */}
      {project.image && (
        <div className="aspect-video w-full overflow-hidden relative border-b border-white/5 bg-white/[0.02]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.style.opacity = 0; // Invisible placeholder if image hasn't been placed yet
            }}
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Project header */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{project.name}</h3>
              <p className={`text-sm mt-0.5 font-mono ${c.accent}`}>{project.subtitle}</p>
            </div>
            <ArrowRight size={16} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all mt-1 shrink-0" />
          </div>
          <p className="text-white/45 text-sm mt-3 leading-relaxed">{project.description}</p>
        </div>

        {/* Features preview */}
        <ul className="space-y-1.5">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-white/35 leading-relaxed">
              <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${c.dot}`} />
              {f}
            </li>
          ))}
          {project.features.length > 3 && (
            <li className="text-xs text-white/25 pl-3">+{project.features.length - 3} more</li>
          )}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.stack.slice(0, 5).map((s, i) => (
            <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${c.tag}`}>
              {s}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="text-xs text-white/25 self-center">+{project.stack.length - 5}</span>
          )}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
          <span className={`text-xs font-medium ${c.accent} mr-auto`}>View case study →</span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
