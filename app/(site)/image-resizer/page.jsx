import Heading from '@/components/home/heading'
import ImageResizer from '@/components/pdfs/resize-image'

const MergePdfPage = () => {
  return (
    <main className='w-full h-full px-1 md:w-[95%] md:px-0 mx-auto mt-4'>
        <Heading
          tile="Image Resizer"
          desc="Easily resize your image file with our easy to use tool under few clicks"
        />
        <section className='w-full md:w-[80%] lg:w-[75%] mx-auto mt-5 px-2 md:px-0'>
          <ImageResizer/>
        </section>
    </main>
  )
}

export default MergePdfPage
