"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "./ScrollContext";
import Image from "next/image";
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
      duration: 2,
    });

    gsap.from(textsplit.lines, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });
    gsap.from("#hero", {
      scale: 4,
      y:200,
      duration: 1.5,
      ease: "power4.out",
      scrub: 0.5,
    });
    gsap.fromTo(
      "#hero",
      { y: -2 },
      { y: 2, duration: 2, repeat: -1, yoyo: true }
    );
    gsap.from("#text p", { opacity: 0, duration: 0.5, delay: 1 });

    t.to("#hero", {
      y: "10%",
    });
    t.to("#fan , #scroll", {
      display: "none",
    });

    gsap.to("#marquee-text", {
      xPercent: -50,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

  }, []);


  const lenis = useSmoothScroll();
  return (
    <section
      id="main"
      className=" w-full h-screen flex items-center justify-center flex-col overflow-hidden relative"
    >
      <div
        id="hero"
        className="h-full w-full absolute  blur-[5px] scale-120 bottom-[-5] "
      >
        <Image
          src="/hero.jpg"
          alt="hero"
         fill
          priority
          className=" object-cover"
        />
      </div>
      <div
        id="text"
        className=" relative w-full h-screen items-center justify-between flex flex-col bg-zinc-700/20 py-30 sm:py-50 lg:py-5 xl:py-20 px-20 "
      >
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-5xl sm:text-7xl  lg:text-9xl font-bold  font-slabo leading-15 sm:leading-30 lg:leading-40 text-start text-white  flex flex-col hi">
            Pushpahas <br /> WebWorks
          </h1>
          <p className="text-lg lg:text-2xl  font-telex  text-center bg-gradient-to-t from-blue-100 to-blue-50 bg-clip-text text-transparent">
            Crafting interactive experiences, responsive landing pages
          </p>
        </div>
        <div
          id="marquee "
          className=" hidden xl:flex absolute bottom-[30%] lg:bottom-[25%] w-full overflow-hidden whitespace-nowrap"
        >
          <div
            className="flex gap-10 text-white font-bold text-5xl lg:text-9xl opacity-50 animate-marquee"
            id="marquee-text"
          >
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
            <span>A FRONT END DEVELOPER</span>
          </div>
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
            <h2 className="bg-white/60 w-40 h-10 rounded-full flex items-center justify-center font-telex md:font-bold gap-5 p-2 animate-bounce delay-100">
              scroll down
            </h2>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
