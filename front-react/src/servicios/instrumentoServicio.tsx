import Instrumento from "../entidades/Intrumento";

const url = import.meta.env.VITE_API_URL;

export async function getFromJson() {
  try {
    const datosJson = await fetch(url + "instrumento/listado");
    if (!datosJson.ok) {
      throw new Error("No se pudo obtener los datos.");
    }
    const datos = await datosJson.json();
    return await datos;
  } catch (error) {
    console.log("No se pudo acceder a los datos. ", error);
  }
}

export async function getDetalle(id: number) {
  try {
    const detalle = await fetch(url + "instrumento/listado/" + id);
    if (!detalle.ok) {
      throw new Error("No se pudo obtener los datos.");
    }
    const datos = await detalle.json();
    return await datos;
  } catch (error) {
    console.log("No se pudo acceder a los datos. ", error);
    return null;
  }
}

export async function getCategorias() {
  try {
    const datos = await fetch(url + "categoria/listado");

    if (!datos.ok) {
      throw new Error("No se pudo obtener los datos.");
    }

    const categorias = await datos.json();
    return categorias;
  } catch (error) {
    console.log("No se pudo acceder a los datos. ", error);
    return null;
  }
}

export async function crearInstrumento(
  instrumento: Instrumento
): Promise<void> {
  try {
    console.log(instrumento)
    const response = await fetch(url + "instrumento/agregarInstrumento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(instrumento),
    });
    if (!response.ok) {
      throw new Error("Error al crear el instrumento");
    }
    
  } catch (error) {
    console.error("Error al crear el instrumento.", error);
  }
  console.log(instrumento);
  
}

export async function actualizarInstrumento(
  instrumento: Instrumento
): Promise<void> {
  const urlInstrumento =
    url + "instrumento/agregarInstrumento/" + instrumento.idInstrumento;
  try {
    const response = await fetch(urlInstrumento, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(instrumento),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el instrumento");
    }
  } catch (error) {
    console.error("Error al actualizar el instrumento.", error);
  }
}

export async function eliminarInstrumento(id: number): Promise<void> {
  const urlInstrumento = url + "instrumento/eliminarInstrumento/" + id;
  try {
    const response = await fetch(urlInstrumento, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error("Error al borrar el instrumento");
    }
  } catch (error) {
    console.log("Error al borrar el instrumento.", error);
  }
}
