import Navbar from '@/app/components/Navbar';
import Home from '@/app/components/Home';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
      <main>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
  );
}
