import Header from "./Header";
import "../stylesheets/projects.css";
import { projectData } from "../staticDataFile.jsx";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

function OldProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div>
      <div className="projects-main" ref={ref}>
        <Header />
        <br />

        <div className="container">
          <h1
            className="text-center"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Projects
          </h1>
          <hr />
          <div className="row p-1">
            {projectData.map((project, index) => {
              return <ProjectCard project={project} key={index} />;
            })}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default OldProject;
