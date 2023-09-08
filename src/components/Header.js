import React from 'react';
import logo from '../assets/logo.svg'
const Header = () => {
  return <header className='py-8' id='header'>
    <div className='container mx-auto'>
      <div className='flex justify-between item-center'>
        {/* logo*/}
        <a href='#'>
          <img src={logo} alt=''/>
        </a>
        {/*buton*/}
        <button className='btn btn-sm'>Work With me</button>
      </div>
    </div>

  </header>;
};

export default Header;