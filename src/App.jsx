import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TouristPlace from './pages/TouristPlace'
import Navbar from './components/Navbar'
import FullContent from './pages/FullContent'
function App() {

  return (
    <>
      <BrowserRouter basename='kovai' >
        <Navbar />
        <Routes>
          <Route path='/' element={<TouristPlace />} />
          <Route path='/touristPlace/:id' element={<FullContent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
