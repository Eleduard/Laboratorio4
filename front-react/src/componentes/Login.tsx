import { useNavigate } from "react-router-dom";
import Usuario from "../entidades/Usuario";
import { useState } from "react";
import { getUsuario } from "../servicios/funciones";

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>(new Usuario());
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [txtValidacion, setTxtValidacion] = useState<string>("");

  const obtenerUsuario = async() => {
    const user = await getUsuario(userName, password);
    setUsuario(user);
  }

  localStorage.setItem('usuario', JSON.stringify(usuario))

  if(usuario.rol.toLowerCase() === "operador") {
    navigate('/productos', {
      replace: true,
      state: {
        logged: true,
        usuario: usuario
      }
    })
  }

  return (
    <>
      <div className="col-auto">
        <label htmlFor="userName" className="col-form-label">
          Password
        </label>
      </div>
      <div className="col-auto">
        <input
          className="form-control form-control-lg"
          id="userName"
          type="text"
          placeholder="Ingrese su usuario"
          aria-label=".form-control-lg example"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword6" className="col-form-label">
            Password
          </label>
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Ingrese la contraseña.
          </span>
        </div>
        <div>
          <button type="button" onClick={obtenerUsuario}></button>
        </div>
      </div>
    </>
  );
}
