"use client"

import { FaImage } from "react-icons/fa6";
import { FaCodeMerge } from "react-icons/fa6";
import { BsFiletypeHtml } from "react-icons/bs";
import { MdPictureAsPdf } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";


const tools=[
    {   
        id:1,
        label:"Youtube Thumbnail Downloader",
        from: <FaImage size={20} color="purple"/>,
        to:<MdPictureAsPdf size={20} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation"
    },
    {
        id:2,
        label:"Temperature converter",
        from: <FaCodeMerge size={20} color="#F4B40D"/>,
        to:<MdPictureAsPdf size={20} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation"


    },
    {
        id:3,
        label:"Inch to CM converter",
        from:<BsFiletypeHtml size={20} color="#C22626"/>,
        to:<MdPictureAsPdf size={20} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation"


    }
    ,
    {
        id:4,
        label:"CM to Inch converter",
        from:<BsFiletypeHtml size={20} color="#C22626"/>,
        to:<MdPictureAsPdf size={20} color="#E75E5E"/>,
        desc:"Convert images to pdf with few steps, Easily adjust the page orientation"


    }
]
const Miscillaneoustools = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        tools.map(tool=>(
        <div key={tool.id} className="group cursor-pointer w-full flex flex-col p-3 rounded-md ring-2 ring-purple-400 hover:ring-2 hover:ring-purple-800 gap-3">
                 <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="">
                                {tool.from}
                            </div>
                            <div className="">
                                <FaLongArrowAltRight size={14} className="group-hover:purple-blue-700"/>
                            </div>
                            <div className="">
                                {tool.to}
                            </div>
                         </div>

                        <FaLongArrowAltRight size={16} className="hidden group-hover:flex group-hover:text-purple-700"/>
                 </div>
                 <h2 className="text-[18px] font-bold text-gray-700 group-hover:text-purple-600">{tool.label}</h2>
                 <p className="text-[14px] font-normal text-gray-700 group-hover:text-purple-600">
                    {tool.desc}
                 </p>
        </div>
        ))
       }
    </div>
  )
}

export default Miscillaneoustools