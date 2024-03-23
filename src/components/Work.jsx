import React from 'react'

const Work = () => {
  return (
    <div className='w-full relative'> 
        <div className='max-w-screen-xl mx-auto px-5 py-16 md:px-10'>
            {/* <div className='featured'></div> */}
            <h3 className='capitalize font-semibold'>+ featured projects </h3>

            <h1 className='text-6xl my-5'>Work</h1>
            <p className=' leading-2 text-md'>Highlights of the cases that we passionately built with forward thinking clients and friends over the years.
            </p>

            <div className='elems mt-10'>
                <div className='elem w-full '>
                    <div className='video w-full h-[104vw] relative overflow-hidden'>
                        <img className='w-full h-full object-cover hidden md:block' src="https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1300x1619/filters:format(webp):quality(70)" alt="" />

                        <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 scale-[1.3] -translate-x-1/2 -translate-y-1/2 block md:hidden'
                         src="https://download-video.akamaized.net/v3-1/playback/ce96d614-0713-4c81-9bc2-50efc8aa2d4e/94252be6?__token__=st=1711196238~exp=1711210638~acl=%2Fv3-1%2Fplayback%2Fce96d614-0713-4c81-9bc2-50efc8aa2d4e%2F94252be6%2A~hmac=d2d548676ac9d8641aaf12c9944ecb4bf238419f7fd7032beefdb07ea5ec6608&r=dXMtY2VudHJhbDE%3D"></video>
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-semibold'>Studio-Hero</h3>
                        <h3 className='capitalize opacity-80'>Architectural marketing agency</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work