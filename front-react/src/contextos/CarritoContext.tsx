import { ReactNode, createContext, useState } from "react";
import Instrumento from "../entidades/Intrumento";

//Definición del tipo del contexto
type CarritoContextType = {
  cart: Instrumento[];
  addCarrito: (product: Instrumento) => void;
  removeCarrito: (product: Instrumento) => void;
  removeItemCarrito: (product: Instrumento) => void;
  limpiarCarrito: () => void;
};

//Creación del contexto
export const CarritoContext = createContext<CarritoContextType>({
  cart: [],
  addCarrito: () => {},
  removeCarrito: () => {},
  removeItemCarrito: () => {},
  limpiarCarrito: () => {},
});

//Creación del provider
export function CarritoContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Instrumento[]>([]);

  const addCarrito = (product: Instrumento) => {
    setCart((prevCart) => {
      const copiaCarrito = prevCart.map((item) => ({ ...item }));
      const existingIndice = copiaCarrito.findIndex(
        (item) => item.idInstrumento === product.idInstrumento
      );

      if (existingIndice !== -1) {
        copiaCarrito[existingIndice].cantidad += 1;
      } else {
        copiaCarrito.push({ ...product, cantidad: 1 });
      }

      return copiaCarrito;
    });
  };

  const removeCarrito = async (product: Instrumento) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.idInstrumento !== product.idInstrumento)
    );
  };

  const removeItemCarrito = (product: Instrumento) => {
    setCart((prevCart) => {
      const copiaCarrito = prevCart.map((item) => ({ ...item }));
      const existingProductIndex = copiaCarrito.findIndex(
        (item) => item.idInstrumento === product.idInstrumento
      );

      if (existingProductIndex !== -1) {
        if (copiaCarrito[existingProductIndex].cantidad > 1) {
          copiaCarrito[existingProductIndex].cantidad -= 1;
        } else {
          copiaCarrito.splice(existingProductIndex, 1);
        }
      }

      return copiaCarrito;
    });
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  return (
    <CarritoContext.Provider
      value={{
        cart,
        addCarrito,
        limpiarCarrito,
        removeCarrito,
        removeItemCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
