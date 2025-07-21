"use client"
import React from 'react'
import { CONTACT_MEDIA } from './context'
import Button from './Button'
import gsap from 'gsap'
import{ useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useGSAP(() => {
    const split = SplitText.create("#touch", { type: "chars" });
    gsap.from(split.chars, {
      scrollTrigger: "#touch",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.1,
    })
    const split2 = SplitText.create("#cap", { type: "lines" });
    gsap.from(split2.lines, {
      scrollTrigger: "#cap",
      y:50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.1,
    })
    gsap.from("#media", {
      scrollTrigger: "#media",
      y:50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.1,
    })
    
  })
  return (
    <section id='contact' className='flex flex-col items-center justify-center py-7 lg:py-10 bg-black px-5 lg:px-10 gap-5 lg:gap-20  overflow-x-hidden'>
      <div id='cap' className='flex flex-col items-center justify-center gap-2 lg:gap-5'>
      <h1 className='text-xl md:text-4xl font-bold font-slabo text-zinc-100'>Contact</h1>
      <p className='text-sm md:text-2xl text-zinc-400 font-sans text-center'>Ready to bring your vision to life? Let&apos;s discuss your project and <br className='hidden lg:block' /> create something extraordinary together.</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 px-2 lg:gap-50'>
        <h1 id='touch' className='text-2xl md:text-6xl xl:text-7xl font-telex text-zinc-300 opacity-80'>
          Get in <br className='hidden md:block'/> Touch
        </h1>
        <div className='grid grid-cols-3 p-2 rounded-lg gap-2 lg:gap-10 max-w-[90vw] '>
          {
            CONTACT_MEDIA.map((contact) => (
              
                // eslint-disable-next-line react/jsx-key
                <div id='media'>
                <Button
                title={contact.title}
                link={contact.link}
                style='md'
                text='md:text-2xl ' 
                scale='105'
                />
                </div>
            ))
          }
        </div>
      </div>
      
    </section>
  )
}

export default Contact