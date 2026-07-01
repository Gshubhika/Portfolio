import React from "react";
import { useRecruiter } from "../context/RecruiterContext";
import characterImg from "../assets/character.png";
import coffee from "../assets/coffee.png";
import { FileDown, ChevronRight, Award, Compass, Heart } from "lucide-react";
import "./Hero.css";

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
          <div className="coffee-sticker">
            <img
              src={coffee}
              alt="Coffee Cup"
              className="animate-float-reverse"
            />
          </div>

          {/* Centered Content sitting exactly on top of the background blue strip */}
          <div className="collage-content-center">
            {/* Big Creative Headline */}
            <h1 className="hero-title">
              <span className="rubik-puddles-font inspired-title">
                {"‎ ‎ ‎ "}Inspired
              </span>
              <span className="font-serif title-serif"> <span className="italianno-font">by</span> <span className="rubik-puddles-font">Curiosity</span> </span>
            </h1>

            {/* Introduction Text Block */}
            <div
              className={`post-it-note transition-recruiter ${isRecruiterMode ? "post-it-recruiter" : ""}`}
            >
              {!isRecruiterMode ? (
                <p className="post-it-text font-serif text-center">
                  Hi, I'm Shubhika Gupta—a designer driven by creativity,
                  curiosity, and a passion for great user experiences.
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
              href={`${import.meta.env.BASE_URL}Shubhika_Resume.pdf`}
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
