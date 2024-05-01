import React from 'react'
import './App.css'
import Firstslide from './components/firstslide'
import Secondslide from './components/secondslide'
import Thirdslide from './components/thirdslide'
import Fourthslide from './components/fourthslide'
import Fifthslide from './components/fifthslide'
import Navbar from './components/Navbar/navbar'

function App() {
  

  return (
    <div className='main'>
      <Navbar/>
      <Firstslide/>
      <Secondslide/>
      <Thirdslide/>
      <Fourthslide/>
      <Fifthslide/>
    </div>
  )
}

export default App
