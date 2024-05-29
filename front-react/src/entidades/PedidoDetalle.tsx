import Instrumento from "./Intrumento";
import { Pedido } from "./Pedido";

export class PedidoDetalle {
    idPedidoDetalle: number = 0;
    cantidad: number = 0;
    pedido: Pedido = new Pedido();
    instrumento: Instrumento = new Instrumento();
}