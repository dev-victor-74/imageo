"use client"

import TypewriterComponent from 'typewriter-effect'
import Pdftools from './pdftools'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Link from 'next/link'
import { MdPictureAsPdf } from 'react-icons/md'

const Hero = () => {
    
  return (
    <header className='w-full mt-7 md:mt-14'>
        <section className='w-full mx-auto flex flex-col items-center px-4 md:w-[90%] lg:w-[90%]'>
        <div className="flex items-center flex-col mt-6 gap-2">
             <h1 className='text-2xl text-center md:text-5xl lg:text-6xl font-extrabold text-zinc-800'>
                The best free online tool for
             </h1>
              
             <div className="text-transparent text-2xl md:text-4xl lg:text-5xl pb-3 font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                 <TypewriterComponent
                    options={{
                        strings:[
                            "Images to pdf conversion",
                            "Text extraction from image",
                            "Image to base64 encoding",
                            "Jpeg to png conversion",
                            "Image Compression and Resizing",
                            "Merging of multiple pdf files"
                        ],
                        loop: true,
                        autoStart: true,
                    }}
                 />
             </div>
             <p className='text-[15px] font-medium leading-4 text-gray-600 text-center'>
             Quickly convert images to PDFs, encode images to Base64 and convert jpeg file to png and compress and resize your large image files.
             </p>
        </div>

        <div className="w-full flex items-center flex-col gap-2 mt-16 px-4 md:px-0">
            <div className="flex items-center gap-2 mb-4">
                <h1 className='font-extrabold text-2xl md:text-3xl text-gray-800'>All</h1>
                <h1 className='font-extrabold text-[#5556b8] text-2xl md:text-3xl'>Tools</h1>
            </div>
            <Pdftools/>
        </div>

        <div className="w-full md:w-[50%] mx-auto flex items-center flex-col gap-2 mt-16 px-4 md:px-0">
            <div className="flex items-center gap-2 mb-4">
                <h1 className='font-extrabold text-2xl md:text-3xl text-gray-800'>Pdf</h1>
                <h1 className='font-extrabold text-[#5556b8] text-2xl md:text-3xl'>Merger</h1>
            </div>
            <Link href="/merge-pdf" className="group hover:bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden cursor-pointer bg-[#c9caf8] w-full py-[2px] px-[2px] flex flex-col items-center justify-center rounded-md ring-1 ring-[#d9d9ee] gap-2">
             <div className="w-full flex flex-col gap-[4px] bg-white h-[100%] rounded-md p-3">
                 <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 px-1 py-1 rounded-[4px]">
                            <div className="flex items-center justify-center">
                                 <MdPictureAsPdf/>
                            </div>
                          
                         </div>

                       <div className="hidden group-hover:flex items-center bg-slate-500 justify-center px-1 py-[1px] rounded-[3px] group-hover:bg-gradient-to-r from-blue-400 to-purple-500">
                        <FaLongArrowAltRight size={16} color="black" className=""/>
                       </div>
                 </div>
                 <div className="text-xl font-bold text-zinc-800 group-hover:text-[#595ba3]">
                     Pdf Merger 
                 </div>
                 <p className="text-[14px] font-medium text-gray-700 group-hover:text-[#595ba3]">
                 Combine PDFs in just a few clicks with our quick and easy online merging service. Enjoy a hassle-free experience with no software downloads required and high-quality results guaranteed
                 </p>
            </div>  
        </Link>
        </div>
    </section>

        <div className="w-full bg-slate-50 py-10 px-5 md:px-20 md:py-20 flex flex-col gap-4 mt-14 items-center justify-center">
              <h2 className='text-2xl font-bold text-center md:text-4xl md:font-extrabold text-zinc-800'>Fast, simple and free conversion tool for everyone</h2>
              <p className='text-[15px] text-center text-gray-600 font-medium'>
              the ultimate tool for converting images into PDF, extracting text, and encoding images to Base64. Our platform offers a simple, efficient interface, ensuring quick and accurate conversions for all your needs. Perfect for creating PDFs, obtaining editable text, encoding images for web use, or converting jpeg file to png, Convertify is your go-to solution.
              </p>
        </div>

    </header>
  )
}

export default Hero
