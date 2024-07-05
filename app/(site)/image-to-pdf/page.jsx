import Heading from '@/components/home/heading'
import Imagestopdf from '@/components/pdfs/images-to-pdf'
import { MdCheck } from 'react-icons/md'


const ImageToPage = () => {

  const features = [
    {
      id:1,
      label: "Free to use and no account needed",
    },
    {
      id:2,
      label: "Lightning-fast conversion",
    },
    {
      id:3,
      label: "Retains image quality and high-pdf output",
    },
    {
      id:4,
      label: "Adjustable image order and layout",
    },
    {
      id:5,
      label: "Custom page size and orientation",
    },
    {
      id:6,
      label: "Batch convert multiple images",
    }
  ]
  
  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3'>
        <Heading
          tile="Images to Pdf converter"
          desc="Convert your images (jpg & png) to pdf at ease, Easily adjust the paper size and orientation as you wish."
        />
        <section className='w-full mt-5'>
             <Imagestopdf/>
        </section>
        <div className="w-full rounded-sm md:w-[90%] mx-auto flex flex-col gap-1 mt-16 mb-8 bg-slate-50 px-4 md:px-5 py-5">
             <p className='text-lg font-medium text-zinc-800 text-justify'>
             Transform your JPEG and PNG images into professional PDF documents in seconds with our Instant JPEG to PDF Converter. Whether you need to convert a single image or batch process multiple files, our tool ensures high-quality output every time. Simply upload your JPEGs, arrange them as needed, and click convert. Perfect for creating documents, presentations, and portfolios with ease.
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

export default ImageToPage
