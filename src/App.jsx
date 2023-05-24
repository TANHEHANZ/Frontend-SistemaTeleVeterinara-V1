
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { ModalContextProvider } from './context/modalContext'
import Inicio from './pages/Inicio'
import Especialidades from './pages/Especialidades'
import Modal from './modal'
import Nav from './pages/Navegadores/Nav'
import Empleados from './pages/Empleados'
import Mascotas from './pages/Mascotas'
import Propietariomascotas from './pages/Propietariomascotas'

const  App=()=> {


  return (
    <>
      <BrowserRouter>
      <ModalContextProvider>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route path='' element={<Inicio/>}/>
            <Route path='/Especialidades' element={<Especialidades/>}/>
            <Route path='/Empleados' element={<Empleados/>}/>
            <Route path='/Mascotas' element={<Mascotas/>}/>
            <Route path='/Propietariomascotas' element={<Propietariomascotas/>}/>
          </Route> 
        </Routes>
        <Modal />
      </ModalContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
