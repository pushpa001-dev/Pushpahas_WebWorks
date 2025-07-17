import Link from 'next/link';
import React from 'react'
interface ButtonProps {
    title: string;
    link: string;
    style?: string;
    image?: string;
    style2?: string
}

const Button = ({title, link , style}: ButtonProps) => {
    return (

        <div className={`flex bg-black text-white items-center justify-center px-4 py-3 rounded-${style} hover:scale-102 transition-all duration-150 ease-in-out opacity-70`}>
            <Link href={link} target='_blank'>
            {title}
            </Link>
        </div>
    )}

    export default Button