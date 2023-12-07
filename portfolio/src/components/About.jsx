import React from 'react';
import Typewriter from "typewriter-effect"; 
import { motion, useScroll, useSpring } from "framer-motion";



function About() {
  const getRandomPercent =(n)=>{
    let ls = Array.apply(null, Array(5))
    .map(i=>{
      let x = Math.floor((Math.random() * 100) + 1);
      // console.log(x+"%");
      return(x+"%");
    });
    console.log(ls);  
    return ls;  
  }
  return (
    <div>
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
            .dele
            .start();
        }}
        options={{
          wrapperClassName : "typewritercss",
          
        }}
      />

<motion.div className="bg-box" animate={{
        scale : [1,1,1,1,1] ,         
        borderTopLeftRadius : getRandomPercent(5),
        borderTopRightRadius : getRandomPercent(5),
        borderBottomLeftRadius : getRandomPercent(5),
        borderBottomRightRadius : getRandomPercent(5)
        
      }}
      transition={{        
        duration: 12,        
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,        
      }}


      
      >


      </motion.div>

    </div>
  )
}

export default About