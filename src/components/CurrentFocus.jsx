import { motion } from 'framer-motion';

const improvements = [
  'Designing APIs that are clear, consistent, and easier to extend',
  'Modeling data around real business rules, not just database tables',
  'Building secure user flows across frontend and backend',
  'Using LLMs inside real features, next to the APIs and data they depend on',
  'Debugging production issues across backend logic, integrations, and deployments',
  'Choosing when an LLM belongs in a feature, and when regular code is the better tool',
];

export default function CurrentFocus() {
  return (
    <section id="current-focus" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-cyan/50" />
              <span className="terminal-text text-xs uppercase tracking-widest opacity-70">
                CURRENT DIRECTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The stage I’m in now
            </h2>

            <div className="flex flex-col gap-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                I’m past the stage of only building projects to learn syntax. Now I’m learning how real
                systems behave: how APIs age, how data models affect features, how integrations fail,
                and how AI belongs inside a reliable product instead of sitting off to the side.
              </p>
              <p>
                At SaasyWay, I’m getting practical exposure to production backend systems, booking
                logic, service portals, external integrations, and AI features that have to work with
                the rest of the system, plus debugging issues that only show up when real users and
                real business rules are involved.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Focus List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 blur-[80px] -mr-32 -mt-32 rounded-full" />

            <h3 className="terminal-text text-xs uppercase tracking-[0.2em] mb-10 opacity-60">
              Currently improving
            </h3>

            <div className="flex flex-col gap-6">
              {improvements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-5 group cursor-default"
                >
                  <span className="font-mono text-xs text-accent-cyan/40 mt-1.5 transition-colors group-hover:text-accent-cyan">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors text-sm sm:text-base leading-tight">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom decoration */}
            <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-accent-cyan/20" />
                ))}
              </div>
              <span className="terminal-text text-[10px] uppercase tracking-widest opacity-30">
                Growth Phase: 02
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
