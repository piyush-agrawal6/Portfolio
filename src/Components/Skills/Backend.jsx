import React from "react";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";
import img15 from "../../assets/15.png";
import img16 from "../../assets/16.png";
import img17 from "../../assets/17.png";
import img18 from "../../assets/18.png";
const Backend = () => {
  return (
    <div className="skills_content" >
      <h3 className="skills_title">Backend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <img src={img10} alt="img" />
            <p className="skills_name">Node JS</p>
          </div>
          <div className="skills_data">
            <img src={img13} alt="img" />
            <p className="skills_name">Mongoose</p>
          </div>
          <div className="skills_data">
            <img src={img16} alt="img" />
            <p className="skills_name">Github</p>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <img src={img11} alt="img" />
            <p className="skills_name">Express JS</p>
          </div>
          <div className="skills_data">
            <img src={img15} alt="img" />
            <p className="skills_name">NoSql</p>
          </div>
          <div className="skills_data">
            <img src={img18} alt="img" />
            <p className="skills_name">DS & Algo</p>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <img src={img12} alt="img" />
            <p className="skills_name">MongoDB</p>
          </div>
          <div className="skills_data">
            <img src={img14} alt="img" />
            <p className="skills_name">NPM</p>
          </div>
          <div className="skills_data">
            <img src={img17} alt="img" />
            <p className="skills_name">Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
