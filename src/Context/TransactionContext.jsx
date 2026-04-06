import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/transactions.json")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter(t => t.id !== id);
    setTransactions(updated);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};