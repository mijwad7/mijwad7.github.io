import SectionHeader from './SectionHeader';
import ProductionSystemCard from './ProductionSystemCard';
import { productionSystems } from '../data/productionSystems';

export default function ProductionSystems() {
  return (
    <section id="production" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Production Systems"
          title="Production systems I've contributed to"
          subtitle="Some professional work cannot be shown publicly as full source code, but these are real systems and workflows I contributed to as part of production development work. This section focuses on the type of systems I worked on, the technical problems involved, and the parts I personally contributed to."
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 no-scrollbar items-stretch">
          {productionSystems.map((system, i) => (
            <div key={system.id} className="w-[85vw] sm:w-[350px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none flex">
              <ProductionSystemCard system={system} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
