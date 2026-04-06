import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const BalanceChart = () => {
  const { transactions } = useContext(TransactionContext);

  const data = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow h-[320px]">

      <h2 className="text-lg font-semibold mb-4">
        Balance Trend
      </h2>

      <div className="w-full h-[240px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={2}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default BalanceChart;