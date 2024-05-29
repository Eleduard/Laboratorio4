import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practico from "./componentes/Practico.tsx";
import { MenuBar } from "./componentes/Menu.tsx";
import { Home } from "./componentes/Home.tsx";
import { Mapa } from "./componentes/Mapa.tsx";
import { DetalleInstrumento } from "./componentes/DetalleInstrumento.tsx";
import { Grilla } from "./componentes/Grilla.tsx";
import Formulario from "./componentes/Formulario.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuBar />
      <Routes>
      <Route index element={<Home />} />
        <Route path="/dondeestamos" element={<Mapa />} />
        <Route path="/productos" element={<Practico />} />
        <Route path="/:id" element={<DetalleInstrumento />} />
        <Route path="/administrar" element={<Grilla />} />
        <Route path="/formulario/:idInstrumento" element={<Formulario />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
