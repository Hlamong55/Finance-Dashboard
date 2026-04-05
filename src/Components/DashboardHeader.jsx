import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";

const DashboardHeader = () => {
  const { role, setRole } = useContext(RoleContext);
  const location = useLocation();

  const pageTitle = location.pathname === "/transactions"
    ? "Transactions"
    : "Dashboard";

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">

      {/* Left section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {pageTitle}
        </h1>

        <p className="text-sm text-gray-400">
          Welcome back
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">

        {/* Role switch */}
        <div className="flex items-center gap-2">

          <span className="text-sm text-gray-500">
            Role
          </span>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

        </div>

        {/* Avatar */}
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