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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productionSystems.map((system, i) => (
            <ProductionSystemCard key={system.id} system={system} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
