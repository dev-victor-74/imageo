import Heading from '@/components/home/heading'
import HowToUse from '@/components/how-to-use'
import ImagetoBase64 from '@/components/pdfs/img-to-base64'
import { MdCheck } from 'react-icons/md'

const title = "What is image to base64 encoder"

const PixelateImage = () => {

//   Lightning-fast conversion
// Supports multiple image formats (JPG, PNG, GIF)
// User-friendly interface
// No registration required
// Copy code with one click


  const features = [
    {
      id:1,
      label: "Accurate Base64 encoding",
    },
    {
      id:2,
      label: "Supports multiple image formats (JPG, PNG, GIF, TIFF, WEBP) and more",
    },
    {
      id:3,
      label: "Secure and private processing no image upload is required",
    },
    {
      id:4,
      label: "Fast and reliable conversion"
    },
    {
      id:5,
      label: "Copy code with one click"
    },
   
  ]


  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3'>
        <Heading
          tile="Image to Base64"
          desc="Convert your images into Base64 format seamlessly with our Image to Base64 Encoder."
        />
        <section className='w-full sm:w-[80%] rounded-md shadow-sm md:w-[85%] lg:w-[60%] bg-slate-100 mx-auto mt-5 px-2 md:px-0'>
            <ImagetoBase64/>
        </section>
        
        <div className="w-full rounded-sm md:w-[90%] mx-auto flex flex-col gap-1 mt-16 mb-8 bg-slate-50 px-4 md:px-5 py-5">
             <p className='text-lg font-medium text-zinc-800 text-justify'>
             Quickly and easily convert your images into Base64 encoded strings with our Instant Image to Base64 Converter. Ideal for developers, designers, and anyone needing to embed images directly into HTML, CSS, or JSON files. Simply upload your image and get the Base64 code instantly.
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

export default PixelateImage