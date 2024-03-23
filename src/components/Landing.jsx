import React from 'react'

const Landing = () => {
  return (
    <div className=' relative w-full h-[150vh] md:h-[250vh]'>
        <div className='picture w-full h-full'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)" alt="" />
        </div>

         <div className='w-full absolute top-0'>

         <div className='h-full text max-w-screen-xl mx-auto px-5 md:px-10 text-white'>
            <div className='para mt-72 md:mt-[35rem] '>
                 <p className='text-md font-regular  md:text-3xl'>Global digital design studio partnering</p>
                 <p className='text-md font-regular md:text-3xl'>with brands and business that create</p>
                 <p className='text-md font-regular md:text-3xl'>exceptional experiences where people</p>
                 <p className='text-md font-regular md:text-3xl'>Live, Work, and Unwind</p>
            </div>

            <div className='headings mt-5 md:mt-10'>
                <h1 className='text-[10vh] tracking-tighter leading-none md:text-[12rem]'>Digitals</h1>
                <h1 className='text-[10vh] tracking-tighter leading-none md:text-[12rem]'>Design</h1>
                <h1 className='text-[10vh] tracking-tighter leading-none md:text-[12rem]'>Experience</h1>
            </div>

            <div className='para2 md:w-1/3 mt-10 md:mt-20 '>
                <p className='md:text-2xl'>
                     We help experience-driven companies thrive by making their audience feel 
                    the refined intricaties of their brand and product in the digital space.
                    Unforgettable journeys start with a click.
                </p>
                <a className=' md:text-xl border-b-[1px] border-zinc-100 pb-1 mt-4 inline-block' href="">The Studio.</a>
            </div>
         </div>

         </div>

        
    </div>
  )
}

export default Landing