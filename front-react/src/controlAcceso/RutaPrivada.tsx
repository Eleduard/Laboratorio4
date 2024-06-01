import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const RutaPrivada = ({ children }: {children: ReactNode}) => {
    return localStorage.getItem('usuario') != '' ? children : <Navigate to="/login" />;
};