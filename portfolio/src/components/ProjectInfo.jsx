import React, {useState, useEffect} from 'react'
import "../stylesheets/projects.css";
import { projectData } from "../staticDataFile.jsx";
import { FcRating } from "react-icons/fc";

function ProjectInfo({side="left"}) {
    let [styleDiv,setStyleDiv]=useState("row align-items-center g-2 py-5 flex-lg-row-reverse")
    
    useEffect(()=>{
        
        (side=="left") ? 
        setStyleDiv("row align-items-center g-2 py-5 flex-lg-row-reverse" )
        :
        setStyleDiv("row align-items-center g-2 py-5 flex-lg-row") ;

    },[]);

  
    return (
    
    <>
    <div className="container col-xxl-8 px-4 py-3">
        <div className={styleDiv}>
          <div className="col-sm-12 col-lg-6 border border-2 rounded">
            <img
              src="profile.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Project"
              width="700"
              height="300"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 border border-2 rounded">
            <div className="p-3 ">
            <h1 className="display-5 fw-bold lh-1 mb-3">Bill-It <FcRating/></h1>
            <p className="lead">
              Webpage to maintain business expenses and client details. Build to run locally to keep a ledger of client details , invoices and companies. Using FPDF packge , users can print invoices as preferred.
            </p>
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            <br />
            <h6>Tech Stack</h6>
            <div className="d-flex flex-wrap">
              {projectData[0].skillList.map((s, i) => {
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

  )
}

export default ProjectInfo