import { useState } from "react";
import { Roles } from "../entidades/Roles";
import Usuario from "../entidades/Usuario";
import { Navigate, Outlet } from "react-router-dom";
import { Home } from "../componentes/Home";

interface Props {
    rol: Roles
}

export default function rolUsuario({ rol }: Props) {
    const [jsonUsuario, setjsonUsuario] = useState<any>(localStorage.getItem('usuario'));
    const usuarioLogueado = JSON.parse(jsonUsuario) as Usuario;

    if(usuarioLogueado && usuarioLogueado.rol === 'admin') {
        return <Outlet />
    } else if(usuarioLogueado) {
        return <Home />
    } else {
        return <Navigate replace to="/login" />
    }
}