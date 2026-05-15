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
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollProgressTimeline() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScrollSpy = () => {
      // Standard offset of 40% viewport height to scan the active section
      const triggerLine = window.scrollY + window.innerHeight * 0.4;
      
      let currentActive = 'hero';
      
      // Track sections from top to bottom
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && triggerLine >= el.offsetTop) {
          currentActive = sections[i].id;
        }
      }
      
      // Edge case: if reached very bottom of page, force set active to 'contact'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActive = 'contact';
      }
      
      setActive(currentActive);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // Boot detection cycle
    
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1">
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
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
