import { createBrowserRouter } from "react-router-dom";
// import DashBoard from "../pages/DashBoard";
import Transactions from "../pages/Transactions";
import DashBoard from "../Pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
]);

export default router;