import gsap from "gsap";

export const animatePagein = () =>{
    const loadpage = document.getElementById("Pushpahas-loadpage")
    const t1 = gsap.timeline()
    t1.to(loadpage , {yPercent:-100 , borderRadius:"100%" , duration:0.5,ease:"power2.in",scrub: 1,delay:0.3})
   
}

