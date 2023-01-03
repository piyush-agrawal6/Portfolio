import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
const Github = () => {
  return (
    <section className="section container" id="Github">
      <h2 className="section__title">Github</h2>
      <span className="section__subtitle">Calender And Stats</span>
      <div className="Github">
        <a href="https://github.com/piyush-agrawal6" target="_blank">
          <GitHubCalendar username="piyush-agrawal6" className="calender" />
        </a>
      </div>
      <div className="Github">
        <a href="https://github.com/piyush-agrawal6" target="_blank">
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=piyush-agrawal6&show_icons=true&count_private=true&theme=algolia"
            height="192px"
          />
        </a>
      </div>
    </section>
  );
};

export default Github;
