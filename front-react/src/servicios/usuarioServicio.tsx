const url = import.meta.env.VITE_API_URL;

export async function getUsuario(nombre: string, password: string) {
  const usuarioUrl = url + "usuario/validar";
  let usuario;

  try {
    const datosJson = await fetch(usuarioUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({nombre, password})
    });
    usuario = await datosJson.json();
    return usuario;
  } catch(error) {
    console.log("Error")
    return null;
  }
}
