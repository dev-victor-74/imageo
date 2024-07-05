"use client"

import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa"
import { FaImage } from "react-icons/fa6"
import { MdModeEditOutline, MdPictureAsPdf } from "react-icons/md"
import { PiFileJpg, PiFilePng } from "react-icons/pi"


const tools=[
    {   
        id:1,
        label:"Images to pdf",
        from: <FaImage size={12} color="purple"/>,
        to:<MdPictureAsPdf size={12} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-to-pdf"
    },
    {
         id:2,
         label:"Image to text",
         from:<MdModeEditOutline size={12} color="#C22626"/>,
         desc:"Convert images to text with few steps",
         url:"/image-to-text"
     },
    {
        id:3,
        label:"Image to Base64",
        from:<MdModeEditOutline size={12} color="#C22626"/>,
        desc
        :"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-to-base64"
    }
    ,
    {
        id:4,
        label:"Jpeg to Png",
        from:<PiFileJpg size={12} color="#C22626"/>,
        to:<PiFilePng size={12} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/jpg-to-png"
    },
    {
        id:5, 
        label:"Image Compressor",
        from:<PiFileJpg size={12} color="#C22626"/>,
        to:<PiFilePng size={12} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/image-compressor"
    },
    {
        id:6, 
        label:"Pdf merger",
        from:<PiFileJpg size={12} color="#C22626"/>,
        to:<PiFilePng size={12} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation",
        url:"/merge-pdf"
    },
    
]

const Menu = () => {
  return (
    <div className='w-full md:w-[90%] mx-auto bg-white h-max ring-1 ring-[#7d82e2] pb-10 rounded-md flex flex-col gap-2 px-4 md:px-3 py-3'>
        <div className="w-full flex flex-col gap-2 text-zinc-700">
              <h2 className="text-xl font-bold">Tools</h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2">
                  {
                    tools.map(tool=>(
                         
                        <Link href={tool.url} key={tool.id} className="group hover:bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden cursor-pointer bg-[#6d75e2] py-[1px] px-[1px] w-full flex flex-col items-center justify-center h-max rounded-md ring-1 ring-[#d9d9ee] gap-3">
                        <div className="w-full flex flex-col gap-[3px] bg-white h-max rounded-md p-3">
                        <div className="text-[14px] font-bold text-zinc-700 group-hover:text-[#151516]">  {tool.label}
                        </div>
                            
                       </div>  
                   </Link>

                    ))
                  }
              </div>
        </div>
    </div>
  )
}

export default Menu
