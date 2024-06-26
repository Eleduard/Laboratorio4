import { useEffect, useState } from "react";
import Instrumento from "../entidades/Intrumento";
import { getFromJson } from "../servicios/instrumentoServicio";
import { ItemInstrumento } from "./ItemInstrumento";
import { CarritoContextProvider } from "../contextos/CarritoContext";
import { Carrito } from "./Carrito";
import { useFetch } from "../hooks/useFetch";

export default function Listado() {
  const url = import.meta.env.VITE_API_URL;
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  const instr = useFetch(url + "instrumento/listado");
  console.log(instr);

  useEffect(() => {
    getInstrumentos();
  }, []);

  const getInstrumentos = async () => {
    let datos: Instrumento[] = await getFromJson();
    setInstrumentos(datos);
  };

  return (
    <div className="row">
      <CarritoContextProvider>
        <div className="col-10">
          {instrumentos.map((i: Instrumento) => (
            <div className="row" key={i.idInstrumento}>
              <ItemInstrumento
                idInstrumento={i.idInstrumento}
                instrumento={i.instrumento}
                imagen={i.imagen}
                precio={i.precio}
                costoEnvio={i.costoEnvio}
                cantidadVendida={i.cantidadVendida}
                marca={i.marca}
                modelo={i.modelo}
                descripcion={i.descripcion}
                categoria={i.categoria}
                cantidad={i.cantidad}
              />
            </div>
          ))}
        </div>
        <div className="col-2">
            <b>Carrito Compras</b>
          <Carrito></Carrito>
        </div>
      </CarritoContextProvider>
    </div>
  );
}
