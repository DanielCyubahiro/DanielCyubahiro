import {ArrowUpRight} from 'lucide-react';
import {Style_Script} from 'next/font/google';

const styleScript = Style_Script({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = () => {
  return (
      <>
        <nav
            className={'flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4  w-full fixed z-50'}>
          <a href="#top">
            <h2 className={`${styleScript.className} text-4xl`}>Daniel Cyubahiro.</h2>
          </a>
          <ul className={'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div>
            <a href="#contact" className={'hidden lg:flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-full ml-4'}>
              Get in touch
              <ArrowUpRight/>
            </a>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
