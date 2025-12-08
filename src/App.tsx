import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import QuienesSomos from './pages/QuienesSomos.tsx'
import Servicios from './pages/Servicios.tsx'
import Galeria from './pages/Galeria.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quienes-somos' element={<QuienesSomos />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
    </>
  )
}

export default App
