import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { TransactionProvider } from "./context/TransactionContext";
import { RoleProvider } from "./context/RoleContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoleProvider>
      <TransactionProvider>
        <RouterProvider router={router} />
      </TransactionProvider>
    </RoleProvider>
  </React.StrictMode>
);