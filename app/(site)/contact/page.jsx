"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { MdDataSaverOff } from "react-icons/md";


const Contact = () => {

  const[loading, setLoading] = useState(false);

async function handleSubmit(event) {
  event.preventDefault();
 
  try {
         setLoading(true)
          const formData = new FormData(event.target);
          formData.append("access_key", "e1f2c55f-fcf8-44f5-bf8e-2eada3d96fc1");
          
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
          
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          });
          const result = await response.json();
          if (result.success) {
            toast.success("Message sent, thanks for reaching out to us");
          }
  } catch (error) {
    toast.error("Failed to send message, please check your internet connection and try again")
  }finally{
    setLoading(false);
  }
}
   
  return (
    <main className='w-full h-screen px-4 flex items-center justify-center mb-6'>
        <div className="w-full md:w-[70%] mx-auto mt-10 flex flex-col gap-4 mb-5">
             <h1 className='ml-4  text-center font-bold text-zinc-800 md:font-extrabold text-xl mt-5 md:text-3xl'>
              Got a question?  You can always reach out to us
             </h1>
             <div className="w-full h-full flex flex-col gap-2 px-4 mt-5">
                 <form onSubmit={handleSubmit} className="w-full md:w-[85%] mx-auto lg:w-[60%] flex flex-col gap-2">

                    <div className="flex flex-col justify-start gap-1">
                       <span className="text-sm font-semibold text-zinc-800">Name</span>
                       <input type="text" name="name" required className="w-full border ring-1 ring-[#a7a8ec] outline-none focus:ring-1 focus:ring-[#222358] px-2 py-3 rounded-md" />
                    </div> 
                    
                     <div className="flex flex-col justify-start gap-1">
                       <span className="text-sm font-semibold text-zinc-800">Email</span>
                       <input type="text" name="email" required className="w-full border ring-1 ring-[#a7a8ec] outline-none focus:ring-1 focus:ring-[#222358] px-2 py-3 rounded-md" />
                    </div>

                     {/* <div className="flex flex-col justify-start gap-1">
                       <span className="text-sm font-semibold text-zinc-800">Subject</span>
                       <input type="text" required className="w-full border ring-1 ring-[#a7a8ec] outline-none focus:ring-1 focus:ring-[#222358] px-2 py-3 rounded-md" />
                    </div> */}

                     <div className="flex flex-col justify-start gap-1">
                       <span className="text-sm font-semibold text-zinc-800">Message</span>
                       <textarea required name="message" className="w-full h-[200px] overflow-y-auto border ring-1 ring-[#a7a8ec] outline-none focus:ring-1 focus:ring-[#222358] px-2 py-3 rounded-md font-semibold" />
                    </div>  
                    <div className="w-full flex items-center mt-2">
                    <button 
                      type="submit"
                      className="px-4 py-3 w-full md:w-[50%] flex items-center justify-center mb-8 hover:bg-[#6c6ff0] rounded-md bg-[#4e4faa] text-zinc-200 font-semibold text-sm"
                      >
                         {
                          loading? <div className="flex items-center w-full justify-center gap-2">
                                <MdDataSaverOff size={16} color="silver" className="animate-spin"/>
                                sending...
                          </div>  :"Submit"
                         }
                      </button>
                  </div> 
                 </form>
             </div>
        </div>
    </main>
  )
}

export default Contact


  function ContactForm() {
  async function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
      }
  }

return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  </>
);}