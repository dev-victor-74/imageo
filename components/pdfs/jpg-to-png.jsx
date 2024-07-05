"use client"

import { useState } from "react"
import { MdAdd } from "react-icons/md";


const Jpgpng = () => {

    const[imgUrl, setImgUrl] = useState(null);
    const[height, setHeight] = useState(null);
    const[width, setWidth] = useState(null);
    const[filename, setFilename] = useState("");
    

    const handleFileChange=(e)=>{
      const file = e.target.files[0];

      if(!file) return;
      setFilename(file?.name)
      const image = new Image();

      
      const reader = new FileReader();
      reader.onload=(e)=>{
        let _file = e.target.result;
        setImgUrl(_file);
        image.src = _file;
       
      }
      image.onload=()=>{
        let _height = image.height;
        let _width = image.width;
        setHeight(_height);
        setWidth(_width);
      }
      reader.readAsDataURL(file);
    }

    const onDownload=()=>{

        const canvas = document.createElement("canvas");
        const img = document.getElementById("img");
        const aTag = document.createElement("a");

        const ctx = canvas.getContext("2d");

        
        canvas.width = width;
        canvas.height = height;
        
        ctx.drawImage(img, 0,0, canvas.width, canvas.height);


        aTag.href = canvas.toDataURL("image/png", 1.0);
        aTag.download = `${filename.split(".")[0]}`;
        aTag.click();
           
    }

  return (
    <div className='w-full h-full flex flex-col gap-3 bg-slate-100 py-3 rounded-sm px-3'>
        {!imgUrl && <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose image file</label>
            <input type="file" onChange={handleFileChange} accept="image/jpeg" id="file" className="hidden"/>
         </div>}
         {imgUrl &&
        <>
        
        <div className="w-full sm:w-[90%] md:w-[85%] mx-auto border bg-white border-dashed border-[#7a7ceb] h-[380px] md:h-[380px] p-2 rounded-sm shadow-md mt-[5px] flex flex-col gap-2 items-center justify-center relative">
          <button className="absolute top-1 right-1 group">
              <label htmlFor="add">
                <MdAdd size={14} className="text-zinc-100  
                cursor-pointer bg-[#4f51b4] rounded-full w-6 h-6"  />
              </label>
              <input type="file" onChange={handleFileChange} accept="image/jpeg" hidden id="add" />
              <div className='hidden group-hover:flex items-center w-max px-2 py-1 rounded-full bg-black text-xs text-neutral-200 transition font-normal z-20 absolute top-1 right-6'>Add another file</div>
          </button>
           <img
              src={imgUrl}
              alt="image"
              className="w-[350px] object-contain h-[300px] rounded-lg overflow-hidden"
              id="img"
            />
            <span className="text-sm font-medium">{filename}</span>
        </div>
        <div className="w-full md:w-[85%] mx-auto flex items-center justify-between gap-2 mt-1">
            <button onClick={onDownload}
              className="w-[100%] md:w-[50%] rounded-sm shadow-sm px-2 py-2 font-semibold text-zinc-100 hover:opacity-90 active:bg-[#2d2e70] bg-[#6c6ff0]"
            >Convert to png</button>
        </div>
        </>}
    </div>
  )
}

export default Jpgpng
