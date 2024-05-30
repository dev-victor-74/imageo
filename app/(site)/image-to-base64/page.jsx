import Heading from '@/components/home/heading'
import ImagetoBase64 from '@/components/pdfs/img-to-base64'

const PixelateImage = () => {
  return (
    <main className='w-full px-2 md:w-[95%] md:px-0 mx-auto mt-4 flex flex-col gap-3 '>
        <Heading
          tile="Image to Base64"
          desc="Turn your image files to Base64"
        />
        <section className='w-full sm:w-[80%] rounded-md shadow-sm md:w-[85%] lg:w-[60%] bg-white mx-auto mt-5 px-2 md:px-0'>
            <ImagetoBase64/>
        </section>
    </main>
  )
}

export default PixelateImage