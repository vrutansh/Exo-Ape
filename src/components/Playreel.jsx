import React from 'react'

const Playreel = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-black'>

        <div className='md:w-96 w-40 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <video  autoPlay muted loop className='w-full h-full  absolute top-1/2 left-1/2 scale-[2] -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a" type="video/mp4"></video>
        </div>

        <div className='overlay absolute w-full h-full  text-white flex flex-col justify-between py-20'>

           <div className='w-full flex items-center justify-center gap-3 '>
             <i class=" w-4    ri-sparkling-2-fill"></i>
             <h3 className='text-xs '>Work in Motion</h3>
           </div>

           <h1 className='w-full flex justify-center items-center md:gap-96 gap-32'>
              <div className='text-4xl md:text-8xl  font-light'>Play</div>
              <div className='text-4xl md:text-8xl  font-light'>Reel</div>
           </h1>

            <p className='text-center px-12 text-xs'>Our work is best experienced in motion. Dont forget to put on your headphones.</p>
           
        </div>

        
    </div>
  )
}

export default Playreel