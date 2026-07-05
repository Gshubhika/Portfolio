import React from "react";
import coffee from "../assets/coffee.png";
import characterImg from "../assets/character.png";
import polygon from "../assets/blue-polygon.png";
import "./Head.css";

const Head = () => {
  return (
    <section id="head">
      {/* Sitting Girl Character (Right side, overlapping) */}
      <div className="head-content">
        <div className="head-content-bg-wrapper">
          <div className="coffee-sticker">
            <img
              src={coffee}
              alt="Coffee Cup"
              className="animate-float-reverse"
            />
          </div>
          <img src={polygon} />
        </div>

        <div className="open-to-work-sticker">
          Open to Work <span className="dot">●</span>
        </div>
        <div className="character-wrapper">
          <img
            src={characterImg}
            alt="Shubhika Avatar"
            className="character-img"
          />
        </div>

        <div className="head-title">
          <div className="subheading">
            <p>Every design is a puzzle, and every user is a clue</p>
          </div>
          <div className="title-top">
            <h1 className="rubik-puddles-font">Inspired</h1>
          </div>
          <div className="title-bottom">
            <h1>
              <span className="by italianno-font">by</span>{" "}
              <span className="curiosity playfair-font">Curiosity</span>
            </h1>
          </div>
          <div className="title-para">
            <p>
              Hi, I'm Shubhika Gupta—a designer driven by creativity, curiosity,
              and a passion for great user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
