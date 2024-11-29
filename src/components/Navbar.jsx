import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between  bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">My Portfolio</a>
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>TechStack</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <a href="https://leetcode.com/miru-nalini/">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-yellow-500 hover:opacity-100">
          <SiLeetcode/>
        </li>
        </a>
        <a href="https://www.hackerrank.com/profile/Miru_nalini">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-green-500 hover:opacity-100">
          <SiHackerrank/>
        </li>
        </a>
        <a href="https://github.com/Miru-nalini">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
          <BsGithub/>
        </li>
        </a>
        <a href="https://www.linkedin.com/in/Miru-nalini/">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-blue-500 hover:opacity-100">
          <BsLinkedin/>
        </li>
        </a>
      </ul>

      {open?(
        <BiX className="block md:hidden text-4l" onClick={handleOpen}/>
      ):(
        <BiMenu className="block md:hidden text-4l" onClick={handleOpen}/>
      )
      }

      {open && (
        <div className={`fixed right-0 top-[84px] px-4 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12${open?"block":"hidden"}`}>
          <ul className="flex flex-col gap-8">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>TechStack</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      <ul className="flex flex-wrap gap-5">
      <a href="https://leetcode.com/miru-nalini/">
      <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-yellow-500 hover:opacity-100">
          <SiLeetcode/>
        </li>
        </a>
        <a href="https://www.hackerrank.com/profile/Miru_nalini">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-green-500 hover:opacity-100">
          <SiHackerrank/>
        </li>
        </a>
        <a href="https://github.com/Miru-nalini">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
          <BsGithub/>
        </li>
        </a>
        <a href="https://www.linkedin.com/in/Miru-nalini/">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 text-blue-500 hover:opacity-100">
          <BsLinkedin/>
        </li>
        </a>
      </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar