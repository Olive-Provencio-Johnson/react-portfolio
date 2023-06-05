import React from "react";
import "./Projects.css";
import OliveAvatar from "../../assets/OliveAvatar.png";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";

const Projects = () => {
  return (
    <>
      <div className="project-banner">
        <div className="text-container">
          <h1 className="hOne">Projects & Experience</h1>
        </div>
        <img alt="avatar" src={OliveAvatar} className="avatar" />
      </div>
      <div className="project-grid-container">
        <ProjectGrid />
      </div>
    </>
  );
};

export default Projects;
