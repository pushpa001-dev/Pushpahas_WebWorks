import Link from 'next/link';
import React from 'react'
interface ButtonProps {
    title: string;
    link: string;
    style?: string;
    image?: string;
    text?: string;
    scale?: string
}

const Button = ({title, link , style,text,scale='102' }: ButtonProps) => {
    return (

        <div className={`flex bg-black text-white items-center justify-center px-4 py-3 rounded-${style}  hover:scale-${scale} ${text}  transition-all duration-150 ease-in-out opacity-70`}>
            <Link href={link} target='_blank'>
            {title}
            </Link>
        </div>
    )}

    export default Button