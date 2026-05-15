import { motion } from 'framer-motion';
import { Server, GitBranch, Brain, Bug } from 'lucide-react';
import SectionHeader from './SectionHeader';

const focusCards = [
  {
    icon: Server,
    title: 'Backend Systems',
    description: 'Designing and improving backend logic for booking platforms, service management portals, CRM-connected systems, and client-facing applications.',
    color: 'cyan',
  },
  {
    icon: GitBranch,
    title: 'Automation Workflows',
    description: 'Working with webhooks, external APIs, GoHighLevel workflows, Jobber integrations, and orchestration flows that move data between platforms.',
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Features',
    description: 'Building and contributing to workflows involving OCR, handwriting detection, validation logic, and AI-powered error checking.',
    color: 'violet',
  },
  {
    icon: Bug,
    title: 'Production Debugging',
    description: 'Debugging deployment issues, backend behavior, integration failures, race conditions, and real-world production problems across active projects.',
    color: 'emerald',
  },
];

const colorMap = {
  cyan: {
    bg: 'bg-accent-cyan/8',
    border: 'border-accent-cyan/15',
    icon: 'text-accent-cyan',
    glow: 'hover:shadow-glow-cyan',
  },
  blue: {
    bg: 'bg-accent-blue/8',
    border: 'border-accent-blue/15',
    icon: 'text-accent-blue',
    glow: 'hover:shadow-glow-blue',
  },
  violet: {
    bg: 'bg-accent-violet/8',
    border: 'border-accent-violet/15',
    icon: 'text-accent-violet',
    glow: 'hover:shadow-glow-violet',
  },
  emerald: {
    bg: 'bg-accent-emerald/8',
    border: 'border-accent-emerald/15',
    icon: 'text-accent-emerald',
    glow: '',
  },
};

export default function CurrentFocus() {
  return (
    <section id="current-focus" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Current Focus"
          title="What I'm focused on now"
          subtitle="I'm currently working as a Backend Developer at SaasyWay, contributing to backend systems, workflow automation, CRM integrations, real-time synchronization, booking platforms, service management portals, and AI-assisted validation tools. My focus is becoming stronger at building reliable backend systems: APIs that are easy to maintain, workflows that handle real business logic, and integrations that connect multiple platforms together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusCards.map((card, i) => {
            const c = colorMap[card.color];
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`glass-card-hover p-5 flex flex-col gap-4 ${c.glow}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg} border ${c.border}`}
                >
                  <Icon size={18} className={c.icon} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{card.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
