import "../stylesheets/homepage.css";
// import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

function MainPageThird() {
  return (
    <>
      <div className="row justify-content-between skills-main education-main">
        <div className="col-12 mt-3 container ml-4 pl-4"></div>
        <div className="col-12 mt-3 container">
          <div className="row container">
            <div className="col-md-6 py-2 px-3">
              <h6>BIODATA</h6>
              <h1 className="skillheader ">
                <b>Education</b>
              </h1>
              <br />
              <p className="mb-0">2017 - 2021</p>
              <h4 className=" fw-medium">
                <b>Bacherlors Degree in Computer Science</b>
              </h4>
              <p className="mb-0">St Joseph Engineering College</p>
              <p>
                <b>CGPA : 8.4</b>
              </p>
              <br />
              <p className="mb-0">2015 - 2017</p>
              <h4 className="fw-medium">
                <b>Pre-University College (+2)</b>
              </h4>
              <p className="mb-0">Canara P.U College</p>
              <p>
                <b>Percentage : 93.33%</b>
              </p>
              <br />
              <p className="mb-0">2014 - 2015</p>
              <h4 className="fw-medium">
                <b>SSC Education</b>
              </h4>
              <p className="mb-0">Canara High School</p>
              <p>
                <b>Percentage : 98.08%</b>
              </p>
            </div>

            <div className="col-md-6 py-2 px-3">
              <h6><br /></h6>
              <h1 className="skillheader ">
                <b>Internship</b>
              </h1>
              <br />
              <p className="mb-0">2020 - 2021</p>
              <h4 className=" fw-medium">
                <b>WorldSys Tech : Software Intern</b>
              </h4>
              <p className="mb-0">
                Worked on web development with a team of 3 to build an
                e-commerce website during this internship
              </p>

              <br />
              <p className="mb-0">2020</p>
              <h4 className="fw-medium">
                <b>Software Development Intern</b>
              </h4>
              <p className="mb-0">
                Built a webpage to generate bills for an organization to reduce expenses.
                Generate, update and print bills. Maintain user details and more.
              </p>

              <br />
              <p className="mb-0">2018</p>
              <h4 className="fw-medium">
                <b>Image Processing Internship</b>
              </h4>
              <p className="mb-0">
                Using Python packages implemented an image processing program to
                extract fingerprint from an image.
              </p>
              <br />
              <Link to="certifications">
              <motion.div
              className="btn rounded border-3 border-dark-subtle"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <div className=" p-1 ">
                  <b>Cerifications</b>&nbsp;<FaArrowUpRightFromSquare/>
                </div>
                </motion.div>
              </Link>
            </div>

            <div className="col-md-6 py-2 px-3">
              <br />

              <h1 className="skillheader ">
                <b>Experience</b>
              </h1>
              <br />

              <h4 className=" fw-medium">
                <b>LTI-Mindtree</b>
              </h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b>
                    {" "}
                    <GoDotFill /> Senior Data Engineer ( 2022 - Present )
                  </b>
                </li>
                <li>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      Handled Java-spark project in Banking-Financial System.
                    </li>
                    <li>Increased performance of existing code by 40%.</li>
                    <li>Migration of abinitio project to Java-spark </li>
                  </ul>
                </li>
                <li><br /></li>
                <li>
                  <b>
                    {" "}
                    <GoDotFill /> Data Engineer ( 2021 - 2022 )
                  </b>
                </li>
                <li>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      Worked on Full-Stack development in a BFS project.Seamless UI changes based on backend flag that changed in realtime .
                    </li>
                    <li>Implementation of Java-spark code changes based on client needs.</li>
                    <li></li>
                  </ul>
                </li>
              </ul>
              <br />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageThird;


