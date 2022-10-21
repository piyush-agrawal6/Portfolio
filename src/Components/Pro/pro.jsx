import React, { useState } from "react";
import "./pro.css";
import ProjectData from "./pd";
const Projects = () => {
  const [item, setItem] = useState(ProjectData);
  const filterItem = (categoryItem) => {
    const updatedItem = ProjectData.filter((elem) => {
      return elem.category === categoryItem;
    });
    setItem(updatedItem);
  };
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Works</span>
      <div className="projects_filters">
        <span className="projects_item" onClick={() => setItem(ProjectData)}>
          ALL
        </span>
        <span className="projects_item" onClick={() => filterItem("MERN")}>
          MERN
        </span>
        <span className="projects_item" onClick={() => filterItem("React")}>
          REACT
        </span>
        <span
          className="projects_item"
          onClick={() => filterItem("JavaScript")}
        >
          JAVASCRIPT
        </span>
      </div>
      <div className="projects_container grid">
        {item.map((elem) => {
          const { id, image, title, Tech, description, project, github } = elem;
          return (
            <div className="projects_card" key={id}>
              <div className="projects_thumbnail">
                <img src={image} alt="project image" className="projects_img" />
                <h3 className="projects_title">{title}</h3>
              </div>
              <p className="projects_desc">{description}</p>
              <p className="projects_desc">
                <b>Tech Stack</b> - {Tech}
              </p>
              <div className="projects_button_div">
                <a
                  href={project}
                  className="projects_button link"
                  target="blank"
                >
                  <i class="bx bx-link"></i>
                </a>
                <a
                  href={github}
                  className="projects_button github"
                  target="blank"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
