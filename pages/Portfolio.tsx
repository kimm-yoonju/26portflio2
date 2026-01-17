
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../hooks/useTheme';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import FadeInWrapper from '../components/FadeInWrapper';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  const heroFade = useScrollFadeIn<HTMLDivElement>();
  const aboutContentFade = useScrollFadeIn<HTMLParagraphElement>();
  const projectsTitleFade = useScrollFadeIn<HTMLHeadingElement>();
  const contactTitleFade = useScrollFadeIn<HTMLHeadingElement>();

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text, fontFamily: theme.fonts.body }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center container mx-auto px-6 md:px-12">
          <div {...heroFade}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold whitespace-pre-line" style={{ color: theme.colors.text }}>
              {theme.content.heroSubtitle}
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32" style={{ backgroundColor: theme.colors.secondary }}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <p {...aboutContentFade} className="text-lg md:text-xl leading-relaxed opacity-90 whitespace-pre-line">
                {theme.content.aboutBio}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h2 {...projectsTitleFade} className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">{theme.content.projectsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {theme.projects.map((project) => (
                <FadeInWrapper key={project.id}>
                  <ProjectCard project={project} />
                </FadeInWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: theme.colors.secondary }}>
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 {...contactTitleFade} className="text-4xl md:text-5xl font-bold mb-4">{theme.content.contactTitle}</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80 mb-12">{theme.content.contactSubtitle}</p>
            <a 
              href={`mailto:${theme.content.contactEmail}`}
              className="inline-block text-lg md:text-xl font-bold py-4 px-12 transition-colors duration-300"
              style={{ 
                backgroundColor: theme.colors.text, 
                color: theme.colors.background,
              }}
            >
              Contact by Email
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;