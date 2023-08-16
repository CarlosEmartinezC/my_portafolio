import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
//link
import {link} from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*nav inner */}
        <div className='w-full bg-black/20 h [96px] backdrop-blur-2x1 
        rounded-full max-w-[460px] mx-auto px-5 flex justifi-between text-2x1 text-while/50'>
          <link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BiHomeAlt />
          </link>
          <link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BiUser />
          </link>
          <link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BsClipboardData />
          </link>
          <link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '>
          <BsBriefcase />
          </link>
        </div>
      </div>
    </nav>
  )
};

export default Nav;