import Instrumento from "../entidades/Intrumento";
import { Pedido } from "../entidades/Pedido";
import { PedidoDetalle } from "../entidades/PedidoDetalle";
import useCarrito from "../hooks/useCarrito";
import { crearPedido } from "../servicios/pedidoServicio";

type props = {
  carrito: Instrumento[];
};

export const BtnCompra = (props: props) => {
  const { limpiarCarrito } = useCarrito();

  function handleClick() {
    const pedido = new Pedido();
    const detalles: PedidoDetalle[] = [];
    props.carrito.forEach((ic) => {
      let renglon: PedidoDetalle = new PedidoDetalle();
      pedido.totalPedido += ic.cantidad * ic.precio;
      renglon.cantidad = ic.cantidad;
      renglon.instrumento = ic;
      detalles.push(renglon);
    });
    pedido.detalles = detalles;
    console.log(pedido);
    crearPedido(pedido)
      .then(() => {
        limpiarCarrito();
      })
      .catch((error) => console.log("Error al crear el pedido: ", error));
  }

  return (
    <>
      <button className="btn btn-outline-success" onClick={handleClick}>
        Comprar
      </button>
    </>
  );
};
