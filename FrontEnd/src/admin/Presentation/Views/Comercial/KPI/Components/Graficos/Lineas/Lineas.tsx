import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Enero",
    uv: 50000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Febrero",
    uv: 40000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Marzo",
    uv: 30000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Abril",
    uv: 37000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mayo",
    uv: 18000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Junio",
    uv: 23000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Julio",
    uv: 34000,
    pv: 4300,
    amt: 2100,
  },
];

export const Lineas = () => {
  return (
    <div className="relative w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
