import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { RoleContext } from "../context/RoleContext";

const TransactionsTable = () => {

  const { transactions, deleteTransaction } = useContext(TransactionContext);
  const { role } = useContext(RoleContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b text-gray-600 text-sm">
              <th className="py-3">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          <tbody>

            {transactions.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">

                <td className="py-3">{t.date}</td>
                <td>{t.category}</td>

                <td className="font-medium">
                  ${t.amount}
                </td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full
                    ${t.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>

                {role === "admin" && (
                  <td>

                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="text-white hover:bg-red-700 px-2 py-1.5 bg-red-500 rounded-lg text-sm"
                    >
                      Delete
                    </button>

                  </td>
                )}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default TransactionsTable;