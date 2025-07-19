"use client";
import React from 'react'
import { PROJECTS }  from './context'
import Image from 'next/image'
import Button from './Button';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
interface ProjectProps {
  heading: string;
  discription: string;
  image: string
  link: string
}

const Project = ({ heading, discription, image , link}: ProjectProps) => {
  return(
   
    <div id='projects' className='flex flex-col items-center justify-center w-full relative group shadow-md  '>
     
      <div className='w-full h-full relative group'>
        <Image
          src={image}
          alt={heading}
          width={1000}
          height={50}
          priority
          className=' object-cover rounded-t-md w-full h-full '
        />
         <div className='w-full h-full items-center justify-center hidden group-focus:flex group-hover:flex  hover:bg-zinc-900/50 transition-all duration-150 ease-in-out absolute bottom-0 '>
         <Button
           title='View Project'
           link={link}
           style='lg'
           />
         </div>
      </div>
      <Link href={link} target='_blank'>
      <div className='w-full h-full px-2 gap-1 sm:px-10 py-2 lg:px-15 lg:py-10 flex flex-col items-start justify-center bg-gray-100 '> 
        <h1 className=' text-[12px] md:text-2xl font-telex'>{heading}</h1>
        <p className=' text-[10px] md:text-lg text-zinc-400 font-sans'>{discription}</p>
      </div>
      </Link>
     
    </div>
  
  )
}
const Projects = () => {
  useGSAP(() => {
    gsap.from("#project_head h1 , #project_head p ", {
      scrollTrigger: "#project_head",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2,
    })
    gsap.from("#projects", {
      scrollTrigger: "#projects",
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2,
    })
  })
  return (
    <section className='w-full h-full flex flex-col items-center justify-between mt-10 py-10 xl:py-20 px-10 lg:px-20'>
      <div className='w-full h-full flex flex-col items-center lg:items-start justify-center lg:gap-20'>
        <div id='project_head' className='w-full h-full flex flex-col items-center lg:items-start justify-center gap-5 '>
        <h1  className='font-bold text-2xl md:text-4xl font-slabo'>
          Featured Projects
        </h1>
        <p className=' text-lg md:text-2xl text-background font-sans text-center'>A showcase of my latest work in creating engaging, high-performance web experiences.</p>
        </div>
        <div  className='w-full h-full grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center  gap-5 sm:bg-background md:px-15 lg:px-20 py-10 rounded-xl md:rounded-2xl '>
          {PROJECTS.map((project, index) => (
            <Project
              key={index}
              heading={project.heading}
              discription={project.discription}
              image={project.url}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
