"use client"

import Heading from '@/components/home/heading'
import CompressImage from '@/components/pdfs/compress-image'
import { MdCheck } from 'react-icons/md'

const ImageCompressorPage = () => {

  const features = [
    
    {
      id:1,
      label: "Secure and private processing",
    },
    
    {
      id:2,
      label: "No software installation needed"
    },
    {
      id:3,
      label: "Free to use no account is needed"
    },
   
  ]

  return (
    <main className='w-full h-full px-1 md:w-[95%] md:px-0 mx-auto mt-4'>
        <Heading
          tile="Image Compressor"
          desc="Easily resize your image file with our easy to use tool under few clicks (perfect for compressing and resizing large files)"
        />
        <section className='w-full md:w-[85%] lg:w-[75%] mx-auto mt-5 px-2 md:px-0'>
          <CompressImage/>
        </section>

        <div className="w-full rounded-sm md:w-[90%] mx-auto flex flex-col gap-1 mt-16 mb-8 bg-slate-50 px-4 md:px-5 py-5">
             <p className='text-lg font-medium text-zinc-800 text-justify'>
             Convert your JPEG images to PNG format instantly with our Instant JPEG to PNG Converter. Designed for quick and efficient conversion, this tool ensures your images retain their quality while gaining the benefits of PNG, such as lossless compression and transparent backgrounds. Perfect for graphic designers, photographers, and web developers
             </p>
             <h2 className='text-2xl md:text-3xl font-semibold md:font-bold text-zinc-900 justify-start mt-5'>Features</h2>
             <div className="w-full flex flex-col gap-2 mt-2">
                 {
                  features.map((l)=>(
                    <div key={l.id} className="flex items-center justify-start gap-2 text-[14px] font-medium text-zinc-800">
                       <div className="w-4 h-4 flex items-center justify-center">
                           <MdCheck size={16} color='#6c6ff0'/>
                       </div>
                        <p>
                          {l.label}
                        </p>
                    </div>
                  ))
                 }
             </div>
        </div>
    </main>
  )
}

export default ImageCompressorPage
