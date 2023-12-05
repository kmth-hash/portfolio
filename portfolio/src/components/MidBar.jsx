import "../stylesheets/homepage.css";
import { motion } from "framer-motion";

function MidBar() {
  return (
    <motion.div className="midbar" animate={{
        scaleX : 0.95 ,
                  
      }}
      transition={{
        duration : 7 , 
        ease : "easeInOut" , 
        repeat : "infinity"
      }}
      
      >
      <div className="home-bar text-white"></div>
      </motion.div>
  )
}

export default MidBar