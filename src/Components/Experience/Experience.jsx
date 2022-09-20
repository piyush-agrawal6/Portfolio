import React from "react";
import "./Experience.css";
import Data from "./Data";
import Card from "./Card";
const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Education & Achievement</span>
      <div className="experience_container  grid">
        <div className="timeline">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline ">
          {Data.map((val, index) => {
            if (val.category === "achievement") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
