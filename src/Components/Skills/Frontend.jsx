import React from "react";
import html from "../../assets/1.png";
import css from "../../assets/2.png";
import js from "../../assets/3.png";
import ts from "../../assets/4.png";
import react from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <img src={html} alt="img" />
            <p className="skills_name">HTML5</p>
          </div>
          <div className="skills_data">
            <img src={ts} alt="img" />
            <p className="skills_name">TypeScript</p>
          </div>
          <div className="skills_data">
            <img src={img8} alt="img" />
            <p className="skills_name">Chakra UI</p>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <img src={css} alt="img" />
            <p className="skills_name">CSS3</p>
          </div>
          <div className="skills_data">
            <img src={react} alt="img" />
            <p className="skills_name">React JS</p>
          </div>
          <div className="skills_data">
            <img src={img9} alt="img" />
            <p className="skills_name">Ant Designs</p>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <img src={js} alt="img" />
            <p className="skills_name">JavaScript</p>
          </div>
          <div className="skills_data">
            <img src={img6} alt="img" />
            <p className="skills_name">Redux</p>
          </div>
          <div className="skills_data">
            <img src={img7} alt="img" />
            <p className="skills_name">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
