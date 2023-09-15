import React from "react";
import { motion } from "framer-motion";


const Skill = ({name,x,y}) => {
    return(
    <motion.div
    className="
    lg:py-2
    lg:px-4
    md:text-sm
    md:py-1.5
    md:px-3
    xs:bg-transparent
    xs:dark:bg-transparent
    xs:text-dark
    xs:dark:text-light
    xs:font-bold
    flex items-center 
justify-center rounded-full font-semibold
bg-dark text-light py-3 px-6 shadow-dark dark:shadow-light dark:text-dark dark:bg-light cursor-pointer absolute animate-pulse"
initial={{x:0,y:0}}
whileInView={{x:x,y:y}}
transition={{duration:1.5}}
viewport={{once:true}}
  >
    {name}
  </motion.div>
    )
}
const Skills = () => {
  return (
    <>
      <h2 className="text-8xl font-bold mt-64 w-full text-center md:text-6xl md:mt-32 sm:mb-4 sm:text-4xl"> Skill</h2>
      <div
        className="w-full h-screen
       flex items-center justify-center
        rounded-full bg-circleLight dark:bg-CircluarDark 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circleLightLg
        lg:dark:bg-circleDarkLg
        md:bg-circularLightMd
        md:dark:bg-circularDarkMd
        sm:bg-circularLightSm
        sm:dark:bg-circularDarkSm
        "
      >
        <motion.div
          className="flex items-center 
justify-center rounded-full font-semibold
 bg-dark dark:bg-light dark:text-dark dark:shaow-light text-light p-8 shadow-dark cursor-pointer
 lg:p-6 md:p-4 xs:text-xs xs:p-2
 "
 whileHover={{scale:1.05}}
        >
          web && Mobile
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw"/>
        <Skill name="CSS" x="-0vw" y="-15vw"/>
        <Skill name="JAVASCRIPT" x="32vw" y="-6vw"/>
        <Skill name="NEXTJS" x="-20vw" y="-18vw"/>
        <Skill name="REACT NATIVE" x="20vw" y="-15vw"/>
        <Skill name="FIREBASE" x="20vw" y="12vw"/>
        <Skill name="TAILWIND CSS" x="-32vw" y="-5vw"/>
        <Skill name="REACTJS" x="-25vw" y="18vw"/>
        <Skill name="GIT" x="0vw" y="15vw"/>
      </div>
    </>
  );
};

export default Skills;
