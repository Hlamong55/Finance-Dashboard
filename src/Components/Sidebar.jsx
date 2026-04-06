import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import logo from "../assets/financial-dashboards-icon.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 p-6 flex flex-col">

      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10">

        <img
          src={logo}
          alt="logo"
          className="w-10 h-10"
        />

        <h2 className="text-xl font-bold">
          FinTech
        </h2>

      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-500"
                : "hover:bg-gray-800"
            }`
          }
        >
          <MdDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-500"
                : "hover:bg-gray-800"
            }`
          }
        >
          <FaExchangeAlt size={18} />
          Transactions
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;