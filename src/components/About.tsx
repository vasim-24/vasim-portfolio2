import React, { useRef, useEffect } from 'react';
import { Sparkles, Terminal, Cpu, Award, Zap, Heart } from 'lucide-react';
import { gsap } from '../animations/gsapConfig';
import { getAssetUrl } from '../utils/assets';

interface TamilWordFlipProps {
  english: string;
  tamil: string;
}

const TamilWord: React.FC<TamilWordFlipProps> = ({ english, tamil }) => {
  return (
    <span
      className="tamil-flip-container relative inline-block border-b-2 border-brand-orange/40 hover:border-brand-orange transition-colors px-1 mx-0.5 rounded-sm bg-brand-orange/5 group"
      title={`Tamil: ${tamil}`}
    >
      <span className="tamil-flip-en font-bold text-brand-dark group-hover:text-brand-orange">
        {english}
      </span>
      <span className="tamil-flip-ta font-tamil font-bold text-brand-orange text-[1.05em]">
        {tamil}
      </span>
    </span>
  );
};

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger for Section Header
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Quote reveal
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      icon: Terminal,
      title: 'Full-Stack Development',
      desc: 'Architecting end-to-end web architectures with modern React, Node.js, Python, and robust database layers.',
    },
    {
      icon: Cpu,
      title: 'Applied AI & RAG',
      desc: 'Integrating LLMs, neural search, vector databases, and contextual retrieval for intelligent real-world tools.',
    },
    {
      icon: Sparkles,
      title: 'Product & Creative Thinking',
      desc: 'Refining interfaces with editorial typography, motion principles, and intuitive user-centric experiences.',
    },
    {
      icon: Award,
      title: 'High-Velocity Sprints',
      desc: 'Proven hackathon champion with 3 consecutive wins, taking ideas from napkin sketches to deployable solutions.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#FBFBF9] text-brand-dark overflow-hidden border-b border-brand-dark/10"
    >
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Label */}
        <div className="about-reveal flex items-center justify-between border-b border-brand-dark/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-orange">
              // 01 &bull; Personal Narrative
            </span>
            <span className="text-xs font-mono text-brand-muted">/ Who I Am</span>
          </div>
          <span className="font-mono text-xs text-brand-muted hidden sm:inline-block">
            Culture &bull; Technology &bull; Purpose
          </span>
        </div>

        {/* Asymmetric Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Large Editorial Headline */}
          <div className="lg:col-span-5 about-reveal">
            <span className="inline-block px-3 py-1 rounded bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold tracking-wider uppercase mb-4">
              Design &bull; Systems &bull; Humanity
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-brand-dark leading-[0.95]">
              MORE THAN
              <br />
              <span className="text-brand-orange">JUST CODE</span>.
            </h2>

            {/* Character Vignette Card */}
            <div className="mt-8 p-4 rounded-2xl bg-[#F4F3EE] border border-brand-dark/8 flex items-center gap-4 shadow-sm">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-orange flex-shrink-0">
                <img
                  src={getAssetUrl('/images/hero-character.jpg')}
                  alt="Mohammed Vasim"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-brand-dark">Mohammed Vasim</p>
                <p className="font-mono text-xs text-brand-muted">Creative Developer &bull; Coimbatore</p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] font-mono text-brand-orange">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>Interactive & AI Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content with Tamil Interactive Hover */}
          <div className="lg:col-span-7 space-y-6 about-reveal text-lg sm:text-xl text-brand-dark/90 font-sans leading-relaxed">
            <p className="font-medium text-2xl sm:text-3xl font-display text-brand-dark tracking-tight leading-snug">
              "I'm a developer driven by{' '}
              <TamilWord english="curiosity" tamil="ஆர்வம்" />,{' '}
              <TamilWord english="creativity" tamil="படைப்பாற்றல்" />, and the desire to turn{' '}
              <TamilWord english="ideas" tamil="யோசனைகள்" /> into meaningful digital products."
            </p>

            <div className="text-sm font-mono text-brand-orange flex items-center gap-2 py-1">
              <Heart className="w-3.5 h-3.5 fill-current text-brand-orange" />
              <span>Hover the highlighted words above to discover their Tamil equivalents</span>
            </div>

            <p className="text-base sm:text-lg text-brand-muted">
              Software is most compelling when high technical rigor converges with genuine empathy. As a full-stack developer and AI explorer, I don’t just write clean <TamilWord english="code" tamil="குறியீடு" />; I engineer experiences that feel natural, responsive, and empowering to those who interact with them.
            </p>

            <p className="text-base sm:text-lg text-brand-muted">
              From building context-aware travel engines like Travia and EduPath to designing full-stack campus residence and hostel management platforms, I enjoy solving complex challenges that demand product thinking, algorithmic clarity, and creative problem-solving. As a persistent <TamilWord english="builder" tamil="உருவாக்குபவர்" />, hackathons have honed my ability to ship under tight constraints without sacrificing architectural integrity.
            </p>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="about-reveal p-6 rounded-2xl bg-white border border-brand-dark/8 hover:border-brand-orange/40 hover:shadow-editorial transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-surface group-hover:bg-brand-orange group-hover:text-white text-brand-orange transition-colors duration-300 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="font-mono text-[11px] text-brand-muted tracking-widest uppercase">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-dark tracking-tight mt-1 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animated Personal Quote Banner */}
        <div
          ref={quoteRef}
          className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-brand-dark text-white overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-brand-orange font-mono text-xs uppercase tracking-widest border border-white/10">
              Personal Creed
            </span>

            <blockquote className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tighter leading-tight text-white">
              “Great ideas mean nothing{' '}
              <span className="text-brand-orange underline decoration-brand-orange/50 underline-offset-8">
                until you build them
              </span>.”
            </blockquote>

            <div className="pt-2 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-white/70">
              <span className="w-8 h-[1px] bg-brand-orange" />
              <span>Mohammed Vasim</span>
              <span className="w-8 h-[1px] bg-brand-orange" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
