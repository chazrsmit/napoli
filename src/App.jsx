import './App.css'
import Carousel from './components/Carousel.jsx'
import TopBar from './components/TopBar.jsx'
import BottomBar from './components/BottomBar.jsx'
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
    <div className="main">
      <TopBar />
      <Carousel />
      <BottomBar />
      {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
