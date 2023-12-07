import "../stylesheets/homepage.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import {Link} from 'react-router-dom';

function MainPageFirst() {
  const getRandomPercent = (n) => {
    let ls = Array.apply(null, Array(n)).map(() => {
      let x = Math.floor(Math.random() * 100 + 1);
      // console.log(x+"%");
      return x + "%";
    });
    // console.log(ls);
    return ls;
  };
  return (
    <div className="pt-3 row justify-content-between">
      <div className="col-md-7  container">
        <h4>Hi! I&#39;m </h4>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Dimi...")
              .pauseFor(250)
              .deleteChars(7)
              
              .typeString("Pranav")
              .pauseFor(250)
              .typeString(" Kamath")
              .pauseFor(200)              
              .start();
          }}
          options={{
            wrapperClassName: "typewritercss",
          }}
        />
        <h2 className="">Software Developer </h2>
        <p>
          I&#39;m a <b>Full Stack Developer</b> and <b>Data Engineer</b> who
          loves building stuff. I spend most of my time building projects,
          fixing bugs and trying not to crash the server while at it.
        </p>
        <p>
          I&#39;m bit of a digital junky. I have worked on a number of projects
          and I&#39;m learning new tools regularly. Feel free to{" "}
          <b>
            <a href="/contact-me">Contact me</a>
          </b>
          .
        </p>
        {/* <div className="btn btn-custom-blue d-flex flex-row text-center"> */}

        <div className="d-flex gap-2">
          <a href="mailto:bpk.san4ya@gmail.com">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn btn-warning bg-white text-dark hover-white-css"
          >
            <h4>
              <SiGmail />
            </h4>
          </motion.div>

          </a>

          <Link to="https://www.linkedin.com/in/pranavkamathb/"
          target="_blank">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn btn-warning bg-white text-dark hover-white-css"
          >
            <h4>
              <FaLinkedinIn />
            </h4>
          </motion.div>
          </Link>

          <Link to="https://github.com/kmth-hash"
          target="_blank">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn btn-warning bg-white text-dark hover-white-css"
          >
            <h4>
              <FaGithub />
            </h4>
          </motion.div>
          </Link>
        </div>
        {/* </div> */}
        {/* <br />
        <div className="btn btn-custom-blue d-flex flex-row col-4 col-md-4 text-center">
          <h5>Ping Me </h5>{" "}
          <motion.div
            className=" d-none d-sm-block"
            animate={{ x: 5 }}
            transition={{ repeat: "infinity", duration: 1 }}
          >
            <FaLongArrowAltRight />
          </motion.div>
        </div> */}
      </div>
      <div className="col-md-5 mt-3 d-flex align-items-center justify-content-center">
        <motion.div
          className="bg-box"
          animate={{
            scale: [1, 1, 1, 1, 1],
            borderTopLeftRadius: getRandomPercent(5),
            borderTopRightRadius: getRandomPercent(5),
            borderBottomLeftRadius: getRandomPercent(5),
            borderBottomRightRadius: getRandomPercent(5),
          }}
          transition={{
            duration: 12,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        >
          <div className="homepage-profile-div">
            <img src="./src/assets/profile_illustration2.png" className="img-fluid"></img>
          </div>
        </motion.div>
      </div>
      <div className="col-md-6 mt-3">
        {/* <div className="btn btn-custom-blue d-flex flex-row col-4 col-md-4 text-center">
          <h5>Mail</h5>{" "}
          <motion.div
            className=" d-none d-sm-block"
            animate={{ x: 5 }}
            transition={{ repeat: "infinity", duration: 1 }}
          >
            <h4>
          <SiGmail/>
        </h4>
          </motion.div>
        </div> */}
      </div>
      <div className="col-md-6 my-4 py-3">
        {/* <div className="btn btn-dark d-flex flex-row col-4 col-md-4 text-center">
          <h5>Random </h5>{" "}
          <motion.div
            className=" d-none d-sm-block"
            animate={{ x: 5 }}
            transition={{ repeat: "infinity", duration: 1 }}
          >
            <FaLongArrowAltRight />
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}

export default MainPageFirst;
