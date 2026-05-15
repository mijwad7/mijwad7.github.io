import { motion } from 'framer-motion';
import { Code2, Database, ShieldCheck, Cpu, Share2, Network, Terminal, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { capabilities } from '../data/skills';

const colorMap = {
  cyan: {
    label: 'text-accent-cyan',
    border: 'border-accent-cyan/20',
    bg: 'bg-accent-cyan/5',
    tag: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan/90',
    icon: Code2,
  },
  blue: {
    label: 'text-accent-blue',
    border: 'border-accent-blue/20',
    bg: 'bg-accent-blue/5',
    tag: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue/90',
    icon: Globe,
  },
  violet: {
    label: 'text-accent-violet',
    border: 'border-accent-violet/20',
    bg: 'bg-accent-violet/5',
    tag: 'bg-accent-violet/10 border-accent-violet/20 text-accent-violet/90',
    icon: Database,
  },
  emerald: {
    label: 'text-accent-emerald',
    border: 'border-accent-emerald/20',
    bg: 'bg-accent-emerald/5',
    tag: 'bg-accent-emerald/10 border-accent-emerald/20 text-accent-emerald/90',
    icon: Cpu,
  },
  amber: {
    label: 'text-accent-amber',
    border: 'border-accent-amber/20',
    bg: 'bg-accent-amber/5',
    tag: 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber/90',
    icon: Share2,
  },
};

// Secondary icons mapping to dynamic categories
const getCategoryIcon = (category, defaultColor) => {
  const lower = category.toLowerCase();
  if (lower.includes('infrastructure')) return Network;
  if (lower.includes('tools')) return Terminal;
  if (lower.includes('workflow') || lower.includes('real-time')) return ShieldCheck;
  return colorMap[defaultColor]?.icon || Code2;
};

function CapabilityCard({ card, index }) {
  const c = colorMap[card.color] || colorMap.cyan;
  const IconComponent = getCategoryIcon(card.category, card.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`glass-card p-6 border flex flex-col h-full gap-5 hover:shadow-lg hover:bg-white/[0.02] transition-all group ${c.border}`}
    >
      {/* Card Header */}
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all group-hover:scale-105 ${c.tag}`}>
          <IconComponent size={18} />
        </div>
        <div>
          <h3 className="font-bold text-white text-base group-hover:text-accent-cyan transition-colors duration-300 leading-tight">
            {card.category}
          </h3>
        </div>
      </div>

      {/* Tools Tag Grid */}
      <div>
        <div className="flex flex-wrap gap-1.5">
          {card.tools.map((tool, i) => (
            <span 
              key={i} 
              className={`px-2.5 py-1 rounded-lg text-xs border font-mono font-medium ${c.tag}`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/5" aria-hidden="true" />

      {/* Use Case Section */}
      <div className="mt-auto">
        <p className="text-[10px] text-white/35 font-mono uppercase tracking-widest mb-1.5">Usage & Implementation</p>
        <p className="text-white/60 text-sm leading-relaxed">
          {card.useCase}
        </p>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Technical Capabilities"
          title="Core engineering strengths & workflows"
          subtitle="A practical view of the tools I use, what I use them for, and where they show up across projects, client work, and production systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {capabilities.map((card, i) => (
            <CapabilityCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
