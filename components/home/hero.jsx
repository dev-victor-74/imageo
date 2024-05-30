"use client"

import UnitConveters from './UnitConverters'
import Pdftools from './pdftools'

const Hero = () => {
    
  return (
    <header className='w-full px-4 md:w-[85%] mx-auto flex flex-col items-center'>
        <div className="flex items-center flex-col mt-6 gap-2">
             <h1 className='text-2xl text-center md:text-5xl font-extrabold text-zinc-800'>
                The best online free tools for
             </h1>
             <p className='font-semibold text-center text-xs md:text-sm text-gray-700'>
                Boost your productivity with our free to use tools
             </p>
        </div>

        <div className="w-full flex items-center flex-col gap-2 mt-16">
            <div className="flex items-center gap-2 mb-4">
                <h1 className='font-bold text-2xl md:text-3xl text-gray-800'>All</h1>
                <h1 className='font-bold text-[#7a7ceb] text-2xl md:text-3xl'>Tools</h1>
            </div>
            <Pdftools/>
        </div>

        {/* <div className="w-full flex items-center flex-col gap-2 mt-16">
            <div className="flex items-center gap-2 mb-4">
                <h1 className='font-bold text-2xl md:text-3xl text-gray-800'>Unit</h1>
                <h1 className='font-bold text-[#7a7ceb] text-2xl md:text-3xl'>Converters</h1>
            </div>
            <UnitConveters/>
        </div> */}
    </header>
  )
}

export default Hero
