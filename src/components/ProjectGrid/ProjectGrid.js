import React from "react";
import './ProjectGrid.css';

const ProjectGrid = () => {
  // The grid with your projects. You could replace the 'project' variable with your real projects
  const projects = [
    {name: "Adventure Finder", url: "https://jbungurait.github.io/Adventure_Finder/" },
    {name: "GatherNow", url: "https://boiling-mesa-08063.herokuapp.com/login" },  
    {name: "StreamVerse", url: "https://warm-ravine-32968.herokuapp.com/" },
  ]; 

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <a href={project.url} key={index} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;