"use client"

import { useEffect, useRef, useState } from "react"
import { MdAdd, MdCancel } from "react-icons/md";


const ImageResizer = () => {

   const [imgUrl, setImgUrl]=useState("");
   const [height , setHeight] = useState(10);
   const [width , setWidth] = useState(10);
   const[originalRatio, setOriginalRatio] = useState(0);
   const[qualityBox, setQualityBox] = useState(false);
   const[aspectRatio, setaspectRatio] = useState(false);

   const imgRef = useRef(null);
 
  
   const onDelete=()=>{
    setImgUrl("");
 }
    const handleFileChange=(e)=>{
       onDelete()
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload=(event)=>{
           setImgUrl(event.target.result);
        }
        reader.onerror=(error)=>{
          console.log(error)
        }
        reader.readAsDataURL(file);
    }

    

    const onImageReady =()=>{
      const elem = document.getElementById("img");

      let _height = elem?.naturalHeight;
      let _width = elem?.naturalWidth;
      let _originalRatio = _width / _height;
      setHeight(_height);
      setWidth(_width);
      setOriginalRatio(_originalRatio);
   }

   const onWidthChange=(e)=>{

    const newWidth = e.target.value;
    if(isNaN(newWidth)){
      setWidth(5)
    }
    setWidth(newWidth);
    if(aspectRatio){
      let h = parseInt((newWidth / width) * height)
      setHeight(h)
    }
   }
   const onHeightChange=(e)=>{
    const newHeight = e.target.value;
    if(isNaN(newHeight)){
      setHeight(5)
    }
    console.log(typeof(newHeight) )

    setHeight(newHeight);
    if(aspectRatio){
      
     let w=  parseInt((newHeight / height) * width)
     if(w === isNaN()){
       setWidth(0)
     }
      console.log(parseInt(width))
    }
  }

  const onDownload=()=>{
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const aTag = document.createElement("a");
    const img = document.getElementById("img")

    const quality = qualityBox === true ? 0.5 : 1.0;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img,0,0,canvas.width, canvas.height);
   
    aTag.href = canvas.toDataURL("image/jpeg",quality);
    aTag.download = new Date().getTime();
    aTag.click()
  }


    useEffect(()=>{
     imgUrl && onImageReady();

     return ()=> onImageReady();
    },[imgUrl])

  return (
    <div className="w-full h-full flex flex-col gap-3 bg-slate-50 py-3 rounded-sm px-4">
        {!imgUrl && 
        <div className="w-[400px] flex-col gap-1 h-[250px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#7a7ceb] text-zinc-200 font-semibold text-sm px-3 py-2 rounded-sm cursor-pointer">Add file</label>
            <input type="file" onChange={handleFileChange} accept="image/*" id="file" className="hidden"/>
            <p className="text-sm font-bold text-zinc-900">or</p>
            <button className="px-2 py-2 rounded-sm text-sm font-semibold text-zinc-200 bg-[#7a7ceb]">From Google Drive</button>
         </div>}
    </div>
  )
}

export default ImageResizer
