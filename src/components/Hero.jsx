import React from "react";
import { useRecruiter } from "../context/RecruiterContext";
import characterImg from "../assets/character.png";
import { FileDown, ChevronRight, Award, Compass, Heart } from "lucide-react";

const Hero = () => {
  const { isRecruiterMode } = useRecruiter();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Playful/Recruiter Sub-heading */}
        <div className="hero-subheading-wrapper">
          <p
            className={`hero-slogan transition-recruiter ${isRecruiterMode ? "recruiter-pitch-active" : ""}`}
          >
            {isRecruiterMode
              ? "📈 Helping product teams improve user retention, satisfaction, and flow efficiency."
              : "Every design is a puzzle, and every user is a clue"}
          </p>

          <div className="open-to-work-badge">
            <span className="dot animate-ping">●</span>
            <span className="dot-static">●</span>
            <span>Open To Work</span>
          </div>
        </div>

        {/* The Main Collage Area aligning over the background blue strip */}
        <div className="collage-wrapper">
          {/* Coffee Cup Sticker */}
          <div className="coffee-sticker animate-float-reverse">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="var(--color-paper-pink)"
                stroke="var(--color-ink)"
                strokeWidth="2"
              />
              <path
                d="M12 25C15 25 15 29 20 29C25 29 25 25 28 25"
                stroke="var(--color-ink)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 18V21C14 24 16 26 19 26H21C24 26 26 24 26 21V18H14Z"
                fill="var(--color-ink)"
                stroke="var(--color-ink)"
                strokeWidth="2"
              />
              <path
                d="M26 19H28C29 19 30 20 30 21C30 22 29 23 28 23H26"
                stroke="var(--color-ink)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M17 12C17 12 18 10 17 9"
                stroke="var(--color-ink)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 13C20 13 21 11 20 10"
                stroke="var(--color-ink)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M23 12C23 12 24 10 23 9"
                stroke="var(--color-ink)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="sticker-label font-hand">Coffee</div>
          </div>

          {/* Centered Content sitting exactly on top of the background blue strip */}
          <div className="collage-content-center">
            {/* Big Creative Headline */}
            <h1 className="hero-title">
              <span className="bubble-outline-white title-bubble">
                Inspired
              </span>
              <span className="font-serif title-serif"> by Curiosity</span>
            </h1>

            {/* Introduction Text Block */}
            <div
              className={`post-it-note transition-recruiter ${isRecruiterMode ? "post-it-recruiter" : ""}`}
            >
              {!isRecruiterMode ? (
                <p className="post-it-text font-serif text-center">
                  Hi, I'm{" "}
                  <span className="highlight-under">Shubhika Gupta</span>—a
                  designer driven by creativity, curiosity, and a passion for
                  great user experiences.
                </p>
              ) : (
                <div className="recruiter-pitch-content">
                  <h3 className="recruiter-pitch-title text-center">
                    UI/UX Designer & Researcher
                  </h3>
                  <p className="recruiter-pitch-text text-center">
                    I design digital interfaces that are highly functional,
                    delightful, and aligned with core business metrics.
                    Currently looking for Full-time roles or design contracts.
                  </p>
                  <div className="metrics-quick-list flex justify-center">
                    <div className="metric-tag">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>User Centered</span>
                    </div>
                    <div className="metric-tag">
                      <Compass className="w-4 h-4 text-sky-500" />
                      <span>Figma Pro</span>
                    </div>
                    <div className="metric-tag">
                      <Heart className="w-4 h-4 text-rose-500" />
                      <span>UX Research</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sitting Girl Character (Right side, overlapping) */}
          <div className="character-wrapper">
            <img
              src={characterImg}
              alt="Shubhika Avatar"
              className="character-img"
            />
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="hero-actions">
          <>
            <a
              href="/Shubhika Resume.pdf"
              download
              className="btn-scrapbook btn-scrapbook-blue transition-recruiter animate-wiggle"
            >
              <FileDown className="w-5 h-5" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("work")}
              className="btn-scrapbook transition-recruiter"
            >
              Explore Projects
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        </div>
      </div>
    </section>
  );
};

export default Hero;
