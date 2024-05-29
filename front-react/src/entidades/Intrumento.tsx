import { ChangeEventHandler } from "react";
import { Categoria } from "./Categoria";

export default class Instrumento {
	idInstrumento: number = 0;
	instrumento: string = "";
	marca: string = "";
	modelo: string = "";
	imagen: string = "";
	precio: number = 0;
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