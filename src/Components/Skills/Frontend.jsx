import React from "react";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills_name">HTML5</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills_name">CSS3</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills_name">React JS</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bxl-redux"></i>
            <div>
              <h3 className="skills_name">Redux</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills_name">Chakra UI</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
