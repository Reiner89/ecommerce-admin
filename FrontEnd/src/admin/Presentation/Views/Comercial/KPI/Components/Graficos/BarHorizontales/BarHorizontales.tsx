import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useComercial } from "../../../../../../Hooks/useComercial";

export const BarHorizontales = () => {
  const { ventas } = useComercial();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={ventas} layout="vertical">
        <Tooltip />
        <YAxis dataKey="comProductosPacks" type="category" width={80} />
        <XAxis type="number" />
        <Bar dataKey="comCantidad" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
