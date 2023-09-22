import React from 'react';
import {Link} from 'react-scroll';
const Header = () => {
  return <header className='py-8' id='header'>
    <div className='container mx-auto'>
      <div className='flex justify-between item-center'>
        
        <Link to='about' activeClass='active' smooth={true} spy={true} className='text-gradient btn-ink text-[32px] align-center'>
        CARLOS MARTINEZ
        </Link>
        <button className='btn btn-sm'> <a href='https://drive.google.com/file/d/1khQ6q3hf1vyFNixM4rYbbULpSh7uhCOZ/view?usp=sharing'>Visualizar CV</a></button>
      </div>
    </div>

  </header>;
};

export default Header;