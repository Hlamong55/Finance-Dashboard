import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";

const DashboardHeader = () => {
  const { role, setRole } = useContext(RoleContext);

  return (
    <div className="flex justify-between items-center mb-8">
      
      <h1 className="text-3xl font-bold text-gray-800">
        Finance Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-500">Role:</span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-3 py-1 rounded-md"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

    </div>
  );
};

export default DashboardHeader;