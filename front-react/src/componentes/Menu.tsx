import { Link } from "react-router-dom";
import Usuario from "../entidades/Usuario";
import { useEffect, useState } from "react";

export const MenuBar = () => {
  const user = localStorage.getItem("usuario");
  const [deserializado, setDeserializado] = useState<Usuario>(new Usuario());

  useEffect(() => {
    if (user) {
      setDeserializado(JSON.parse(user));
    }
  }, []);

  console.log(deserializado);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mj Music
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/dondeestamos" className="nav-link">
              Dónde estamos
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <Link to="/administrar" className="nav-link">
              Administrar
            </Link>
          </div>
        </div>
      </div>
      <div className="justify-content-end">
        {deserializado!.nombreUsuario}
      </div>
    </nav>
  );
};
