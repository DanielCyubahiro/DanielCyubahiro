import TechIcon from '@/app/components/common/TechIcon';

const About = () => {
  return (
      <section
          id={'about'}
          className={'snap-start scroll-mt-20 w-full px-[12%] flex flex-col items-center justify-center pb-50 md:scroll-mt-40 lg:pd-0'}>
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
              <TechIcon src={'/icons/HTML.svg'} alt={'html logo'}/>
              <TechIcon src={'/icons/CSS.svg'} alt={'css logo'}/>
              <TechIcon src={'/icons/JavaScript.svg'} alt={'javascript logo'}/>
              <TechIcon src={'/icons/TypeScript.svg'} alt={'typescript logo'}/>
              <TechIcon src={`/icons/React-Dark.svg`} alt={'react logo'}/>
              <TechIcon src={`/icons/NextJS-Dark.svg`} alt={'nextjs logo'}/>
              <TechIcon src={`/icons/Vite-Dark.svg`} alt={'vite logo'}/>
              <TechIcon src={'/icons/Redux.svg'} alt={'redux logo'}/>
              <TechIcon src={`/icons/TailwindCSS-Dark.svg`} alt={'tailwindcss logo'}/>
              <TechIcon src={`/icons/MaterialUI-Dark.svg`} alt={'materialui logo'}/>
            </section>
            <h5 className={'text-center m-5'}>⚙️ Backend</h5>
            <section className={'flex gap-2 flex-wrap justify-center'}>
              <TechIcon src={`/icons/NodeJS-Dark.svg`} alt={'nodejs logo'}/>
              <TechIcon src={`/icons/PHP-Dark.svg`} alt={'php logo'}/>
              <TechIcon src={`/icons/ExpressJS-Dark.svg`} alt={'expressjs logo'}/>
              <TechIcon src={`/icons/NestJS-Dark.svg`} alt={'nestjs logo'}/>
              <TechIcon src={`/icons/Laravel-Dark.svg`} alt={'laravel logo'}/>
            </section>
            <h5 className={'text-center m-5'}>🗄️️ Database</h5>
            <section className={'flex gap-2 flex-wrap justify-center'}>
              <TechIcon src={'/icons/MongoDB.svg'} alt={'mongodb logo'}/>
              <TechIcon src={`/icons/MySQL-Dark.svg`} alt={'mysql logo'}/>
              <TechIcon src={`/icons/PostgreSQL-Dark.svg`} alt={'postgresql logo'}/>
            </section>
          </div>
        </div>
      </section>
  );
};

export default About;
