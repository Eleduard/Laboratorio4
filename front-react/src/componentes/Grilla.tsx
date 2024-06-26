import { useEffect, useState } from "react";
import Instrumento from "../entidades/Intrumento";
import { getFromJson, getCategorias, eliminarInstrumento } from "../servicios/instrumentoServicio";
import { Link } from "react-router-dom";
import { BotonNuevo } from "./BotonNuevo";
import { ComboCategorias } from "./ComboCategorias";
import { Categoria } from "../entidades/Categoria";
import BtnExcel from "./BtnExcel";

export const Grilla = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [filtro, setFiltro] = useState<number>(0);

  useEffect(() => {
    getInstrumentos();
    getCates();
  }, []);

  const getInstrumentos = async () => {
    let datos: Instrumento[] = await getFromJson();
    setInstrumentos(datos);
  };

  const getCates = async () => {
    let cates: Categoria[] = await getCategorias();
    setCategorias(cates);
  }

  const getFiltro = (f: number) => {
      setFiltro(f);
  }

  const instrumentosFiltrados = filtro==0 ? instrumentos : instrumentos.filter(i => i.categoria.idCategoria == filtro);

  return (
    <>
      <div className="table">
        <div className="row">
          <div className="col-4 text-center">
            <BotonNuevo />
          </div>
          <div className="col-4">
            <BtnExcel />
          </div>
          <div className="col-4">
            <ComboCategorias cates={categorias} filtro={getFiltro} />
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Instrumento</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {instrumentosFiltrados.map((e, i) => (
            <tr key={i}>
              <td style={{ maxWidth: "20px" }} className="text-truncate">
                {e.instrumento}
              </td>
              <td className="col-1">{e.marca}</td>
              <td className="col-1">{e.modelo}</td>
              <td className="col-1">{e.precio}</td>
              <td
                style={{ minWidth: "40px", maxWidth: "60px" }}
                className="text-truncate"
              >
                {e.descripcion}
              </td>
              <td className="col-1">{e.categoria.denominacion}</td>
              <td className="align-content-center">
                <Link to={`/formulario/${e.idInstrumento}`}>
                  <i
                    className="bi bi-pencil-square text-primary"
                    style={{ fontSize: "1.5rem", color: "blue" }}
                  ></i>
                </Link>
              </td>
              <td className="align-content-center">
                <a href="" onClick={() => eliminarInstrumento(e.idInstrumento)}>
                  <i
                    className="bi bi-trash-fill text-danger"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
