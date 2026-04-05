import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Finance
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-gray-300">
          Dashboard
        </Link>

        <Link to="/transactions" className="hover:text-gray-300">
          Transactions
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;