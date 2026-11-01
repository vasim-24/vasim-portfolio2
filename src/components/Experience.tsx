import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experience';
import { gsap } from '../animations/gsapConfig';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-item-reveal',
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#F4F3EE] text-brand-dark overflow-hidden border-b border-brand-dark/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-dark/15 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-orange">
                // 05 &bull; Journey
              </span>
              <span className="text-xs font-mono text-brand-muted">/ Career & Milestones</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brand-dark leading-none">
              EXPERIENCE &
              <br />
              <span className="text-brand-orange">TRAJECTORY</span>.
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed">
              Progressive immersion through hands-on industry internship, high-pressure hackathons, and relentless experimentation.
            </p>
          </div>
        </div>

        {/* Minimal Timeline Showcase */}
        <div className="relative border-l-2 border-brand-dark/15 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="timeline-item-reveal relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-dark group-hover:border-brand-orange group-hover:scale-125 transition-all duration-300" />

              {/* Card Container */}
              <div className="p-8 rounded-3xl bg-white border border-brand-dark/10 group-hover:border-brand-orange/40 group-hover:shadow-editorial transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-surface font-mono text-xs uppercase tracking-wider text-brand-orange font-bold">
                    {exp.type}
                  </span>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-dark tracking-tight">
                  {exp.role}
                </h3>
                
                <p className="font-mono text-sm text-brand-orange font-medium mt-1 mb-4">
                  {exp.organization}
                </p>

                <p className="font-sans text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-dark/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-brand-surface font-mono text-xs text-brand-dark/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
