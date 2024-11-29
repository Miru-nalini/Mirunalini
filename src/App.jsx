import Navbar from './components/Navbar';
import Home from './components/Home';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
 
  return <>
      <div className="fixed -z-10 min-h-screen w-full bg-black"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar/>
        <Home/>
        <Tech/>
        <Projects/>
        <Contact/>
      </main>
    </>
}

export default App;