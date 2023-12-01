import "../stylesheets/homepage.css";
import { motion, useScroll, useSpring } from "framer-motion";
import MainPageFirst from "./MainPageFirst";
import Header from "./Header";
import MainPageSecond from "./MainPageSecond";
function Homepage() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 33,
    restDelta: 0.001,
  });




  return (
    <>
      <Header />
      <div className="homepage text-dark ">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div className="homepage-body container-md ">
          <MainPageFirst />
          
          <motion.div className="" animate={{
            scaleX : 0.95 ,
                      
          }}
          transition={{
            duration : 10 , 
            ease : "easeInOut" , 
            repeat : "infinity"
          }}
          
          >
          <div className="home-bar text-white"></div>
          </motion.div>
          <MainPageSecond />
        </div>
      </div>
    </>
  );
}

export default Homepage;
