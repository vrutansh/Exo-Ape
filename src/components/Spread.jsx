import React from 'react'

const Spread = () => {
  return (
    <div className='w-full bg-white'>
        <div className='max-w-screen-xl mx-auto px-5 md:px-10 py-20'>
            <div className='svg flex items-center gap-3 justify-center'>
            <i class=" w-4 ri-sparkling-2-fill"></i>
            <h1>in the media</h1>
            </div>

           <div className='heading mt-10 text-center'>
               <h1 className='capitalize text-6xl md:text-9xl tracking-tighter '>Spread</h1>
               <h1 className='capitalize text-6xl md:text-9xl tracking-tighter '>the news</h1>
               <p className='w-2/3 mx-auto mt-5 md:mt-10 md:text-xl md:w-1/3 text-md leading-2'>Find out more about our Work on these leading design and technology platforms.</p>

               <a className='border-b-[1px] border-zinc-900 pb-1c mt-5 inline-block' href="#">Browse all news</a>
           </div> 
        </div>
    </div>
  )
}

export default Spread