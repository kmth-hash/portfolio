import Header from "./Header";
import "../stylesheets/projects.css";
import { projectData } from "../staticDataFile.jsx";
import Footer from "./Footer";
import { useRef } from "react";
import { FcRating } from "react-icons/fc";
import { motion, useInView } from "framer-motion";
import ProjectInfo from "./ProjectInfo";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <>


      <Header></Header>
      
      <ProjectInfo side="right"/>
      <ProjectInfo side="left"/>
      <Footer></Footer>
    </>
  );
}

export default Projects;
