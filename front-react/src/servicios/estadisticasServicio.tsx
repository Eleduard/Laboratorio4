import Instrumento from "../entidades/Intrumento";

const url = import.meta.env.VITE_API_URL;
const urlporMes = url + 'pedido/filtrarPorMes';
const urlPorInstrumento = url + 'pedido/filtrarPorInstrumento'
const urlReporteExcel = 'http://localhost:8080/reportes/generarExcel';

export const getPedidosPorMes = async () => {
    const response = await fetch(urlporMes, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  
    if (!response.ok) {
      throw new Error('Error al obtener los datos de pedidos por mes');
    }

    return await response.json();
  };

  export const getPedidosPorInstrumento = async () => {
    const response = await fetch(urlPorInstrumento, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  
    if (!response.ok) {
      throw new Error('Error al obtener los datos de pedidos por instrumento');
    }
  
    return await response.json();
  };

  export const generarExcel = async (filtro: { fechaDesde: string; fechaHasta: string }): Promise<ArrayBuffer> => {
    try {
      const response = await fetch(urlReporteExcel, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtro),
      });
  
      if (!response.ok) {
        throw new Error('Error al generar el reporte Excel');
      }
      console.log(response);
      // Obtener el contenido del archivo como ArrayBuffer
      const arrayBuffer = await response.arrayBuffer();
  
      return arrayBuffer;
  
    } catch (error) {
      console.error('Error en generarExcel:', error);
      throw new Error('Error al generar el reporte Excel. Por favor, inténtalo de nuevo más tarde.');
    }
  };

// Función para generar el PDF del instrumento
export const generarPdf = async (instrumento: Instrumento) => {
    try {
      const response = await fetch(`http://localhost:8080/reportes/generarPDF/${instrumento.idInstrumento}`, {
        headers: {
          //Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error('Error al generar el PDF');
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'detalle_instrumento.pdf'; // Nombre del archivo para descargar
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al generar el PDF: ${error.message}`);
      } else {
        throw new Error('Error desconocido al generar el PDF');
      }
    }
  };