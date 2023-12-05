import "../stylesheets/homepage.css";
import { motion, useScroll, useSpring } from "framer-motion";
import MainPageFirst from "./MainPageFirst";
import Header from "./Header";
import MainPageSecond from "./MainPageSecond";
import MidBar from "./MidBar";
import MainPageThird from "./MainPageThird";

function Homepage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 33,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="container">
      <Header />
      <div className="homepage text-dark ">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="homepage-body container-md ">
          <MainPageFirst />

          <MidBar />
          <MainPageSecond />
          <MidBar />
          <MainPageThird />
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
