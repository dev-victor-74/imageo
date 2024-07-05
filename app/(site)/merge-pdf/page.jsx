import Heading from '@/components/home/heading'
import Mergepdf from '@/components/pdfs/merge-pdf'
import { MdCheck } from 'react-icons/md'


const MergePdf = () => {

  const features = [
    {
      id:1,
      label: "Free to use and no account needed",
    },
    {
      id:2,
      label: "no software downloads required",
    },
   
  ]
  
  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3'>
        <Heading
          tile="Pdf merger"
          desc="Merge multiple pdf files together, easily sort and organise your files the order you want"
        />
        <section className='w-full mt-5'>
             <Mergepdf/>
        </section>
        <div className="w-full rounded-sm md:w-[90%] mx-auto flex flex-col gap-1 mt-16 mb-8 bg-slate-50 px-4 md:px-5 py-5">
             <p className='text-lg font-medium text-zinc-800 text-justify'>
             Merge your PDF files effortlessly with our seamless online tool. Our platform offers fast, reliable, and high-quality PDF merging, perfect for consolidating reports, eBooks, and more.
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

export default MergePdf