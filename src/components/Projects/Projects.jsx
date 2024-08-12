import React from 'react'

import cricket from "../../assets/Projects/crictracker.29f9ef7d.svg"
import amp from "../../assets/Projects/amp.47ce7b15.svg"
import bootstrap from "../../assets/Projects/bootstrap.d998acf1.svg"

import git_ from "../../assets/Projects/git.514e511e (1).svg"
import git from "../../assets/Projects/git.514e511e.svg"
import github from "../../assets/Projects/github.de5575e3.svg"
import gitlab from "../../assets/Projects/gitlab.3f2acf31.svg"
import javascript from "../../assets/Projects/javascript.6a338998.svg"
import nextjs from "../../assets/Projects/nextjs.a98ac74a.svg"
import reactHook from "../../assets/Projects/react-hook-form.b1e3e984.svg"
import react from "../../assets/Projects/react.7c403179.svg"
import tailwindcss from "../../assets/Projects/tailwindcss.eae27b48.svg"

function Projects() {
      return (
        <>
          <div className='m-auto mb-6 flex flex-col items-center justify-center gap-1 w-11/12'>
            <div className='text-[#feb901] font-sans font-bold text-4xl sm:text-5xl md:text-6xl'>
              Projects I’ve
            </div>
            <div className='text-[#feb901] font-sans font-bold text-4xl sm:text-5xl md:text-6xl'>
              Worked on
            </div>
          </div>
    
          <div className='w-11/12 m-auto flex flex-col md:flex-row gap-5 bg-[#102762] p-6 sm:p-8 md:p-10 rounded-3xl'>
            {/* left div */}
            <div className='flex-shrink-0'>
              <img src={cricket} alt="Cricket" />
            </div>
    
            {/* right */}
            <div className='flex flex-col justify-between'>
              {/* Heading */}
              <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white'>
                CricTracker
              </div>
    
              <div className='mt-4 sm:mt-6'>
                <p className='text-xl sm:text-2xl md:text-3xl text-white font-sans'>
                  Worked on
                </p>
                <div className='flex flex-wrap gap-3 mt-2'>
                  <div className='bg-white/10 rounded-full p-2'>
                    <p className='text-white font-sans font-medium'>Website</p>
                  </div>
                  <div className='bg-white/10 rounded-full p-2'>
                    <p className='text-white font-sans font-medium'>Admin Panel</p>
                  </div>
                </div>
    
                <div className='mt-4'>
                  <p className='text-lg sm:text-xl md:text-2xl text-white font-sans font-semibold'>
                    Technologies I have used
                  </p>
                </div>
    
                <div className='flex flex-wrap gap-5 mt-3'>
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={tailwindcss} alt="Tailwind CSS" />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      Tailwind CSS
                    </div>
                  </div>
    
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={git_} alt="Git" className="w-6 h-6" />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      Git
                    </div>
                  </div>
    
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={bootstrap} alt="Bootstrap" />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      Bootstrap
                    </div>
                  </div>
                </div>
    
                <div className='flex flex-wrap gap-5 mt-3'>
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={javascript} alt="JavaScript" className='w-6' />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      JavaScript
                    </div>
                  </div>
    
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={react} alt="React" />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      React
                    </div>
                  </div>
    
                  <div className="bg-white flex items-center rounded-full p-2">
                    <img src={github} alt="GitHub" />
                    <div className="text-[#0c0c0c] py-1 ml-2 flex items-center font-normal font-serif">
                      GitHub
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='mt-4 sm:mt-6'>
                <button className="bg-[#102762]/10 text-lg sm:text-xl md:text-2xl p-3 sm:p-4 md:p-5 bg-opacity-5 text-white hover:bg-white hover:text-black mx-3 rounded-full border border-white">
                  Go To CricBuzz
                </button>
              </div>
            </div>
          </div>
        </>
      )
    }
    
    export default Projects;