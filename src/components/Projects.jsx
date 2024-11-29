import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import { motion } from "framer-motion"
const projectsData = [
  {
    image:image1,
    title:"Customer Churn Prediction",
    description:"This is a project to develop a customer churn prediction model that helps businesses identify customers who are likely to churn, enabling them to take proactice measures to retain those customers.",
    technologies:["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
  },
  {
    image:image2,
    title:"Delio",
    description:"An instant messaging app that allows users to connect globally through shared interests, send messages, images, and videos to their friends. It also has a feature to create groups and chat with multiple friends at once.",
    technologies:["ReactNative", "Expo", "Firebase", "React Navigation","pullstate"],
  },
  {
    image:image1,
    title:"PickMee",
    description:"A fashion assistant that helps users choose the best choice available online. It provides a comparison of similar products from different websites and suggests the best one based on user preferences.",
    technologies:["ReactNative", "Expo", "Firebase", "Lottie Animations", "React Navigation"],
  },
  {
    image:image1,
    title:"My Portfolio site",
    description:"My portfolio site to showcase my projects and skills. It is built using React and Tailwind CSS.",
    technologies:["TypeScript","React", "TailwindCSS", "Framer Motion"],
  },
]

const ScrollReveal = ({children}) => {
  return(
    <motion.div 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ( {project}) => {
  return(
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="Project image" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-5">{
            project.technologies.map((tech,index) => (
              <span key={index} className="rounded-lg bg-pink-900 py-2 px-3">{tech}</span>
            ))
            }</div>
        </div>
        
      </div>
    </div>
    </ScrollReveal>
  )
}


const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
      <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-100 text-4xl font-normal md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">{
        projectsData.map((project,index) => (
          <ProjectCard key={index} project={project}/>
        ))
        }

      </div>
    </div>
  )
}

export default Projects