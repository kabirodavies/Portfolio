"use client";
import React, { useState } from 'react';

const NavigationDots = ({ active }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skill', 'testimonial', 'footer', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
          onClick={() => setToggle(!toggle)}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
