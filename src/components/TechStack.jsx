import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { skillGroups, skillPaths } from '../data/skills';

const colorMap = {
  cyan: {
    label: 'text-accent-cyan',
    border: 'border-accent-cyan/20',
    bg: 'bg-accent-cyan/8',
    tag: 'bg-accent-cyan/8 border-accent-cyan/15 text-accent-cyan/80',
    nodeBg: 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan',
    line: 'bg-accent-cyan/30',
  },
  blue: {
    label: 'text-accent-blue',
    border: 'border-accent-blue/20',
    bg: 'bg-accent-blue/8',
    tag: 'bg-accent-blue/8 border-accent-blue/15 text-accent-blue/80',
    nodeBg: 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue',
    line: 'bg-accent-blue/30',
  },
  violet: {
    label: 'text-accent-violet',
    border: 'border-accent-violet/20',
    bg: 'bg-accent-violet/8',
    tag: 'bg-accent-violet/8 border-accent-violet/15 text-accent-violet/80',
    nodeBg: 'bg-accent-violet/10 border-accent-violet/30 text-accent-violet',
    line: 'bg-accent-violet/30',
  },
  emerald: {
    label: 'text-accent-emerald',
    border: 'border-accent-emerald/20',
    bg: 'bg-accent-emerald/8',
    tag: 'bg-accent-emerald/8 border-accent-emerald/15 text-accent-emerald/80',
    nodeBg: 'bg-accent-emerald/10 border-accent-emerald/30 text-accent-emerald',
    line: 'bg-accent-emerald/30',
  },
  amber: {
    label: 'text-accent-amber',
    border: 'border-accent-amber/20',
    bg: 'bg-accent-amber/8',
    tag: 'bg-accent-amber/8 border-accent-amber/15 text-accent-amber/80',
    nodeBg: 'bg-accent-amber/10 border-accent-amber/30 text-accent-amber',
    line: 'bg-accent-amber/30',
  },
};

function SkillPath({ path, index }) {
  const c = colorMap[path.color] || colorMap.cyan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`glass-card p-4 border ${c.border}`}
    >
      <p className={`text-xs font-mono mb-3 ${c.label} uppercase tracking-widest`}>{path.label}</p>
      <div className="flex items-center flex-wrap gap-1.5">
        {path.nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${c.nodeBg}`}>
              {node}
            </span>
            {i < path.nodes.length - 1 && (
              <ArrowRight size={11} className={c.label} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Technical Stack"
          title="The tools I use to build"
          subtitle="Not just a logo wall — a map of how my skills connect and build on each other."
        />

        {/* Skill paths */}
        <div className="mb-12">
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4">Skill paths</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skillPaths.map((path, i) => (
              <SkillPath key={path.id} path={path} index={i} />
            ))}
          </div>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color] || colorMap.cyan;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: gi * 0.06 }}
                className="flex flex-col gap-3"
              >
                <p className={`text-xs font-mono uppercase tracking-widest ${c.label}`}>{group.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, si) => (
                    <span key={si} className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs border ${c.tag}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
