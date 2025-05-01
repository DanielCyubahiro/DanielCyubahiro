'use client'
import Image from 'next/image';
import {useTheme} from 'next-themes';

const About = () => {
  const { theme } = useTheme();
  return (
      <section id={'about'} className={'w-full px-[12%] py-10 scroll-mt-20'}>
        <h4 className="text-center mb-2 text-large">
          Introduction
        </h4>
        <h2 className="text-center text-5xl">
          About Me
        </h2>
        <div
            className="flex flex-col w-full items-center gap-20 my-20 lg:flex-row ">
          <Image
              src={'/profile-photo.jpg'}
              width={100}
              height={100}
              alt={'Profile photo'}
              className={'sm:w-80 rounded-3xl max-w-none'}
          />

          <div className={'flex-1'}>
            <p className={'mb-10 max-w-2xl text-justify'}>
              I was born and raised in Rwanda, and moved to Italy where I earned
              my degree in Computer Engineering.
              My professional growth continued in Italy for over three years,
              during which I had the privilege of contributing to the success of
              several large-scale projects across diverse
              sectors, including tech, telecommunications, and healthcare.
              <br/>
              I've recently relocated to Berlin and I'm eager to build on this experience.
            </p>
            <div>
              <p>Tools I use:</p>
              <img src={`https://skillicons.dev/icons?i=javascript,typescript,next,react,vite,nodejs,express,mongo,postgres,tailwind,php,laravel,github,&theme=${theme}`} />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
