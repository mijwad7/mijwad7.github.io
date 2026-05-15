import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { journeyItems } from '../data/journey';

const colorClasses = {
  cyan: { dot: 'bg-accent-cyan shadow-glow-cyan', line: 'from-accent-cyan/40', label: 'text-accent-cyan', border: 'border-accent-cyan/20' },
  blue: { dot: 'bg-accent-blue', line: 'from-accent-blue/40', label: 'text-accent-blue', border: 'border-accent-blue/20' },
  violet: { dot: 'bg-accent-violet', line: 'from-accent-violet/40', label: 'text-accent-violet', border: 'border-accent-violet/20' },
  emerald: { dot: 'bg-accent-emerald', line: 'from-accent-emerald/40', label: 'text-accent-emerald', border: 'border-accent-emerald/20' },
  amber: { dot: 'bg-accent-amber', line: 'from-accent-amber/40', label: 'text-accent-amber', border: 'border-accent-amber/20' },
};

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const c = colorClasses[item.color] || colorClasses.cyan;
  const isLast = index === journeyItems.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Left: timeline dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.08 + 0.2 }}
          className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${c.dot}`}
        />
        {!isLast && (
          <div className={`w-px flex-1 mt-2 min-h-12 bg-gradient-to-b ${c.line} to-transparent`} />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-10 flex-1`}>
        <span className={`font-mono text-xs ${c.label} tracking-wider`}>{item.period}</span>
        <h3 className="text-lg font-bold text-white mt-1 mb-3">{item.title}</h3>
        <div className={`glass-card p-4 border ${c.border}`}>
          <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Journey"
          title="From curiosity to production systems"
        />
        <div className="mt-8">
          {journeyItems.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
