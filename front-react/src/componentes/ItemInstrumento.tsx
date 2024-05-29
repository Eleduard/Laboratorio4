import Envio from "./Envio";
import "./ItemInstrumento.css";
import Instrumento from "../entidades/Intrumento";
import { Link } from "react-router-dom";
import  useCarrito  from "../hooks/useCarrito";
//import { useState } from "react";

export function ItemInstrumento(props: Instrumento) {
  //const [contador, incrementarCantidad] = useState(0);
  const { addCarrito, removeCarrito, cart, removeItemCarrito } = useCarrito()

    const verificaInstrumentoEnCarrito = (product:Instrumento) => {
        return cart.some(item => item.idInstrumento === product.idInstrumento)
    }

    const isInstrumentoInCarrito = verificaInstrumentoEnCarrito(props)

  return (
    <div className="container-fluid">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={"../../img/" + props.imagen}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text descripcion">{props.instrumento}</p>
              <h5 className="card-title titulo">$ {props.precio}</h5>
              <p className="card-text" id="envio">
                <Envio costoEnvio={props.costoEnvio} />
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {props.cantidadVendida + " vendidos"}
                </small>
              </p>
              <Link to={`/${props.idInstrumento}`} className="nav-link">
                Ver detalle
              </Link>
              <p>
            <a className='iconoMasMenos' onClick={() => removeItemCarrito(props)}>
            -
            </a>
            <button className="btn btn-outline-success btn-sm"
                  onClick={() => {
                    isInstrumentoInCarrito
                      ? removeCarrito(props)
                      : addCarrito(props)
                  }}
                >
                  {
                    isInstrumentoInCarrito
                      ? <img src={`./img/deleteCart.png`} title='Quitar' />
                      : <img src={`./img/addCart.png`}  title='Comprar' />
                  }
            </button>
            <a className='iconoMasMenos' onClick={() => addCarrito(props)}>
             +
            </a> 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
