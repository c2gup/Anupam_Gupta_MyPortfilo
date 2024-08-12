import React from "react";
import lightBg from "../../assets/light-bg-vector.svg";
import Bg_hero from "../../assets/hero-main.f58be97d (1).svg";
import ret from "../../assets/Hero_section_icon/react.7c403179.svg";
import gra from "../../assets/Hero_section_icon/graphql.384496f1.svg";
import fig from "../../assets/Hero_section_icon/figma.1ef17d58.svg";
import tailwindcss from "../../assets/Hero_section_icon/tailwindcss.eae27b48.svg";
import nextjs from "../../assets/Hero_section_icon/nextjs.a98ac74a.svg";
import javascript from "../../assets/Hero_section_icon/javascript.6a338998.svg";

import anupam  from "../../assets/vecteezy_3d-male-.png"

function Hero() {
  return (
    <>

    
      <div
        className=" w-screen  mt-9 flex gap-32  flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${lightBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scale(.96)",
        }}
      >
        <div className="anu    inset-0  flex flex-col gap-20 items-center justify-center">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h1 className="text-6xl text-white font-sans font-bold">
              Hello! I'm <span className="text-[#feb901]">Anupam Gupta</span>
            </h1>
            <p className="text-3xl leading-10 font-bold text-white mt-4">
              <span>A </span> Front End Developer | Web Designer
            </p>
            <p className="text-3xl leading-10 text-white mt-4">
              with{" "}
              <button className="bg-white bg-opacity-5 font-bold text-[#feb901] mx-3 rounded-3xl border border-indigo-700 px-4 py-2">
                1.5+ Years
              </button>
              Experience
            </p>
          </div>

          <div>
            <button className="bg-[#feb901] text-3xl p-10 bg-opacity-5 text-yellow-700 hover:bg-[#feb901] hover:text- mx-3 rounded-3xl border border-yellow-700 px-4 py-2">
              Resume 
            </button>
            <button className="text-3xl p-10 bg-[#feb901] text-black mx-3 rounded-3xl hover:bg-opacity-5 border hover:text-[#feb901] border-yellow-700 px-4 py-2">
              Hire Me
            </button>
          </div>
        </div>

        {/* Image wal portion */}
      <div  >

      <div className=" w-[95%] relative ">
          <img src={anupam} alt="" srcset=""
          
          className="w-[650px]
          rounded-full
          "
          />

          <div className="absolute top-[25%] gap-1 sm:gap-3 p-1 sm:gap-1  flex  justify-center text-3xl items-center  sm:p-3 rounded-full font-medium sm:text-base   bg-[#ecedee]   sm:top-[20%] md:top-[15%] sm:left-2 md:-left-0 xl:-left-[5%]">
            <div className="rounded-s-full">
              <img src={javascript} alt="" srcset=""  className=" w-7  sm:w-5 lg:w-11 xl:w-auto object-contain hidden dark:block" />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">Javascript</p>
          </div>
          <div className="absolute top-[50%] sm:gap-3 gap-1 p-1 sm:top-[40%] md:top-[45%] -left-[1%] md:-left-[15%] sm:p-3 lg:-left-[20%] xl:-left-[35%]  bg-[#ecedee] flex rounded-full  text-3xl   md:text-lg lg:text-xl xl:text-2xl font-medium   sm:text-base items-center  ">
            <div className="rounded-s-full">
              <img src={ret} alt="" srcset="" className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block"  />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">React</p>
          </div>

          <div className="  flex gap-1 sm:gap-3   sm:text-base items-center p-1 rounded-full  text-3xl sm:p-3  md:text-lg lg:text-xl xl:text-2xl font-medium      bg-[#ecedee]   absolute top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]">
            <div className="rounded-s-full">
              <img src={nextjs} alt="" srcset="" className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block"  />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">Nextjs</p>
          </div>


          <div className="  flex gap-1 sm:gap-1   sm:text-base items-center p-1  rounded-full  text-3xl sm:p-3  md:text-lg lg:text-xl xl:text-2xl font-medium      bg-[#ecedee]   absolute top-[20%] md:top-[10%] right-[5%] xl:-right-[5%]">
            <div className="rounded-s-full">
              <img src={tailwindcss} alt="" srcset=""  className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block" />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">Tailwindcss</p>
          </div>
          <div className="  flex gap-1 sm:gap-3  sm:text-base items-center p-1 rounded-full  text-3xl sm:p-3  md:text-lg lg:text-xl xl:text-2xl font-medium      bg-[#ecedee]   absolute top-[45%] md:top-[40%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]">
            <div className="rounded-s-full">
              <img src={gra} alt="" srcset=""  className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block" />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">Graphql</p>
          </div>
          <div className="  flex gap-1 sm:gap-3 sm:text-base items-center p-1 rounded-full  text-3xl sm:p-3  md:text-lg lg:text-xl xl:text-2xl font-medium      bg-[#ecedee]   absolute top-[70%] md:top-[70%] right-[10%] md:-right-0 lg:-right-[16%]">
            <div className="rounded-s-full">
              <img src={fig} alt="" srcset=""  className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain " />
            </div>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">Fighma</p>
          </div>
        </div>




        {/* new wala  */}

      

      </div>
      </div>
    </>
  );
}

export default Hero;
