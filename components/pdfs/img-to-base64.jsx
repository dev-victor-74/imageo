"use client"


import { useState } from "react";
import { MdAdd, MdCheck, MdCopyAll, MdDataSaverOff } from "react-icons/md";
import toast from "react-hot-toast";


const ImagetoBase64 = () => {

  const[imgUrl, setImgUrl] = useState(null);
  const[isProcessing, setIsProcessing] = useState(false);
  const[base64, setBase64] = useState("");
  const[copied, setCopied] = useState(false);




  const handleFileChange=(e)=>{

    if(!e.target.files[0]) return;


    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload=(e)=>{
      let _file = e.target.result;
      setImgUrl(_file);
      setBase64(_file);
    }
    reader.readAsDataURL(file);
    setBase64("");
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
        <div className="w-[350px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb]   bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#7a7ceb] text-zinc-200 font-semibold text-sm px-3 py-2 rounded-sm cursor-pointer">Select file</label>
            <input type="file" accept="image/*" id="file" onChange={handleFileChange} className="hidden"/>
         </div>}
       {imgUrl?.length && <div className="">
            <div className="w-full sm:w-[90%] md:w-[75%] p-3 mx-auto border border-dashed border-[#7a7ceb] h-[380px] md:h-[380px] rounded-sm shadow-sm mt-[5px] flex items-center justify-center relative">
              <div className="absolute top-1 right-1">
                <label htmlFor="add">
                  <MdAdd size={14} className="text-zinc-100  
                  cursor-pointer bg-[#7a7ceb] rounded-full w-6 h-6"  />
                </label>
                <input type="file" onChange={handleFileChange} accept="image/*" hidden id="add" />
              </div>
              <img
                  src={imgUrl}
                  alt="image"
                  className="w-[400px] object-contain h-[350px] overflow-hidden"
                  id="img"
                />
            </div>
            <div className="w-full sm:w-[90%] md:w-[75%] py-2 mx-auto">
              
               <div className="w-full gap-4 flex mt-2 items-center justify-between">
                   <button onClick={()=>{}} className="bg-[#6c6ff0] px-2 py-3 text-sm font-bold tracking-wide hover:bg-[#595be0] text-zinc-200 rounded-sm w-full md:w-1/2" >
                    {isProcessing ? 
                      <div className="flex items-center justify-center gap-2 mx-auto">
                          <MdDataSaverOff size={20} className="text-slate-50 animate-spin"/>
                          <span>Converting...</span>
                      </div>
                      :
                    "Convert to text"}
                   </button>
                   
               </div>
            </div>
         </div>}
                {base64 && <div className="w-full sm:w-[90%] md:w-[75%] py-6 px-4 mx-auto border border-dashed border-[#7a7ceb] rounded-sm overflow-y-auto shadow-sm mt-[5px] flex items-center justify-center relative">
                    <div className="absolute top-1 right-1 z-20">
                        <label>
                          {copied ?
                          <MdCheck size={18} color="lime" /> 
                           :
                          <MdCopyAll onClick={()=>onCopy(base64)} size={12} color="#6c6ff0" className="text-zinc-100  
                           cursor-pointer rounded-full w-6 h-6"  />
                           }
                        </label>
                   </div>
                   <p
                    className="text-sm text-justify font-semibold text-zinc-800"
                   >
                     {base64}
                   </p>
                 </div>}
                
    </div>
  )
}

export default ImagetoBase64