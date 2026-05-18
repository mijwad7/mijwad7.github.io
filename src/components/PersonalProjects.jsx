import { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectDrawer from './ProjectDrawer';
import { projects } from '../data/projects';

export default function PersonalProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Projects I built to learn deeply"
          subtitle="These projects helped me move from learning concepts to building complete applications. Each one pushed me into a different part of web development: authentication, real-time communication, API design, database modeling, deployment, AI integration, and user-facing product flows."
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 no-scrollbar items-stretch">
          {projects.map((project, i) => (
            <div key={project.id} className="w-[85vw] sm:w-[380px] shrink-0 snap-center md:w-auto md:shrink md:snap-align-none flex">
              <ProjectCard
                project={project}
                index={i}
                onClick={setSelected}
              />
            </div>
          ))}
        </div>
      </div>

      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
