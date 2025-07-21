import Navbar from '@/app/components/layout/Navbar';
import Home from '@/app/sections/Home';
import About from '@/app/sections/About';
import Projects from '@/app/sections/Projects';
import Contact from '@/app/sections/Contact';

export default function Page() {
  return (
      <main className="snap-y overflow-scroll h-screen">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
  );
}
