import { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const AddTransactionModal = ({ close }) => {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([...transactions, newTransaction]);
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn">

      <div className="bg-white rounded-xl p-6 w-96 shadow-lg transform transition-all scale-95 animate-scaleIn">

        <h2 className="text-xl font-semibold mb-4">
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="date"
            required
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            placeholder="Category"
            required
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Amount"
            required
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
          />

          <select
            className="border w-full p-2 rounded focus:ring-2 focus:ring-blue-400"
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-2 pt-3">

            <button
              type="button"
              onClick={close}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;