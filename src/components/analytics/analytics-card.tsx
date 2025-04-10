import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TAnalyticsDataResponse } from "../../types/analytics";

const AnalyticsCard = ({ analytics }: TAnalyticsDataResponse) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={analytics}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#584feb" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#584feb" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fda14c" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fda14c" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickMargin={10} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value1"
            stroke="#584feb"
            fillOpacity={1}
            fill="url(#colorValue1)"
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="#fda14c"
            fillOpacity={1}
            fill="url(#colorValue2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsCard;
