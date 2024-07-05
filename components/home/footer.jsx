"use client"

import Image from "next/image"
import Link from "next/link"

const Footer = () => {

    const date = new Date();
    const thisYear = date.getFullYear();

  return (
    <footer className="w-full bg-[#110f31] py-5 flex flex-col gap-4 pb-4 px-2 mt-8">
        <div className="w-full md:w-[70%] mx-auto flex items-center justify-between px-2 md:px-0 border-b border-gray-400 pb-2">
              <div className="flex items-center gap-4">
                 <Link href="/terms" className="text-sm text-zinc-200 font-normal">Terms of use</Link>
                 <Link href="privacy" className="text-sm text-zinc-200 font-normal">Privacy Policy</Link>
              </div>
              <div className="flex items-center gap-4">
                 <Link href="/about" className="text-sm text-zinc-200 font-normal">About Us</Link>
                 <Link href="contact" className="text-sm text-zinc-200 font-normal">Contact Us</Link>
              </div>
        </div>
        <div className="w-full md:w-[60%] mx-auto px-4 md:px-0 items-center flex justify-center gap-2">
              <Link href="/" className="flex items-center gap-1 cursor-pointer">
                 <div className="flex items-center">
                    <h1 className='text-xl md:text-3xl font-semibold md:font-bold text-[#7a7ceb]'>Con</h1>
                    <h1 className='text-xl md:text-3xl font-semibold md:font-bold text-zinc-200'>vertify</h1>
                 </div>
                </Link>
                <div className="w-[14px] h-[14px] rounded-full ring-1 ring-slate-200 mt-2 flex items-center justify-center text-sm font-semibold text-zinc-100 text-center">
                   <span className="text-center">c</span>
                </div>
                <p className="text-sm font-semibold text-zinc-200 mt-[10px]">
                    {thisYear}.
                </p>
        </div>
    </footer>
  )
}

export default Footer
