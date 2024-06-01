import { Pedido } from "../entidades/Pedido";

const url = import.meta.env.VITE_API_URL;

export async function crearPedido(pedido: Pedido): Promise<void> {
  const urlPedido = url + "pedido/guardarPedido";
  try {
    console.log(pedido);
    const response = await fetch(urlPedido, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(pedido),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el instrumento");
    }
  } catch (error) {
    console.log("Error al crear el pedido: ", error);
  }
}

export async function createPreferenceMP(pedido: Pedido) {
  const urlMP = url + "create-preference-mp";
  const response = await fetch(urlMP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data;
}

/*export async function getPreferenceMP(pedido: Pedido) {
    try {
        const preference = await createPreferenceMP(pedido);
        console.log(preference);
    } catch (error) {
        console.error('Error creating preference:', error);
    }
}*/