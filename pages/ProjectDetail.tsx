
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const project = theme.projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text }} className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you are looking for does not exist.</p>
        <Link to="/" className="text-lg font-bold py-3 px-8" style={{ backgroundColor: theme.colors.text, color: theme.colors.background }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text, fontFamily: theme.fonts.body }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12">
            <button onClick={() => navigate(-1)} className="text-sm font-medium hover:opacity-75 transition-opacity mb-8">
              &larr; Back to Projects
            </button>
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">{project.category}</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">{project.title}</h1>
          </div>

          <div className="mb-12 md:mb-16">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="text-lg leading-relaxed opacity-90 whitespace-pre-line space-y-4">
              {project.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
