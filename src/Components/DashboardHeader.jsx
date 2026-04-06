import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { FiMenu } from "react-icons/fi";

const DashboardHeader = ({ toggleSidebar }) => {

  const { role, setRole } = useContext(RoleContext);
  const location = useLocation();

  const pageTitle =
    location.pathname === "/transactions"
      ? "Transactions"
      : "Dashboard";

  return (
    <div className="bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between mb-6">

      <div className="flex items-center gap-3">

        {/* Mobile menu button */}
        <button
          className="text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>

        <h1 className="text-xl md:text-2xl font-bold">
          {pageTitle}
        </h1>

      </div>

      <div className="flex items-center gap-4">

        {/* Role switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Avatar */}
        <img
          src={avatar}
          alt="avatar"
          className="w-9 h-9 rounded-full border"
        />

      </div>

    </div>
  );
};

export default DashboardHeader;