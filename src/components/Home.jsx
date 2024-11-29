import photo from '../assets/photo.jpg'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        >
        <div>
          <img src={photo} alt="" className="w-[240px] cursor-pointer rounded-full transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-gray-800 md:w-{350px}"/>
        </div>
        </motion.div>
        

        <motion.div initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-5xl font-normal transition-all duration-300 md:text-7xl'>Mirunalini</h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent text-2xl font-normal transition-all duration-300'>Software Developer</h3>
          <p className='opacity-80 transition-all duration-300 hover:opacity-100 md:text-base text-pretty text-sm text-gray-400'>I like to code and build things. Check out my projects to know more! <br/> I tend to try out lots of new things. Reach out to me and let&apos;s build something amazing together :)</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Home