import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import { earlierProjects } from '../data/earlierProjects';

export default function EarlierProjects() {
  return (
    <section id="foundation" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Foundation"
          title="Earlier projects that built my foundation"
          subtitle="Before working on larger full-stack and production systems, I built smaller projects that helped me practice core web development concepts: authentication, CRUD workflows, APIs, state, routing, search, forms, and user interaction."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {earlierProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.07 }}
              className="glass-card-hover p-4 flex flex-col gap-3"
            >
              <div>
                <h3 className="font-semibold text-white text-sm">{project.name}</h3>
                <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{project.description}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tech.slice(0, 3).map((t, j) => (
                  <span key={j} className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-white/4 border border-white/8 text-white/40">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs text-white/25 self-center">+{project.tech.length - 3}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
