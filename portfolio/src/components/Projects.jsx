import Header from "./Header";
import "../stylesheets/projects.css";
import { projectData } from "../staticDataFile.jsx";
import Footer from "./Footer";
import ProjectInfo from "./ProjectInfo";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Loading...");
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="center-spinner align-middle h-100 d-flex flex-row justify-content-center align-items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header></Header>
          <div className="container col-12 px-4 pt-3" ref={ref}>
            <div
              className="row text-center g-2 "
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h2>Projects</h2>
            </div>
          </div>
          {projectData.map((proj, index) => {
            return (
              <ProjectInfo
                info={proj}
                key={index}
                side={index % 2 == 0 ? "left" : "right"}
              />
            );
          })}
          {/* <ProjectInfo side="right"/>
      <ProjectInfo side="left"/> */}
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default Projects;
