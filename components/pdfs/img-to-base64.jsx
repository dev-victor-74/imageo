"use client"


import { useState } from "react";
import { MdAdd, MdCheck, MdCopyAll } from "react-icons/md";
import toast from "react-hot-toast";


const ImagetoBase64 = () => {

  const[imgUrl, setImgUrl] = useState(null);
  const[copied, setCopied] = useState(false);
  const[imageFile, setImgFile] = useState(null);
  const[base64Text, setBase64Text] = useState("");
  
  
  const handleFileChange=(e)=>{
    
    
    if(!e.target.files[0]) return;
    setBase64Text("");


    const file = e.target.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.onload=(e)=>{
      let _file = e.target.result;
      setImgUrl(_file);
      setBase64Text(_file);
    }
    reader.readAsDataURL(file);
  }

  const onCopy=(value)=>{
   
    try {
        navigator?.clipboard?.writeText(value);
        setCopied(true);
        toast.success("copied");
        setTimeout(()=>{
           setCopied(false)
        },1000);
    } catch (error) {
      toast.error("failed to copy text");
    }

  }
  

  return (
    <div className="w-full px-2 py-5" >
       {!imgUrl?.length &&
        <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb]   bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose image file</label>
            <input type="file" accept="image/*" id="file" onChange={handleFileChange} className="hidden"/>
         </div>}
       {imgUrl?.length && <div className="flex flex-col gap-2">
            <div className="w-full sm:w-[90%] md:w-[75%] p-3 mx-auto border border-dashed border-[#7a7ceb] h-[380px] md:h-[380px] rounded-sm shadow-md mt-[5px] bg-white flex flex-col gap-3 items-center justify-center relative">
              <button className="absolute top-1 right-1 group">
                <label htmlFor="add">
                  <MdAdd size={14} className="text-zinc-100  
                  cursor-pointer bg-[#4f51b4] rounded-full w-6 h-6"  />
                </label>
                <input type="file" onChange={handleFileChange} accept="image/*" hidden id="add" />
                  <div className='hidden group-hover:flex items-center w-max px-2 py-1 rounded-full bg-black text-xs text-neutral-200 transition font-normal z-20 absolute top-1 right-6'>Add another file</div>
              </button>

              <img
                  src={imgUrl}
                  alt="image"
                  className="w-[350px] object-contain h-[280px] overflow-hidden"
                  id="img"
                />
                <div className="w-full flex items-center justify-center">
                  <span className="text-xs font-medium mt-2">
                    {imageFile?.name}
                  </span>
                </div>
            </div>
            <div className="w-full flex flex-col gap-1 p-1 sm:w-[90%] md:w-[95%] rounded-sm mx-auto border border-[#7a7ceb] h-[380px] md:h-[380px]">
                  <button className=" flex gap-2 items-center justify-end w-max cursor-pointer font-normal text-zinc-200 bg-[#060614] px-[6px] rounded-sm py-[4px]">
                      <span onClick={()=>onCopy(imgUrl)} className="text-xs cursor-pointer font-normal text-zinc-200">Click here to copy base64 code</span>
                        <label>
                          {copied ?
                          <MdCheck size={16} color="lime" /> 
                           :
                          <MdCopyAll onClick={()=>onCopy(imgUrl)} size={14} color="#4f51b4" className="text-zinc-100  
                           cursor-pointer rounded-full w-4 h-4"  />
                           }
                        </label>
                   </button>
                <textarea
                  readOnly
                  value={base64Text}
                  className="w-full h-full resize-none text-sm font-normal overflow-x-hidden outline-none focus:outline-none px-2 py-2 rounded-md"
                />
            </div>
         </div>}
        
    </div>
  )
}

export default ImagetoBase64