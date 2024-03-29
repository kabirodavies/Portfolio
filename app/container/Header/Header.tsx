"use client";
import { AppWrap } from '../../wrapper'

import { delay } from 'framer-motion';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Header.scss';
import Link from 'next/link';

type Props = {};

function Header () {
    const [text, count] = useTypewriter({
        words: ["Yo, you call me Davies!"],
        loop: true,
        delaySpeed: 3000
      });

  return (
    <div className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full app__hero_flex'>

      <div>
      <motion.span
        animate={{
          rotate: [0, -30, -20],
          y: [0, -10, 10],
          translateX: [-10, 0, -10],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        style={{ display: 'inline-block' }}
        role="img"
        aria-label="waving-hand"
      >
        <p className='font-size text-size-4xl'>👋</p>       
      </motion.span>
    </div>


      
        <h1 className='text-2xl sm:text-7xl font-bold text-black'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#27282c] mt-6'>
            Data Scientist
        </h2>
        <p className='hero-text p-text'>
        I am a technologist, passionate about leveraging cutting-edge solutions 
        to create innovative and impactful experiences.
        </p>
        <div>        
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4c4f70]
           hover:border-[#F7AB0A]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, 'home');
