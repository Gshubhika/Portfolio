import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecruiter } from '../context/RecruiterContext';
import { ArrowLeft, BookOpen, Compass, CheckCircle, Smartphone, Globe, Shield, RefreshCw } from 'lucide-react';

const CASE_STUDIES = {
  mindspace: {
    title: 'MindSpace Mindfulness Companion',
    subtitle: 'Helping Gen-Z students build mental resilience one breath at a time.',
    role: 'Lead UI/UX Designer & Researcher',
    timeline: '8 Weeks (Spring 2025)',
    overview: 'MindSpace is a mobile companion application created specifically for college students struggling with burnout, anxiety, and time management. The project is centered around providing bite-sized (1-5 minute) mindfulness exercises that fit into a busy student schedule.',
    problem: 'College students experience unprecedented levels of stress but struggle to adopt traditional meditation practices because of long sessions, complex onboarding, and low immediate engagement.',
    solution: 'Designed an app prioritizing micro-sessions, gamified streaks, and instant mood-check ins. Implemented a scrapbook aesthetic that feels organic and non-clinical to reduce cognitive stress.',
    research: [
      { percentage: '78%', text: 'of surveyed students reported high stress levels weekly.' },
      { percentage: '65%', text: 'noted they had less than 15 minutes of quiet time per day.' },
      { percentage: '90%', text: 'stated they prefer playful, casual apps over medical or clinical layouts.' }
    ],
    persona: {
      name: 'Alex Rivera (21)',
      role: 'Junior, Computer Science Major',
      quote: '"I want to manage my anxiety, but I don\'t have 30 minutes to sit still and listen to ambient rain noises."',
      painPoints: [
        'Overwhelmed by academic load and assignment deadlines.',
        'Short attention span during high stress.',
        'Finds clinical mental-health apps intimidating or boring.'
      ],
      goals: [
        'Find rapid, effective ways to destress between classes.',
        'Track mood changes over time without writing long journal entries.',
        'Develop simple, achievable daily breathing routines.'
      ]
    },
    system: ['#fbeae6 (Pastel Coral)', '#dce7f3 (Pastel Indigo)', '#fef5df (Warm Ivory)', 'Kalam (Doodle Font)', 'Outfit (Clear UI)']
  },
  reloop: {
    title: 'ReLoop Circular Thrift Marketplace',
    subtitle: 'Streamlining sustainable shopping through frictionless transactions.',
    role: 'Lead UX Researcher & Interaction Designer',
    timeline: '10 Weeks (Fall 2025)',
    overview: 'ReLoop is a peer-to-peer thrifting marketplace focused on reducing circular fashion friction. The project involved a full UX audit and checkout redesign to solve high drop-off rates during seller listing and buyer transactions.',
    problem: 'Sellers found listing clothes tedious (averaging 7 minutes per item), while buyers struggled with trust issues regarding fabric conditions and complex multi-seller checkout flows.',
    solution: 'Introduced AI auto-tagging for clothing listings (bringing time-to-list under 2 minutes), a verified 5-star garment grading scale, and a unified cart checkout system for multiple sellers.',
    research: [
      { percentage: '45%', text: 'checkout drop-off rate due to combined shipping sticker shock.' },
      { percentage: '55%', text: 'of thrift listings were abandoned halfway due to photo and tag prompts.' },
      { percentage: '82%', text: 'of buyers stated fabric condition clarity was their #1 trust barrier.' }
    ],
    persona: {
      name: 'Sasha Chen (24)',
      role: 'Fashion Blogger & Eco-conscious Shopper',
      quote: '"I love thrifting, but uploading 15 photos and guessing fabric details for a $10 t-shirt is exhausting."',
      painPoints: [
        'Friction uploading items to secondary markets.',
        'Paying double shipping when buying from separate sellers.',
        'Receiving items that were in worse condition than pictured.'
      ],
      goals: [
        'Sell unused wardrobe items in under 2 minutes per listing.',
        'Buy authentic eco-fashion items with guaranteed conditions.',
        'Save money on combined shipping.'
      ]
    },
    system: ['#e2edf8 (Pastel Blue)', '#e5d1c5 (Warm Earth)', '#ffffff (Pure Paper)', 'Outfit (Main Font)', 'Fredoka (Outline Titles)']
  },
  fineasy: {
    title: 'FinEasy Gamified Micro-Investing',
    subtitle: 'Making stock market vocabulary and habits intuitive for absolute beginners.',
    role: 'Solo Product Designer',
    timeline: '12 Weeks (Winter 2025)',
    overview: 'FinEasy is a mobile micro-investment tool designed to break down the psychological and educational barriers to saving. It utilizes micro-deposit rounding and a digital "investment garden" to visualize asset growth.',
    problem: 'Traditional financial platforms use dense terminology and sterile graphs that alienate young savers and financial novices, leading to analysis paralysis.',
    solution: 'Designed a highly accessible dashboard where users grow a virtual "Garden" representing their portfolio. Used color-blind friendly data visualization and an interactive stock dictionary.',
    research: [
      { percentage: '72%', text: 'of young adults feel overwhelmed by basic stock market terminology.' },
      { percentage: '68%', text: 'do not invest because they believe they need large amounts of capital.' },
      { percentage: '94%', text: 'user task completion rate achieved during our prototype testing.' }
    ],
    persona: {
      name: 'Marcus Vance (19)',
      role: 'Sophomore, Communications & Gig Worker',
      quote: '"Investing feels like a club for wealthy people. The charts look like rocket science to me."',
      painPoints: [
        'Minimal spare capital to invest ($5-$10 weekly limit).',
        'Confused by terms like ETF, dividend, and compounding.',
        'Fears losing money due to complicated dashboard navigation.'
      ],
      goals: [
        'Start investing automatically using spare pocket change.',
        'Learn financial terms in a fun, non-stressful way.',
        'Visualize investment growth without intimidating charts.'
      ]
    },
    system: ['#eafaf1 (Mint Pastel)', '#fef6e2 (Pale Honey)', '#1e355e (Ink Slate)', 'DynaPuff (Bubbly UI)', 'Outfit (Functional Text)']
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { isRecruiterMode } = useRecruiter();

  const caseStudy = CASE_STUDIES[projectId];

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!caseStudy) {
    return (
      <div className="layout-container py-20 text-center">
        <h2 className="section-title">Case Study Not Found</h2>
        <Link to="/" className="btn-scrapbook mt-6">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="case-study-page">
      <div className="layout-container">
        
        {/* Back Link */}
        <div className="back-link-wrapper">
          <Link to="/" className="btn-scrapbook btn-scrapbook-blue">
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </div>

        {/* Header Collage */}
        <header className="case-study-header">
          <div className="washi-tape washi-tape-left"></div>
          <div className="washi-tape washi-tape-right"></div>
          <span className="case-study-tag">{caseStudy.role}</span>
          <h1 className="case-study-title font-serif">{caseStudy.title}</h1>
          <p className="case-study-subtitle font-hand">{caseStudy.subtitle}</p>
          
          <div className="case-study-meta-grid">
            <div className="meta-box">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">{caseStudy.timeline}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Role</span>
              <span className="meta-value">{caseStudy.role}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Context</span>
              <span className="meta-value">UI/UX Case Study</span>
            </div>
          </div>
        </header>

        {/* Project Overview (Lined Paper Style) */}
        <section className="case-study-section">
          <div className="notebook-rings">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="notebook-ring"></div>
            ))}
          </div>
          <div className="lined-paper">
            <h2 className="case-study-section-title font-serif">Project Overview</h2>
            <p className="case-study-body-text">{caseStudy.overview}</p>
          </div>
        </section>

        {/* Problem & Solution (Side-by-side sticky notes) */}
        <section className="case-study-section grid-2">
          <div className="sticky-note problem-note">
            <div className="paperclip-sticker">
              <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2V25M7.5 2C7.5 1 6 0.5 4 0.5C2.5 0.5 1.5 1.5 1.5 3V20C1.5 23 4 25 7 25C10 25 12 23 12 20V8C12 6 10.5 5 8.5 5C7 5 6 6 6 8V18" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="note-title font-serif text-rose-700">The Problem</h3>
            <p className="note-body">{caseStudy.problem}</p>
          </div>

          <div className="sticky-note solution-note" style={{ backgroundColor: 'var(--color-paper-blue)', transform: 'rotate(2deg)' }}>
            <div className="washi-tape washi-tape-right"></div>
            <h3 className="note-title font-serif text-teal-800">The Solution</h3>
            <p className="note-body">{caseStudy.solution}</p>
          </div>
        </section>

        {/* User Research Findings */}
        <section className="case-study-section research-section">
          <h2 className="case-study-section-title font-serif text-center mb-10">User Research & Data</h2>
          <div className="research-grid">
            {caseStudy.research.map((item, idx) => (
              <div key={idx} className="polaroid card-hover-tilt" style={{ transform: `rotate(${(idx - 1) * 2}deg)` }}>
                <div className="research-stat bubble-outline-white">{item.percentage}</div>
                <p className="polaroid-caption">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* User Persona */}
        <section className="case-study-section">
          <div className="notebook-rings">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="notebook-ring"></div>
            ))}
          </div>
          <div className="lined-paper persona-card">
            <h2 className="case-study-section-title font-serif">Target User Persona</h2>
            <div className="persona-grid">
              <div className="persona-bio">
                <div className="persona-avatar-placeholder flex-center">
                  <span className="font-bubble text-3xl">{caseStudy.persona.name[0]}</span>
                </div>
                <h3 className="persona-name font-serif">{caseStudy.persona.name}</h3>
                <span className="persona-role">{caseStudy.persona.role}</span>
                <p className="persona-quote font-hand">"{caseStudy.persona.quote}"</p>
              </div>

              <div className="persona-details">
                <div>
                  <h4 className="details-header">Pain Points</h4>
                  <ul className="details-list">
                    {caseStudy.persona.painPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5"><span className="text-red-500">●</span> {pt}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="details-header">User Goals</h4>
                  <ul className="details-list">
                    {caseStudy.persona.goals.map((gl, i) => (
                      <li key={i} className="flex items-start gap-1.5"><span className="text-teal-500">●</span> {gl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Interactive mockup / design system */}
        <section className="case-study-section design-system-section">
          <h2 className="case-study-section-title font-serif text-center mb-6">Design System Accent</h2>
          <p className="text-center font-hand mb-10 text-xl">The palette utilized to guide the product branding</p>
          <div className="palette-row flex-center">
            {caseStudy.system.map((color, i) => (
              <div key={i} className="palette-color card-hover-tilt">
                <div className="color-swatch" style={{ backgroundColor: color.split(' ')[0] }}></div>
                <span className="color-label">{color.split(' ')[0]}</span>
                <span className="color-desc font-hand">{color.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Wireframe / High-Fi Prototype Slider */}
        <section className="case-study-section flex-center">
          <div className="sticky-note wireframe-box text-center" style={{ maxWidth: '600px', transform: 'none' }}>
            <h3 className="font-serif mb-4 text-xl">Interactive Sandbox Preview</h3>
            <p className="text-sm text-slate-600 mb-6">Click to toggle between Wireframe and High-Fidelity prototypes of the primary screen</p>
            
            <div className="sandbox-phone-wrapper flex-center">
              <div className="phone-bezel">
                <div className="phone-screen bg-grid">
                  <div className="phone-status-bar">9:41</div>
                  
                  {/* Stock UI Container */}
                  <div className="phone-app-content">
                    <div className="phone-header flex-center justify-between">
                      <div className="phone-nav-icon">☰</div>
                      <div className="phone-logo font-serif">{projectId === 'mindspace' ? 'MindSpace' : projectId === 'reloop' ? 'ReLoop' : 'FinEasy'}</div>
                      <div className="phone-avatar"></div>
                    </div>
                    
                    <div className="phone-hero-banner flex-center">
                      <span className="font-hand">Welcome back!</span>
                    </div>

                    <div className="phone-card bg-white">
                      <div className="phone-card-title">Daily Activity</div>
                      <div className="phone-progress-bar">
                        <div className="phone-progress-fill"></div>
                      </div>
                      <div className="phone-card-footer font-hand">Completed: 70%</div>
                    </div>

                    <div className="phone-grid">
                      <div className="phone-grid-item bg-white">
                        <div className="icon-spot">★</div>
                        <span>Lessons</span>
                      </div>
                      <div className="phone-grid-item bg-white">
                        <div className="icon-spot">♥</div>
                        <span>Favorites</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <footer className="case-study-footer-actions text-center py-10">
          <h2 className="font-serif mb-6 text-2xl">Reflections & Key Takeaways</h2>
          <p className="max-w-2xl mx-auto text-slate-700 leading-relaxed mb-8">
            This project taught me how to work with complex requirements under tight deadlines. Balancing user-centric desires with clean aesthetics led to a final product that achieved all primary business and product benchmarks.
          </p>
          <div className="flex-center gap-6">
            <Link to="/" className="btn-scrapbook">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
};

export default ProjectDetail;
