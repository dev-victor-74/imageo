"use client"

import { useEffect, useRef, useState } from "react"
import { MdAdd, MdCancel, MdDataSaverOff, MdRotateLeft, MdRotateRight } from "react-icons/md";
import {Document,Page,pdf,StyleSheet,Image} from "@react-pdf/renderer"
import ImagePdfHeading from "./image-pdf-heading";


const style = StyleSheet.create({
   img:{
    marginTop:5,
    padding:5
   }
})

const Imagestopdf = () => {

    const[files, setFiles]= useState(null);
    const[images, setImages]= useState([]);
    const[loading, setLoading] = useState(false);
    const[orientation, setOrientiation] = useState("portrait");
    const[size, setSize]= useState("A4");


    const pdfName = "simpletoolpdf";

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);
    let deg = 10

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

      const draggedItemContent = _images.splice(dragItem.current, 1)[0];

      _images.splice(dragOverItem.current,0,draggedItemContent);

      dragItem.current = null;
      dragOverItem.current = null;

      setImages(_images);
    }

    const onDelete=(index)=>{
       
      const _images = [...images];
      _images.splice(index,1);
      setImages(_images);
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
       let _newImages = [];

        const addFiles = Array.from(e.target.files)
          
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
        convertToUrl(e.target.files)          
    }

    const onRotate=(index)=>{
      deg = deg + 10
      const elem = document.querySelectorAll("#img")[index];
      elem.style.transform = `rotate(${deg}deg)`

    }

    const onRotateLeft=(index)=>{
      deg = deg - 10
      const elem = document.querySelectorAll("#img")[index];
      elem.style.transform = `rotate(${deg}deg)`

    }

    const generatePdf=async()=>{
      setLoading(true);
      try {
        const doc = (

          <Document>
             {
              images.map((im, i)=>(
                <Page key={i} size="" orientation={orientation}>
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
          elem.download = `${pdfName}_${new Date().getTime()}.pdf`
          elem.click()
        }
        reader.readAsDataURL(pdfBlob)
        const elem = document.createElement("a");

      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
  

  return (

    <div className='w-full'>
        {!images?.length && <div className="w-[400px] h-[250px] mx-auto rounded-md border-dashed border-2 border-[#7a7ceb] bg-slate-200 flex items-center justify-center">
            <label htmlFor="file" className="bg-[#7a7ceb] text-zinc-200 font-semibold text-sm px-3 py-2 rounded-sm cursor-pointer">Choose images</label>
            <input type="file"  multiple onChange={handleFileChange} accept="image/*" id="file" className="hidden"/>
         </div>}
        {
          images.length ? 
          <div className="w-full flex flex-col gap-2 px-2">
             <ImagePdfHeading 
               onAddImages={onAddImages}
               generatePdf={generatePdf}
               loading={loading}
               orientation = {orientation}
               handleOrientation = {handleOrientation}
               size={size}
               setSize={setSize}
             />
          <div className="w-full md:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-2 items-center justify-center relative">
            
             {
              images.map((image, i)=>(
          <div 
            key={i}
               draggable
               onDragStart={()=>dragItem.current = i}
               onDragEnter={()=>dragOverItem.current =i}
               onDragEnd={handleSort}
               onDragOver={(e)=>e.preventDefault()}

            className="h-[250px] flex px-1 shadow-md cursor-move relative rounded-md border-dashed border border-[#7a7ceb] overflow-hidden items-center justify-center bg-white">
              <div className="absolute w-full z-10 h-full bg-transparent"></div>
              <div className="absolute z-10 top-1 right-1 flex items-center gap-2 bg-white shadow-md py-1 px-1 rounded-md cursor-pointer">
                <MdRotateLeft onClick={()=>onRotateLeft(i)} size={20} className="cursor-pointer text-[#7a7ceb] active:text-blue-600 font-semibold"/>
                <MdRotateRight onClick={()=>onRotate(i)} size={20} className="cursor-pointer text-[#7a7ceb] active:text-blue-600 font-semibold"/>
                 <MdCancel onClick={()=>onDelete(i)} size={18} className="cursor-pointer text-red-600" /> 
              </div>
                <img
                 height={500}
                 width={200}
                 src={image}
                 alt="im"
                 className="object-fill overflow-hidden"
                 id="img"
                 />
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
