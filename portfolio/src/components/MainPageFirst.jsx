import "../stylesheets/homepage.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLongArrowAltRight } from "react-icons/fa";

function MainPageFirst() {
  const getRandomPercent = (n) => {
    let ls = Array.apply(null, Array(5)).map((i) => {
      let x = Math.floor(Math.random() * 100 + 1);
      // console.log(x+"%");
      return x + "%";
    });
    console.log(ls);
    return ls;
  };
  return (
    <div className="row justify-content-between">
      <div className="col-md-7  container">
        <h4>Hi! I'm </h4>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Dimi...")
              .pauseFor(250)
              .deleteChars(7)
              .typeString("Prsn")
              .pauseFor(250)
              .deleteChars(2)
              .typeString("anav")
              .pauseFor(250)
              .typeString("...")
              .pauseFor(200)
              .deleteChars(3)
              .start();
          }}
          options={{
            wrapperClassName: "typewritercss",
          }}
        />
        <h2 className="">Software Developer </h2>
        <p>
          I'm a Full Stack Developer and Data Engineer who loves building stuff.
          I spend most of my time building projects, fixing bugs and trying not
          to crash that server.
        </p>
        <br />
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
            <img src="/profile.png" className="img-fluid"></img>
          </div>
        </motion.div>
      </div>
      <div className="col-md-6 mt-3">
        <div className="btn btn-custom-blue d-flex flex-row col-4 col-md-4 text-center">
          <h5>Resume </h5>{" "}
          <motion.div
            className=" d-none d-sm-block"
            animate={{ x: 5 }}
            transition={{ repeat: "infinity", duration: 1 }}
          >
            <FaLongArrowAltRight />
          </motion.div>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <div className="btn btn-dark d-flex flex-row col-4 col-md-4 text-center">
          <h5>Random </h5>{" "}
          <motion.div
            className=" d-none d-sm-block"
            animate={{ x: 5 }}
            transition={{ repeat: "infinity", duration: 1 }}
          >
            <FaLongArrowAltRight />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MainPageFirst;
