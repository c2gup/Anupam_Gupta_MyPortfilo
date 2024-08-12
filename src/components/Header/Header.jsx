import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import '../../App.css';
import logse from '../../assets/Logos/Anupaam___Gupta-removebg-preview.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='bg-[#feb901] text-[#feb901] flex flex-row-reverse'>
      <ReactNavbar
        logo={logse} // Provide the correct path to your logo
        logoWidth="100px"
        logoHeight="auto"
        navColor1="#feb901"
        burgerColor="#ffffff"
        navColor2="#0c0c0c"
        profileIconUrl="/profile"
        cartIconUrl="/cart"
        searchIconColor="#ffffff"
        className="custom-navbar"
      />
      
      {/* Custom Links for Scrolling */}
    
    </div>
  );
};

export default Header;

