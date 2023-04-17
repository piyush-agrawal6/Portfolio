import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Experienced</h3>
        <span className="about_subtitle">Freelancer</span>
      </div>
      <div className="about_box hide">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Worked On</h3>
        <span className="about_subtitle">30+ Projects </span>
      </div>
      <div className="about_box ">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Full Stack</h3>
        <span className="about_subtitle">Developer</span>
      </div>
    </div>
  );
};

export default Info;
