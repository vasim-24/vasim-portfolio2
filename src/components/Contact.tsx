import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { gsap } from '../animations/gsapConfig';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI & Web Development',
    message: '',
  });

  const sectionRef = useRef<HTMLElement>(null);
  const emailAddress = 'vasim.dev@example.com';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#FF5A0A', '#161B22', '#FFFFFF', '#F59E0B'],
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'AI & Web Development', message: '' });
    }, 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#FF5A0A] text-white overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-10">
        <span className="font-display font-black text-[22vw] tracking-tighter text-white leading-none whitespace-nowrap">
          LET'S BUILD
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Label */}
        <div className="contact-reveal flex items-center justify-between border-b border-white/20 pb-6 mb-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              // 06 &bull; Collaboration
            </span>
            <span className="text-xs font-mono text-white/70">/ Contact & Inquiries</span>
          </div>
          <span className="font-mono text-xs text-white/80 hidden sm:inline-block">
            Open for High-Impact Roles & Freelance
          </span>
        </div>

        {/* Big Typographic Heading & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Heading, Direct Details & Socials */}
          <div className="lg:col-span-6 space-y-8 contact-reveal">
            <div>
              <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tighter leading-[0.92] text-white mb-6">
                HAVE AN IDEA?
                <br />
                <span className="text-brand-dark">LET'S BUILD IT</span>.
              </h2>
              
              <p className="font-sans text-lg sm:text-xl text-white/90 font-medium leading-relaxed max-w-lg">
                Open to exciting opportunities, collaborations, innovative projects, and conversations.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl bg-black/25 backdrop-blur-md border border-white/20 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                Direct Communication
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-display font-bold text-xl sm:text-2xl text-white hover:underline underline-offset-4 tracking-tight"
                >
                  {emailAddress}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white text-brand-dark font-mono text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/vasim-24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-mono text-xs font-semibold uppercase tracking-widest hover:bg-black transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub / vasim-24</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-vasim-5809b932a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md text-white font-mono text-xs font-semibold uppercase tracking-widest border border-white/30 hover:bg-white hover:text-brand-dark transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Portfolio Contact Form */}
          <div className="lg:col-span-6 contact-reveal">
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark text-white border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <p className="font-display font-bold text-xl text-white">Send a Message</p>
                <span className="font-mono text-xs text-brand-orange uppercase tracking-wider">
                  Quick Dispatch
                </span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-white">
                    Message Dispatched!
                  </h4>
                  <p className="text-sm font-sans text-white/70 max-w-sm mx-auto">
                    Thank you, {formData.name || 'there'}. I have received your note and will follow up shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange font-sans text-base sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange font-sans text-base sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Project Area / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-charcoal border border-white/15 text-white focus:outline-none focus:border-brand-orange font-sans text-base sm:text-sm transition-colors"
                    >
                      <option value="AI & Web Development">AI & Web Development</option>
                      <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                      <option value="Creative Web Experience">Creative Web Experience</option>
                      <option value="Hackathon / Collaboration">Hackathon / Collaboration</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your idea, project scope, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange font-sans text-base sm:text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-hero-card"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
