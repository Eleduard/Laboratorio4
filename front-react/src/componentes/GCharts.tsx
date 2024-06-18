import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import {
  getPedidosPorInstrumento,
  getPedidosPorMes,
} from "../servicios/estadisticasServicio";

interface PorMes {
  monthYear: string;
  orderCount: number;
}

interface PorInstrumento {
  instrumento: string;
  orden: number;
}

export const GCharts: React.FC = () => {
  const [pedidosPorMes, setPedidosPorMes] = useState<
    Array<Array<string | number>>
  >([]);
  const [pedidosPorInstrumento, setPedidosPorInstrumento] = useState<
    Array<Array<string | number>>
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Obtener datos de pedidos por mes
    getPedidosPorMes()
      .then((p) => {
        const chartData = [
          ["Mes-Año", "Pedidos"],
          ...p.map((pd: PorMes) => [pd.monthYear, pd.orderCount]),
        ];
        setPedidosPorMes(chartData);
      })
      .catch((error) => {
        setError(
          `Error al obtener los datos de pedidos por mes: ${error.message}`
        );
      });

    // Obtener datos de pedidos por instrumento
    getPedidosPorInstrumento()
      .then((p) => {
        const chartData = [
          ["Instrumento", "Pedidos"],
          ...p.map((pd: PorInstrumento) => [
            pd.instrumento,
            pd.orden,
          ]),
        ];
        console.log(chartData)
        setPedidosPorInstrumento(chartData);
      })
      .catch((error) => {
        setError(
          `Error al obtener los datos de pedidos por instrumento: ${error.message}`
        );
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Gráficos de Pedidos</h1>

      <div style={{ marginBottom: "20px" }}>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={pedidosPorMes}
          options={{
            title: "Cantidad de pedidos por mes y año",
            hAxis: { title: "Mes-Año" },
            vAxis: { title: "Cantidad de pedidos" },
          }}
        />
      </div>

      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={pedidosPorInstrumento}
        options={{
          title: "Cantidad de pedidos por instrumento",
        }}
      />
    </div>
  );
};
