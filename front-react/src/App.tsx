import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { MenuBar } from './componentes/Menu';
import Login from './componentes/Login';
import { DetalleInstrumento } from './componentes/DetalleInstrumento';
import Formulario from './componentes/Formulario';
import { Grilla } from './componentes/Grilla';
import { Home } from './componentes/Home';
import { Mapa } from './componentes/Mapa';
import Practico from './componentes/Practico';
import RolUsuario from './controlAcceso/RolUsuario';
import { Roles } from './entidades/Roles';
import { RutaPrivada } from './controlAcceso/RutaPrivada';

function App() {
  const location = useLocation();
  const esconderMenu = location.pathname === "/login";

  return (
    <>
      {!esconderMenu && <MenuBar />}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dondeestamos" element={<Mapa />} />
        <Route path="/productos" element={<RutaPrivada><Practico /></RutaPrivada>} />
        <Route path="/:id" element={<DetalleInstrumento />} />
        <Route element={<RolUsuario rol={Roles.ADMIN} />}>
          <Route path="/administrar" element={<Grilla />} />
        </Route>
        <Route path="/formulario/:idInstrumento" element={<RutaPrivada><Formulario /></RutaPrivada>}/>
      </Routes>
    </>
  )
}

export default App
