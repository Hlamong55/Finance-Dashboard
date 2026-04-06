import { createContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {

    if (transactions.length === 0) {

      fetch("/transactions.json")
        .then((res) => res.json())
        .then((data) => {
          setTransactions(data);
        });

    }

  }, []);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, setTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};