import DashboardLayout from "../layouts/DashboardLayout";
import TransactionsTable from "../components/TransactionsTable";

const Transactions = () => {
  return (
    <DashboardLayout>
      <TransactionsTable />
    </DashboardLayout>
  );
};

export default Transactions;