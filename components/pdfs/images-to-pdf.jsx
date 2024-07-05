"use client"

import { useEffect, useRef, useState } from "react"
import {MdCancel } from "react-icons/md";
import {Document,Page,pdf,StyleSheet,Image} from "@react-pdf/renderer"
import ImagePdfHeading from "./image-pdf-heading";
import toast from "react-hot-toast";


const Imagestopdf = () => {

  const[files, setFiles]= useState([]);
  const[images, setImages]= useState([]);
  const[loading, setLoading] = useState(false);
  const[orientation, setOrientiation] = useState("portrait");
  const[size, setSize]= useState("A4");
  const[margin, setMargin]= useState("small");

    
  const style = StyleSheet.create({
  img:{
   marginTop:3,
   padding:margin === "small"? 5 : margin === "medium" ? 10 : margin === "large" ? 20 : 0,
  }
  })
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);
    

    const[mounted, setMounted] = useState(false);


    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted) return null;

    const handleOrientation =(e)=>{
         setOrientiation(e.target.value);
    }


    const handleSort=()=>{
      const _images = [...images];
      const _files = [...files];

      const draggedItemContent = _images.splice(dragItem.current, 1)[0];
      
      const draggedFile =  _files.splice(dragItem.current, 1)[0];

      _images.splice(dragOverItem.current,0,draggedItemContent);

      _files.splice(dragOverItem.current,0,draggedFile);

      dragItem.current = null;
      dragOverItem.current = null;

      setImages(_images);
      setFiles(_files);

    }

    const onDelete=(index)=>{
      
      let _files = [...files];
      const _images = [...images];
       _files.splice(index,1);
      _images.splice(index,1);
      setImages(_images);
      setFiles(_files);
    }

    const convertToUrl=(fils)=>{
      const newImages = [...images];
      const fileArr = Array.from(fils)
      
          
          for(let i = 0; i< fileArr.length; i++){
            const file = fileArr[i];
            
            const reader = new FileReader();
            
            reader.onloadend=(event)=>{
              newImages.push(event.target.result);
              
              if(newImages.length === fileArr.length){
                  setImages(newImages)

                }
              }
              reader.readAsDataURL(file);
        }
    }

    const onAddImages=(e)=>{
       if(!e.target.files) return;

       let _newImages = [];
       let _files = [...files];
       let _newFiles = [...e.target.files];
       _files = _files.concat(_newFiles);
       setFiles(_files);
        const addFiles = Array.from(e.target.files);
          
          for(let i = 0; i< addFiles.length; i++){
            const file = addFiles[i];
            
            const reader = new FileReader();
            
            reader.onloadend=(event)=>{
              _newImages.push(event.target.result);
              
              if(_newImages.length === addFiles.length){
                let oldImages = [...images];
                const oldPlusNew = oldImages.concat(_newImages)
                setImages(oldPlusNew)
              }
            }
            reader.readAsDataURL(file);
          }
          
        }
    const handleFileChange=(e)=>{
        const file = e.target.files;
        setFiles([...file])
        convertToUrl(file); 
    }

    const generatePdf=async()=>{
      setLoading(true);
      try {
        const doc = (

          <Document>
             {
              images.map((im, i)=>(
                <Page key={i} size={size} orientation={orientation}>
                   <Image
                    src={im}
                    style={style.img}
                   />
                </Page>
              ))
             }
          </Document>
        )
        const aspdf = pdf();
        aspdf.updateContainer(doc);
        const pdfBlob = await aspdf.toBlob();

        const reader = new FileReader()

        reader.onload=(event)=>{
          elem.href = event.target.result;
          elem.download = `${files[0]?.name.split(".")[0]}`
          elem.click()
        }
        reader.readAsDataURL(pdfBlob)
        const elem = document.createElement("a");
        toast.success("Successfully converted!");

      } catch (error) {
        toast.error("Failed to convert images to pdf");
      }finally{
        setLoading(false);
      }
    }
  

  return (

    <div className='w-full'>
        {!images?.length && <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[200px] mx-auto mt-5 rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#4f51b4] text-zinc-200 font-semibold text-lg px-4 py-2 rounded-sm cursor-pointer">Choose image files</label>
            <input type="file"  multiple onChange={handleFileChange} accept="image/jpeg, image/png" id="file" className="hidden"/>
         </div>}
        {
          images.length ? 
          <div className="w-full flex flex-col  gap-2 px-2">
             <ImagePdfHeading 
               onAddImages={onAddImages}
               generatePdf={generatePdf}
               loading={loading}
               orientation = {orientation}
               handleOrientation = {handleOrientation}
               size={size}
               setSize={setSize}
               margin={margin}
               setMargin={setMargin}
             />
          <div className="w-full md:w-[85%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-3 py-2 items-center justify-center relative">
            
             {
              images.map((image, i)=>(
          <div 
            key={i}
               draggable
               onDragStart={()=>dragItem.current = i}
               onDragEnter={()=>dragOverItem.current =i}
               onDragEnd={handleSort}
               onDragOver={(e)=>e.preventDefault()}

            className="h-[220px] flex flex-col gap-2 px-1 shadow-md cursor-move relative rounded-md border-dashed border border-[#7a7ceb] overflow-hidden items-center justify-center bg-white mt-4">
              <div className="absolute w-full z-10 h-full bg-transparent"></div>
              <div className="absolute z-10 top-1 right-1 flex items-center gap-2 bg-white shadow-md py-1 px-1 rounded-md cursor-pointer">
               
                 <MdCancel onClick={()=>onDelete(i)} size={18} className="cursor-pointer text-red-600" /> 
              </div>
                <img
                 src={image}
                 alt="im"
                 className="overflow-hidden w-[200px] object-contain h-[180px] "
                 id="img"
                 />
                 <div className="w-full flex items-center justify-between px-2">
                    <span className="text-xs font-normal text-center">
                      {files[i].name.slice(0, 15)}...
                    </span>
                    <span className="text-xs font-normal text-center text-neutral-900">{Math.ceil((files[i].size)/1000)}kb</span>
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

export default Imagestopdf
