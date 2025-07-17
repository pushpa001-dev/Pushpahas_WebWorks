"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
interface TecProps {
  name: string;
}
const Tec = ({ name }: TecProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-zinc-700 bg-white hover:bg-zinc-900 hover:text-zinc-50 transition-colors duration-450  py-1 lg:py-3 lg: px-4 rounded-lg shadow-md lg:shadow-2xl ">
      <h2 className="text-lg md:text-2xl  font-bold   font-telex">{name}</h2>
    </div>
  );
};
const About = () => {
  useGSAP(() => {
    gsap.from("#head ", {
      scrollTrigger: "#head",
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.1,
    });

    gsap.from("#head hr ", {
      scrollTrigger: "#head",
      width: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });
    const split = SplitText.create("#ul li", { type: "lines" });
    gsap.from(split.lines, {
      scrollTrigger: "#ul ",
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power4.out",
      delay: 0.1,
      stagger: 0.2,
    });
    gsap.from("#tec h1", {
      scrollTrigger: "#tec",
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.1,
    });
    gsap.from("#tec div", {
      scrollTrigger: "#tec ",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      delay: 0.1,
      stagger: 0.2,
    });
    gsap.fromTo(
      "#img",
      {
        scrollTrigger: {
          trigger: "#img",
          toggleActions: "play pause resume pause",
        },
        y: -5,
      },
      { y: 5, duration: 2, repeat: -1, yoyo: true }
    );
  });

  return (
    <section
      id="about"
      className="w-full h-full flex flex-col xl:flex-row items-center justify-between px-5 lg:px-20  bg-white my-5  sm:py-10 lg:py-20 relative scroll-"
    >
      <div className="flex w-full h-full flex-col items-center justify-between gap-10 bg-gradient-to-b from-background to-zinc-900 py-10 sm:py-10 px-5 lg:px-10 rounded-tl-3xl lg:rounded-tl-[50px] rounded-tr-md rounded-bl-md  my-10 rounded-br-3xl shadow-xl">
        <div
          id="head"
          className="flex flex-col items-center lg:items-start justify-center w-full"
        >
          <h1 className="text-2xl xl:text-5xl font-extrabold font-telex text-white ">
            About
          </h1>
          <hr className="bg-zinc-200 w-20 lg:w-40 py-[1px]" />
        </div>
        <ul
          id="ul"
          className="text-[15px] sm:text-2xl text-white text-center lg:text-start font-telex lg:leading-7 xl:leading-10 leading-5 sm:leading-10  flex flex-col gap-4 "
        >
          <li className=" hover:shadow-xl hover:scale-105 transition-all duration-400 rounded-lg p-2">
            {" "}
            I&apos;m a passionate front-end developer specializing in creating
            stunning, interactive web experiences that captivate users and drive
            results.{" "}
          </li>
          <li className="hidden sm:flex hover:shadow-xl hover:scale-105 transition-all duration-400  rounded-lg p-2">
            I have a strong foundation in HTML, CSS, and JavaScript, enabling me
            to build dynamic and responsive user interfaces.
          </li>
          <li className=" hover:shadow-xl hover:scale-105 transition-all duration-400  rounded-lg p-2">
            {" "}
            My approach combines technical excellence with creative vision,
            ensuring every project exceeds expectations and delivers exceptional
            user experiences.
          </li>
        </ul>

        <div
          id="tec"
          className=" flex flex-col items-center justify-center w-full gap-10"
        >
          <h1 className="text-2xl lg:text-2xl font-extrabold font-telex text-gray-200 ">
            Technologies
          </h1>
          <div className=" grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10 ">
            <Tec name="Next.js" />
            <Tec name="Tailwind" />
            <Tec name="Typescript" />
            <Tec name="React" />
            <Tec name="HTML" />
            <Tec name="GSAP" />
          </div>
        </div>
      </div>
      <div
        id="img"
        className="w-full hidden 2xl:flex items-center justify-center"
      >
        <Image
          src="/image_about.jpg"
          alt="responsive-app"
          width={10000}
          height={500}
          className="w-200 object-cover "
        />
      </div>

      <div className="bg-blue-400 w-10 lg:w-50 h-50 rounded-full opacity-10 blur-xl absolute top-0.5 right-0 lg:-right-10" />
      <div className="bg-blue-400 w-10 lg:w-50 h-50 rounded-full opacity-10 blur-xl  absolute bottom-0.5 left-0 lg:-left-10" />
    </section>
  );
};

export default About;
