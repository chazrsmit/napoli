import './App.css'
import { useState } from 'react'

import Carousel from './components/Carousel.jsx'
import TopBar from './components/TopBar.jsx'
import BottomBar from './components/BottomBar.jsx'
import Footer from './components/Footer.jsx'
import Asterisk from './components/Asterisk.jsx'
import Modal from './components/Modal.jsx'


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickedAsterisk = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
    <div className="main">
      <TopBar />
      <Asterisk clickedAsterisk={clickedAsterisk} />
      {
        isModalOpen &&
        <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <p>
            in lieu of countless photos buried in a whatsapp group chat or in a metaphorically dusty dropbox folder, to be discovered again when the maximum storage limit has been reached and has come the time for a dreaded digital spring cleaning.
          </p>
        </Modal>
      }
      <Carousel />
      <BottomBar />
      <Footer />
    </div>
    </>
  )
}

export default App
