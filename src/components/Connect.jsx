import React, { useState } from "react";
import { Send, Award, Mail, CheckCircle } from "lucide-react";

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DribbbleIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    project: "a new website",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // The core browser API that performs the copy operation
      await navigator.clipboard.writeText('shubhikagupta31@gmail.com');
      setCopied(true);
      alert("Copied to clipboard!");
      
      window.location.href = 'mailto:shubhikagupta31@gmail.com';
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    try {
      if (!formData.name || !formData.email || !formData.message) {
        alert(
          "Please fill in your name, email, and message so we can connect!",
        );
        return;
      }

      const response = await fetch("https://script.google.com/macros/s/AKfycbyhLQGQyuJgMd-EvGpV81PNIJ6RHP1aH7l_rI1Ke6hxOuH0pRAtfy8iy7Cuo5ixNakXsg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(data),
      });

        setIsSubmitted(true);

      setFormData({
        name: "",
        project: "a new website",
        email: "",
        message: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <section id="connect" className="connect-section">
      <div className="layout-container">
        <div className="connect-header-wrapper">
          <div className="washi-tape washi-tape-right"></div>
          <h2 className="section-title">
            <span className="bubble-outline">Let's</span>{" "}
            <span className="font-serif">Connect</span>
          </h2>
          <p className="section-subtitle font-hand">
            Drop me a note, let's create something together!
          </p>
        </div>

        <div className="connect-body-grid">
          {/* Lined Letter Form */}
          <form
            onSubmit={handleSubmit}
            className="lined-paper connect-letter-form"
          >
            <div
              className="paperclip-sticker"
              style={{ right: "40px", top: "-15px" }}
            >
              <svg
                width="20"
                height="45"
                viewBox="0 0 20 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4V36M10 4C10 2 8 1 5 1C3 1 2 2.5 2 5V30C2 34 5 37 9 37C13 37 16 34 16 30V12C16 9 14 7 11 7C8 7 6.5 9 6.5 12V28"
                  stroke="var(--color-ink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {isSubmitted ? (
              <div className="submitted-state flex-center flex-col py-10">
                <CheckCircle className="w-16 h-16 text-teal-600 mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl mb-2">Message Sent!</h3>
                <p className="font-hand text-lg text-slate-600">
                  Thanks for writing! I'll read your note and get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <div className="letter-sentence-structure font-hand">
                Hey Shubhika, <br />
                My name is
                <input
                  type="text"
                  placeholder="your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="hand-input"
                  required
                />
                . I would love to talk to you about
                <select
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="hand-input cursor-pointer"
                >
                  <option value="a new website">
                    a new mobile/web product
                  </option>
                  <option value="user research">doing user research</option>
                  <option value="a full-time opportunity">
                    a full-time role
                  </option>
                  <option value="just saying hi">just saying hi!</option>
                </select>
                . You can reach me at
                <input
                  type="email"
                  placeholder="your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="hand-input"
                  required
                />
                .
                <br />
                <br />
                Here is a little more context:
                <textarea
                  placeholder="write your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="hand-textarea"
                  rows="4"
                  required
                ></textarea>
                <div className="letter-footer flex-center mt-6">
                  <button
                    type="submit"
                    className="btn-scrapbook btn-scrapbook-blue"
                  >
                    Send Letter
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Social Stickers & Footer */}
          <div className="connect-sidebar">
            <h3 className="sidebar-heading font-serif">Find Me Online</h3>

            <div className="social-stickers-grid">
              <a
                href="https://www.linkedin.com/in/shubhika-gupta-34693a301/"
                target="_blank"
                rel="noreferrer"
                className="social-sticker linkedin-sticker animate-wiggle"
              >
                <LinkedinIcon className="w-5 h-5 text-indigo-900" />
                <span>LinkedIn</span>
              </a>

              {/* <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="social-sticker dribbble-sticker animate-wiggle"
              >
                <DribbbleIcon className="w-5 h-5 text-pink-600" />
                <span>Dribbble</span>
              </a> */}

              {/* <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="social-sticker behance-sticker animate-wiggle"
              >
                <Award className="w-5 h-5 text-blue-700" />
                <span>Behance</span>
              </a> */}

              <a
                onClick={handleCopy}
                className="social-sticker mail-sticker animate-wiggle"
              >
                <Mail className="w-5 h-5 text-amber-700" />
                <span>Email</span>
              </a>
            </div>

            <div className="scrapbook-disclaimer font-hand">
              ✦ Handcrafted with curiosity and coffee ✦ <br />© 2026 Shubhika
              Gupta. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
