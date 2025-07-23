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
    gsap.from("#text p", { opacity: 0, duration: 0.5, delay:1.8 });

    t.to(" #scroll", {
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
      className=" w-full h-screen flex items-center justify-center flex-col overflow-hidden relative"
    >
      <div
        id="text"
        className=" relative w-full h-screen items-center justify-between gap-5  flex flex-col bg-white py-30 sm:py-50 lg:py-5 xl:py-5 px-20 "
      >
        <div className="flex flex-col items-center justify-center 2xl:gap-0  z-1">
          <h1 className=" text-[clamp(2rem,15vw,15rem)] px-4 w-full h-full font-bold font-slabo text-start  text-neutral-700  text-shadow-2xs  flex flex-col hi">
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
      <div id="dot-1" className="absolute hidden top-[30%] 2xl:top-[10%] left-0 sm:flex items-center justify-center w-40 h-40 2xl:w-80 2xl:h-80  bg-neutral-600/50 blur-[3px] rounded-[50%] "/>
      <div id="dot-2" className="absolute hidden bottom-[30%] 2xl:bottom-[10%] right-0 sm:flex items-center justify-center w-40 h-40 2xl:w-80 2xl:h-80 bg-neutral-600/50 blur-[3px] rounded-[50%] "/>
      <div/>
    </section>
  );
};

export default Hero;
