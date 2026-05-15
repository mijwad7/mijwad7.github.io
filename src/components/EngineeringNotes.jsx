import { motion } from 'framer-motion';
import { Layers, Network, Zap, Brain, GitBranch } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { notes } from '../data/notes';

const iconMap = { Layers, Network, Zap, Brain, GitBranch };

const colorMap = {
  cyan: { border: 'border-accent-cyan/15', icon: 'text-accent-cyan', bg: 'bg-accent-cyan/8', title: 'text-white' },
  blue: { border: 'border-accent-blue/15', icon: 'text-accent-blue', bg: 'bg-accent-blue/8', title: 'text-white' },
  violet: { border: 'border-accent-violet/15', icon: 'text-accent-violet', bg: 'bg-accent-violet/8', title: 'text-white' },
  emerald: { border: 'border-accent-emerald/15', icon: 'text-accent-emerald', bg: 'bg-accent-emerald/8', title: 'text-white' },
  amber: { border: 'border-accent-amber/15', icon: 'text-accent-amber', bg: 'bg-accent-amber/8', title: 'text-white' },
};

export default function EngineeringNotes() {
  return (
    <section id="notes" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Engineering Notes"
          title="Things I've learned by building"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes.map((note, i) => {
            const c = colorMap[note.color] || colorMap.cyan;
            const Icon = iconMap[note.icon] || Layers;
            return (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className={`glass-card-hover p-5 flex flex-col gap-4 border ${c.border}`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.bg}`}>
                  <Icon size={16} className={c.icon} />
                </div>
                <div>
                  <h3 className={`font-semibold text-sm mb-2 ${c.title}`}>{note.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{note.content}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
