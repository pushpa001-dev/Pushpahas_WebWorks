"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Trigger exit animation after delay
          gsap.to(loaderRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.3,
            onComplete: onFinish,
          })
        },
      })

      tl.fromTo(
        ".loader-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
    }, loaderRef)

    return () => ctx.revert()
  }, [onFinish])

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-full h-screen bg-black text-white z-[9999] flex items-center justify-center"
    >
      <div className="text-4xl font-bold space-y-2 text-center">
        <div className="loader-text">Pushpahas</div>
        <div className="loader-text">WebWorks</div>
      </div>
    </div>
  )
}

export default Loader