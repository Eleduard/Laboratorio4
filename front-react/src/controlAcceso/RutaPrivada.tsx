import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import Usuario from "../entidades/Usuario";

export const RutaPrivada = ({ children }: { children: ReactNode }) => {
  //return localStorage.getItem('usuario') != '' ? children : <Navigate to="/login" />;
  const [usuario, setUsuario] = useState<Usuario | null>(
    JSON.parse(localStorage.getItem("usuario") || "null")
  );
  return usuario ? <>{children}</> : <Navigate to="/login" />;
};
