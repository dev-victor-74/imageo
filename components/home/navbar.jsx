"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { MdMenu } from 'react-icons/md';

const Navbar = () => {

    const[mounted, setMounted] = useState(false);


    useEffect(()=>{
        setMounted(true);
    },[]);

    // if(!mounted) return null;

  return (
    <nav className='w-full h-14 px-5 py-2 sticky top-0 right-0 z-[999] bg-[#dfe8f7]'>
        <div className="w-full md:w-[94%] mx-auto h-full flex items-center justify-between">
             <div className="flex items-center gap-12">
                <Link href="/" className="flex items-center gap-1 cursor-pointer">
                 <div className="w-7 h-7 rounded-full relative">
                     <Image
                       src="/logo.png"
                       alt='logo'
                       fill
                       />
                 </div>
                 <div className="flex items-center">
                    <h1 className='text-3xl font-extrabold text-[#7a7ceb]'>imag</h1>
                    <h1 className='text-3xl font-extrabold text-zinc-800'>eo</h1>
                 </div>
                </Link>

                 {/* <div className="flex items-center gap-[4px] cursor-pointer group">
                    <p className='font-medium text-[16px] ml-2 text-zinc-800 group-hover:text-blue-500'>Tools</p>
                    <FaChevronDown size={12} className='text-zinc-600 mt-[6px] group-hover:text-blue-500 group-hover:rotate-180'/>
                 <div className="hidden w-[800px] h-[500px] group-hover:flex rounded-md bg-slate-100 absolute z-50 top-12 right-5 left-72"></div>
                 </div> */}
             </div>

             <div className="flex items-center gap-2">
                 <ul className='w-full md:flex items-center gap-4 hidden '>
                    <Link href="/image-to-pdf" className='font-medium text-sm ml-2 text-zinc-800'>Images to pdf</Link>
                    <Link href="image-resizer" className='font-medium text-sm ml-2 text-zinc-800'>Image resizer</Link>
                    <Link href="jpg-to-png" className='font-medium text-sm ml-2 text-zinc-800'>Jpg to png</Link>
                    <Link href="edit-image" className='font-medium text-sm ml-2 text-zinc-800'>Edit image</Link>
                 </ul>
                 <MdMenu size={26} className='md:hidden'/>
             </div>
        </div>
    </nav>
  )
}

export default Navbar
