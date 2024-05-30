"use client"

import Image from "next/image"
import Link from "next/link"

const Footer = () => {

    const date = new Date();
    const thisYr = date.getFullYear();

  return (
    <footer className="w-full mt-20  bg-[#110f31] py-5 flex flex-col gap-4 pb-4">
        <div className="w-full md:w-[70%] mx-auto flex items-center justify-between px-2 md:px-0 border-b border-gray-400 pb-2">
              <div className="flex items-center gap-4">
                 <Link href="" className="text-sm text-zinc-200 font-semibold">Terms of Service</Link>
                 <Link href="" className="text-sm text-zinc-200 font-semibold">Privacy Policy</Link>
              </div>
              <div className="flex items-center gap-4">
                 <Link href="" className="text-sm text-zinc-200 font-semibold">About Us</Link>
                 <Link href="" className="text-sm text-zinc-200 font-semibold">Contact Us</Link>
              </div>
        </div>
        <div className="w-full md:w-[60%] mx-auto px-4 md:px-0 items-center flex justify-center gap-2">
              <Link href="/" className="flex items-center gap-1 cursor-pointer">
                 <div className="w-7 h-7 rounded-full relative">
                     <Image
                       src="/logo.png"
                       alt='logo'
                       fill
                       />
                 </div>
                 <div className="flex items-center">
                    <h1 className='text-2xl font-bold text-[#7a7ceb]'>simple</h1>
                    <h1 className='text-2xl font-bold text-zinc-200'>tools</h1>
                 </div>
                </Link>
                <div className="w-3 h-3 rounded-full ring-1 ring-slate-200 mt-2 flex items-center justify-center text-sm font-semibold text-zinc-100 text-center">c</div>
                <p className="text-sm font-semibold text-zinc-200 mt-[10px]">
                    {thisYr}.
                </p>
                <p className="text-zinc-200 mt-[10px] font-normal text-sm">All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer
