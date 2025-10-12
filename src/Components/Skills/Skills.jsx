import React from 'react'
import Style from './Skills.module.css'
import { IconCloud } from '../ui/interactive-icon-cloud'


const Skills = () => {

  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "bootstrap",
    "sass",
    "npm",
    "nextdotjs",
    "reactrouter",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ]
  return (
    <section id="skills" className=" py-10 bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden ">

      <div className='md:w-[90%] mx-auto '>
        <h1 className='md:text-7xl text-4xl font-medium px-10'>Skills</h1>
        <div className=" flex size-full items-center justify-center overflow-hidden rounded-lg  bg-transparent px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  )
}

export default Skills