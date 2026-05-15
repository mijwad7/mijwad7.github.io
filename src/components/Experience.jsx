import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { experiences } from '../data/experience';

const colorMap = {
  cyan: { badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20', dot: 'bg-accent-cyan', border: 'border-accent-cyan/20' },
  violet: { badge: 'bg-accent-violet/10 text-accent-violet border-accent-violet/20', dot: 'bg-accent-violet', border: 'border-accent-violet/20' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Experience" title="Where I've applied my skills" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.cyan;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass-card p-6 flex flex-col gap-5 border ${c.border}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase size={16} className="text-white/50" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <p className="text-white/50 text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badge}`}>
                      {exp.type}
                    </span>
                    <span className="text-white/30 text-xs font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>

                {/* Contribution areas */}
                <div>
                  <p className="text-white/30 text-xs font-mono mb-2 uppercase tracking-widest">Contribution areas</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.contributionAreas.map((area, j) => (
                      <span key={j} className="tag text-xs">{area}</span>
                    ))}
                  </div>
                </div>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/40 leading-relaxed">
                        <CheckCircle size={12} className={`mt-0.5 shrink-0 ${c.dot === 'bg-accent-cyan' ? 'text-accent-cyan/50' : 'text-accent-violet/50'}`} />
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
