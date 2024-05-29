import { PedidoDetalle } from "./PedidoDetalle";

export class Pedido {
    idPedido: number = 0;
    fechaPedido: Date = new Date();
    totalPedido: number = 0;
    detalles?: PedidoDetalle[] = new Array<PedidoDetalle>;
}