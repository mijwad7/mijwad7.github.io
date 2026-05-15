import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const colorMap = {
  cyan: {
    icon: 'text-accent-cyan',
    iconBg: 'bg-accent-cyan/10 border-accent-cyan/20',
    badge: 'bg-accent-cyan/8 border-accent-cyan/15 text-accent-cyan/80',
    border: 'border-accent-cyan/20',
    dot: 'bg-accent-cyan',
  },
  blue: {
    icon: 'text-accent-blue',
    iconBg: 'bg-accent-blue/10 border-accent-blue/20',
    badge: 'bg-accent-blue/8 border-accent-blue/15 text-accent-blue/80',
    border: 'border-accent-blue/20',
    dot: 'bg-accent-blue',
  },
  violet: {
    icon: 'text-accent-violet',
    iconBg: 'bg-accent-violet/10 border-accent-violet/20',
    badge: 'bg-accent-violet/8 border-accent-violet/15 text-accent-violet/80',
    border: 'border-accent-violet/20',
    dot: 'bg-accent-violet',
  },
  emerald: {
    icon: 'text-accent-emerald',
    iconBg: 'bg-accent-emerald/10 border-accent-emerald/20',
    badge: 'bg-accent-emerald/8 border-accent-emerald/15 text-accent-emerald/80',
    border: 'border-accent-emerald/20',
    dot: 'bg-accent-emerald',
  },
  amber: {
    icon: 'text-accent-amber',
    iconBg: 'bg-accent-amber/10 border-accent-amber/20',
    badge: 'bg-accent-amber/8 border-accent-amber/15 text-accent-amber/80',
    border: 'border-accent-amber/20',
    dot: 'bg-accent-amber',
  },
};

export default function ProductionSystemCard({ system, index }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[system.color] || colorMap.cyan;
  const Icon = LucideIcons[system.icon] || LucideIcons.Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      className={`glass-card flex flex-col border ${c.border} overflow-hidden`}
    >
      {/* Card header */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${c.iconBg}`}>
            <Icon size={18} className={c.icon} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-sm leading-snug">{system.name}</h3>
            <p className="text-white/40 text-xs mt-1 leading-relaxed">{system.summary}</p>
          </div>
        </div>

        {/* My contribution */}
        <div>
          <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-1.5">My contribution</p>
          <p className="text-white/55 text-xs leading-relaxed">{system.contribution}</p>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1">
          {system.stack.slice(0, 4).map((s, i) => (
            <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${c.badge}`}>
              {s}
            </span>
          ))}
          {system.stack.length > 4 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs border border-white/10 text-white/30">
              +{system.stack.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 px-5 py-2.5 text-xs text-white/30 hover:text-white/60 transition-colors border-t border-white/5 bg-white/2 hover:bg-white/4"
      >
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        {expanded ? 'Hide technical depth' : 'View technical depth'}
      </button>

      {/* Expanded: technical depth + full stack */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pt-4 pb-5 border-t border-white/5 space-y-4">
              <div>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-1.5">Technical depth</p>
                <p className="text-white/50 text-xs leading-relaxed">{system.technicalDepth}</p>
              </div>
              <div>
                <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-1.5">Full stack / concepts</p>
                <div className="flex flex-wrap gap-1">
                  {system.stack.map((s, i) => (
                    <span key={i} className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${c.badge}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
