import React from 'react';
import logo from '../assets/logo.svg';
const Header = () => {
  return <header className='py-8' id='header'>
    <div className='container mx-auto'>
      <div className='flex justify-between item-center'>
        {/* logo*/}
        <a href='about'>
          <img src={logo} alt=''/>
        </a>
        {/*buton*/}
        <button className='btn btn-sm'> <a href='https://drive.google.com/file/d/1khQ6q3hf1vyFNixM4rYbbULpSh7uhCOZ/view?usp=sharing'>Visualizar CV</a></button>
      </div>
    </div>

  </header>;
};

export default Header;