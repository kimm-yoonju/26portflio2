
import React from 'react';
import { Project } from '../types';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="block group">
      <div className="overflow-hidden aspect-[4/3] bg-gray-100">
        <img 
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {project.company} · {project.period}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;