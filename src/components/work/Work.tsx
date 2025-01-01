import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#144E64] mb-4">Our Work</h2>
          <p className="text-xl text-[#176577] max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivering innovative solutions across various industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}