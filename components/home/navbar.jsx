"use client"

import Image from 'next/image'
import Link from 'next/link';
import { MdCancel} from 'react-icons/md';
import {CiMenuFries} from "react-icons/ci"
import Menu from './menu';
import { useState } from 'react';
import { useOrign } from '@/lib/use-origin';

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);
   //  console.log(useOrign())

  return (
    <nav className='w-full h-14 px-5 py-2 sticky top-0 right-0 z-[999] bg-[#f1f3f7] shadow-sm'>
        <div className="w-full md:w-[94%] mx-auto h-full flex items-center justify-between">
             <div className="flex items-center gap-12">
                <Link href="/" className="flex items-center gap-1 cursor-pointer">
                 <div className="w-6 h-6 rounded-full relative">
                     <Image
                       src="/logo.png"
                       alt='logo'
                       fill
                       sizes='24px,25px'
                       />
                 </div>
                 <div className="flex items-center">
                    <h1 className=' text-xl font-bold md:text-3xl md:font-extrabold text-[#696bdf]'>Con</h1>
                    <h1 className='md:text-3xl text-xl font-bold md:font-extrabold text-zinc-800'>vertify</h1>
                 </div>
                </Link>
             </div>
                 <div className="flex items-center gap-[4px] cursor-pointer">
                    <CiMenuFries size={20} color='black' className=' text-zinc-900 md:hidden h-14' onClick={()=>setIsOpen(prev=>!prev)} />
                    <p role='button' onClick={()=>setIsOpen(prev=>!prev)} className='font-semibold text-[15px] ml-2 text-zinc-800 hidden md:flex hover:text-blue-500'>Tools</p>
                    {/* <FaChevronDown size={12} className='text-zinc-600 hidden md:flex mt-[6px] group-hover:text-blue-500' onClick={()=>setIsOpen(prev=>!prev)}/> */}
                    {isOpen &&
                    <div className="w-[100%] px-4 bg-transparent h-screen rounded-md absolute z-50 top-[50px] md:px-5 py-3 md:py-5 left-0">
                      <MdCancel size={24} className=' absolute right-7 top-5' onClick={()=>setIsOpen(prev=>!prev)}/>
                       <Menu/>
                    </div>}
                 </div>
        </div>
    </nav>
  )
}

export default Navbar
