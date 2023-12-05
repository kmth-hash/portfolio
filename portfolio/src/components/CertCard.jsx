/* eslint-disable react/prop-types */
import React from "react";
import { FaLink } from "react-icons/fa";
import "../stylesheets/certifications.css";
import { LiaCertificateSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

function CertCard({ cert }) {
  return (
    <div className=" col-12 col-md-6 p-2">
      <motion.div 
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
      <div className="border p-3 border-2 rounded border-dark-subtle">
        <div className="row">
          <div className="col-10 ">
            <p className="m-0">{cert.companyName}</p>
            <h4>
              <b className="truncated " title={cert.cName}>
                {cert.cName}
              </b>
            </h4>
          </div>
          <div className="container col-2 flex-center">
            <motion.div>
            <Link to={cert.credentialURL} target="_blank">
              <h1>
                <LiaCertificateSolid className="d-none d-md-block m-0" />
              </h1>
            </Link>
            </motion.div>
          </div>
        </div>
        <div className="row">
          <div className="col p-2 mx-2">
            <div className="cert-square rounded-1 ">
              <img src={cert.companyLogo} />
            </div>
          </div>
        </div>
        <p className="m-0 px-2 d-none d-md-block">Skills</p>
        <div className="d-flex flex-wrap">
          {cert.skillList.map((s, si) => {
            return (
              <div className="p-1" key={si}>
                <div className="mr-2 rounded border border-dark-subtle py-1 px-2 ">
                  {s}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      </motion.div>
    </div>
  );
}

export default CertCard;
