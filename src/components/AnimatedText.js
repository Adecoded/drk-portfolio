import React from "react";
import { motion } from "framer-motion";

const Quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden
      sm:py:0
    "
    >
      <motion.h1
        variants={Quote}
        initial="initial"
        animate="animate"
        whileInView={{color:["#58E6D9","#B63E96","#58E6D9",],
        transition:{duration:1, repeat:Infinity}
      
      }}
        className={` inline-block text-dark w-full font-bold capitalize text-8xl dark:text- ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "_" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
 