"use client"

import { useEffect, useState } from "react"


const YttoImage = () => {

  const[url, setUrl] = useState("");
  const[vidid, setVidid] = useState("");
  const[downloadLink, setDownloadLink] = useState("");
  const[format, setFormat]= useState("jpg")
  

  const handleUrl=(e)=>{
    const value = e.target.value;
    
    if(value.indexOf("https://www.youtube.com/watch?v=") != -1){
      let videoId = value.split("v=")[1].substring(0,11);
      setVidid(videoId);
      let thumbnailUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.${format}`;
      setUrl(thumbnailUrl);
    }
   else if(value.indexOf("https://youtu.be") != -1){
      let videoId = value.split("be/")[1].substring(0,11);
      setVidid(videoId);
      let thumbnailUrl = `http://img.youtube.com/vi/${videoId}/maxresdefault.${format}`;
      setUrl(thumbnailUrl);
    }
   else if(value.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){
        setUrl(value);
    }
    else{
      setUrl("")
    }

  }

  const prepDownload=()=>{
    if(!url.length) return
    const dl = `http://img.youtube.com/vi/${vidid}/maxresdefault.jpg`
    setDownloadLink(dl);
  }

  const downloadThumb=()=>{
  
      const canvas = document.createElement("canvas");
      const image = document.getElementById("img");
      const aTag = document.createElement("a");
      let file;

     
  }


  useEffect(()=>{
   if(url){
     prepDownload();
   }

   return ()=> prepDownload();
  },[format,url])
  

  return (
    <div className='w-full h-full mt-4 flex flex-col gap-3 bg-white shadow-sm rounded-sm py-5 px-3'>
        <div className="w-full md:w-[95%] mx-auto flex items-center gap-2 justify-center">
             <input type="url" onChange={handleUrl} placeholder='Paste video link here' className='w-[70%] md:w-[75%] px-2 py-2 rounded-sm shadow-md outline-none focus:outline-none ring-1 ring-[#7a7ceb] focus:ring-blue-600'/>
             <button onClick={downloadThumb} disabled={!downloadLink} className='w-[30%] md:w-[25%] rounded-sm shadow-sm px-1 py-2 font-semibold text-zinc-100 hover:opacity-90 disabled:opacity-50 active:opacity-95 bg-[#7a7ceb]'>Download</button>
        </div>
       {url && <> 
       <div className="w-full sm:w-[90%] md:w-[75%] mx-auto border border-dashed border-[#7a7ceb] h-[320px] sm:h-[330px] md:h-[320px] overflow-hidden p-2 rounded-sm shadow-sm mt-3 flex items-center justify-center">
           <img
              src={url}
              className="object-cover w-full ring-1 ring-[#48485f] rounded-sm"
              id="img"
            />
        </div>
        {/* <div className="w-full md:w-[95%] mx-auto flex justify-center flex-col gap-1 mt-2">
          <h1 className="text-[16px] font-semibold text-zinc-800">Choose format</h1>
            <select name="" value={format} id="" onChange={(e)=>setFormat(e.target.value)} className="focus:outline-none border-none ring-1 ring-[#7a7ceb] px-2 w-[80%] md:w-[50%] font-semibold text-sm cursor-pointer py-2 text-zinc-800 rounded-sm">
                <option value="">Choose Format</option>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
            </select>
        </div> */}
        </>}
    </div>
  )
}

export default YttoImage
