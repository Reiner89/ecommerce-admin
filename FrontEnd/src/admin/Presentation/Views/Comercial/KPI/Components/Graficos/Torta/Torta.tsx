import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type DataItem = {
  name: string;
  value: number;
};

const data: DataItem[] = [
  { name: "Online", value: 400 },
  { name: "Tienda", value: 300 },
];

const COLORS: string[] = ["#0088FE", "#FFBB28"];

const RADIAN = Math.PI / 180;

type LabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: LabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const Torta: React.FC = () => {
  return (
    <div className="relative w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-4 left-4 flex flex-col text-left">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mb-1">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
