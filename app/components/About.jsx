'use client';
import Image from 'next/image';
import {useTheme} from 'next-themes';

const About = () => {
  const {theme = 'dark'} = useTheme();
  return (
      <section id={'about'} className={'w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center justify-center'}>
        <h2 className="text-center text-5xl mb-20">
          About Me
        </h2>
        <p className={'mb-10 max-w-2xl text-justify'}>
          I was born and raised in Rwanda, and moved to Italy where I earned
          a degree in Computer Engineering.
          My professional growth continued in Italy for over several years,
          during which I had the privilege of contributing to the success of
          several large-scale projects across diverse
          sectors, including tech, telecommunications, and healthcare.
          <br/>
          I've recently relocated to Berlin and I'm eager to build on this
          experience.
        </p>
        <div>
          <h4 className="text-center mb-2 text-2xl">Tech Stack</h4>
          <h5 className={'text-center m-5'}>🖥️ Frontend</h5>
          <section className={'flex gap-2 flex-wrap justify-center'}>
            <Image src={'/icons/html.svg'} width={40} height={40}
                   alt={'html logo'}/>
            <Image src={'/icons/css.svg'} width={40} height={40}
                   alt={'css logo'}/>
            <Image src={'/icons/javascript.svg'} width={40} height={40}
                   alt={'javascript logo'}/>
            <Image src={'/icons/typescript.svg'} width={40} height={40}
                   alt={'typescript logo'}/>
            <Image src={`/icons/react-${theme}.svg`} width={40} height={40}
                   alt={'react logo'}/>
            <Image src={`/icons/nextjs-${theme}.svg`} width={40} height={40}
                   alt={'nextjs logo'}/>
            <Image src={`/icons/vite-${theme}.svg`} width={40} height={40}
                   alt={'vite logo'}/>
            <Image src={'/icons/redux.svg'} width={40} height={40}
                   alt={'redux logo'}/>
            <Image src={`/icons/tailwindcss-${theme}.svg`} width={40}
                   height={40} alt={'tailwindcss logo'}/>
            <Image src={`/icons/materialui-${theme}.svg`} width={40}
                   height={40} alt={'tailwindcss logo'}/>
          </section>
          <h5 className={'text-center m-5'}>⚙️ Backend</h5>
          <section className={'flex gap-2 flex-wrap justify-center'}>
            <Image src={`/icons/nodejs-${theme}.svg`} width={40} height={40}
                   alt={'nodejs logo'}/>
            <Image src={`/icons/php-${theme}.svg`} width={40} height={40}
                   alt={'php logo'}/>
            <Image src={`/icons/expressjs-${theme}.svg`} width={40}
                   height={40} alt={'expressjs logo'}/>
            <Image src={`/icons/nestjs-${theme}.svg`} width={40} height={40}
                   alt={'nestjs logo'}/>
            <Image src={`/icons/laravel-${theme}.svg`} width={40}
                   height={40}
                   alt={'laravel logo'}/>
          </section>
          <h5 className={'text-center m-5'}>🗄️️ Database</h5>
          <section className={'flex gap-2 flex-wrap justify-center'}>
            <Image src={'/icons/mongodb.svg'} width={40} height={40}
                   alt={'mongodb logo'}/>
            <Image src={`/icons/mysql-${theme}.svg`} width={40} height={40}
                   alt={'mysql logo'}/>
            <Image src={`/icons/postgresql-${theme}.svg`} width={40}
                   height={40}
                   alt={'postgresql logo'}/>
          </section>
          <h5 className={'text-center m-5'}>️🛠 Other Tools</h5>
          <section className={'flex gap-2 flex-wrap justify-center'}>
            <Image src={'/icons/git.svg'} width={40} height={40}
                   alt={'git logo'}/>
            <Image src={`/icons/github-${theme}.svg`} width={40} height={40}
                   alt={'github logo'}/>
            <Image src={`/icons/netlify-${theme}.svg`} width={40}
                   height={40}
                   alt={'netlify logo'}/>
            <Image src={`/icons/vercel-${theme}.svg`} width={40}
                   height={40}
                   alt={'vercel logo'}/>
            <Image src={`/icons/npm-${theme}.svg`} width={40}
                   height={40}
                   alt={'npm logo'}/>
            <Image src={'/icons/postman.svg'} width={40} height={40}
                   alt={'postman logo'}/>
            <Image src={`/icons/webstorm-${theme}.svg`} width={40}
                   height={40}
                   alt={'webstorm logo'}/>

            <Image src={`/icons/vscode-${theme}.svg`} width={40}
                   height={40}
                   alt={'vscode logo'}/>
          </section>
        </div>
      </section>
  );
};

export default About;
