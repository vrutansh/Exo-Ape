import React from 'react'

const Images = () => {
  return (
    <div className='w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden'>
       <div className='w-[40%] h-1/2 relative'>
         <div className='w-20 h-[7rem] -right-1/3 top-6  absolute'>
           <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)" alt="" />
         </div>
         <div className='absolute w-[8rem] aspect-video -left-1/2 top-1/3 overflow-hidden'>
            <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
         </div>
         <div className='absolute w-[9rem] aspect-video -left-[70%] -bottom-10 bg-red-400'>
           <img className='h-full w-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
         </div>
         <div className='absolute w-[8rem] aspect-[1.5/1] -right-[70%] -bottom-16 bg-orange-500'>
           <video autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>


         </div> 


         <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)" alt="" />
       </div>
    </div>
  )
}

export default Images