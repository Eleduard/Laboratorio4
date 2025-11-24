import { ChangeEventHandler } from "react";
import { Categoria } from "./Categoria";
import Marca from "./Marca";

export default class Instrumento {
	idInstrumento: number = 0;
	instrumento: string = "";
	marca: Marca = {
		idMarca: 0,
		marca: ""
	};
	modelo: string = "";
	imagen: string = "";
	precioActual: number = 0;
	costoEnvio: string = "";
	cantidadVendida: number = 0;
	descripcion: string = "";
	cantidad: number = 0;
	categoria: Categoria = {
		idCategoria: 0,
		denominacion: ""
	}
	addCarrito?:ChangeEventHandler;
};