"use client"

import { FaImage } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";
import { BsFiletypeHtml, BsTextareaResize } from "react-icons/bs";
import { MdEdit, MdModeEditOutline, MdPhoto, MdPictureAsPdf, MdTextSnippet } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { PiResizeBold } from "react-icons/pi";
import { PiFilePng } from "react-icons/pi";
import { PiFileJpg } from "react-icons/pi";

import Link from "next/link";


const tools=[
    {   
        id:1,
        label:"Images to pdf",
        from: <FaImage size={20} color="purple"/>,
        to:<MdPictureAsPdf size={20} color="#E75E5E"/>,
        desc:" Transform your JPEG and PNG images into professional PDF documents in seconds with our Instant JPEG to PDF Converter.",
        url:"/image-to-pdf"
    },
    {
        id:2,
        label:"Image to text Converter (OCR)",
        from:<MdTextSnippet size={20} color="#C22626"/>,
        desc:"Simplify your text extraction tasks with our Effortless Image to Text Converter",
        url:"/image-to-text"
    },
    {
        id:3,
        label:"Image to Base64",
        from:<MdPhoto size={20} color="#C22626"/>,
        desc
        :"Quickly and easily convert your images into Base64 encoded strings with our Instant Image to Base64 Converter.",
        url:"/image-to-base64"
    }
    ,
    {
        id:4,
        label:"Jpeg to Png Converter",
        from:<PiFileJpg size={20} color="#C22626"/>,
        to:<PiFilePng size={20} color="#E75E5E"/>,
        desc:" Convert your JPEG images to PNG format instantly with our Instant JPEG to PNG Converter.",
        url:"/jpg-to-png"
    },
    {
        id:5,
        label:"Image Compressor and resizer",
        from:<BsTextareaResize size={20} color="#C22626"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-compressor"
    },
   
    
]
const Pdftools = () => {
    // 
    //          <div className="w-full flex fle ring-1 ring-[#d9d9ee] gap-2">
  return (
    <div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
       {
        tools.map(tool=>(
        <Link href={tool.url} key={tool.id} className="group hover:bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden cursor-pointer w-full py-[2px] px-[2px] flex flex-col items-center justify-center rounded-mx-col gap-[4px] bg-white h-[100%] rounded-md p-3">
            <div className="w-full flex flex-col gap-[4px] bg-white h-[100%] rounded-md p-3 ring-2">
                 <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-400 to-purple-500 px-1 py-1 rounded-[4px]">
                            <div className="flex items-center justify-center">
                                {tool.from}
                            </div>
                            {tool.to && <div className="">
                                <FaLongArrowAltRight size={14} className=""/>
                            </div>}
                            <div className="flex items-center justify-center">
                                {tool.to}
                            </div>
                         </div>

                       <div className="hidden group-hover:flex items-center bg-slate-500 justify-center px-1 py-[1px] rounded-[3px] group-hover:bg-gradient-to-r from-blue-400 to-purple-500">
                        <FaLongArrowAltRight size={16} color="black" className=""/>
                       </div>
                 </div>
                    <div className="text-xl font-bold text-zinc-800 group-hover:text-[#595ba3]">{tool.label}</div>
                 <p className="text-[14px] font-medium text-gray-700 group-hover:text-[#595ba3]">
                    {tool.desc}
                 </p>
            </div>  
             
        </Link>
        ))
       }
    </div>
    // </div>
  )
}

export default Pdftools
