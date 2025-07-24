"use client"
import { animatePagein } from "@/components/animationa"
import { useEffect } from "react"

export default function Template ({children}: {children:React.ReactNode}) {
    useEffect(()=>{
        animatePagein()
    })
    return(
        <div >
            <div id="Pushpahas-loadpage" className=" w-screen h-screen bg-neutral-700 absolute z-10 flex items-center justify-center  " >
            <h1 className="text-neutral-100 text-3xl lg:text-9xl font-sans font-bold">TPA</h1>
            </div>
            {children}
        </div>
    )
}