'use client';
import {AlignRight, ArrowUpRight, X} from 'lucide-react';
import {Style_Script} from 'next/font/google';
import {ThemeToggle} from '@/app/components/theme/ThemeToggle';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const styleScript = Style_Script({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
      <nav
          className={'flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4  w-full fixed z-50 bg-primary-foreground'}>
        <a href="#home">
          <h2 className={`${styleScript.className} text-3xl sm:text-4xl`}>Daniel Cyubahiro.</h2>
        </a>
        <ul className={'hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={'flex flex-nowrap justify-center items-center gap-1'}>
          <div className={'hidden md:flex'}>
            <ThemeToggle/>
          </div>
          <a href="#contact">
            <Button
                variant="outline"
                className={'hidden lg:flex items-center gap-3 px-5 py-3 border border-gray-500 rounded-full ml-4'}
                size="xl"
            >
              Get in touch
              <ArrowUpRight/>
            </Button>
          </a>
        </div>
        <AlignRight
            size={30}
            className={'md:hidden'}
            onClick={() => setIsSidebarOpen(true)}
        />

        {/*------------------------- Mobile Menu -------------------------*/}
        <ul className={cn(
            'flex flex-col items-center justify-center gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-full z-50 h-screen bg-sidebar text-sidebar-accent-foreground transition duration-500 translate-x-full md:hidden',
            {
              'translate-x-0': isSidebarOpen,
            },
        )}>
          <X size={30} className={'absolute right-6 top-6'}
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
          <li>
            <a href="#home" onClick={() => setIsSidebarOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsSidebarOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsSidebarOpen(false)}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact"
               onClick={() => setIsSidebarOpen(false)}>
              Contact
            </a>
          </li>
          <section className={'flex justify-center gap-5 mt-10'}>
            <ThemeToggle/>
            <Link
                href={'https://github.com/DanielCyubahiro'}
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src={`/icons/github-dark.svg`}
                  width={35}
                  height={35}
                  alt={'github logo'}
                  className={'rounded-full'}
              />
            </Link>
            <Link
                href={'https://www.linkedin.com/in/daniel-prince-cyubahiro/'}
                target="_blank"
                rel="noopener noreferrer"
            >
              <Image
                  src={`/icons/linkedin.svg`}
                  width={35}
                  height={35}
                  alt={'linkedin logo'}
                  className={'rounded-full'}
              />
            </Link>
          </section>
        </ul>
      </nav>
  );
};

export default Navbar;
