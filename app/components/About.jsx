import Image from 'next/image';

const About = () => {
  return (
      <section
          id={'about'}
          className={'snap-start scroll-mt-50 w-full px-[12%] h-screen flex flex-col items-center justify-center pb-50 md:scroll-mt-10 lg:pd-0 '}>
        <h2 className="text-center text-5xl mb-10">
          About Me
        </h2>
        <div className="lg:flex justify-between gap-5">
          <div className="flex flex-col lg:w-[50%] justify-center">
            <h4 className="mb-2 text-2xl text-center">Background</h4>
            <p className={'mb-10 max-w-2xl'}>
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
          </div>
          <div className="lg:w-[50%]">
            <h4 className="text-center mb-2 text-2xl">Tech Stack</h4>
            <h5 className={'text-center m-5'}>🖥️ Frontend</h5>
            <section className={'flex gap-2 flex-wrap justify-center'}>
              <Image src={'/icons/HTML.svg'} width={40} height={40}
                     alt={'HTML logo'}/>
              <Image src={'/icons/CSS.svg'} width={40} height={40}
                     alt={'css logo'}/>
              <Image src={'/icons/Javascript.svg'} width={40} height={40}
                     alt={'javascript logo'}/>
              <Image src={'/icons/Typescript.svg'} width={40} height={40}
                     alt={'typescript logo'}/>
              <Image src={`/icons/react-dark.svg`} width={40} height={40}
                     alt={'react logo'}/>
              <Image src={`/icons/nextjs-dark.svg`} width={40} height={40}
                     alt={'nextjs logo'}/>
              <Image src={`/icons/vite-dark.svg`} width={40} height={40}
                     alt={'vite logo'}/>
              <Image src={'/icons/redux.svg'} width={40} height={40}
                     alt={'redux logo'}/>
              <Image src={`/icons/tailwindcss-dark.svg`} width={40}
                     height={40} alt={'tailwindcss logo'}/>
              <Image src={`/icons/materialui-dark.svg`} width={40}
                     height={40} alt={'tailwindcss logo'}/>
            </section>
            <h5 className={'text-center m-5'}>⚙️ Backend</h5>
            <section className={'flex gap-2 flex-wrap justify-center'}>
              <Image src={`/icons/nodejs-dark.svg`} width={40} height={40}
                     alt={'nodejs logo'}/>
              <Image src={`/icons/php-dark.svg`} width={40} height={40}
                     alt={'php logo'}/>
              <Image src={`/icons/expressjs-dark.svg`} width={40}
                     height={40} alt={'expressjs logo'}/>
              <Image src={`/icons/nestjs-dark.svg`} width={40} height={40}
                     alt={'nestjs logo'}/>
              <Image src={`/icons/laravel-dark.svg`} width={40}
                     height={40}
                     alt={'laravel logo'}/>
            </section>
            <h5 className={'text-center m-5'}>🗄️️ Database</h5>
            <section className={'flex gap-2 flex-wrap justify-center'}>
              <Image src={'/icons/mongodb.svg'} width={40} height={40}
                     alt={'mongodb logo'}/>
              <Image src={`/icons/mysql-dark.svg`} width={40} height={40}
                     alt={'mysql logo'}/>
              <Image src={`/icons/postgresql-dark.svg`} width={40}
                     height={40}
                     alt={'postgresql logo'}/>
            </section>
          </div>
        </div>
      </section>
  );
};

export default About;
