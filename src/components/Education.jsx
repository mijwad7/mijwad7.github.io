import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { educationItems, certifications, learningLayers } from '../data/education';

const colorMap = {
  cyan: { border: 'border-accent-cyan/20', label: 'text-accent-cyan', dot: 'bg-accent-cyan' },
  blue: { border: 'border-accent-blue/20', label: 'text-accent-blue', dot: 'bg-accent-blue' },
  violet: { border: 'border-accent-violet/20', label: 'text-accent-violet', dot: 'bg-accent-violet' },
  emerald: { border: 'border-accent-emerald/20', label: 'text-accent-emerald', dot: 'bg-accent-emerald' },
  amber: { border: 'border-accent-amber/20', label: 'text-accent-amber', dot: 'bg-accent-amber' },
};

const layerColors = [
  'from-white/5 to-white/2 border-white/8',
  'from-accent-cyan/5 to-accent-cyan/2 border-accent-cyan/10',
  'from-accent-blue/5 to-accent-blue/2 border-accent-blue/10',
  'from-accent-violet/5 to-accent-violet/2 border-accent-violet/10',
  'from-accent-emerald/5 to-accent-emerald/2 border-accent-emerald/10',
  'from-accent-amber/5 to-accent-amber/2 border-accent-amber/10',
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Education"
          title="Education and structured learning"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: education + certs */}
          <div className="lg:col-span-2 space-y-5">
            {/* Education cards */}
            {educationItems.map((item, i) => {
              const c = colorMap[item.color] || colorMap.cyan;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`glass-card p-5 border ${c.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                      <GraduationCap size={16} className="text-white/50" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-white text-sm">{item.title}</h3>
                          <p className="text-white/50 text-xs mt-0.5">{item.institution}</p>
                        </div>
                        <span className={`font-mono text-xs shrink-0 ${c.label}`}>{item.period}</span>
                      </div>
                      <p className="text-white/40 text-xs mt-2 leading-relaxed">{item.description}</p>
                      {item.certificate && (
                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-1 text-xs mt-2 ${c.label} hover:opacity-80 transition-opacity`}
                        >
                          <ExternalLink size={11} /> View certificate
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Certifications */}
            <div>
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">Certifications</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {certifications.map((cert, i) => {
                  const c = colorMap[cert.color] || colorMap.cyan;
                  return (
                    <motion.a
                      key={cert.id}
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.08 }}
                      className={`glass-card-hover p-4 flex flex-col gap-2 border ${c.border} group`}
                    >
                      <Award size={15} className={`${c.label}`} />
                      <p className="text-white text-xs font-medium leading-snug">{cert.title}</p>
                      <p className="text-white/35 text-xs">{cert.issuer}</p>
                      <span className={`text-xs ${c.label} group-hover:underline mt-auto`}>View →</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: learning layers */}
          <div>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4">Learning layers</p>
            <div className="space-y-2">
              {learningLayers.map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${layerColors[i]} border text-sm font-medium text-white/60`}
                  style={{ marginLeft: `${i * 8}px` }}
                >
                  <Layers size={13} className="text-white/30 shrink-0" />
                  {layer}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
