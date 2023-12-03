import "../stylesheets/homepage.css";
import { skills } from "../staticDataFile";
import { useState } from "react";
import { motion } from "framer-motion";

function MainPageSecond() {
  const [skillState, setSkillState] = useState(skills);

  return (
    <div className="row justify-content-between skills-main">
      <div className="col-12 mt-3 container ml-4 pl-4">
        <h2 className="skillheader ">
          &nbsp;<b>Professional Skills</b>
        </h2>
      </div>
      <div className="col-12 mt-3 container">
        <div className="row container">
          <div className="col-md-4 py-2 px-3">
            <p>
              Focusing on writing efficient and clean code. Learning new tools
              to help build end to end products. Here are some languages,
              frameworks and tools I&#39;ve worked with
            </p>
          </div>
          <div className="col-md-8 p-2 ">
            <div className="skill-grid d-flex flex-wrap gap-3">
              
              {skillState.map((skill, index) => {
                return (
                  <motion.div key={index} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  
                  >
                    <div  className="text-center bg-dark-subtle fw-medium border border-2 border-dark p-2 rounded">
                    <i className={skill.tagLogo}></i>&nbsp;&nbsp;{skill.tagName} 
                    
                  </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageSecond;
