import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel.jsx'
import TopBar from './components/TopBar.jsx'
import BottomBar from './components/BottomBar.jsx'

function App() {


  return (
    <>
    <div className="main">
      <TopBar />
      <Carousel />
      <BottomBar />
    </div>
    </>
  )
}

export default App
