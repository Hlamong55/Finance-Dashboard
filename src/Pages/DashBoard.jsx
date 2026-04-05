import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import BalanceChart from "../components/charts/BalanceChart";
import CategoryChart from "../components/charts/CategoryChart";
import Insights from "../components/Insights";
import DashboardHeader from "../components/DashboardHeader";

const DashBoard = () => {
  const { transactions } = useContext(TransactionContext);


  if (!transactions.length) {
    return <div className="p-8 text-xl">Loading dashboard...</div>;
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <DashboardHeader></DashboardHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Total Balance" amount={balance} />
          <DashboardCard title="Income" amount={income} />
          <DashboardCard title="Expenses" amount={expenses} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <BalanceChart />
          <CategoryChart />
        </div>

        <div className="mt-8">
          <Insights />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
