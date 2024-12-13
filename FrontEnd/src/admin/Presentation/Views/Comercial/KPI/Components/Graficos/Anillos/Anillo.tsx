import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useComercial } from "../../../../../../Hooks/useComercial";
import { Venta } from "../../../../../../Data/DComercial";

const agruparPorMedioPago = (ventas: Venta[]) => {
  const agrupadas = ventas.reduce((acc, venta) => {
    const medioPago = venta.comMedioPago;
    if (!acc[medioPago]) {
      acc[medioPago] = { name: medioPago, value: 0 };
    }
    acc[medioPago].value += 1; // Incrementamos la cantidad de pagos por medio de pago
    return acc;
  }, {} as Record<string, { name: string; value: number }>);

  return Object.values(agrupadas); // Convertimos el objeto a un array
};

export const Anillo = () => {
  const { ventas } = useComercial();

  // Agrupar las ventas por medio de pago
  const ventasPorMedioPago = agruparPorMedioPago(ventas);

  // Calcular el total de las ventas para obtener los porcentajes
  const totalVentas = ventasPorMedioPago.reduce(
    (acc, item) => acc + item.value,
    0
  );

  // Función para calcular el porcentaje
  const renderLabel = (entry: any) => {
    const porcentaje = ((entry.value / totalVentas) * 100).toFixed(2);
    return `${porcentaje}%`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Legend />
        <Pie
          data={ventasPorMedioPago}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          labelLine={false} // Para evitar las líneas de las etiquetas
          label={renderLabel} // Mostrar el porcentaje en la etiqueta
        >
          {/* Puedes agregar un color personalizado para cada porción si lo deseas */}
          {ventasPorMedioPago.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 2 === 0 ? "#82ca9d" : "#8884d8"}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
