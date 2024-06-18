import { useNavigate } from "react-router-dom";
import Usuario from "../entidades/Usuario";
import { useEffect, useState } from "react";
import { getUsuario, setUsuario } from "../servicios/usuarioServicio";
import { Roles } from "../entidades/Roles";

export default function Registro() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Usuario | null>(new Usuario());
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rol, setRol] = useState<Roles>(Roles.VISOR);
  const [txtValidacion, setTxtValidacion] = useState<string>("");

  /*useEffect(() => {
  if (user) {
      setTxtValidacion("");
      setTxtValidacion("Usuario existe.");
    } else {
      setTxtValidacion("");
      setUsuario(userName, password, rol);
      setTxtValidacion("Usuario creado.");
      navigate('/login');
    }
  }, [])

  const obtenerUsuario = async () => {
    const usuario = await getUsuario(userName, password);
    if(usuario) {
      setUser(usuario);
    }     
  };  */

  const crearUsuario = async () => {
    console.log(userName, "-", password, "-", rol)
    await setUsuario(userName, password, rol);
  }

  return (
    <div>
      <div className="row g-3 mb-5 align-items-center justify-content-center">
        <h2>Bienvenido</h2>
      </div>
      <div className="row g-3 mb-5 align-items-center justify-content-center">
        <div className="col-1">
          <label htmlFor="userName" className="col-form-label">
            Usuario
          </label>
        </div>
        <div className="col-2">
          <input
            className="form-control form-control"
            id="userName"
            type="text"
            placeholder="Ingrese su usuario"
            aria-label=".form-control-lg example"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row g-3 mb-5 align-items-center justify-content-center">
        <div className="col-1">
          <label htmlFor="inputPassword6" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-2">
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            placeholder="Ingrese su contraseña"
            aria-describedby="passwordHelpInline"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      
      <div className="row g-3 align-items-center justify-content-center">
        <div className="col-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={crearUsuario}
          >
            Aceptar
          </button>
        </div>
      </div>
      <div className="container">
        <p style={{color:"red"}}>{txtValidacion}</p>
      </div>
    </div>
  );
}
