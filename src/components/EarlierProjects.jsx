import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { earlierProjects } from '../data/earlierProjects';

export default function EarlierProjects() {
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedProjects((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    
    const cardWidth = container.children[0]?.clientWidth || 250;
    const gap = 16; // gap-4 is 16px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, earlierProjects.length - 1)));
  };

  const scrollToSlide = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 250;
    const gap = 16;
    container.scrollTo({
      left: idx * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  return (
    <section id="foundation" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Foundation"
          title="Earlier projects that built my foundation"
          subtitle="Before working on larger full-stack and production systems, I built smaller projects that helped me practice core web development concepts: authentication, CRUD workflows, APIs, state, routing, search, forms, and user interaction."
        />

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 no-scrollbar items-stretch"
        >
          {earlierProjects.map((project, i) => {
            const isExpanded = expandedProjects.includes(project.id);
            const displayedTech = isExpanded ? project.tech : project.tech.slice(0, 3);

            return (
              <div key={project.id} className="w-[80vw] sm:w-auto shrink-0 snap-center sm:shrink sm:snap-align-none flex">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: (i % 4) * 0.07 }}
                  className="glass-card-hover p-4 flex flex-col gap-3 w-full h-full"
                >
                  <div>
                    <h3 className="font-semibold text-white text-sm">{project.name}</h3>
                    <p className="text-white/40 text-xs mt-1.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    <AnimatePresence>
                      {displayedTech.map((t, j) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-white/4 border border-white/8 text-white/40"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                    {project.tech.length > 3 && !isExpanded && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[10px] text-white/25 hover:text-accent-cyan transition-colors self-center px-1"
                      >
                        +{project.tech.length - 3}
                      </button>
                    )}
                    {isExpanded && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-[10px] text-accent-cyan/60 hover:text-accent-cyan transition-colors self-center px-1"
                      >
                        less
                      </button>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs text-white/35 hover:text-white/70 transition-colors"
                      aria-label={`GitHub for ${project.name}`}
                    >
                      <FaGithub size={12} /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs text-white/35 hover:text-accent-cyan/70 transition-colors ml-auto"
                        aria-label={`Demo for ${project.name}`}
                      >
                        <Play size={11} /> Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Mobile Dots Indicator */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {earlierProjects.map((_, idx) => (
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
      </div>
    </section>
  );
}
