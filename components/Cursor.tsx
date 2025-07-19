"use client";
import { useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {
    
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX-10,
        y: e.clientY-10,
        duration: 1,
       
        ease: "back.out",
        
      });
    };
    const hoverTargets = document.querySelectorAll(".cursor-hover");
  hoverTargets.forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, { scale: 2 });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1 });
    });
  });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className=" hidden 2xl:flex w-12 h-12 bg-zinc-400 fixed  top-[-20] opacity-70 left-[-15] z-[9999] pointer-events-none rounded-full mix-blend-difference"
    />
  );
};

export default Cursor;