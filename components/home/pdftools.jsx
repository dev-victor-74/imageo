"use client"

import { FaImage } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";
import { BsFiletypeHtml } from "react-icons/bs";
import { MdEdit, MdModeEditOutline, MdPictureAsPdf } from "react-icons/md";
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
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-to-pdf"
    },
    // {
    //     id:2,
    //     label:"Youtube Thumbnail Downloader",
    //     from: <FaYoutube size={20} color="red"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/yt-thumbnail-downloader"
    // },
    // {
    //     id:2,
    //     label:"Image Resizer",
    //     from:<PiResizeBold size={20} color="#C22626"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/image-resizer"
    // },
    // {
    //     id:3,
    //     label:"Jpeg to Png Converter",
    //     from:<PiFileJpg size={20} color="#C22626"/>,
    //     to:<PiFilePng size={20} color="#E75E5E"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/jpg-to-png"
    // },
    // {
    //     id:4,
    //     label:"Edit Image",
    //     from:<MdModeEditOutline size={20} color="#C22626"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/image-editor"
    // },
    // {
    //     id:5,
    //     label:"Image cropper",
    //     from:<MdModeEditOutline size={20} color="#C22626"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/image-editor"
    // },
    // {
    //     id:6,
    //     label:"Image Compressor",
    //     from:<MdModeEditOutline size={20} color="#C22626"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/image-editor"
    // },
    {
        id:7,
        label:"Image to text Converter",
        from:<MdModeEditOutline size={20} color="#C22626"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-to-text"
    },
    {
        id:8,
        label:"Image to Base64",
        from:<MdModeEditOutline size={20} color="#C22626"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-to-base64"
    }
    ,
    // {
    //     id:9,
    //     label:"Pixelate Image",
    //     from:<MdModeEditOutline size={20} color="#C22626"/>,
    //     desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
    //     url:"/pixelate-image"
    // }
    ,
    {
        id:10,
        label:"QR Code Generator",
        from:<MdModeEditOutline size={20} color="#C22626"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-x"}
]
const Pdftools = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
       {
        tools.map(tool=>(
        <Link href={tool.url} key={tool.id} className="group hover:bg-gradient-to-r from-blue-300 to-purple-500 overflow-hidden cursor-pointer bg-[#c9caf8] w-full py-[2px] px-[2px] flex flex-col items-center justify-center rounded-md ring-1 ring-[#d9d9ee] gap-3">
             <div className="w-full flex flex-col gap-[5px] bg-white h-[100%] rounded-md p-3">
                 <div className="w-full flex items-center justify-between">
                        <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-300 to-purple-500 px-1 py-1 rounded-[4px]">
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

                       <div className="hidden group-hover:flex items-center bg-slate-500 justify-center px-1 py-[1px] rounded-[3px] group-hover:bg-gradient-to-r from-blue-300 to-purple-400">
                        <FaLongArrowAltRight size={16} color="black" className=""/>
                       </div>
                 </div>
                 <div className="text-xl font-bold text-zinc-800 group-hover:text-[#595ba3]">{tool.label}</div>
                 <p className="text-sm font-semibold text-gray-700 group-hover:text-[#595ba3]">
                    {tool.desc}
                 </p>
            </div>  
        </Link>
        ))
       }
    </div>
  )
}

export default Pdftools
