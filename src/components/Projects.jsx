import React from 'react';
import { Link } from 'react-router-dom';
import { useRecruiter } from '../context/RecruiterContext';
import { ArrowRight, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'wishhive',
    title: 'Wish Hive',
    category: 'UX/UI Design • Web App',
    description: 'Modern e-commerce design with intuitive navigation and streamlined checkout process to enhance user experience.',
    tags: ['Web UX', 'User Research', 'E-Commerce'],
    colorClass: 'project-card-pink',
    stickerText: 'Shoping',
    rotation: '-1deg',
    url: 'https://www.figma.com/design/1sRDFxlHl3SfktrYTF4c1p/wishhive--landing-page-and-1-pg?node-id=6-38&p=f&t=9PbgmqlE5gJqYdcH-0',
  },
  // {
  //   id: 'mindspace',
  //   title: 'MindSpace',
  //   category: 'UX/UI Design • Mobile App',
  //   description: 'A mental health companion app designed to help college students build mindfulness routines and cope with academic stress.',
  //   tags: ['Mobile UX', 'User Research', 'Mental Health'],
  //   colorClass: 'project-card-pink',
  //   stickerText: 'Mindfulness',
  //   rotation: '-1.5deg',
  //   metrics: {
  //     label: 'Engagement',
  //     value: '+42% Daily Active Users',
  //     detail: 'Measured over a 3-month pilot study.'
  //   }
  // },
  {
    id: 'aquapay',
    title: 'Aqua Pay',
    category: 'UX Design • Mobile App',
    description: 'Aqua Pay a mobile payment app with modern and aesthetic UI design.',
    tags: ['Mobile UX', 'Checkout Optimization', 'Professional'],
    colorClass: 'project-card-yellow',
    stickerText: 'Fintech',
    rotation: '1.2deg',
    url: 'https://www.figma.com/design/1sRDFxlHl3SfktrYTF4c1p/wishhive--landing-page-and-1-pg?node-id=0-1&p=f&t=nLHHHQHmN4g9Ldm0-0',
  },
  {
    id: 'tinysteps',
    title: 'Tiny Steps',
    category: 'Product Design • Store',
    description: 'An E-commerce store for kids footwear.',
    tags: ['Responsive', 'E-commerce', 'Elegant'],
    colorClass: 'project-card-blue',
    stickerText: 'Store',
    rotation: '-0.8deg',
    url: 'https://www.figma.com/design/XBOoEOuBKuStDN9QbVI7kb/portfolio---squid---tiny-stepss?node-id=20-2&p=f&t=vEl2jj518V87mprj-0',
  },
  {
    id: 'amox',
    title: 'Amox',
    category: 'Product Design • Tool',
    description: 'Amox - a team task management tool.',
    tags: ['Responsive', 'E-commerce', 'Elegant'],
    colorClass: 'project-card-blue',
    stickerText: 'Store',
    rotation: '-0.8deg',
    url: 'https://www.figma.com/design/eiNwC2HuIYV8261qXcfCDO/hack-Aura--Amdox?node-id=447-35',
  },

];

const Projects = () => {
  const { isRecruiterMode } = useRecruiter();

  const visit = (url) => {
    window.open(url, '_blank');
  }

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
              {isRecruiterMode && project.metrics && (
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
                <a onClick={() => visit(project.url)} className="btn-scrapbook btn-scrapbook-blue">
                  View
                  <ArrowRight className="w-4 h-4" />
                </a>
                
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
