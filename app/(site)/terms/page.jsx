import React from 'react'

const Termspage = () => {
  const term =[
    {
      id:1,
      label:"Acceptance of Terms",
      desc:`By accessing or using the services provided by Convertify, you agree to abide by these Terms and Conditions and all applicable laws and regulations.`
    },
    {
      id:2,
      label:"Use License:",
      desc:`Convertify grants users a Unlimited license to access and use the materials provided on this website for personal `
    },
    {
      id:3,
      label:"User Account",
      desc: "Users are not required to create an account to access certain features or services on Convertify."
    },
    {
      id:4,
      label:"User Conduct",
      desc:` Users are prohibited from engaging in any conduct that may disrupt or interfere with the operation of Convertify or the experience of other users. This includes but is not limited to

      uploading or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of anothers privacy, hateful, or racially, ethnically, or otherwise objectionable.`
    },
    {
      id:5,
      label:"Intellectual Property",
      desc:` The materials and content provided on Convertify, including but not limited to text, graphics, logos, images, and software, are owned by or licensed to Convertify and are protected by copyright and other intellectual property laws. Users may not reproduce, distribute, modify, transmit, display, or otherwise use any materials or content from Convertify without the prior written consent of Convertify.`
    }
    ,
    {
      id:6,
      label:"Limitation of Liability",
      desc:` Convertify and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of or inability to use Convertify, even if Convertify has been advised of the possibility of such damages.`
    }
  ]
  return (
    <div className='w-full h-full flex items-center justify-center px-6'>
    <section className='w-full md:w-[70%] lg:w-[65%] bg-white p-4 rounded-sm mx-auto mt-10 flex flex-col gap-5 mb-12'>
      <div className="w-full flex flex-col gap-4">
        <h1 className='text-center text-zinc-800 text-3xl md:text-5xl font-bold md:font-extrabold'>
          Terms and Conditions
        </h1>
        <p className='text-[16px] text-center text-zinc-800 font-semibold'>
        These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing Convertify, you accept these terms and conditions in full.
        </p>
      </div>
        <div className="w-full h-full flex flex-col justify-center gap-5 mt-8">
        {
                term.map(t=>(
                  <div className="w-full flex justify-center flex-col" key={t.id}>
                    <div className="flex items-center gap-3">
                       <h4 className='text-sm font-medium text-zinc-800'>{t.id}.</h4>
                      <h2 className='text-[18px] text-zinc-800 font-extrabold'>{t.label}</h2>
                    </div>
                    <p 
                    className='text-[16px] font-semibold text-zinc-800'
                    >{t.desc}
                    </p>
                   </div>
                ))
              }
        </div>
    </section>
 </div>
  )
}

export default Termspage
