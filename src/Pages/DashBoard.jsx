import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import BalanceChart from "../components/charts/BalanceChart";
import CategoryChart from "../components/charts/CategoryChart";
import Insights from "../components/Insights";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const DashBoard = () => {

  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expenses;

  return (
    <DashboardLayout>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

        <DashboardCard title="Total Balance" amount={balance} />
        <DashboardCard title="Income" amount={income} />
        <DashboardCard title="Expenses" amount={expenses} />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        <BalanceChart />
        <CategoryChart />

      </div>

      {/* Insights */}
      <Insights />

    </DashboardLayout>
  );
};

export default DashBoard;