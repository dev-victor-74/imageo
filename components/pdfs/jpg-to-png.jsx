"use client"

import { useState } from "react"
import { MdAdd } from "react-icons/md";


const Jpgpng = () => {

    const[imgUrl, setImgUrl] = useState(null);

    const handleFileChange=(e)=>{
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload=(e)=>{
        let _file = e.target.result;
        setImgUrl(_file);
      }
      reader.readAsDataURL(file);
    }

    const onDownload=()=>{

        const canvas = document.createElement("canvas");
        const img = document.getElementById("img");
        const aTag = document.createElement("a");

        const ctx = canvas.getContext("2d");

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        ctx.drawImage(img, 0,0, canvas.width, canvas.height);
        const pex =  ctx.getImageData(0,0,canvas.width, canvas.height).data;
        console.log(pex)
        

        // aTag.href = canvas.toDataURL("image/png", 1.0);
        // aTag.download = new Date().getTime();
        // aTag.click();
           
    }

  return (
    <div className='w-full h-full flex flex-col gap-3 bg-white py-3 rounded-sm px-3'>
        {!imgUrl && <div className="w-[400px] h-[250px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#7a7ceb] text-zinc-200 font-semibold text-sm px-3 py-2 rounded-sm cursor-pointer">Add file</label>
            <input type="file" onChange={handleFileChange} accept="image/*" id="file" className="hidden"/>
         </div>}
         {imgUrl &&
        <>
        <div className="w-full md:w-[85%] mx-auto flex items-center justify-between gap-2 mt-1">
            <button onClick={onDownload}
              className="w-[30%] md:w-[25%] rounded-sm shadow-sm px-2 py-2 font-semibold text-zinc-100 hover:opacity-90 active:bg-[#686ae4] bg-[#7a7ceb]"
            >Convert to png</button>
        </div>
        <div className="w-full sm:w-[90%] md:w-[85%] mx-auto border border-dashed border-[#7a7ceb] h-[380px] md:h-[380px] p-2 rounded-sm shadow-sm mt-[5px] flex items-center justify-center relative">
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
              className="w-[400px] object-contain h-[350px] rounded-lg overflow-hidden"
              id="img"
            />
        </div>
        </>}
    </div>
  )
}

export default Jpgpng
