import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { FaChartPie } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

const Insights = () => {

  const { transactions } = useContext(TransactionContext);

  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const categoryTotals = {};

  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) =>
      categoryTotals[a] > categoryTotals[b] ? a : b,
    Object.keys(categoryTotals)[0]
  );

  const totalExpenses = expenses.reduce(
    (sum, t) => sum + t.amount,
    0
  );

  const avgTransaction =
    totalExpenses / (expenses.length || 1);

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-indigo-100 p-5 rounded-xl flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-600">
            Highest Spending
          </p>

          <h3 className="text-lg font-bold">
            {highestCategory}
          </h3>
        </div>

        <FaChartPie className="text-indigo-500 text-2xl" />

      </div>

      <div className="bg-red-100 p-5 rounded-xl flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-600">
            Total Expenses
          </p>

          <h3 className="text-lg font-bold">
            ${totalExpenses}
          </h3>
        </div>

        <FaMoneyBillWave className="text-red-500 text-2xl" />

      </div>

      <div className="bg-green-100 p-5 rounded-xl flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-600">
            Avg Transaction
          </p>

          <h3 className="text-lg font-bold">
            ${avgTransaction.toFixed(2)}
          </h3>
        </div>

        <FaCalculator className="text-green-500 text-2xl" />

      </div>

    </div>
  );
};

export default Insights;