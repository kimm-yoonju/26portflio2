
import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className="group relative overflow-hidden aspect-[4/3]">
        <img 
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-6 md:p-8">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <p className="text-xs uppercase tracking-widest text-white opacity-80 mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 delay-100">{project.description.split('\n')[0]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
