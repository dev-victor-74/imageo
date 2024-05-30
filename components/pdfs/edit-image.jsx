import React from 'react'

const EditImage = () => {
  return (
    <div className='w-full bg-white shadow-sm rounded-sm flex items-center gap-3 px-4 py-5'>
        <div className="w-full flex flex-col gap-4">
             <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
                  <button className='w-full text-sm font-semibold px-3 py-2 rounded-sm bg-[#7a7ceb]  text-zinc-200'>Brightness</button>
                  <button className='w-full text-sm font-semibold px-3 py-2 rounded-sm bg-[#7a7ceb] text-zinc-200'>Saturation</button>
                  <button className='w-full text-sm font-semibold px-3 py-2 rounded-sm bg-[#7a7ceb] text-zinc-200'>Gray Scale</button>
                  <button className='w-full text-sm font-semibold px-3 py-2 rounded-sm bg-[#7a7ceb] text-zinc-200'>Temperature</button>
             </div>
             <div className="w-full flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                     <span className='text-sm font-semibold text-gray-800'>Brightness</span>
                     <span className='text-sm font-semibold text-gray-800'>60%</span>
                </div>
                  <input type="range" className='cursor-pointer' />
             </div>
        </div>
        <div className="w-full"></div>
    </div>
  )
}

export default EditImage
