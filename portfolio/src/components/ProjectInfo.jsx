/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from "react";
import "../stylesheets/projects.css";
import { FcRating } from "react-icons/fc";
import ImgProject from "../assets/project1.png";

import { HiExternalLink } from "react-icons/hi";
import { useInView, motion } from "framer-motion";
import {Link} from 'react-router-dom';

function ProjectInfo({ info, side = "left" }) {
  let [styleDiv, setStyleDiv] = useState(
    "row align-items-center g-2 py-5 flex-lg-row-reverse"
  );

  
  const ref = useRef(null);
  const isInView = useInView(ref, {once : true});

  useEffect(()=>{
    // console.log("in the view : ", isInView);
  }, [isInView]);

  useEffect(() => {
    // console.log(info, side);
    side == "left"
      ? setStyleDiv("row align-items-center g-2 py-4 flex-lg-row-reverse")
      : setStyleDiv("row align-items-center g-2 py-4 flex-lg-row");
  }, []);



  return (
    <>
      <div className="container col-xxl-8 px-4 py-3 " ref={ref} 
        >
        <div className={styleDiv}>
          <motion.div
            className="col-sm-12 col-lg-6 "
            
            // style={side=="left" ? { x: [100, 0] , opacity:[0,100] } : { x: [-100, 0] , opacity:[0,100] } }
            style={side=="left"
                    ?
                    { 
                      transform: isInView ? "translateX(0px)" : "translateX(200px)",
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }
                    :
                    { 
                      transform: isInView ? "none" : "translateX(-200px)", 
                      opacity: isInView ? 1 : 0,
                      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                    }
                }


          >
            <div>
              <img
                src={ImgProject}
                className="d-block mx-lg-auto img-fluid"
                alt="Project"
                width="700"
                height="300"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="col-lg-6 border border-3 rounded">
            <div className="p-3 ">
              <h4 className="fw-semibold lh-5 mb-2">
                {info.pName} &nbsp;
                {info.projURL ? <Link to={info.projURL? info.projURL: "" } target={info.projURL?"_blank":""} >
                <HiExternalLink />
                </Link>
                : <></>}
                
              </h4>
              <p className="lead fs-6">{info.Description}</p>
              {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}

              <h6>Tech Stack</h6>
              <div className="d-flex flex-wrap">
                {info.skillList.map((s, i) => {
                  return (
                    <div key={i} className="p-1">
                      <div className="mr-2 rounded border border-dark-subtle py-1 px-2 bg-primary-subtle">
                        {s}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
