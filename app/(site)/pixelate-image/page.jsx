import Heading from '@/components/home/heading'
import Imagestopdf from '@/components/pdfs/images-to-pdf'
import Pixelate from '@/components/pdfs/pixelate'

const PixelateImage = () => {
  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3 '>
        <Heading
          tile="Pixelate Image"
          desc="Add the pixel effect to your image"
        />
        <section className='w-full sm:w-[80%] rounded-md shadow-sm md:w-[85%] lg:w-[60%] bg-white mx-auto mt-5 px-2 md:px-0'>
            <Pixelate/>
        </section>
    </main>
  )
}

export default PixelateImage