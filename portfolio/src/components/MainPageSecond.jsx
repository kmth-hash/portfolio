import "../stylesheets/homepage.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLongArrowAltRight } from "react-icons/fa";
import { skills } from "../staticDataFile";
import { useState } from "react";

function MainPageSecond() {
  const [skillState, setSkillState] = useState(skills);

  return (
    <div className="row justify-content-between skills-main">
      <div className="col-12 mt-3 container ml-4 pl-4">
        <h2 className="skillheader ">&nbsp;<b>Professional Skills</b></h2>
        
      </div>
      <div className="col-12 mt-3 container">
      <div className="row container">
          <div className="col-md-4 py-2 px-3">
              <p>
                Focusing on writing efficient and clean code.
                Learning new tools to help build end to end products. 
                Here are some languages, frameworks and tools I've worked with
              </p>
              
          </div>
          <div className="col-md-8 p-2 ">
            <div className="d-flex flex-wrap gap-3">
              {skillState.map((skill,index)=>{
                  return(
                    <div key={index} className="text-center bg-dark-subtle fw-medium border border-2 border-dark p-2 rounded">
                    <i className={skill.tagLogo}></i>&nbsp;&nbsp;{skill.tagName} 
                    {/* HTML <i className="devicon-python-plain"></i> */}
                  </div>
                  )
              })}              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageSecond;
