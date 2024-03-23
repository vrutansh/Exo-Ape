import React, { useState } from 'react'

const Work = () => {
   const [elems, setelems] = useState([
        {heading: "PixelsFLake", Subheading: "Architectural Marketing Agency", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", img:"https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"},

        {heading: "Rino & Pelle", Subheading: "Effortless Chic Lifestyle", video: "https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1711198507~exp=1711212907~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=1e5740714d019bdf4f20009c7da577299f54a1bf73e34a1fb5518eb4bb7e858f&r=dXMtY2VudHJhbDE%3D", img:"https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"},

        {heading: "Abelle Interiors", Subheading: "Luxurious Desing Experience", video: "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1711198533~exp=1711212933~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=31fd4bd154189511bff65958c78f88619ed606131dc9f9189c9b10946f0a6b01&r=dXMtd2VzdDE%3D", img:"https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"},

        {heading: "Studio D", Subheading: "Urban and Landscape Design", video: "https://a.storyblok.com/f/133769/x/833a506717/pixel-flakes-hover.mp4", img:"https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"},
    ])
  return (
    <div className='w-full relative'> 
        <div className='max-w-screen-xl mx-auto px-5 py-16 md:px-10'>
            {/* <div className='featured'></div> */}
            <h3 className='capitalize font-semibold'>+ featured projects </h3>

            <h1 className='text-6xl md:text-[13rem] md:leading-none md:tracking-tight my-5'>Work</h1>
            <p className=' leading-2 text-md'>Highlights of the cases that we passionately built with forward thinking clients and friends over the years.
            </p>

            <div className='elems md:flex md:flex-wrap md:gap-5 mt-10'>
                {elems.map((item,index)=>{
                  return  <div className='elem w-full md:w-[48%] mt-8 '>
                            <div className='video w-full h-[104vw] md:h-[50vw] relative overflow-hidden'>
                            <img className='w-full h-full object-cover hidden md:block' src={item.img} alt="" />

                             <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 scale-[1.3] -translate-x-1/2 -translate-y-1/2 block md:hidden'
                             src={item.video}></video>
                           </div>
                            <div className='mt-4'>
                              <h3 className='font-semibold'>{item.heading}</h3>
                              <h3 className='capitalize opacity-80'>{item.Subheading}</h3>
                            </div>
              
                </div>
              })}
                
            </div>
        </div>
    </div>
  )
}

export default Work


