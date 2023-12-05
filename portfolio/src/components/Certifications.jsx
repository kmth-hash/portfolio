import Header from "./Header";
import CertCard from "./CertCard";
import  {certList} from '../staticDataFile.jsx';
import Footer from "./Footer";
import "../stylesheets/certifications.css";
import {  useRef } from "react";
import { motion, useInView } from "framer-motion";

function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="cert-main" ref={ref}>
      <Header />
      <br />
      <div className="container">
      <h1 className="text-center" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>Certifications</h1>
        <hr />
        <div className="row p-1">
          {certList.map((cert,index)=>{
            return(
              
              <CertCard cert={cert} key={index}/>
            )
          })}
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Certifications;
