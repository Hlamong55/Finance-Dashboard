import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { RoleContext } from "../context/RoleContext";
import AddTransactionModal from "./AddTransactionModal";

const TransactionsTable = () => {
  const { transactions } = useContext(TransactionContext);
  const { role } = useContext(RoleContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [showModal, setShowModal] = useState(false);

  // Unique categories
  const categories = [
    "all",
    ...new Set(transactions.map((t) => t.category)),
  ];

  let filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filtered = filtered.filter((t) => t.category === category);
  }

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount;
    }
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-6">

        {/* Search */}
        <input
          type="text"
          placeholder="Search category..."
          className="border rounded-md px-3 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Sorting */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>

        {/* Admin Add Button */}
        {role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            + Add Transaction
          </button>
        )}

      </div>

      {/* Table */}
      <table className="w-full text-left">

        <thead className="border-b text-gray-500 text-sm">

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

              <td className="font-medium">{t.category}</td>

              <td className="font-semibold">${t.amount}</td>

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

      {showModal && (
        <AddTransactionModal close={() => setShowModal(false)} />
      )}

    </div>
  );
};

export default TransactionsTable;   `1`    