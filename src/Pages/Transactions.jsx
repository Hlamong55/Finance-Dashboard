import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import TransactionsTable from "../components/TransactionsTable";

const Transactions = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <DashboardHeader />

        <TransactionsTable />

      </div>

    </div>
  );
};

export default Transactions;