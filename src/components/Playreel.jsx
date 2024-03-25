import React from 'react'

const Playreel = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-black'>

        <div className='md:w-96 w-40 aspect-video overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <video  autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 scale-[2] -translate-x-1/2 -translate-y-1/2' src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1711212140~exp=1711226540~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=d059bebe0d2c8acf14c94a1ac56bdf3d9d7d54376e4dc406bbf0854c92db9e2a&r=dXMtY2VudHJhbDE%3D"></video>
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