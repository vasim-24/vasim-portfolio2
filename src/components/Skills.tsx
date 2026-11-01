import React, { useState, useRef, useEffect } from 'react';
import { Layers, Terminal, Sparkles, Check } from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';
import { gsap } from '../animations/gsapConfig';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#FBFBF9] text-brand-dark overflow-hidden border-b border-brand-dark/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-dark/15 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-orange">
                // 04 &bull; Stack
              </span>
              <span className="text-xs font-mono text-brand-muted">/ Technical Competencies</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-brand-dark leading-none">
              TECH STACK I BUILD
              <br />
              <span className="text-brand-orange">WITH</span>.
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm sm:text-base text-brand-muted leading-relaxed">
            Deliberately chosen technologies and modern stack to engineer reliable, fast, and intelligent digital products. From reactive user interfaces to retrieval-augmented AI systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-reveal flex flex-wrap items-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-dark text-white font-bold shadow-sm'
                  : 'bg-white text-brand-muted hover:text-brand-dark hover:bg-brand-surface border border-brand-dark/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skills-reveal group p-6 rounded-2xl bg-white border border-brand-dark/8 hover:border-brand-orange/40 hover:shadow-editorial transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange px-2 py-0.5 rounded bg-brand-orange/10 font-bold">
                    {skill.category}
                  </span>
                  <span className="font-mono text-[11px] text-brand-muted">
                    {skill.experienceLevel}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-brand-dark group-hover:text-brand-orange transition-colors duration-200">
                  {skill.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                  {skill.role}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-dark/5 flex items-center justify-between text-[11px] font-mono text-brand-muted group-hover:text-brand-dark">
                <span>Production Ready</span>
                <Check className="w-3.5 h-3.5 text-emerald-500 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="skills-reveal p-8 rounded-3xl bg-[#F4F3EE] border border-brand-dark/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold text-sm text-brand-dark">Modern UI Architecture</p>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Component-first modularity with semantic HTML5, fluid layout systems, and thoughtful responsive states.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Terminal className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold text-sm text-brand-dark">Scalable API Contracts</p>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Clean RESTful endpoints, robust error handling, and structured data pipelines using Node and Python.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold text-sm text-brand-dark">Grounded AI Runtimes</p>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                RAG pipelines, vector embedding lookups, and deterministic guardrails for reliable LLM user experiences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
