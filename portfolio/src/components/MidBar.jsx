import "../stylesheets/homepage.css";
import { motion } from "framer-motion";

function MidBar() {
  return (
    <motion.div className="midbar" animate={{
        scaleX : [1 , 0.95, 1] ,        
        
      }}
      transition={{
        duration : 4 , 
        ease : ["easeInOut"] , 
        repeat : "Infinity",
        
      }}
      
      
      
      >
      <div className="home-bar text-white"></div>
      </motion.div>
  )
}

export default MidBar