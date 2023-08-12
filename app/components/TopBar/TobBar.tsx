"use client";

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

// import './Topbar.scss';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-strat justify-between z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='flex flex-row items-center max-w-7xl mx-auto'
      >
        {/* Add the class "social-icon-wrapper" to the div wrapping the SocialIcon components */}
        <div className=''>
          <SocialIcon
            url='https://linkedin.com/in/kabirodavies'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />

          <SocialIcon
            url='https://github.com/kabirodavies'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />

          <SocialIcon
            url='https://twitter.com/kabirodavies'
            fgColor='gray'
            bgColor='transparent'
            target='_blank'
            className='social-icon'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='flex flex-row items-center text-gray-300 max-w-7xl mx-auto'
      >
        <div className=''>
          <SocialIcon
            url='#contact'
            className='cursor-pointer social-icon'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
        </div>
        <Link href='#contact' className='cursor-pointer'>
          <section id='contact' className='snap-start' />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
