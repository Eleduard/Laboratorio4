import { useEffect, useState } from "react";
import Instrumento from "../entidades/Intrumento";
import { getDetalle } from "../servicios/instrumentoServicio";
import Envio from "./Envio";
import { useParams } from "react-router-dom";

export const DetalleInstrumento = () => {
  const [instrumento, setInstrumento] = useState<Instrumento>();

  const { id } = useParams();

  useEffect(() => {
    getInstrumento();
  }, []);

  const getInstrumento = async () => {
    if (id != undefined) {
      let datos: Instrumento = await getDetalle(parseInt(id));
      setInstrumento(datos);
    }
  };

  if (!instrumento) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container-fluid w-75" style={{height:'100vh'}}>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={"../../img/" + instrumento.imagen}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <p className="card-text">
                <small className="text-body-secondary">
                  {instrumento.cantidadVendida + " vendidos"}
                </small>
              </p>
              <p className="card-text descripcion">{instrumento.instrumento}</p>
              <h5 className="card-title titulo">$ {instrumento.precio}</h5>
              <p className="card-text">{"Marca: " + instrumento.marca}</p>
              <p className="card-text">{"Modelo: " + instrumento.modelo}</p>
              <p className="card-text" id="envio">
                <Envio costoEnvio={instrumento.costoEnvio} />
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-6">
            <p>{instrumento.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
