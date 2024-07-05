import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import imageCompression from 'browser-image-compression';
import Link from 'next/link';


const CompressImage = () => {

  const[imgUrl, setImgUrl] = useState("");
  const[imgFile, setImgFile] = useState(null);
  const[compressedUrl, setCompressedUrl] = useState("");
  const[file, setFile] = useState("");
  const[compressedBlob, setCompressedBlob] = useState(null);
  const[height, setHeight] = useState(0)
  const[width, setWidth] = useState(0)


  const handleFileChange=(e)=>{
        const file = e.target.files[0];

        if(!file) return;
        setCompressedUrl("");
        setImgFile(file);
        setFile(file);

        const image = new Image();
        
        const reader = new FileReader();
        reader.onload=(e)=>{
          let _file = e.target.result;
          image.src = _file;
          setImgUrl(_file);
        }
        image.onload=()=>{
          let _height = image.height;
          let _width = image.width;
          setHeight(_height);
          setWidth(_width);
        }
        reader.readAsDataURL(file);
  }


  const prepDownload=(fileBlob)=>{

    const reader = new FileReader();

    reader.onload=(e)=>{
     let r = e.target.result;
     setCompressedUrl(r);
    }
    reader.readAsDataURL(fileBlob);
  }


  const compressImage=async()=>{
     const option={
      maxSizeMB: 1,
      maxWidthOrHeight: width > 1000 ? 900 : 600,
      useWebWorker: true,
     };

     const compressedFile = await imageCompression(imgFile, option)
     prepDownload(compressedFile);
     console.log(compressedFile)
     setCompressedBlob(compressedFile);
        
  }



  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>

           {!imgUrl && <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose image file</label>
            <input type="file" onChange={handleFileChange} accept="image/*" id="file" className="hidden"/>
         </div>}

        {imgUrl && <div className="flex w-full md:w-[50%] flex-col gap-3">
        <div className="">
            <div className="w-full sm:w-[90%] bg-white md:w-[85%] p-6 mx-auto border border-dashed border-[#7a7ceb] h-[350px] md:h-[350px] rounded-sm shadow-sm mt-[5px] flex flex-col gap-3 items-center justify-center relative">
              <div className="absolute top-1 right-1 group">
                <label htmlFor="add">
                  <MdAdd size={14} className="text-zinc-100  
                  cursor-pointer bg-[#4f51b4] rounded-full w-6 h-6"  />
                </label>
                <input type="file" onChange={handleFileChange} accept="image/*" hidden id="add" />
                <div className='hidden group-hover:flex items-center w-max px-2 py-1 rounded-full bg-black text-xs text-neutral-200 transition font-normal z-20 absolute top-1 right-6'>Add another file</div>
              </div>
              <img
                  src={imgUrl}
                  alt="image"
                  className="w-[400px] object-contain h-[330px] overflow-hidden"
                  id="img"
                />
                <div className="w-full px-2">
                    <div className="text-sm font-semibold text-zinc-800">
                        {file?.name}
                    </div>
                    <div className="text-sm font-medium text-zinc-700">
                       {Math.ceil(file?.size / 1024)}kb
                    </div>
                </div>
            </div>
          </div>
          <button onClick={compressImage} className='px-4 py-3 w-[95%] sm:w-[92%] md:w-[82%] mx-auto rounded-sm bg-[#4f51b4] text-zinc-200 font-semibold text-sm flex items-center justify-center cursor-pointer hover:bg-[#595be0] active:bg-[#2d2e70]'>Compress</button>
        </div>}

       {compressedUrl && <div className="flex w-full md:w-[50%] flex-col gap-3">
        <div className="">
            <div className="w-full sm:w-[92%] bg-white md:w-[85%] p-6 mx-auto border border-dashed border-[#7a7ceb] h-[350px]  md:h-[350px] rounded-sm shadow-sm mt-[5px] flex flex-col gap-3 items-center justify-center relative">
             
              <img
                  src={compressedUrl}
                  alt="image"
                  className="w-[400px] object-contain h-[330px] overflow-hidden"
                  id="img"
                />

                 <div className="w-full px-2">
                    <div className="text-sm font-semibold text-zinc-800">
                        {compressedBlob?.name}
                    </div>
                    <div className="text-sm font-medium text-zinc-700">
                       {Math.ceil(compressedBlob?.size / 1024)}kb
                    </div>
                </div>

            </div>
          </div>
          <a href={compressedUrl} download={file?.name}>
          <button className='px-4 py-3 w-[95%] sm:w-[92%] md:w-[82%] mx-auto rounded-sm bg-[#4f51b4] text-zinc-200 font-semibold text-sm flex items-center justify-center cursor-pointer hover:bg-[#595be0]'>Download</button></a>
        </div>}
      
    </div>
  )
}

export default CompressImage

