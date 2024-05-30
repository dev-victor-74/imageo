import Heading from '@/components/home/heading'
import YttoImage from '@/components/pdfs/yt-image'

const WebpageToPdf = () => {
  return (
    <main className='w-full px-1 md:w-[95%] md:px-0 mx-auto mt-4 '>
        <Heading
          tile="Youtube Thumbnail Downloader"
          desc="Copy and paste the video link to download"
        />
        <section className='w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto mt-5 px-2 md:px-0'>
            <YttoImage/>
        </section>
    </main>
  )
}

export default WebpageToPdf
