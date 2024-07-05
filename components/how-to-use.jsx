"use client"

import React from 'react'
import { MdCheck } from 'react-icons/md'

const HowToUse = ({title, lists}) => {
  return (
    <section className='w-full md:w-[70%] mx-auto px-5 py-5 flex items-center gap-4 mt-5'>
        <div className="w-full flex flex-col gap-3 items-center justify-center">
            {title &&
            <h1 className='text-xl md:text-3xl text-zinc-900 font-bold'>
                {title}
                </h1>}
            <div className="w-full flex flex-col gap-[1px] items-center">

            {lists?.map((list, index)=>(

            <div key={index} className="flex items-center w-full md:w-[85%] bg-slate-50 px-2 py-2 rounded-sm gap-2">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                     <MdCheck size={16} color='#fff' className='bg-[#4e4fad]'/>
                </div>
                
                     <p className='text-[16px] font-normal text-zinc-800 w-[90%]'>
                        {list}
                     </p>
             </div>
            )) }
             
            </div>
        </div> 
    </section>
  )
}

export default HowToUse
