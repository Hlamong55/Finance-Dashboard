import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Insights = () => {
  const { transactions } = useContext(TransactionContext);

  const expenses = transactions.filter((t) => t.type === "expense");

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
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Insights
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">
            Highest Spending Category
          </p>
          <p className="text-lg font-bold">
            {highestCategory}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">
            Total Expenses
          </p>
          <p className="text-lg font-bold">
            ${totalExpenses}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">
            Avg Expense Transaction
          </p>
          <p className="text-lg font-bold">
            ${avgTransaction.toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Insights;