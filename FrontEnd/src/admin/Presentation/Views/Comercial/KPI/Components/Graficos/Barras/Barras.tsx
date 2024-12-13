import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useComercial } from "../../../../../../Hooks/useComercial";

export const Barras = () => {
  const { ventas } = useComercial();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={ventas}>
        <Tooltip />
        <XAxis dataKey="comCliente" />
        <YAxis />
        <Bar dataKey="comCosto" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
