// "use client";
// import React from 'react';
// import { SocialIcon } from 'react-social-icons';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// import './Topbar.scss';

// type Props = {}

// export default function Header({}: Props) {
//   return (
//     <header className='sticky top-0 p-5 flex items-strat justify-between z-20  
//     xl:items-center'>
     
//        <motion.div 
//        initial={{x: -500, opacity: 0, scale:0.5}} // start from the left and hidden
//        animate={{x: 0, opacity: 1, scale:1}} // move to the original position and visible
//        transition={{duration: 1.5, ease: "easeOut"}} // set the duration and easing of the animation

//        className='flex flex-row items-center max-w-7xl mx-auto'>

//            <SocialIcon url='https://linkedin.com/in/kabirodavies'
//            fgColor='gray'
//            bgColor='transparent' 
//            target='_blank'
//            />

//            <SocialIcon url='https://github.com/kabirodavies'
//            fgColor='gray'
//            bgColor='transparent' 
//            target='_blank' 
//            />
           
//            <SocialIcon url='https://twitter.com/kabirodavies'
//            fgColor='gray'
//            bgColor='transparent' 
//            target='_blank'
//            />
//        </motion.div>


//        {/* <Link href="#contact"> */}
//         <motion.div
//         initial={{x: 500, opacity: 0, scale:0.5}} // start from the left and hidden
//         animate={{x: 0, opacity: 1, scale:1}} // move to the original position and visible
//         transition={{duration: 1.5, ease: "easeOut"}} // set the duration and easing of the animation

//         className='flex flex-row items-center text-gray-300 max-w-7xl mx-auto'>
//            <SocialIcon url='#contact'
//            className='cursor-pointer'
//            network='email'
//            fgColor='gray'
//            bgColor='transparent' 
//            />
//            <Link href="#contact"
//            className='cursor-pointer'          
//            >
//            <section id="contact" className='snap-start'/>
//            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
//            </Link>
//           </motion.div>
//       {/* </Link> */}
//     </header>
//   )
// }

"use client";

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

import './Topbar.scss';

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
        <div className='social-icon-wrapper'>
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
        <div className='social-icon-wrapper'>
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
