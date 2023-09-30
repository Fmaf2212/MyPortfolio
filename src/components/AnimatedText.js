import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial:{
    opacity: 1,
  },
  animate:{
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.58,
    }
  }
}

const singelWord = {
  initial:{
    opacity: 0,
    x: 0,
  },
  animate:{
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    }
  }
}

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 ">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl  ${className} dark:text-light`} variants={quote} initial="initial" animate="animate"
      >
        {text.split(" ").map((word, index) =>
          <motion.span key={word + "-" + index} className="inline-block" variants={singelWord}>{word}&nbsp;</motion.span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
