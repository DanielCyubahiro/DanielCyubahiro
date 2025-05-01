import Navbar from '@/app/components/Navbar';
import Home from '@/app/components/Home';
import About from '@/app/components/About';

export default function Page() {
  return (
      <main>
        <Navbar/>
        <Home/>
        <About/>
      </main>
  );
}
