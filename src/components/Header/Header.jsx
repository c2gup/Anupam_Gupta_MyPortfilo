import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import '../../App.css'

const Header = () => {
  return (
    <div className='bg-[#feb901] flex flex-row-reverse'>
      <ReactNavbar
        logo="path/to/logo.png" // Make sure to provide the correct path to your logo
        logoWidth="100px"
        logoHeight="auto"
        navColor1="#feb901"
        burgerColor="#ffffff"
        navColor2="#0f4c75"
        link1Text="Home"
        link2Text="About"
        link3Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/contact"
        profileIconUrl="/profile"
        cartIconUrl="/cart"
        searchIconColor="#ffffff"
        // Additional Tailwind-based customizations can be applied if necessary
        className="custom-navbar"
        link1Margin = '25px'
        link2Padding = '10px'
        link3Padding = '10px'
       
      />
    </div>
  );
};

export default Header;
