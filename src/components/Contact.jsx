const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[90vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 space-y-6 p-14">
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl">Get in Touch!</h1>
        <p className="text-gray-400 text-center text-md font-light bg-clip-text text-2xl md:text-2xl">I am open to new opportunities and collaborations. Feel free to reach out to me!</p>
        <a href="mailto:mirunalini.25it@licet.ac.in" className="text-xl text-white">
        <h3 className="bg-gradient-to-r from-blue-800 to-pink-800 px-3 shadow-lg shadow-purple-800 text-3xl text-black rounded-lg font-semibold md:text-4xl py-2 border-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-100">Contact Me</h3>
        </a>
      </div>
    </div>
  )
}

export default Contact