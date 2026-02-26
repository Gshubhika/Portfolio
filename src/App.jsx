import React, { useState, useEffect } from "react";
import photo from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";
import aqua_pay from "./assets/aqua_pay.png";
import wish_hive from "./assets/wish_hive.png";
import tiny_steps from "./assets/tiny_steps.png";
import landing_page from "./assets/landing_page.png";
import amox from "./assets/amox.png";

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = { resume };
    link.download = "Shubhika Gupta Resume.pdf";
    link.click();
  };

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "works"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-teal-800 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-16 text-[12px] md:text-lg font-medium ">
            {[
              { id: "home", label: "HOME" },
              { id: "about", label: "ABOUT" },
              { id: "works", label: "WORKS" },
              { id: "contact", label: "CONTACT" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-cyan-300 transition-colors duration-300 ${
                    activeSection === item.id ? "text-cyan-300" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center z-10">
          {/* Main Title with Ocean Texture Effect */}
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-9xl font-black tracking-wider relative">
              <span
                className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, #22d3ee, #14b8a6, #3b82f6, #06b6d4)`,
                  backgroundSize: "400% 400%",
                  animation: "gradient 8s ease infinite",
                }}
              >
                SHUBHIKA
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            "Pixel by pixel, I turn ideas into interfaces users can't stop
            tapping."
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 relative"
      >
        {/* Geometric background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-600 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-gray-600 rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-gray-600 -rotate-12"></div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <style>{`
      @keyframes floatBg {
        0%, 100% { transform: rotate(3deg) translate(0px, 0px); }
        33% { transform: rotate(5deg) translate(3px, -4px); }
        66% { transform: rotate(1deg) translate(-3px, 3px); }
      }
    `}</style>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top right, #22d3ee, #2dd4bf)",
                    borderRadius: "1.5rem",
                    animation: "floatBg 4s ease-in-out infinite",
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#1f2937",
                    borderRadius: "1.5rem",
                    padding: "0.75rem",
                    transform: "rotate(-1deg)",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "rotate(0deg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "rotate(-1deg)")
                  }
                >
                  <div
                    style={{
                      width: "18rem",
                      height: "23rem",
                      backgroundColor: "#4b5563",
                      borderRadius: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to bottom right, #9ca3af, #4b5563)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img src={photo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-cyan-300">
                  ABOUT ME
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m a UI/UX Designer working as a freelancer, specializing in
                  creating intuitive and user-focused digital experiences. I
                  collaborate closely with clients, ensuring clear
                  communication, structured workflows, and on-time delivery. I
                  have design thinking, problem-solving approach, and ability to
                  translate client requirements into impactful, user-centered
                  solutions for real-world products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works/Skills Section */}
      <section
        id="works"
        className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-20"
      >
        <div className="container mx-auto px-6">
          {/* Projects Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 text-cyan-300">
              MY PROJECTS
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Here are some of my design projects that showcase my skills in
              UI/UX design and user-centered thinking.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Project Card 1 */}
              <div
                className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/1sRDFxlHl3SfktrYTF4c1p/wishhive--landing-page-and-1-pg?node-id=6-38&p=f&t=9PbgmqlE5gJqYdcH-0",
                    "_blank",
                  )
                }
              >
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <img src={wish_hive} className="aspect-square" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Wish Hive
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Modern e-commerce design with intuitive navigation and
                    streamlined checkout process to enhance user experience.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm">
                    <span>View on Figma</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div
                className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/1sRDFxlHl3SfktrYTF4c1p/wishhive--landing-page-and-1-pg?node-id=0-1&p=f&t=nLHHHQHmN4g9Ldm0-0",
                    "_blank",
                  )
                }
              >
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <img src={aqua_pay} className="aspect-square" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Aqua Pay
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Aqua Pay a mobile payment app with modern and aesthetic UI
                    design.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm">
                    <span>View on Figma</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div
                className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/1sRDFxlHl3SfktrYTF4c1p/wishhive--landing-page-and-1-pg?node-id=106-54&t=SvUrPcCqRohMBg1n-0",
                    "_blank",
                  )
                }
              >
                <div className="aspect-square bg-gradient-to-br from-black-400 to-blue-500 flex items-center justify-center">
                  <img src={landing_page} className="" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Different Landing Pages
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Several different types of landing pages for various divered
                    Topics.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm">
                    <span>View on Figma</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Card 4 */}
              <div
                className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/XBOoEOuBKuStDN9QbVI7kb/portfolio---squid---tiny-stepss?node-id=20-2&p=f&t=vEl2jj518V87mprj-0",
                    "_blank",
                  )
                }
              >
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <img src={tiny_steps} className="aspect-square" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Tiny Steps
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A E-commerce platform for kids footwear.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm">
                    <span>View on Figma</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Project Card 5 */}
              <div
                className="bg-gray-800 bg-opacity-60 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-cyan-400/20 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/eiNwC2HuIYV8261qXcfCDO/hack-Aura--Amdox?node-id=447-35",
                    "_blank",
                  )
                }
              >
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <img src={amox} className="aspect-square" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Amox
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Amox - a team task management tool.
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm">
                    <span>View on Figma</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-lg mb-4">Who Am I ?</p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  <span className="text-white">Creative Problem Solver,</span>
                  <br />
                  <span className="text-white">Detail-Oriented,</span>
                  <br />
                  <span className="text-white">Collaborative Learner,</span>
                  <br />
                  <span className="text-cyan-300">Adapt, and Repeat.</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Starting a new project or case study can feel uncertain at
                  first, but as I dive into the design process — exploring
                  ideas, testing possibilities, and refining details — I quickly
                  find focus and energy. Each step forward strengthens my
                  creativity and confidence, reminding me why I love solving
                  problems through design.
                </p>

                <blockquote className="text-sm text-gray-500 italic border-l-2 border-gray-600 pl-4">
                  "Design lives in the space between not knowing and
                  discovering."
                </blockquote>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-center">
                <span className="border-b-2 border-cyan-300 pb-2">SKILLS</span>
              </h3>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                My skillset is always growing as I explore new tools and ideas.
                I believe open communication and shared learning are the
                backbone of strong teams. I'm eager to contribute, collaborate,
                and keep learning from every experience.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Soft Skills */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-teal-300">
                    SOFT SKILLS
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Communication
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Problem Solving
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Collaboration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Empathy
                    </li>
                  </ul>
                </div>

                {/* Hard Skills */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-teal-300">
                    HARD SKILLS
                  </h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      User Research and Usability Testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Figma
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Design Thinking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Accessibility
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Canva
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8 text-cyan-300">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            Ready to collaborate on something amazing? Let's turn ideas into
            interfaces that users will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 sm: m-auto w-80"
              onClick={() =>
                window.open(
                  "mailto:shubhikagupta31@gmail.com?subject=Let's Collaborate!&body=Hi Shubhika,%0D%0A%0D%0AI found your portfolio and would love to discuss...",
                  "_blank",
                )
              }
            >
              Get In Touch
            </button>
            <button
              onClick={handleDownload}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 sm: m-auto w-80"
            >
              View Resume
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;
