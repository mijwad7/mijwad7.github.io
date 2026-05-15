import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experiences } from '../data/experience';
import { useMode } from '../context/ModeContext';

const colorMap = {
  cyan: { badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', dot: 'bg-accent-cyan', border: 'border-accent-cyan/20' },
  violet: { badge: 'bg-accent-violet/10 text-accent-violet border-accent-violet/20', dot: 'bg-accent-violet', border: 'border-accent-violet/20' },
};

export default function Experience() {
  const { mode } = useMode();
  const isResume = mode === 'resume';

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Experience" title={isResume ? 'Professional Experience' : "Where I've applied my skills"} />

        <div className={`grid gap-6 ${isResume ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.cyan;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={isResume 
                  ? "flex flex-col gap-3 pb-6 mb-2 border-b border-white/10 last:border-0" 
                  : `glass-card p-6 flex flex-col gap-5 border ${c.border}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {!isResume && (
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase size={16} className="text-white/50" />
                      </div>
                    )}
                    <div>
                      <h3 className={`font-bold text-white ${isResume ? 'text-lg' : 'text-base'}`}>{exp.role}</h3>
                      <p className={`text-white/60 ${isResume ? 'font-medium' : 'text-sm'}`}>{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    {!isResume && (
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
                        {exp.type}
                      </span>
                    )}
                    <span className="text-white/40 text-sm font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                {!isResume && (
                  <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
                )}

                {/* Contribution areas */}
                {!isResume && (
                  <div>
                    <p className="text-white/30 text-xs font-mono mb-2 uppercase tracking-widest">Contribution areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.contributionAreas.map((area, j) => (
                        <span key={j} className="tag text-xs">{area}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className={isResume ? 'space-y-1.5 mt-2' : 'space-y-2'}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} className={`flex items-start gap-2 ${isResume ? 'text-sm text-white/70' : 'text-xs text-white/40'} leading-relaxed`}>
                        <CheckCircle size={isResume ? 14 : 12} className={`mt-1 shrink-0 ${c.dot === 'bg-accent-cyan' ? 'text-accent-cyan/50' : 'text-accent-violet/50'}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
