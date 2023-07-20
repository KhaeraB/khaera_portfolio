'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';
import HeadshotText from '../../utilities/headshot_text';

const HeroSection = () => {
  return (
    <section id='home'>
      {HeadshotText.map((item) => {

        return (
        
        
          <div
            key={item.title}
            className='flex flex-col text-center items-center justify-center py-16 my-10 md:flex-row md:space-x-4 md:text-left'
          >
            <div className='md:mt-2 md:w-1/2'>
              <Image
                src={item.image}
                alt='khaera Belkadi portrait'
                width={300}
                height={300}
                className='rounded-full shadow-2xl'
              />
            </div>
            <div className='md:mt-2 md:w-3/5'>
              <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-5xl'>
                {item.title}
              </h1>
              <p className='text-lg mt-4 mb-6 md:text-xl'>
                <span className='font-semibold text-teal-600'>{item.job}</span>
                {item.description_1 + ' '}
                <span className='font-semibold text-teal-700'>
                  {item.job_2}
                </span>
                {item.description_2}
              </p>
              <Link
                to='projects'
                className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Les Projets
              </Link>
            </div>
          </div>
        );
      })}
      <div className='flex flex-row items-center text-center justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
