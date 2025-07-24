"use client"
import React from 'react'
import { useSmoothScroll } from './ScrollContext';
import { QUICK_LINKS } from './context';
const Footer = () => {
  const lenis = useSmoothScroll();
  return (
    <section className='w-full h-full flex flex-col items-center justify-center border-t border-zinc-500 gap-5 py-5 lg:py-10 px-5 lg:px-30 bg-black'>
       
       <div className=' flex-row items-center justify-between hidden lg:flex w-full'>
        <h1 className='text-sm md:text-2xl font-telex text-zinc-300'>
          TPA-Infera <br />
          crafting the future <br />
          Experence
        </h1>
        <div className='flex flex-col items-end justify-center text-zinc-300 text-lg '>
          <h1 className='text-white'>Quick Links</h1>
          {QUICK_LINKS.map((link , index)=>(<p key={index}>  <button 
          onClick={()=>{
            const target = document.querySelector(`#${link.link}`) as HTMLElement;
            if(lenis && target) 
            lenis.scrollTo(target);
          }}
          >
            <p className='cursor-pointer cursor-hover'>{link.title}</p>
          </button></p>))}
        
        </div>
       </div>
       <div className='flex flex-row items-center justify-between w-full'>
        <h1 className='text-sm md:text-2xl font-telex text-zinc-300'>
          @2025 TPA-Infera
        </h1>
        <p className='text-sm md:text-2xl text-zinc-300'>Made with ❤️</p> 
       </div>
    </section>
  )
}

export default Footer