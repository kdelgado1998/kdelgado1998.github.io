import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout } from './layout/AuthLayout'
import { Principal } from './paginas/Principal'
import { Emprendedores } from './paginas/Emprendedores' 
import { Contacto } from './paginas/Contacto' 
import { Nosotros } from './paginas/Nosotros'
import { Galeria } from './paginas/Galeria'
import { Universitarios } from './paginas/Universitarios'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Principal />} />
          <Route path='emprendedores' element={<Emprendedores />}/>
          <Route path='contacto' element={<Contacto />}/>
          <Route path='nosotros' element={<Nosotros />}/>
          <Route path='galeria' element={<Galeria />}/>
          <Route path='universitarios' element={<Universitarios />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
