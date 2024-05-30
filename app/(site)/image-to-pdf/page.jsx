import Heading from '@/components/home/heading'
import Imagestopdf from '@/components/pdfs/images-to-pdf'

const ImageToPage = () => {
  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3 '>
        <Heading
          tile="Images to Pdf converter"
          desc="Convert your images (jpg & png) to pdf at ease, Easily adjust the paper size and orientation as you wish."
        />
        <section className='w-full mt-5'>
             <Imagestopdf/>
        </section>
    </main>
  )
}

export default ImageToPage
