import React from 'react'
import { MdAdd, MdDataSaverOff } from 'react-icons/md'

const ImagePdfHeading = ({
    onAddImages,
    generatePdf,
    loading,
    orientation,
    handleOrientation,
    size,
    setSize
}) => {
  return (
    <div className="w-full ring-1 ring-[#bfc1e6] md:w-[85%] lg:w-[85%] rounded-md px-2 bg-slate-50 py-3 shadow-md mx-auto flex flex-col gap-3 md:flex-row  items-start md:items-center justify-between">
                
                 <div className="flex items-center gap-2 md:gap-4 w-full">
                      <div className="flex items-center gap-2 ring-1 ring-[#8789e4] px-[9px] py-[9px] rounded-md">
                           <span className='font-semibold md:font-bold text-[16px] text-zinc-700'>Paper Size</span>
                           <select name="size" value={size} onChange={e=>setSize(e.target.value)} className='px-2 py-1 rounded-md ring-1 ring-[#6c6ff0] cursor-pointer focus:outline-none font-semibold'>
                               <option value="A4">A4</option>
                               <option value="A3">A3</option>
                               <option value="A2">A2</option>
                               <option value="A5">A5</option>
                               <option value="A6">A6</option>
                               <option value="A10">A10</option>
                               <option value="B1">B1</option>
                               <option value="B2">B2</option>
                               <option value="B3">B3</option>
                               <option value="B4">B4</option>
                           </select>
                      </div>
                      <div className="flex px-[9px] py-[9px] items-center rounded-md shadow-sm gap-3 ring-1 ring-[#8789e4]">
                          <span className='font-semibold md:font-bold text-[16px] text-zinc-700'>Page Orientiation</span>
                          <select value={orientation} onChange={handleOrientation} className='px-3 py-1 rounded-md ring-1 ring-[#6c6ff0] cursor-pointer focus:outline-none font-semibold'>
                              <option value="portrait">Portrait</option>
                              <option value="landscape">Lanscape</option>
                          </select>
                      </div>
                 </div>
                 <div className="flex items-center gap-3 w-full justify-between md:justify-end">
                     <button 
                     onClick={generatePdf}
                     className="px-5 shadow-md py-3 rounded-md bg-[#6c6ff0] hover:opacity-80 font-semibold text-sm  text-zinc-200">
                      {loading?
                      <div className="w-full flex items-center justify-center gap-3">
                        <MdDataSaverOff size={18} className="text-slate-50 animate-spin"/> 
                         <span className="text-sm font-semibold text-slate-50">Generating pdf...</span>
                      </div>
                      :
                      "Convert to pdf"}
                    </button>
                   <div className="p-1 cursor-pointer hover:opacity-80 bg-[#6c6ff0] rounded-full" >
                    <label htmlFor="addfile" className="w-full h-full flex items-center cursor-pointer justify-center">
                        <MdAdd color="#fff" size={20}/>
                    </label>
                    <input type="file" accept="image/*" onChange={onAddImages} id="addfile" multiple className="hidden" />
                 </div>
           </div>
        </div>
  )
}

export default ImagePdfHeading

{/* <div className="w-full flex-col flex md:flex-row items-center md:justify-between gap-4 mt-2">


<label className='cursor-pointer w-full' >
    <input type="radio" value='Intermediate' className='peer sr-only' name='level' onChange={e=>handleLevel(e.target.value)} />
    <div 
    className="w-full h-[70px] bg-white rounded-md border-[2px] border-zinc-600
    ring-2 ring-transparent peer-checked:text-sky-600 
    peer-checked:ring-sky-400 peer-checked:ring-offset-2 peer-checked:border-0 px-2 py-1">
        <div className="w-full h-full flex flex-col gap-1 justify-center">
        <div className="font-semibold text-[16px]">Intermediate</div>
        <div className="text-[13px] font-semibold">Already have some knowledge
      </div>
        </div>
    </div>
</label>
</div>

 <label className='cursor-pointer w-full px-1' >
                            <input type="radio" value='portrait' className='peer sr-only' name='orientation'onChange={handleOrientation} />
                            <div 
                            className="w-full bg-white rounded-[3px] border-[1px] border-zinc-600
                            ring-2 ring-transparent peer-checked:text-[#6c6ff0] 
                            peer-checked:ring-[#6c6ff0] peer-checked:ring-offset-1 peer-checked:border-0 px-2 py-[2px] ">
                                <div className="font-semibold text-[16px]">Portrait</div>
                            </div>
                         </label>

                         <label className='cursor-pointer w-full px-1' >
                            <input type="radio" value='landscape' className='peer sr-only' name='orientation'onChange={handleOrientation}  />
                            <div 
                            className="w-full bg-white rounded-[3px] border-[1px] border-zinc-600
                            ring-2 ring-transparent peer-checked:text-[#6c6ff0] 
                            peer-checked:ring-[#6c6ff0] peer-checked:ring-offset-1 peer-checked:border-0 px-2 py-[2px] ">
                             <div className="font-semibold text-[16px]">Landscape</div>
                            </div>
                         </label>
*/}