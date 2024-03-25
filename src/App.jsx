import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Images from './components/Images'

const App = () => {
  return (
    <div className='w-full '>
      <Navbar/>
      <Landing/>
      <Work/>
      <Playreel/>
      <Images/>
    </div>
    
  )
}

export default App