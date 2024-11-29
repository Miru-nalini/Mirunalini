import { BiLogoDjango, BiLogoFirebase, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoReact, BiLogoTailwindCss} from "react-icons/bi"
import { SiMysql } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { motion } from "framer-motion"
const Tech = () => {
  const variants = {
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0},
  }

  return (
    <div id="tech" className="flex minn-h-[70vh] w-full flex-col items-center justify-center gap-12 md:gap-24">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-100 text-4xl font-normal  md:text-6xl">Tech Stack</motion.h1>
       <div className="flex flex-wrap items-center justify-center gap-8 p-5">
       <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoPython className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoDjango className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoJava className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>   
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <TbBrandReactNative className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <BiLogoFirebase className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        <motion.div variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
          <SiMysql className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-3 sm:text-[100px] md:text-[120px]"/>
        </motion.div>
        
       </div>
    </div>
  )
}

export default Tech