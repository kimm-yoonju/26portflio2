
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { useTheme } from '../hooks/useTheme';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const Portfolio: React.FC = () => {
  const { theme } = useTheme();

  const heroFade = useScrollFadeIn<HTMLDivElement>();
  const projectsTitleFade = useScrollFadeIn<HTMLHeadingElement>();
  const aboutTitleFade = useScrollFadeIn<HTMLHeadingElement>();
  const aboutContentFade = useScrollFadeIn<HTMLDivElement>();
  const skillsTitleFade = useScrollFadeIn<HTMLHeadingElement>();
  const expTitleFade = useScrollFadeIn<HTMLHeadingElement>();
  const contactTitleFade = useScrollFadeIn<HTMLHeadingElement>();

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text, fontFamily: theme.fonts.body }}>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center container mx-auto px-6 md:px-12">
          <div {...heroFade}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter whitespace-pre-line" style={{ color: theme.colors.text }}>
              {theme.content.heroSubtitle}
            </h1>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h2 {...projectsTitleFade} className="text-4xl md:text-5xl font-bold mb-12 md:mb-16">{theme.content.projectsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {theme.projects.map((project, index) => (
                <div key={project.id} {...useScrollFadeIn<HTMLDivElement>()}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32" style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}>
          <div className="container mx-auto px-6 md:px-12">
            <h2 {...aboutTitleFade} className="text-4xl md:text-5xl font-bold mb-12 md:mb-16">{theme.content.aboutTitle}</h2>
            <div {...aboutContentFade} className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-3">
                <p className="text-lg md:text-xl leading-relaxed opacity-90">{theme.content.aboutBio}</p>
              </div>
              <div className="lg:col-span-2 space-y-16">
                <div>
                  <h3 {...skillsTitleFade} className="text-2xl font-bold mb-6">{theme.content.skillsTitle}</h3>
                  <ul className="space-y-4">
                    {theme.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm opacity-70">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-700">
                          <div className="h-full" style={{ width: `${skill.level}%`, backgroundColor: theme.colors.primary }}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 {...expTitleFade} className="text-2xl font-bold mb-6">{theme.content.experienceTitle}</h3>
                  <ul className="space-y-6 border-l-2 border-gray-700 pl-6">
                    {theme.experience.map((exp) => (
                      <li key={exp.company}>
                        <p className="text-sm opacity-70">{exp.period}</p>
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="opacity-90">{exp.company}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
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
              {theme.content.contactEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
