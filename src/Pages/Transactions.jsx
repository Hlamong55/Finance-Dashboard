import Sidebar from "../components/Sidebar";
import TransactionsTable from "../components/TransactionsTable";

const Transactions = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Transactions
        </h1>

        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;