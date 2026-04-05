import Sidebar from "../components/Sidebar";

const Transactions = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold">
          Transactions
        </h1>
      </div>

    </div>
  );
};

export default Transactions;