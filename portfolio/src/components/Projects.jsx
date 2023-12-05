import Header from "./Header";
import "../stylesheets/projects.css";
import { projectData } from "../staticDataFile.jsx";
import ProjectCard from "./ProjectCard";


function Projects() {
  return (
    <div className="projects-main">
      <Header />
      <br />
      <div className="container">
        <div className="row p-1">
          {projectData.map((project, index) => {
            return (
              <ProjectCard project={project} key={index} />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
