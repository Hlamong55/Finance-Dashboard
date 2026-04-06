import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import DashboardHeader from "../components/DashboardHeader";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import BalanceChart from "../components/charts/BalanceChart";
import CategoryChart from "../components/charts/CategoryChart";
import Insights from "../components/Insights";

const DashBoard = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 max-w-7xl mx-auto">

        <DashboardHeader />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Total Balance" amount={balance} />
          <DashboardCard title="Income" amount={income} />
          <DashboardCard title="Expenses" amount={expenses} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <BalanceChart />
          <CategoryChart />
        </div>

        <Insights />

      </div>

    </div>
  );
};

export default DashBoard;