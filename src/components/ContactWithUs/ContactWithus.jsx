import React from "react";
import { Link } from 'react-router-dom';

import facebook from "../../assets/ContactWithUs/facebook.972e5277.svg"
import gmail from "../../assets/ContactWithUs/gmail.c22accdb.svg"
import instagram from "../../assets/ContactWithUs/instagram.7a4f9bf8.svg"
import linkedIn from "../../assets/ContactWithUs/linkedIn.a66827fe.svg"
import skype from "../../assets/ContactWithUs/skype.0f8a91fd.svg"
import telegram from "../../assets/ContactWithUs/telegram.f9bb154f.svg"
import twitter from "../../assets/ContactWithUs/twitter.e61a1396.svg"
import avatar from "../../assets/ContactWithUs/avatar-macbook.3a5e5bd3.svg"

function ContecWithus() {


   
  return (
    <>
      <div className="flex justify-center text-center my-10">
        <p className="text-4xl md:text-6xl text-[#feb901] font-serif font-bold">
          Connect With Me
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* First row of social icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
        <Link to= "https://www.linkedin.com/in/anupamc2/" >
        <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={linkedIn} alt="LinkedIn" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#0069ab] text-xl md:text-2xl m-2 font-bold font-serif">
              LinkedIn
            </div>
          </div>
        
        
        </Link>

         <Link to="https://www.instagram.com/stories/_c2__not/" >
         
          <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={instagram} alt="Instagram" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#ff0000] text-xl md:text-2xl m-2 font-bold font-serif">
              Instagram
            </div>
          </div>
         
         
         </Link>
          <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={facebook} alt="Facebook" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#619ce4] text-xl md:text-2xl m-2 font-bold font-serif">
              Facebook
            </div>
          </div>
        </div>

        {/* Second row of social icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
         <Link to='https://t.me/@EngAnupamGupta
'>
         <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={telegram} alt="Telegram" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#0098bd] text-xl md:text-2xl m-2 font-bold font-serif">
              Telegram
            </div>
          </div>
         
         </Link>

         <Link to="https://x.com/G2anupamGupta">
         
          <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={twitter} alt="Twitter" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#111111] text-xl md:text-2xl m-2 font-bold font-serif">
              Twitter
            </div>
          </div>
          </Link>
          <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg">
            <img src={skype} alt="Skype" className="w-10 h-10 md:w-12 md:h-12" />
            <div className="text-[#00bdd7] text-xl md:text-2xl m-2 font-bold font-serif">
              Skype
            </div>
          </div>
        </div>

        {/* Email contact */}
        <a href="mailto:c2gupt@gmail.com">
        <div className="bg-white flex items-center rounded-full p-3 md:p-4 shadow-lg mb-8">
          <img src={gmail} alt="Gmail" className="w-10 h-10 md:w-12 md:h-12" />
          <div className="text-[#c5221f] text-xl md:text-2xl m-2 font-bold font-sans">
            c2gupt@gmail.com
          </div>
        </div>
        </a>

        {/* Avatar */}
        <div className="mb-20">
          <img src={avatar} alt="Avatar" className="w-32 md:w-48 lg:w-56" />
        </div>
      </div>
    </>
  );
}


export default ContecWithus;