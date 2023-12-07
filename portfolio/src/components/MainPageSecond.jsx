import "../stylesheets/homepage.css";
import {
  skills as skillState,
  tools as toolState,
  colorPalette,
  textcolorPalette,
} from "../staticDataFile";
import {  useRef } from "react";
import { motion, useInView } from "framer-motion";
import {Link} from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

function MainPageSecond() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div className="row justify-content-between skills-main py-3">
      
      <div className="col-12 mt-3 container" >
        <div className="row container">
          <div className="col-md-4 p-2 px-3">
            <h2 className="skillheader " ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
              <b>Professional Skills</b>
            </h2>
            <p>
              Focusing on writing efficient and clean code. Learning new tools
              to help build end to end products. Here are some languages,
              frameworks and tools I&#39;ve worked with
            </p>
            <br />
            
              
              <Link to="projects">
              <motion.div
              className="hover-black-css btn rounded border-3 border-dark-subtle"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className=" p-1 ">
                  <b>Projects</b>&nbsp;<FaArrowUpRightFromSquare/>
                </div>
                </motion.div>
              </Link>
              

            
          </div>
          <div className="col-md-8 p-2 px-3">
            <h4 ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
              <b>Languages</b>
            </h4>

            <div className="skill-grid d-flex flex-wrap gap-3">
              {skillState.map((skill, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div
                      style={{
                        backgroundColor: colorPalette[index % 4],
                        color: textcolorPalette[index % 4],
                      }}
                      className="text-center shadow fw-medium border border-2 border-dark-subtle p-2 rounded"
                    >
                      <i className={skill.tagLogo}></i>&nbsp;&nbsp;
                      {skill.tagName}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <br />
            <h4>
              <b>Tools</b>
            </h4>
            <div className="skill-grid d-flex flex-wrap gap-3">
              {toolState.map((skill, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div
                      style={{
                        backgroundColor: colorPalette[index % 4],
                        color: textcolorPalette[index % 4],
                      }}
                      className="text-center shadow fw-medium border border-2 border-dark-subtle p-2 rounded"
                    >
                      <i className={skill.tagLogo}></i>&nbsp;&nbsp;
                      {skill.tagName}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 my-3"></div>
    </div>
  );
}

export default MainPageSecond;
