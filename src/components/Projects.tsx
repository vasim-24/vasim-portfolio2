import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, type Project } from '../data/projects';
import { gsap } from '../animations/gsapConfig';
import { getAssetUrl } from '../utils/assets';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Lock body scroll when modal is open on mobile/desktop
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-36 bg-[#F4F3EE] text-brand-dark overflow-hidden border-b border-brand-dark/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-dark/15 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-orange">
                // 02 &bull; Portfolio
              </span>
              <span className="text-xs font-mono text-brand-muted">/ Engineering & Product</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brand-dark leading-none">
              SELECTED WORKS<span className="text-brand-orange">.</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-brand-muted leading-relaxed">
            Curated selection of full-stack platforms, autonomous AI applications, and research-driven systems built with modern engineering standards.
          </p>
        </div>

        {/* Large Editorial Project Cards Stack */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card-reveal group rounded-3xl bg-white border border-brand-dark/10 overflow-hidden shadow-sm hover:shadow-editorial transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left Column: Project Editorial Context */}
                <div className="lg:col-span-6 p-5 sm:p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-dark/10">
                  <div>
                    {/* Meta Row: Number & Category */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-surface text-brand-dark border border-brand-dark/10">
                        {project.number}
                      </span>
                      <span className="font-mono text-xs text-brand-orange uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-2xl sm:text-4xl text-brand-dark tracking-tight mb-2 group-hover:text-brand-orange transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="font-sans font-medium text-sm sm:text-base text-brand-muted mb-5">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-brand-muted/90 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-brand-dark/60 font-semibold">
                        Key Capabilities:
                      </p>
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs text-brand-dark font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags & CTA Actions */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-brand-surface text-brand-dark font-mono text-[11px] font-medium border border-brand-dark/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-brand-dark/8">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-dark text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-brand-orange transition-colors duration-300 shadow-sm"
                      >
                        <span>Inspect Specs</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full border border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-200"
                          title="View on GitHub"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column: Large Visual Preview */}
                <div
                  className="lg:col-span-6 relative bg-brand-dark min-h-[220px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden cursor-pointer"
                  data-cursor="project"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <img
                    src={getAssetUrl(project.image)}
                    alt={`${project.title} visual preview`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] flex items-center gap-1.5">
                    <span>Year: {project.year}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-dark/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-brand-dark/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-surface hover:bg-brand-dark hover:text-white transition-colors text-brand-dark"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
                  {selectedProject.category} &bull; {selectedProject.year}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-dark mt-1">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-brand-muted text-sm sm:text-base mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Preview Image in Modal */}
              <div className="rounded-2xl overflow-hidden border border-brand-dark/10 aspect-video bg-brand-surface">
                <img
                  src={getAssetUrl(selectedProject.image)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-brand-dark mb-2">
                  Architecture & Scope
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-brand-dark mb-2">
                  Key Accomplishments
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-brand-dark">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-base text-brand-dark mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-brand-surface text-brand-dark font-mono text-xs border border-brand-dark/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-dark/10">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-dark text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-brand-orange transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-brand-dark/20 text-brand-dark font-mono text-xs font-semibold uppercase tracking-wider hover:bg-brand-surface transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
