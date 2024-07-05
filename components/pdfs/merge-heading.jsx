"use client"

import React from 'react'
import { MdAdd, MdDataSaverOff } from 'react-icons/md'

const MergeHeading
 = ({
    onAddFiles,
    mergePdf,
    loading,
    setPdfName,
    placeholder
}) => {
  return (
    <div className="w-full overflow-x-auto ring-1 ring-[#bfc1e6] md:w-[85%] lg:w-[85%] rounded-md px-2 bg-slate-50 py-3 shadow-md mx-auto flex items-center">
                
            <div className="w-full flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                     <button 
                     onClick={mergePdf}
                     className="px-5 shadow-md py-3 w-max rounded-md bg-[#6c6ff0] hover:opacity-80 font-semibold text-sm  text-zinc-200 active:bg-[#2d2e70]">
                      {loading?
                      <div className="w-full flex items-center justify-center gap-3">
                        <MdDataSaverOff size={18} className="text-slate-50 animate-spin"/> 
                         <span className="text-sm font-semibold text-slate-50">Merging pdf...</span>
                      </div>
                      :
                      "Merge pdf files"}
                    </button>
                    <input type="text" className='px-2 py-2 rounded-sm ring-1 focus:ring-[#33348b] outline-none focus:shadow-sm text-sm font-semibold text-zinc-800'
                      placeholder={placeholder}
                      onChange={(e)=>setPdfName(e.target.value)}
                    />
                  </div> 

                   <button className="p-1 group relative cursor-pointer shadow-md hover:opacity-80 bg-[#6c6ff0] rounded-full" >
                    <label htmlFor="addfile" className="w-full h-full flex items-center cursor-pointer justify-center">
                        <MdAdd color="#fff" size={20}/>
                    </label>
                    <span className='hidden group-hover:flex items-center w-max px-2 py-1 rounded-full bg-[#02020a] text-xs text-neutral-200 transition font-normal absolute top-1 right-6'>Add more pdf files</span>
                    <input type="file" accept="application/pdf" onChange={onAddFiles} id="addfile" multiple className="hidden" />
                 </button>
           </div>
        </div>
  )
}

export default MergeHeading
