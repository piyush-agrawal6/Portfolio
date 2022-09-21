import React, { useState } from "react";
import "./Projects.css";
import ProjectData from "./ProjectData";
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
        <span className="projects_item" onClick={() => filterItem("Html")}>
          HTML
        </span>
      </div>
      <div className="projects_container grid">
        {item.map((elem) => {
          const { id, image, title, category, description, project, github } =
            elem;
          return (
            <div className="projects_card" key={id}>
              <div className="projects_thumbnail">
                <img src={image} alt="project image" className="projects_img" />
                <h3 className="projects_title">{title}</h3>
                <div className="projects_mask"></div>
              </div>
              <p className="projects_category">{category}</p>
              <p className="projects_desc">{description}</p>
              <a href={project} className="projects_button link ">
                <i class="bx bx-link"></i>
              </a>
              <a href={github} className="projects_button github">
                <i class="bx bxl-github"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
