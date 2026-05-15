import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Start' },
  { id: 'current-focus', label: 'Focus' },
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'production', label: 'Production' },
  { id: 'projects', label: 'Projects' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'stack', label: 'Stack' },
  { id: 'notes', label: 'Notes' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollProgressTimeline() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            title={label}
            className="group flex items-center gap-2 py-1"
          >
            <div
              className={`h-0.5 transition-all duration-300 rounded-full ${
                isActive ? 'w-6 bg-accent-cyan' : 'w-3 bg-white/20 group-hover:w-5 group-hover:bg-white/40'
              }`}
            />
            <span
              className={`text-xs font-mono transition-all duration-200 ${
                isActive ? 'text-accent-cyan opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100'
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
