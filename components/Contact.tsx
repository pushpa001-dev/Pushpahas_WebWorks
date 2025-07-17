import React from 'react'
import Image from 'next/image'
import { CONTACT_MEDIA } from './context'
import Button from './Button'
const Contact = () => {
  return (
    <section className='flex flex-col items-center justify-center py-7 lg:py-10 bg-black px-5 lg:px-20 gap-5 lg:gap-20 '>
      <div className='flex flex-col items-center justify-center gap-2 lg:gap-5'>
      <h1 className='text-xl md:text-4xl font-bold font-slabo text-zinc-100'>Contact</h1>
      <p className='text-sm md:text-2xl text-zinc-400 font-sans text-center'>Ready to bring your vision to life? Let's discuss your project and <br className='hidden lg:block' /> create something extraordinary together.</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-5 px-2 lg:gap-20'>
        <h1 className='text-2xl md:text-6xl xl:text-7xl font-telex text-zinc-300 opacity-80'>
          Get in <br className='hidden md:block'/> Touch
        </h1>
        <div className='grid grid-cols-3 lg:grid-cols-3 p-2 rounded-lg gap-2 '>
          {
            CONTACT_MEDIA.map((contact) => (
              
                // eslint-disable-next-line react/jsx-key
                <div>
                <Button
                title={contact.title}
                link={contact.link}
                style='md'
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