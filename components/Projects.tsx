import React from 'react'
interface ProjectProps {
  heading: string;
  discription: string;
  url: string
}

const Project = ({ heading, discription, url }: ProjectProps) => {
  return(
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full h-full'>
        <iframe src={url} title={heading}></iframe>
      </div>
      <div className='w-full h-full px-10 py-5 lg:px-15 lg:py-10 flex flex-col items-start justify-center gap-10 lg:gap-20'> 
        <h1 className='font-bold text-2xl md:text-4xl font-telex'>{heading}</h1>
        <p className=' text-md md:text-xl text-background font-sans'>{discription}</p>
      </div>
    </div>
  )
}
const Projects = () => {
  return (
    <section className='w-full h-full flex flex-col items-center justify-between mt-10 py-10 xl:py-20 px-10 lg:px-20'>
      <div className='w-full h-full flex flex-col items-center lg:items-start justify-center gap-10 lg:gap-20'>
        <div className='w-full h-full flex flex-col items-center lg:items-start justify-center gap-5 '>
        <h1 className='font-bold text-2xl md:text-4xl font-slabo'>
          Featured Projects
        </h1>
        <p className=' text-lg md:text-2xl text-background font-sans text-center'>A showcase of my latest work in creating engaging, high-performance web experiences.</p>
        </div>
        <div className='w-full h-full flex items-center justify-center bg-background py-20 px-10 rounded-xl md:rounded-2xl border-2 border-zinc-900 shadow-2xl'>
          {[Projects()].map((project, index) => (
            <Project
              key={index}
              heading={project.heading}
              discription={project.discription}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
