import React from 'react';
import { Link } from 'react-router-dom';
import { useRecruiter } from '../context/RecruiterContext';
import { ArrowRight, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'mindspace',
    title: 'MindSpace',
    category: 'UX/UI Design • Mobile App',
    description: 'A mental health companion app designed to help college students build mindfulness routines and cope with academic stress.',
    tags: ['Mobile UX', 'User Research', 'Mental Health'],
    colorClass: 'project-card-pink',
    stickerText: 'Mindfulness',
    rotation: '-1.5deg',
    metrics: {
      label: 'Engagement',
      value: '+42% Daily Active Users',
      detail: 'Measured over a 3-month pilot study.'
    }
  },
  {
    id: 'reloop',
    title: 'ReLoop',
    category: 'UX Redesign • Web App',
    description: 'A circular fashion thrift marketplace redesign, focusing on streamlining listing flows and optimizing checkout conversion rates.',
    tags: ['Web Design', 'Checkout Optimization', 'Sustainability'],
    colorClass: 'project-card-yellow',
    stickerText: 'Eco-Fashion',
    rotation: '1.2deg',
    metrics: {
      label: 'Conversion',
      value: '+28% Checkout Rate',
      detail: 'Reduced cart abandonment rate by 15%.'
    }
  },
  {
    id: 'fineasy',
    title: 'FinEasy',
    category: 'Product Design • FinTech',
    description: 'A gamified micro-investing and financial literacy platform making stock investments intuitive and accessible for Gen-Z beginners.',
    tags: ['FinTech', 'Data Visualization', 'Gamification'],
    colorClass: 'project-card-blue',
    stickerText: 'Investing',
    rotation: '-0.8deg',
    metrics: {
      label: 'Success Rate',
      value: '94% Task Completion',
      detail: 'Tested across 50 novice investors.'
    }
  }
];

const Projects = () => {
  const { isRecruiterMode } = useRecruiter();

  return (
    <section id="work" className="projects-section">
      <div className="layout-container">
        
        {/* Notebook Binding Ring style separator at the top */}
        <div className="notebook-rings">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="notebook-ring"></div>
          ))}
        </div>

        <div className="projects-header-wrapper">
          <div className="washi-tape washi-tape-left"></div>
          <h2 className="section-title">
            <span className="bubble-outline">Selected</span> <span className="font-serif">Projects</span>
          </h2>
          <p className="section-subtitle font-hand">
            Some design puzzles I have enjoyed solving
          </p>
        </div>

        {/* Project Card Grid */}
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${project.colorClass} card-hover-tilt`}
              style={{ transform: `rotate(${project.rotation})` }}
            >
              {/* Paperclip sticker decoration */}
              <div className="project-clip">
                <svg width="20" height="45" viewBox="0 0 20 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4V36M10 4C10 2 8 1 5 1C3 1 2 2.5 2 5V30C2 34 5 37 9 37C13 37 16 34 16 30V12C16 9 14 7 11 7C8 7 6.5 9 6.5 12V28" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Project Category Tag */}
              <div className="project-category">{project.category}</div>

              {/* Project Title */}
              <h3 className="project-title font-serif">{project.title}</h3>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Interactive Tags */}
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag-sticker">{tag}</span>
                ))}
              </div>

              {/* Recruiter Metrics Sticky Overlay */}
              {isRecruiterMode && (
                <div className="recruiter-metrics-box animate-float">
                  <div className="recruiter-metrics-header">
                    <BarChart3 className="w-3.5 h-3.5 text-rose-500" />
                    <span>KPI {project.metrics.label}</span>
                  </div>
                  <div className="recruiter-metrics-value">{project.metrics.value}</div>
                  <div className="recruiter-metrics-desc">{project.metrics.detail}</div>
                </div>
              )}

              {/* Actions: View Case Study */}
              <div className="project-footer">
                <Link to={`/project/${project.id}`} className="btn-scrapbook btn-scrapbook-blue">
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                {/* Decorative sticker on the card */}
                {!isRecruiterMode && (
                  <div className="project-sticker font-hand">
                    <Sparkles className="w-3 h-3 text-amber-500 inline-block mr-1" />
                    {project.stickerText}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
