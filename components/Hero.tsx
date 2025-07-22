"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "./ScrollContext";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    const textsplit = SplitText.create("#text h1", { type: "lines" });
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    t.to("#text h1 , #text p", {
      y: 50,
      duration: 1,
      delay: 1,
    });

    gsap.from(textsplit.lines, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
      ease: "power4.out",
      delay: 1,
      scrub: true,
    });
    gsap.fromTo("#hero", {
      scale: 4,
      duration: 1.5,
      ease: "power4.out",
      scrub: 0.5,
      delay: 0.3
    }, {
      scale: 1.1,
      y:0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrub: 0.4,
    });
   
    gsap.from("#text p", { opacity: 0, duration: 0.5, delay:1.8 });

    t.to("#fan , #scroll", {
      display: "none",
    });

    gsap.from("#dot-1,#dot-2", {
      y: 50,
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease:"linear",
    });
    t.to("#dot-1", {
      y: 100,
      duration: 1,
      ease:"linear",
    })

  }, []);


  const lenis = useSmoothScroll();
  return (
    <section
      id="main"
      className=" w-full h-screen flex items-center justify-center flex-col overflow-hidden relative "
    >
      <div
        id="hero"
        className="h-full w-full absolute  blur-[5px] scale-120 bottom-[-5] bg-zinc-700/40 "
      >
      </div>
      <div
        id="text"
        className=" relative w-full h-screen items-center justify-between sm:justify-center gap-40  flex flex-col bg-white py-30 sm:py-50 lg:py-5 xl:py-20 px-20 "
      >
        <div className="flex flex-col items-center justify-center gap-5 2xl:gap-0  z-1">
          <h1 className="text-6xl sm:text-9xl  xl:text-[200px] 2xl:text-[290px] font-bold  font-slabo leading-20 sm:leading-40 xl:leading-60 2xl:leading-80 text-start  text-neutral-700  text-shadow-2xs  flex flex-col hi">
            Pushpahas <br /> WebWorks
          </h1>
          <p className="text-lg lg:text-2xl  font-telex  text-center text-neutral-700">
            Crafting interactive experiences, responsive landing pages
          </p>
        </div>
        <div
          id="marquee "
          className=" hidden xl:flex absolute bottom-[20%] lg:bottom-[20%] w-full overflow-hidden whitespace-nowrap"
        >
          {/* <div
            className="flex gap-10 text-neutral-800 font-bold text-5xl lg:text-9xl opacity-50 animate-marquee"
            id="marquee-text"
          >
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
          </div> */}
        </div>
        <div
          id="scroll_down"
          className="w-full flex items-center justify-center"
        >
          <button
            onClick={() => {
              const target = document.querySelector("#about") as HTMLElement;
              if (lenis && target) {
                lenis.scrollTo(target);
              }
            }}
            className="transition-all duration-75"
          >
            <h2 className="bg-neutral-800/60 text-white w-40 h-10 rounded-full flex items-center justify-center font-telex md:font-bold gap-5 p-2 animate-bounce delay-100">
              scroll down
            </h2>
          </button>
        </div>
      </div>
      <div id="dot-1" className="absolute hidden top-[30%] 2xl:top-[10%] left-0 sm:flex items-center justify-center w-35 h-35 2xl:w-70 2xl:h-70  bg-neutral-600/50 blur-[3px] rounded-[50%] "/>
      <div id="dot-2" className="absolute hidden bottom-[30%] 2xl:bottom-[10%] right-0 sm:flex items-center justify-center w-35 h-35 2xl:w-70 2xl:h-70 bg-neutral-600/50 blur-[3px] rounded-[50%] "/>
      <div/>
    </section>
  );
};

export default Hero;
