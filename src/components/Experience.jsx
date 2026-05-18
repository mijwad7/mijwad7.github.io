import { useState, useRef } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 24; // gap-6 is 24px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, experiences.length - 1)));
  };

  const scrollToSlide = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 24;
    container.scrollTo({
      left: idx * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Experience" title={isResume ? 'Professional Experience' : "Where I've applied my skills"} />

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className={isResume 
            ? "grid gap-6 grid-cols-1 max-w-4xl mx-auto" 
            : "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 no-scrollbar items-stretch"
          }
        >
          {experiences.map((exp, i) => {
            const c = colorMap[exp.color] || colorMap.cyan;
            return (
              <div 
                key={exp.id} 
                className={isResume 
                  ? "" 
                  : "w-[85vw] sm:w-[450px] shrink-0 snap-center lg:w-auto lg:shrink lg:snap-align-none flex"
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={isResume 
                    ? "flex flex-col gap-3 pb-6 mb-2 border-b border-white/10 last:border-0 w-full" 
                    : `glass-card p-6 flex flex-col gap-5 border ${c.border} w-full h-full`}
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
              </div>
            );
          })}
        </div>

        {/* Dynamic Mobile Dots Indicator */}
        {!isResume && (
          <div className="flex md:hidden justify-center items-center gap-2 mt-4">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'w-6 bg-accent-cyan' 
                    : 'w-1.5 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
