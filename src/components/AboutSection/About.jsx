import React from 'react';

import music from '../../assets/About/money.0d80412b.svg';
import money from '../../assets/About/money.0d80412b.svg';
import travelling from '../../assets/About/travelling.da9488d3.svg';
import mountain from '../../assets/About/mountain.ab1a465a.svg';

function About() {
  return (
    <>
      <div>
        <div className='relative px-6 text-center opacity-90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#feb901] transition-all duration-500 ease-in-out text-outline'>
          About Me
        </div>

        {/* Contents */}
        <div className="flex flex-col lg:flex-row border-white px-4">
          {/* Left */}
          <div className='w-full lg:w-1/2'>
            <div className='flex gap-2 px-6 py-2'>
              <div className="border-solid border-white border-2 rounded-full">
                <img src={music} alt="" />
              </div>
              <h1 className="text-[#feb901] text-3xl md:text-4xl lg:text-5xl font-medium font-serif">I Love</h1>
            </div>

            <div>
              <div className='bg-white flex w-fit m-4 rounded-full p-2'>
                <img src={music} alt="" />
                <div className="text-[#619ce4] text-xl md:text-2xl p-3 font-bold font-serif">Listening to music</div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className='bg-white flex w-fit m-4 rounded-full p-2'>
                  <img src={travelling} alt="" />
                  <div className="text-[#619ce4] text-xl md:text-2xl p-3 font-bold font-serif">Travelling</div>
                </div>
                <div className='bg-white p-2 flex w-fit m-4 rounded-full'>
                  <img src={mountain} alt="" />
                  <div className="text-[#6ec17d] text-xl md:text-2xl p-3 font-bold font-serif">Mountains</div>
                </div>
              </div>
              <div className='bg-white flex w-fit m-4 rounded-full p-2'>
                <img src={money} alt="" />
                <div className="text-[#06a048] text-xl md:text-2xl p-3 font-bold font-serif">Money</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/2'>
            <div className='bg-[#fddbdb] bg-opacity-5 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl m-5'>
              <div className='p-6 flex flex-col gap-1 justify-center items-center'>
                <div className='text-[#feb901] text-4xl md:text-5xl lg:text-6xl font-extrabold'>1.5+</div>
                <span className='text-white text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2'>Years</span>
                <span className='text-white text-3xl md:text-4xl lg:text-5xl font-serif font-medium py-1'>Experience</span>
              </div>
            </div>
            <div className='bg-[#fddbdb] bg-opacity-5 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl m-5 flex flex-col gap-1 justify-center items-center'>
              <div className='p-6 flex flex-col gap-1 justify-center items-center'>
                <div className='text-[#feb901] text-4xl md:text-5xl lg:text-6xl font-extrabold'>20+</div>
                <span className='text-white text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-2'>Projects</span>
                <span className='text-white text-3xl md:text-4xl lg:text-5xl font-serif font-medium py-1'>Completed</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center mb-10 px-4'>
          <button className="bg-white text-2xl md:text-3xl lg:text-4xl bg-opacity-5 font-normal text-[#feb901] mx-3 rounded-3xl hover:bg-[#feb901] hover:text-black border border-yellow-700 px-4 py-2">
            Contact ME 
          </button>
        </div>
      </div>
    </>
  );
}

export default About;