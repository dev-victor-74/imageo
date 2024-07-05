"use client"

import Tesseract from "tesseract.js";

import { useState } from "react";
import { MdAdd, MdCheck, MdCopyAll, MdDataSaverOff } from "react-icons/md";
import toast from "react-hot-toast";


const ImagetoText = () => {

  const[imgUrl, setImgUrl] = useState(null);
  const[isProcessing, setIsProcessing] = useState(false);
  const[file, setFile] = useState(null);
  const[text, setText] = useState("");
  const[copied, setCopied] = useState(false);



  const extractText = async () => {
       try {
        
         setIsProcessing(true);
       const data = await Tesseract.recognize(imgUrl, "eng");
       setText(data.data.text)
      
       } catch (error) {
         toast.error("failed to extract text");
       } 
       finally{
        setIsProcessing(false)
       } 
    
  };


  const handleFileChange=(e)=>{

    if(!e.target.files[0]) return;


    const file = e.target.files[0];
    setFile(file)

    const reader = new FileReader();
    reader.onload=(e)=>{
      let _file = e.target.result;
      setImgUrl(_file);
    }
    reader.readAsDataURL(file);
    setText("");
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
        <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose image file</label>
            <input type="file" accept="image/*" id="file" onChange={handleFileChange} className="hidden"/>
         </div>}
       {imgUrl?.length && <div className="">
            <div className="w-full sm:w-[90%] bg-white md:w-[75%] p-3 mx-auto border border-dashed border-[#7a7ceb] h-[380px] md:h-[380px] rounded-sm shadow-sm mt-[5px] flex items-center justify-center relative">
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
                  className="w-[400px] object-contain h-[350px] overflow-hidden"
                  id="img"
                />
            </div>
            <div className="w-full sm:w-[90%] md:w-[75%] py-2 mx-auto">
              
               <div className="w-full gap-4 flex mt-2 items-center">
                   <button onClick={extractText} className="bg-[#6c6ff0] px-2 py-3 text-[16px] font-semibold active:bg-[#2d2e70] tracking-wide hover:bg-[#595be0] text-zinc-100 rounded-sm w-full md:w-1/2" >
                    {isProcessing ? 
                      <div className="flex items-center justify-center gap-2 mx-auto">
                          <MdDataSaverOff size={20} className="text-zinc-200 animate-spin"/>
                          <span>Extracting wait...</span>
                      </div>
                      :
                    "Extract text"}
                   </button>
                   
               </div>
            </div>
         </div>}
                {text && <div className="w-full mb-2 sm:w-[90%] bg-white md:w-[95%] mx-auto border border-[#7a7ceb] rounded-md shadow-sm mt-[5px] flex flex-col items-center justify-center relative ">
                    <div className="w-full flex items-center justify-end px-2 py-[2px]">
                        <label className="w-[22px] flex items-center justify-center h-[22px] rounded-[3px] p-1 bg-[#1d2063]">
                          {copied ?
                          <MdCheck size={18} color="lime" /> 
                           :
                          <MdCopyAll onClick={()=>onCopy(text)} size={12} color="#fff" className="text-zinc-100  
                           cursor-pointer w-[18px] h-[18px]"  />
                           }
                        </label>
                   </div>

                   <textarea readOnly defaultValue={text} className="
                    h-[300px] w-full resize-none text-sm font-normal outline-none focus:outline-none text-justify px-2 py-2
                   " id=""/>
                 
                 </div>}
                 {/* {isProcessing && <div className="w-full mt-3 sm:w-[90%] md:w-[75%] h-[120px] p-3 mx-auto border border-dashed border-[#7a7ceb] rounded-sm flex items-center justify-center">
                     <MdDataSaverOff size={24} className="text-[#585be6] animate-spin"/>
                 </div>} */}
    </div>
  )
}

export default ImagetoText