
const services = [
   {
      label:"Images to PDF Conversion:",
      description: "Convert your images into high-quality PDF files with just a few clicks. Perfect for creating portfolios, presentations, or sharing multiple images in a single document."
   },
   {
      label:"Image to Base64 Encoding:",
      description:"Transform your images into Base64 strings, making it easy to embed images directly into HTML, CSS, or JSON without the need for external files."
   },
   {
      label:"JPEG to PNG Conversion:",
      description:" Convert your JPEG images to PNG format, preserving transparency and ensuring compatibility with a variety of applications."
   },
   {
      label:"Image Compression:",
      description:" Reduce the size of your images without compromising on quality. Our compression tool ensures your images are web-friendly and optimized for faster loading times."
   },
   {
      label:"Merge PDF Files:",
      description:" Combine multiple PDF files into a single, cohesive document. Ideal for merging reports, eBooks, or any other documents you need to consolidate."
   }
]

const whyChooseUs =[
   {
      label:"User-Friendly Interface:",
      description:"Our web app is designed with simplicity in mind. Even if you're not tech-savvy, you'll find our tools intuitive and easy to use."
   },
   {
      label:"Fast and Efficient:",
      description:"Save time with our quick processing speeds. We understand that your time is valuable, and we're committed to providing fast results without compromising on quality."
   },
   {
      label:"High-Quality Output:",
      description:"We prioritize quality in all our services, ensuring that your converted, compressed, or merged files meet the highest standards."
   },
   {
      label:"Secure and Private:",
      description:"Your privacy is important to us. We ensure that all your files are processed securely and are not stored or shared without your permission."
   }
]

const About = () => {



  return (
    <main className='w-full h-full px-4'>
        <div className="w-full md:w-[70%] lg:w-[65%] bg-white p-4 rounded-sm mx-auto mt-10 flex flex-col gap-5">
             <h1 className=' text-center font-bold text-zinc-800 md:font-extrabold text-xl md:text-3xl'>About Us</h1>
             <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full flex items-center flex-col gap-2">
                   <p className="text-[16px] md:text-[17px] font-medium text-zinc-800 text-justify">
                        Welcome to Convertify your all-in-one web app for seamless image and document management. Whether you're a professional, student, or just someone looking to streamline your digital tasks, Convertify offers a suite of powerful tools designed to make your life easier.
                   </p>
              </div>

              <div className="w-full flex flex-col gap-1">
                  <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-zinc-800">Our Mission</h2>
                  <p className="text-[16px] font-medium text-zinc-800 text-justify">
                        At Convertify, our mission is to provide simple, efficient, and high-quality digital solutions that cater to your everyday needs. We understand the importance of quick and reliable tools in today's fast-paced world, and we're here to help you achieve your goals with ease.
                   </p>
              </div>

              <div className="w-full flex flex-col gap-2">
                  <h2 className="text-xl md:text-2xl  font-semibold md:font-bold text-zinc-800">
                      Our Services
                  </h2>
                  <p className="text-[16px] font-medium text-zinc-800 text-justify">
                        We offer a range of services tailored to meet your specific requirements:
                   </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                  {
                     services.map(service=>(
                       <div className="w-full flex flex-col gap-1" key={service.label}>
                           <h2 className="text-lg font-semibold md:font-bold text-zinc-800">{service.label}</h2>
                           <p className="text-[16px] font-medium text-zinc-800 text-justify">{service.description}</p>
                       </div>
                     ))
                  }
              </div>
                
              <div className="w-full flex flex-col gap-2 mt-4">
                  <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-zinc-800">
                        Why Choose Convertify
                  </h2>
                  <div className="w-full flex flex-col gap-4">
                  {
                     whyChooseUs.map(reason=>(
                       <div className="w-full flex flex-col gap-1" key={reason.label}>
                           <h2 className="text-lg font-semibold md:font-bold text-zinc-800">{reason.label}</h2>
                           <p className="text-[16px] font-medium text-zinc-800 text-justify">{reason.description}</p>
                       </div>
                     ))
                  }
              </div>
              </div>
             </div>
        </div>
    </main>
  )
}

export default About
