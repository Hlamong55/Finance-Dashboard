import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { RoleContext } from "../context/RoleContext";
import AddTransactionModal from "./AddTransactionModal";

const TransactionsTable = () => {
  const { transactions } = useContext(TransactionContext);
  const { role } = useContext(RoleContext);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">

        <input
          type="text"
          placeholder="Search category..."
          className="border rounded-lg px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        {role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            + Add Transaction
          </button>
        )}

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="border-b text-gray-500 text-sm uppercase">

            <tr>
              <th className="py-3">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>

          </thead>

          <tbody>

            {filtered.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="py-3">{t.date}</td>

                <td className="font-medium">
                  {t.category}
                </td>

                <td className="font-semibold">
                  ${t.amount}
                </td>

                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {showModal && (
        <AddTransactionModal close={() => setShowModal(false)} />
      )}

    </div>
  );
};

export default TransactionsTable;