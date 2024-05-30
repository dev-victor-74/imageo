import Heading from '@/components/home/heading'
import EditImage from '@/components/pdfs/edit-image'
import React from 'react'

const ImageEditorPage = () => {
  return (
    <main className='w-full px-3 md:w-[95%] md:px-0 mx-auto mt-4' >
         <Heading
           tile="Image Editor"
           desc="Convert your images (jpg, png, webp etc) to pdf at ease, Easily adjust the paper size and orientation as you wish"
         />
         <section className='w-full sm:w-[80%] md:w-[85%] lg:w-[60%] mx-auto mt-5 px-2 md:px-0'>
             <EditImage/>
         </section>
    </main >
  )
}

export default ImageEditorPage
