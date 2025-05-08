import {projects} from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import {Globe} from 'lucide-react';

const Projects = () => {
  return (
      <section
          id={'projects'}
          className={'w-full px-[12%] py-10 scroll-mt-20 snap-start'}>
        <h2 className={'text-center text-5xl'}>
          My Work
        </h2>
        <p className={'text-center max-w-2xl mx-auto mt-5 mb-12'}>
          Below is a collection of personal projects I've worked on so far...
        </p>
        <div className={'grid grid-cols-1 gap-8 lg:grid-cols-4'}>
          {projects.map((project) => (
              <div key={project.name} className={'group'}>
                <div
                    className={'relative overflow-hidden rounded-lg border shadow-xl transition-all duration-100 h-full w-full'}
                >
                  <Image
                      className={'object-cover h-48 w-full transform group-hover:scale-105 transition-transform duration-300'}
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={400}
                  />
                  <div className={'p-6'}>
                    <div className={'flex justify-end gap-2 mb-5'}>
                      <Link
                          href={project.links.github}
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
                      {project.links?.demo && (
                          <Link
                              href={project.links?.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <Globe/>
                          </Link>
                      )}
                    </div>
                    <h3 className={'text-xl'}>
                      {project.name}
                    </h3>
                    <p className={'my-3 text-sm'}>
                      {project.description}
                    </p>
                    <div className={'my-6 flex flex-wrap gap-2'}>
                      {project.technologies.map((technology, index) => (
                          <div
                              key={index}
                              className={'rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary border-none'}
                          >
                            {technology}
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;
