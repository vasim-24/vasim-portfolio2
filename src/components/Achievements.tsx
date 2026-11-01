import React, { useRef, useEffect, useState } from 'react';
import { Trophy, Award, Flame, CheckCircle, Sparkles, Maximize2, X } from 'lucide-react';
import { achievementsData, type Achievement } from '../data/achievements';
import { gsap } from '../animations/gsapConfig';

export const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedAchievement]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAchievement(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-item-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-36 bg-brand-dark text-white overflow-hidden border-b border-white/10"
    >
      {/* Background Decorative Graphic Lines */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-20" />
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-8 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-orange">
                // 03 &bull; Hackathons & Honors
              </span>
              <span className="text-xs font-mono text-white/50">/ Rapid Execution</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white leading-none">
              BUILT UNDER
              <br />
              <span className="text-brand-orange">PRESSURE</span>.
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Hackathons are the ultimate proving ground for software craft. Turning raw ambiguity into working, tested code under 24 to 36-hour sprint constraints.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-mono">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>3x Verified Hackathon Champion</span>
            </div>
          </div>
        </div>

        {/* Hackathon Wins Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="achievement-item-reveal group relative rounded-3xl bg-brand-charcoal border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-orange/60 hover:shadow-2xl transition-all duration-400 overflow-hidden"
            >
              <div>
                {/* Top Row: Index & Award Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-black text-white/30 group-hover:text-brand-orange transition-colors duration-300">
                    {item.number}
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono text-xs font-semibold">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                    {item.tag}
                  </span>
                </div>

                {/* Achievement Ceremony Photo Showcase Frame */}
                <div
                  onClick={() => setSelectedAchievement(item)}
                  className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 bg-black/40 mb-6 cursor-pointer group/photo shadow-md"
                  title="Click to view ceremony photo in full resolution"
                >
                  <img
                    src={item.image}
                    alt={`${item.projectName} - ${item.eventName} ceremony`}
                    className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover/photo:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/photo:opacity-40 transition-opacity duration-300" />

                  {/* Top-left Ceremony Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 font-mono text-[10px] tracking-wider uppercase">
                    Ceremony Photo
                  </div>

                  {/* Expand button on hover */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-brand-dark/80 backdrop-blur-md border border-white/25 text-white font-mono text-[11px] flex items-center gap-1.5 group-hover/photo:border-brand-orange group-hover/photo:text-brand-orange transition-all duration-300">
                    <Maximize2 className="w-3 h-3 text-brand-orange" />
                    <span>View Photo</span>
                  </div>
                </div>

                {/* Event Name */}
                <p className="font-mono text-xs uppercase tracking-wider text-brand-orange font-semibold mb-1">
                  {item.eventName}
                </p>

                {/* Project Title */}
                <h3 className="font-display font-black text-2xl text-white tracking-tight mb-2 group-hover:text-amber-200 transition-colors duration-300">
                  {item.projectName}
                </h3>

                {/* Position / Award */}
                <div className="inline-block px-2.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs mb-4">
                  {item.award}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Visual / Laurel Proof */}
              <div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group-hover:bg-white/[0.08] transition-colors duration-300">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold text-white tracking-wide">
                      {item.metrics || "Sprint Milestone"}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-white/50 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>{item.statusText || "Verified Credential"}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Hackathon Philosophy Quote Footer */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <span>Ready for future hackathons, high-stakes sprint challenges, and product builds</span>
          </div>
          <span className="text-white/40">// Verified credentials &bull; Mohammed Vasim</span>
        </div>

      </div>

      {/* Full-Screen High-Res Photo Lightbox Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-charcoal rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-brand-orange font-semibold">
                  {selectedAchievement.eventName}
                </p>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  {selectedAchievement.projectName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAchievement(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Container */}
            <div className="rounded-2xl overflow-hidden bg-black/60 max-h-[70vh] flex items-center justify-center border border-white/10">
              <img
                src={selectedAchievement.image}
                alt={`${selectedAchievement.projectName} celebration`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/70">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {selectedAchievement.award}
              </span>
              <span>{selectedAchievement.metrics}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
