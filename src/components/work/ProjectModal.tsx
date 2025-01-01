import { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#144E64] mb-2">{project.title}</h3>
        <div className="flex items-center space-x-2 text-[#09AE92]">
          <project.icon className="h-5 w-5" />
          <span>{project.category}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-semibold text-[#144E64] mb-2">Challenge</h4>
          <p className="text-[#176577] mb-4">{project.details.challenge}</p>
          
          <h4 className="font-semibold text-[#144E64] mb-2">Solution</h4>
          <p className="text-[#176577] mb-4">{project.details.solution}</p>
          
          <h4 className="font-semibold text-[#144E64] mb-2">Impact</h4>
          <p className="text-[#176577] mb-4">{project.details.impact}</p>
          
          <div>
            <h4 className="font-semibold text-[#144E64] mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#71D9C7]/10 text-[#144E64] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {project.details.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}