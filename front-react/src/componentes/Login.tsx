import { useNavigate } from "react-router-dom";
import Usuario from "../entidades/Usuario";
import { useState } from "react";
import { getUsuario } from "../servicios/usuarioServicio";

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(new Usuario());
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [txtValidacion, setTxtValidacion] = useState<string>("");

  const obtenerUsuario = async () => {
    const user = await getUsuario(userName, password);
    if (!user) {
      setTxtValidacion("Usuario inválido.");
    } else {
      setUsuario(user);
    }
  };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  if (usuario && usuario.rol.toLowerCase() === "admin") {
    navigate("/administrar", {
      replace: true,
      state: {
        logged: true,
        usuario: usuario,
      },
    });
  } 
  
  if (usuario && usuario.rol.toLowerCase() === "operador") {
    navigate("/", {
      replace: true,
      state: {
        logged: true,
        usuario: usuario,
      },
    });
  }

  if (usuario && usuario.rol.toLowerCase() === "visor") {
    navigate("/", {
      replace: true,
      state: {
        logged: true,
        usuario: usuario,
      },
    });
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
            onClick={obtenerUsuario}
          >
            Ingresar
          </button>
        </div>
      </div>
      <div className="container">
        <p style={{color:"red"}}>{txtValidacion}</p>
      </div>
    </div>
  );
}
