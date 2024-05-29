export type Props = {
  idInstrumento: number;
  instrumento: string;
  imagen: string;
  precio: number;
  costoEnvio: string;
  cantidadVendida: number;
  marca: string;
	modelo: string;
	descripcion: string;
  categoria: {
    id: number;
    denominacion: string;
  }
};
