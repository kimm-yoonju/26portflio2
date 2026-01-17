
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
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <button onClick={() => navigate(-1)} className="text-sm font-medium hover:opacity-75 transition-opacity mb-8">
              &larr; Back to Projects
            </button>
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">{project.category}</p>
            <h1 className="text-5xl md:text-7xl font-extrabold">{project.title}</h1>
          </div>

          <div className="mb-12 md:mb-20">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-lg leading-relaxed opacity-90 whitespace-pre-line space-y-6">
              {project.description.split('\n').map((paragraph, index) => (
                paragraph && <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t" style={{ borderColor: theme.colors.accent }}>
              <h3 className="text-2xl font-bold mb-6">Project Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 text-sm">
                <div>
                  <p className="font-bold uppercase tracking-wider opacity-60">소속</p>
                  <p className="mt-1">{project.company}</p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider opacity-60">기간</p>
                  <p className="mt-1">{project.period}</p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider opacity-60">역할</p>
                  <p className="mt-1">{project.role}</p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider opacity-60">툴</p>
                  <p className="mt-1">{project.tools}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-bold uppercase tracking-wider opacity-60">팀</p>
                  <p className="mt-1">{project.team}</p>
                </div>
                {project.platform && (
                  <div className="col-span-2">
                    <p className="font-bold uppercase tracking-wider opacity-60">플랫폼</p>
                    <p className="mt-1">{project.platform}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;