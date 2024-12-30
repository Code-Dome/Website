import React, { useState } from 'react';
import { Project } from '../../data/projects';
import Modal from '../shared/Modal';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, image, category, icon: Icon } = project;

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#144E64]/90 to-transparent" />
        </div>
        <div className="absolute bottom-0 w-full p-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/90">{description}</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectModal project={project} />
      </Modal>
    </>
  );
}