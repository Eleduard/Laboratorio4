import { useContext } from "react";
import { CarritoContext } from "../contextos/CarritoContext";

export default function useCarrito() {
  const context = useContext(CarritoContext);

  if (context === undefined) {
    throw new Error(
      "useCarrito debe ser usado dentro del ambito de un CartProvider"
    );
  }

  return context;
};
