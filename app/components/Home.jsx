import Image from 'next/image';
import {Download} from 'lucide-react';
import {Button} from '@/components/ui/button';

const Home = () => {
  return (
      <section
          id="home"
          className={'w-11/12 max-w-3xl text-center mx-auto h-screen pt-20 flex flex-col items-center justify-center gap-6 mb-50 '}>
        <Image
            src={'/profile-photo.jpg'}
            width={150}
            height={150}
            alt={'Profile Photo'}
            className={'rounded-full object-cover aspect-square'}
        />
        <h3 className={'text-xl md:text-2xl mb-3'}>
          Hi, I'm Daniel Cyubahiro. 👋🏽
        </h3>
        <h1 className={'text-3xl sm:text-6xl lg:text-[66px]'}>
          A Full-Stack Web Developer based in Berlin.
        </h1>
        <p className={'max-w-2xl mx-auto'}>
          For over 3 years, I've been designing and developing full-featured web
          applications, robust APIs, and personalized websites for clients,
          delivering solutions on time while ensuring code quality and
          performance.
        </p>
        <a href={'/DanielPrinceCyubahiroResume.pdf'} download>
          <Button
              variant={'ghost'}
              className={'bg-primary text-primary-foreground px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 cursor-pointer'}
              size="xl"
          >
            My Resume
            <Download/>
          </Button>
        </a>

      </section>
  );
};

export default Home;
