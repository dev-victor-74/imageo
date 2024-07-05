import Heading from '@/components/home/heading'
import ImagetoText from '@/components/pdfs/img-text'
import { MdCheck } from 'react-icons/md'


export const metadata = {
  title: "Convertify | image to text",
  description: "image to text converter, image OCR",
};

const PixelateImage = () => {

  const features = [
    {
      id:1,
      label: "High-accuracy OCR technology",
    },
    {
      id:2,
      label: "Supports various image formats (JPG, PNG, BMP,WEBP) etc",
    },
    {
      id:3,
      label: "Free and easy to use, no account required",
    },
    {
      id:4,
      label: "No software installation needed"
    },
   
  ]

  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3 '>
        <Heading
          tile="Image to Text Converter (OCR)"
          desc="Easily Extract editable text from your image file, simply upload file and hit the convert button"
        />
        <section className='w-full sm:w-[80%] rounded-md shadow-sm md:w-[85%] lg:w-[60%] bg-slate-100 mx-auto mt-5 px-2 md:px-0'>
            <ImagetoText/>
        </section>

        <div className="w-full rounded-sm md:w-[90%] mx-auto flex flex-col gap-1 mt-16 mb-8 bg-slate-50 px-4 md:px-5 py-5">
             <p className='text-lg font-medium text-zinc-800 text-justify'>
             Simplify your text extraction tasks with our Effortless Image to Text Converter. Designed for maximum convenience, this tool converts images into text swiftly and accurately.

             Easily convert printed or handwritten text from images into editable digital text with just a few clicks. Perfect for students, researchers, and professionals, this tool simplifies data extraction from photographs, and screenshots.
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