import { useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import ProductionSystemCard from './ProductionSystemCard';
import { productionSystems } from '../data/productionSystems';

export default function ProductionSystems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 20; // gap-5 is 20px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, productionSystems.length - 1)));
  };

  const scrollToSlide = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 20;
    container.scrollTo({
      left: idx * (cardWidth + gap),
      behavior: 'smooth'
    });
  };

  return (
    <section id="production" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Production Systems"
          title="Production systems I've contributed to"
          subtitle="Some professional work cannot be shown publicly as full source code, but these are real systems and workflows I contributed to as part of production development work. This section focuses on the type of systems I worked on, the technical problems involved, and the parts I personally contributed to."
        />

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 no-scrollbar items-stretch"
        >
          {productionSystems.map((system, i) => (
            <div key={system.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none flex">
              <ProductionSystemCard system={system} index={i} />
            </div>
          ))}
        </div>

        {/* Dynamic Mobile Dots Indicator */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {productionSystems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-6 bg-accent-cyan' 
                  : 'w-1.5 bg-white/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
