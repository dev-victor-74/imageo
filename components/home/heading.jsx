"use client"

import { useEffect, useState } from "react";


const Heading = ({tile, desc}) => {
  
  const[mounted, setMounted] = useState(false);


  useEffect(()=>{
      setMounted(true);
  },[]);

  if(!mounted) return null;

  return (
    <header className='w-full px-4 flex flex-col items-center justify-center gap-2 mt-7'>
        <h1 className='font-bold text-3xl md:text-4xl mt-4 md:font-extrabold text-[#5253b3] text-center'>
          {tile}
        </h1>
        <p className='font-medium text-sm text-gray-700 text-center'>{desc}</p>
    </header>
  )
}

export default Heading
