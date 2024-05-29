import Instrumento from "../entidades/Intrumento";
import useCarrito from "../hooks/useCarrito";
import { BtnCompra } from "./BtnCompra";
import CheckoutMP from "./CheckoutMP";

function CartItem(item: Instrumento) {
  return (
    <div key={item.idInstrumento}>
      <span>
        <img
          width={50}
          height={50}
          src={`../../img/${item.imagen}`}
          alt={item.instrumento}
        />
        <div>
          <strong>{item.instrumento}</strong> - ${item.precio}
        </div>
        <div>
          <b>
            {item.cantidad} {item.cantidad == 1 ? "unidad" : "unidades"}{" "}
          </b>
        </div>
      </span>
      <hr></hr>
    </div>
  );
}

export function Carrito() {
  const { cart, addCarrito, limpiarCarrito } = useCarrito();
  let totalPedido: number = 0;
  cart.forEach((inst) => totalPedido += inst.precio)

  const mostrarCarritoJSON = () => {
    console.log(cart);
  };

  return (
    <>
      <label className="cart-button">
        <i>Items del Pedido</i>
        <hr></hr>
      </label>

      <aside className="cart">
        <ul>
          {cart.map((instrumento: Instrumento, index) => (
            <CartItem
              idInstrumento={instrumento.idInstrumento}
              instrumento={instrumento.instrumento}
              precio={instrumento.precio}
              key={index}
              imagen={instrumento.imagen}
              descripcion={instrumento.descripcion}
              categoria={instrumento.categoria}
              cantidad={instrumento.cantidad}
              addCarrito={() => addCarrito(instrumento)}
              marca={instrumento.marca}
              modelo={instrumento.modelo}
              costoEnvio={instrumento.costoEnvio}
              cantidadVendida={instrumento.cantidadVendida}
            />
          ))}
        </ul>
        <h3><strong>Total: </strong>{totalPedido}</h3>
        <button className="btn btn-outline-danger" onClick={limpiarCarrito} title="Limpiar Todo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17a2 2 0 1 0 2 2" />
            <path d="M17 17h-11v-11" />
            <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
            <path d="M3 3l18 18" />
          </svg>
        </button>
        <button className="btn btn-sm" onClick={mostrarCarritoJSON}>MOSTRAR CART JSON</button>
        <BtnCompra carrito={cart}/>
        <CheckoutMP montoCarrito={totalPedido}></CheckoutMP>
      </aside>
    </>
  );
}
