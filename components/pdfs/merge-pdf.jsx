"use client"

import MergeHeading from "./merge-heading";


import { useEffect, useRef, useState } from "react"
import {MdCancel } from "react-icons/md";
import clsx from "clsx";
import toast from "react-hot-toast";


import PDFMerger from "pdf-merger-js";



const Mergepdf = () => {

  const[files, setFiles]= useState([]);
  const[loading, setLoading] = useState(false);
  const[mounted, setMounted] = useState(false);
  const[pdfName, setPdfName] = useState("");
  const[placeholder, setPlaceholder] = useState("");


  const dragItem = useRef(null);
  const dragOverItem = useRef(null);


    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) return null;


   const mergePdf = async ()=>{

       setLoading(true);
       try {
          const size = calculatePdfSize(files)
           if(size > 22000000) return toast.error("Maximum file size exceeded!");

          const merger = new PDFMerger();
      
          for (const file of files){
            await merger.add(file);
          }
          await merger.save(pdfName.length? pdfName : files[0]?.name?.split(".")[0]); 
      
          toast.success("Pdf successfully merged!")
      
    } catch (error) {
      toast.error("could not merge files...");

    }finally{
      setLoading(false);
    }
   }

   const calculatePdfSize=(pdfs)=>{
 
          let size = 0;
          for(const pdf of pdfs){
            size += pdf.size
          }
        return size;
   }

    const handleSort=()=>{
      const _files = [...files];

       const draggedItemContent = _files.splice(dragItem.current, 1)[0];

      _files.splice(dragOverItem.current,0,draggedItemContent);

      dragItem.current = null;
      dragOverItem.current = null;

      setPlaceholder(_files[0]?.name?.split(".")[0]);
      setFiles(_files);
    }

    const onDelete=(index)=>{
      
      let _files = [...files];
       _files.splice(index,1);
      
      setPlaceholder(_files[0]?.name?.split(".")[0]);
      setFiles(_files);
    }

    const handleFileChange=(e)=>{

        const _files =  Array.from(e.target.files);

        if(!_files.length) return;
        setFiles(_files);
        setPlaceholder(_files[0]?.name?.split(".")[0])
    }

     const onAddFiles = (e)=>{
         if(!e.target.files) return;

         let _oldFiles = [...files];
         let _newFiles = Array.from(e.target.files);

         let concated = _oldFiles.concat(_newFiles);
         setFiles(concated);
     }
  

  return (

    <div className='w-full'>
        {files.length === 0 && <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto mt-5 rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose pdf files</label>
            <input type="file"  multiple onChange={handleFileChange} accept="application/pdf" id="file" className="hidden"/>
         </div>}
        {
          files.length ? 
          <div className="w-full flex flex-col  gap-2 px-2">
              
              <MergeHeading
               onAddFiles={onAddFiles}
               mergePdf={mergePdf} 
               loading={loading}
               setPdfName={setPdfName}
               placeholder = {placeholder}
              />
              {/* <div className="w-full mx-auto">{pdfSize}</div> */}
          <div className="w-full md:w-[85%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-3 py-2 items-center justify-center relative">
            
             {
              files.map((file, i)=>(
          <div 
            key={i}
               draggable
               onDragStart={()=>dragItem.current = i}
               onDragEnter={()=>dragOverItem.current =i}
               onDragEnd={handleSort}
               onDragOver={(e)=>e.preventDefault()}

            className={clsx("h-[180px] flex flex-col gap-2 shadow-md cursor-move relative rounded-md border-dashed border border-[#6264c9] px-2 overflow-hidden items-center justify-center bg-white mt-4")}>
              <div className="absolute w-full z-10 h-full bg-transparent"></div>
              <button
               onClick={()=>onDelete(i)}  size={18}
               className="absolute z-10 top-1 right-1 flex items-center justify-center gap-2 bg-white shadow-md py-1 px-1 rounded-md cursor-pointer">
                 <MdCancel  className="cursor-pointer text-red-600" /> 
              </button>
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                     <div className="text-xs font-medium text-center text-ner">
                       {file.name}
                     </div>
                     <p className="text-xs md:text-sm font-normal text-zinc-700 text-center">
                     {Math.ceil(file?.size / 1024)}kb
                     </p>
                </div>
              </div>
              ))
             }
          </div>
        </div>
      : null  
      }
    </div>
  )
}

export default Mergepdf