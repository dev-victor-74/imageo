"use client"

import { useState } from "react";
import { MdAdd, MdDataSaverOff } from "react-icons/md";


const Pixelate = () => {

  const[imgUrl, setImgUrl] = useState(null);
  const[size, setSize] = useState("");
  const[gap, setGap] = useState("");
  const[loading, setLoading] = useState(false);


  const handleFileChange=(e)=>{

    if(!e.target.files[0]) return;

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload=(e)=>{
      let _file = e.target.result;
      setImgUrl(_file);
    }
    reader.readAsDataURL(file);
  }

  const pixelateImage=(context,canvas, color, y,x)=>{
     context.fillStyle = color
     context.fillRect(x, y, 10,10);
      const url =  canvas.toDataURL("image/jpeg", 1.0);
      setImgUrl(url);

  }

  const pixelate=()=>{
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("img")
    
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    const pexels = ctx.getImageData(0,0,canvas.width, canvas.height).data;
    // console.log(pexels)
    
    try {
    setLoading(true);

     for(let y = 0; y < canvas.height; y += 6){
        for(let x = 0; x < canvas.width; x +=6){
            const index = (y * canvas.width + x) * 4;

            const red = pexels[index];
            const green = pexels[index + 1];
            const blue = pexels[index + 2];
            const alpha = pexels[index + 3];

            const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`
              pixelateImage(ctx, canvas, color, y, x);
            

        }
     }
    } catch (error) {
       console.log(error)
    }finally{
      setLoading(false);
    }
  }

  const download = ()=>{
    const canvas = document.createElement("canvas");
    const img = document.getElementById("img");
    const aTag = document.createElement("a");

    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0,0, canvas.width, canvas.height);
    aTag.href = canvas.toDataURL("image/jpeg", 1.0);
    aTag.download = new Date().getTime();
    aTag.click();
  }
  

  return (
    <div className="w-full px-2 py-5" >
       {!imgUrl?.length &&
        <div className="w-[350px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb]   bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#7a7ceb] text-zinc-200 font-semibold text-sm px-3 py-2 rounded-sm cursor-pointer">Choose images</label>
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
            <div className="w-full sm:w-[90%] md:w-[75%] py-2 mt-2 mx-auto">
              <div className="w-full flex flex-col md:flex-row md:justify-between gap-2">
                  <div className="w-full px-2 ring-1 ring-[#9fa0e7]  py-2 rounded-sm shadow-md flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-900">Pixel Size</span>
                    <input type="range" min="2" onChange={e=>setSize(e.target.value)} max="20" step="1" className="w-full cursor-pointer"/>
                  </div>
                  <div className="w-full px-2 ring-1 ring-[#9fa0e7] py-2 rounded-sm shadow-md  flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-900">Pixel Gap</span>
                    <input type="range" min="2" max="20" step="1" onChange={e=>setGap(e.target.value)} className="w-full cursor-pointer"/>
                  </div>
              </div>
               <div className="w-full gap-4 flex mt-4 items-center justify-between">
                   <button className="bg-blue-600 px-2 py-3 text-sm font-bold tracking-wide hover:bg-blue-500 text-zinc-200 rounded-md w-full" onClick={pixelate}>
                    {loading ? 
                      <MdDataSaverOff size={20} className="text-slate-50 animate-spin"/>:
                    "Pixelate"}
                   </button>
                   <button className="bg-blue-800 px-2 py-3 text-sm font-bold tracking-wide text-zinc-200 rounded-md w-full hover:bg-blue-700" onClick={download}>Download</button>
               </div>
            </div>
         </div>}
    </div>
  )
}

export default Pixelate
