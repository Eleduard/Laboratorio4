import { useState } from "react";
import { createPreferenceMP } from "../servicios/pedidoServicio";
import PreferenceMP from "../entidades/PreferenceMP";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";

function CheckoutMP({ montoCarrito = 0 }) {
  const [idPreference, setIdPreference] = useState<string>("");

  const getPreferenceMP = async () => {
    const response: PreferenceMP = await createPreferenceMP({
      idPedido: 0,
      fechaPedido: new Date(),
      totalPedido: montoCarrito,
    });
    console.log("Preference id: " + response.id);
    if (response) {
      setIdPreference(response.id);
    } else {
      alert("Agregue al menos un instrumento al carrito");
    }
  };
  // es la Public Key se utiliza generalmente en el frontend
  initMercadoPago("TEST-4817f472-d5d6-4abe-9d18-0c77f64b15f7", {
    locale: "es-AR",
  });

  //redirectMode es optativo y puede ser self, blank o modal
  return (
    <div>
      <button onClick={getPreferenceMP} className="btn btn-primary">
        COMPRAR con <br></br> Mercado Pago
      </button>
      <div className={idPreference ? "visible" : "invisible"}>
        <Wallet
          initialization={{ preferenceId: idPreference, redirectMode: "blank" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
}

export default CheckoutMP;
