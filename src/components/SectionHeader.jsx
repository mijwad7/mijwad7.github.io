import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
    >
      {label && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent-cyan/50" />
          <span className="terminal-text text-xs uppercase tracking-widest opacity-70">{label}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
