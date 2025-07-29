"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import {useSmoothScroll} from "./ScrollContext";
gsap.registerPlugin(ScrollTrigger);
interface WhatidoProps {
  image: string;
  name: string;
  discription: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  style?: string;
}

const Tec = ({
  name,
  image,
  discription,
  first,
  second,
  third,
  fourth,
  style,
}: WhatidoProps) => {
  return (
    <div
      id="cards"
      className={`flex flex-col items-center justify-center w-full h-full rounded-md lg:rounded-2xl shadow-md lg:shadow-xl bg-${style} px-5 2xl:px-20 pb-5 lg:pb-10 gap-5 lg:gap-10`}
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-white">
        <div id="image" className="border-2   px-20 rounded-md py-1">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            priority
            className=" object-cover rounded-t-md lg:rounded-t-2xl  "
          />
        </div>
      </div>
      <h1
        id="name"
        className="font-bold text-2xl sm:text-3xl font-telex text-background md:text-start text-center w-full "
      >
        {name}
      </h1>
      <p
        id="discription"
        className="font-sans text-lg md:text-xl 2xl:text-2xl text-background text-center md:text-start"
      >
        {discription}
      </p>
      <ul
        id="list"
        className="list-disc text-start w-full font-bold text-sm lg:text-lg bg-neutral-700 text-white p-5 px-7 lg:px-10 rounded-2xl"
      >
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{fourth}</li>
      </ul>
    </div>
  );
};
const Whatido = () => {
  useGSAP(() => {
    const Textsplit = SplitText.create("#what h1", { type: "chars" });
    gsap.from("#what h1", {
      scrollTrigger: "#what",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
    gsap.from(Textsplit.chars, {
      scrollTrigger: "#what",
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
      ease: "power4.out",
    });
    gsap.from("#cards", {
      scrollTrigger: "cards ",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      delay: 0.1,
      stagger: 0.2,
    });
    gsap.from("#image", {
      scrollTrigger: "#image",
      paddingLeft: 0,
      paddingRight: 0,
      duration: 0.5,
      ease: "sine.out",
      delay: 0.6,
      stagger: 0.2,
    });
    gsap.from("#cards", {
      scrollTrigger: "#cards",
      x: -1000,
      duration: 0.5,
      ease: "sine.out",
      delay: 0.1,
      stagger: 0.2,
    });
    gsap.from("#cards h1 , #cards p", {
      scrollTrigger: "#cards",
      opacity: 0,
      duration: 0.5,
      ease: "sine.out",
      delay: 0.6,
      stagger: 0.2,
    });
    gsap.from("#cards li", {
      scrollTrigger: "#cards",
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "sine.out",
      delay: 0.3,
      stagger: 0.1,
    });
    gsap.from("#end p", {
      scrollTrigger: "#end",
      opacity: 0,
      y:20,
      duration: 0.4,
      ease: "sine.out",
      delay: 0.3,
      stagger: 0.1,
    })
  });
  const lenis = useSmoothScroll();
  return (
    <section id="service" className=" flex flex-col items-center justinfy-center w-full h-full px-10 lg:px-20 gap-10 md:gap-30">
      <div id="what">
        <h1 className="text-2xl sm:text-5xl font-bold font-stretch-100% font-slabo text-white px-5 py-2 sm:px-5 sm:py-5 bg-neutral-700 text-center rounded-lg ">
          {" "}
          Service&apos;s{" "}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-15  2xl:gap-20">
        <Tec
          image="/animation.svg"
          name="Interactive Animations"
          discription="Engaging micro-interactions and animations that enhance user experience."
          first="GSAP Animations"
          second="Performance Optimized"
          third="Scroll Triggers"
          fourth="Smooth Transitions"
        />
        <Tec
          image="/landing.svg"
          name="Landing Pages"
          discription="High-converting, responsive landing pages that capture attention and drive results."
          first="Conversion Optimization"
          second="Performance Optimized"
          third="Fast Loading"
          fourth="Cross-browser Compatible"
        />
        <Tec
          image="/mobile.svg"
          name="Responsive Design"
          discription="Pixel-perfect designs that work flawlessly across all devices and screen sizes."
          first="Mobile First"
          second="Tablet Optimized"
          third="Desktop Enhanced"
          fourth="Touch Friendly"
        />
      </div>
      <div id="end" className="flex flex-col gap-5">
        <p className="text-center text-2xl">
          Ready to elevate your web presence?
        </p>
        <button
            onClick={() => {
            const target = document.querySelector("#contact") as HTMLElement;
             if (lenis && target) {
               lenis.scrollTo(target);
               
             } 
            }}
            className="transition-all duration-75">
          <p className="text-center lg:text-xl text-background underline group w-full">
            Let&apos;s discuss your project <span className="group-hover:translate-x-10">→</span> 
          </p>
          </button>
      </div>
    </section>
  );
};

export default Whatido;
