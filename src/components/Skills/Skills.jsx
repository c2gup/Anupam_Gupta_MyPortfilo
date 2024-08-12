import React from 'react'

import graphql from '../../assets/Skills/graphql.384496f1.svg'
import amp from '../../assets/Skills/amp.47ce7b15.svg'
import ant from '../../assets/Skills/ant-design.0ab6a8d6.svg'
import apollo from '../../assets/Skills/apollo-graphql.06aeaf9b.svg'
import bootstrap from '../../assets/Skills/bootstrap.d998acf1.svg'
import chakraui from '../../assets/Skills/chakraui.2579756f.svg'
import css from '../../assets/Skills/css.a11f82a4.svg'
import firebase from '../../assets/Skills/firebase.b33b881b.svg'
import framer from '../../assets/Skills/framer-motion.693d0de0.svg'
import git from '../../assets/Skills/git.514e511e.svg'
import tailwindcss from '../../assets/Skills/tailwindcss.eae27b48.svg'
import html from '../../assets/Skills/html.759e5fb1.svg'
import javascript from '../../assets/Skills/javascript.6a338998.svg'
import jquery from '../../assets/Skills/jquery.e39a33cb.svg'
import materialui from '../../assets/Skills/materialui.de51f763.svg'
import nextjs from '../../assets/Skills/nextjs.a98ac74a.svg'
import react_hook from '../../assets/Skills/react-hook-form.b1e3e984.svg'
import redux from '../../assets/Skills/redux.3328cf38.svg'
import scss from '../../assets/Skills/scss.7b1b6f7b.svg'
import semanticui from '../../assets/Skills/semanticui.7f3a16f2.svg'
import vscode from '../../assets/Skills/vscode.d66774fb.svg'
import notion from '../../assets/Skills/notion.cecc6332.svg'
import github from '../../assets/Skills/github.de5575e3.svg'
import gitlab from '../../assets/Skills/gitlab.3f2acf31.svg'

import postman from '../../assets/Skills/postman.30ccfc1a.svg'
import query from '../../assets/Skills/react-query.ea06395a.svg'
import figma from '../../assets/Skills/figma.1ef17d58.svg'
import adobexd from '../../assets/Skills/adobexd.d906856c.svg'




function Skills() {
  return (
    <div className='w-11/12 m-auto'>
      {/* Skills heading */}
      <div>
        <div className='text-[#feb901] my-10 text-4xl sm:text-5xl md:text-6xl font-sans font-bold flex items-center justify-center'>
          Skills
        </div>
      </div>

      <div>
        <div className='text-[#feb901] text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex items-center justify-center'>
          Design Tools I Use
        </div>
      </div>

      {/* Design tools box */}
      <div>
        <div className='flex flex-wrap gap-5 mt-10 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={adobexd} alt="AdobeXD" />
            </div>
            <p>AdobeXD</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={figma} alt="Figma" />
            </div>
            <p>Figma</p>
          </div>
        </div>
      </div>

      <div className='text-[#feb901] mt-8 text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex items-center justify-center'>
        Technologies I Use
      </div>

      {/* Technology tools box */}
      <div>
        {/* First row */}
        <div className='flex flex-wrap gap-4 mt-10 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={html} alt="HTML5" />
            </div>
            <p>HTML5</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={css} alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={javascript} alt="JavaScript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={jquery} alt="jQuery" />
            </div>
            <p>jQuery</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={scss} alt="SCSS" />
            </div>
            <p>SCSS</p>
          </div>
        </div>

        {/* Second row */}
        <div className='flex flex-wrap gap-4 mt-4 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={bootstrap} alt="Bootstrap" />
            </div>
            <p>Bootstrap</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={redux} alt="Redux" />
            </div>
            <p>Redux</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={tailwindcss} alt="TailwindCSS" />
            </div>
            <p>TailwindCSS</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={firebase} alt="Firebase" />
            </div>
            <p>Firebase</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={nextjs} alt="Next.js" />
            </div>
            <p>Next.js</p>
          </div>
        </div>

        {/* Third row */}
        <div className='flex flex-wrap gap-4 mt-4 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={amp} alt="AMP" />
            </div>
            <p>AMP</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={materialui} alt="MaterialUI" />
            </div>
            <p>MaterialUI</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={react_hook} alt="React Hook" />
            </div>
            <p>React Hook</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={chakraui} alt="ChakraUI" />
            </div>
            <p>ChakraUI</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={apollo} alt="Apollo" />
            </div>
            <p>Apollo</p>
          </div>
        </div>

        {/* Fourth row */}
        <div className='flex flex-wrap gap-4 mt-4 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={graphql} alt="GraphQL" />
            </div>
            <p>GraphQL</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={framer} alt="Framer" />
            </div>
            <p>Framer</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={semanticui} alt="SemanticUI" />
            </div>
            <p>SemanticUI</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={ant} alt="Ant Design" />
            </div>
            <p>Ant Design</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={scss} alt="SCSS" />
            </div>
            <p>SCSS</p>
          </div>
        </div>

        {/* Fifth row */}
        <div className='flex flex-wrap gap-4 mt-4 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={git} alt="Git" />
            </div>
            <p>Git</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={query} alt="React Query" />
            </div>
            <p>React Query</p>
          </div>
        </div>
      </div>

      {/* Development & Productivity Tools section */}
      <div>
        <div className='text-[#feb901] mt-8 text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex items-center justify-center'>
          Development & Productivity
        </div>
        <div className='text-[#feb901] text-3xl sm:text-4xl md:text-5xl font-sans font-bold flex items-center justify-center'>
          Tools I Use
        </div>
      </div>

      {/* Productivity tools box */}
      <div>
        <div className='flex flex-wrap gap-5 mt-10 justify-center items-center'>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={vscode} alt="Visual Studio Code" />
            </div>
            <p>Visual Studio Code</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={notion} alt="Notion" />
            </div>
            <p>Notion</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={github} alt="GitHub" />
            </div>
            <p>GitHub</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={gitlab} alt="GitLab" />
            </div>
            <p>GitLab</p>
          </div>
          <div className='flex gap-3 items-center p-3 rounded-full bg-[#ecedee] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium'>
            <div className='rounded-s-full'>
              <img src={postman} alt="Postman" />
            </div>
            <p>Postman</p>
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className='flex justify-center items-center my-14'>
        <button className='text-3xl p-10 bg-[#feb901] text-black mx-3 rounded-3xl hover:bg-opacity-5 border hover:text-[#feb901] border-yellow-700 px-4 py-2'>
          Resume
        </button>
      </div>

      <hr className='border-[#feb901]/20 border-t-1 mt-20 mb-20' />
    </div>
  )
}

export default Skills;