import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";

const DashboardHeader = () => {
  const { role, setRole } = useContext(RoleContext);
  const location = useLocation();

  const pageTitle =
    location.pathname === "/transactions"
      ? "Transactions"
      : "Dashboard";

  return (
    <div className="flex items-center justify-between mb-8 bg-white px-6 py-4 rounded-xl shadow-sm">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {pageTitle}
        </h1>
        <p className="text-sm text-gray-400">
          Welcome back
        </p>
      </div>

      <div className="flex items-center gap-4">

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />

      </div>

    </div>
  );
};

export default DashboardHeader;