
import Heading from '@/components/home/heading'
import Jpgpng from '@/components/pdfs/jpg-to-png'

const JpgToPng = () => {


  return (
    <main className='w-full px-3 md:w-[95%] md:px-0 mx-auto mt-4'>
        <Heading
          tile="Jpg to png Converter"
          desc="Easily convert jpg file to png"
        />
        <section className='w-full sm:w-[80%] md:w-[85%] lg:w-[60%] mx-auto mt-5 px-2 md:px-0'>
            <Jpgpng/>
        </section>
    </main>
  )
}

export default JpgToPng
