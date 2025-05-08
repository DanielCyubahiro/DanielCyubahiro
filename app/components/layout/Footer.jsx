import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
      <footer
          className={'hidden sm:flex flex-col items-center px-5 lg:px-8 xl:px-[8%] py-4 bottom-0 bg-primary-foreground'}
      >
        <section className={'flex justify-center gap-2'}>
          <Link
              href={'https://github.com/DanielCyubahiro'}
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                src={`/icons/Github-Dark.svg`}
                width={25}
                height={25}
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
                src={`/icons/LinkedIn.svg`}
                width={25}
                height={25}
                alt={'linkedin logo'}
                className={'rounded-full'}
            />
          </Link>
        </section>
        <p className={'pt-2 text-muted-foreground text-sm'}>© 2025 Daniel Cyubahiro</p>
      </footer>
  );
};

export default Footer;
