import React from 'react';
import { useRecruiter } from '../context/RecruiterContext';
import characterImg from '../assets/character.png';
import { Check, User, Calendar, MapPin, GraduationCap, Laptop } from 'lucide-react';

const SKILLS = [
  { name: 'Figma & FigJam', color: '#fbeae6' },
  { name: 'Canva', color: '#fef5df' },
  { name: 'User Research and Usability Testing', color: '#e2edf8' },
  { name: 'Empathy', color: '#e5d1c5' },
  { name: 'Communication', color: '#dce7f3' },
  { name: 'Design Thinking', color: '#fbeae6' }
];


const About = () => {
  const { isRecruiterMode } = useRecruiter();

  return (
    <section id="about" className="about-section">
      <div className="layout-container">
        
        <div className="about-grid">
          
          {/* Left Side: Polaroid Photo & Quick Facts (if recruiter) */}
          <div className="about-left">
            <div className="polaroid about-polaroid">
              <div className="washi-tape washi-tape-left"></div>
              <div className="polaroid-img-container flex-center" style={{ backgroundColor: 'var(--color-paper-blue)' }}>
                {/* Character avatar cropped as a portrait */}
                <img src={characterImg} alt="Shubhika Portrait" style={{ objectPosition: 'center 20px', scale: '1.2' }} />
              </div>
              <p className="polaroid-caption">Shubhika (in design mode) ✦</p>
            </div>

            {/* Recruiter Quick Facts Card */}
            {isRecruiterMode && (
              <div className="sticky-note quick-facts-note animate-float-reverse">
                <div className="project-clip">
                  <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3V32M9 3C9 1.5 7.5 1 5 1C3 1 2 2.5 2 5V28C2 31.5 4.5 33.5 8 33.5C11.5 33.5 14 31.5 14 28V10C14 7.5 12.5 6 10 6C7.5 6 6 7.5 6 10V25" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="quick-facts-title font-serif">Quick Facts</h3>
                <ul className="quick-facts-list">
                  <li>
                    <Calendar className="w-4 h-4 text-sky-600" />
                    <span><strong>Availability:</strong> Immediate</span>
                  </li>
                  <li>
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span><strong>Location:</strong> Delhi / Remote</span>
                  </li>
                  <li>
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    <span><strong>Education:</strong> B.Des in UI/UX</span>
                  </li>
                  <li>
                    <Laptop className="w-4 h-4 text-emerald-500" />
                    <span><strong>Open to:</strong> Full-Time / Contract</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Side: Philosophy & Skills */}
          <div className="about-right">
            
            {/* Design Philosophy (Lined note) */}
            <div className="sticky-note philosophy-note">
              <div className="washi-tape washi-tape-right"></div>
              <h2 className="philosophy-title font-serif">My Design Philosophy</h2>
              <p className="philosophy-text font-serif">
                I’m a UI/UX Designer working as a freelancer, specializing in creating intuitive and user-focused digital experiences. I collaborate closely with clients, ensuring clear communication, structured workflows, and on-time delivery.
                <br /><br />
                 I have design thinking, problem-solving approach, and ability to translate client requirements into impactful, user-centered solutions for real-world products. 
              </p>
            </div>

            {/* Toolkit Stickers */}
            <div className="skills-container">
              <h3 className="skills-heading font-serif">My Toolkit</h3>
              <div className="skills-grid">
                {SKILLS.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="skill-sticker animate-wiggle select-none"
                    style={{ 
                      backgroundColor: skill.color,
                      transform: `rotate(${(idx % 2 === 0 ? -2.5 : 2.5) + (idx * 0.5)}deg)`
                    }}
                  >
                    <Check className="w-3.5 h-3.5 mr-1 text-teal-800" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
