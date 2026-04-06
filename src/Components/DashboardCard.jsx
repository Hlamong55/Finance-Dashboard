import { FaWallet } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import { MdTrendingDown } from "react-icons/md";

const DashboardCard = ({ title, amount }) => {

  let icon;
  let color;

  if (title === "Total Balance") {
    icon = <FaWallet />;
    color = "bg-indigo-500";
  }

  if (title === "Income") {
    icon = <MdTrendingUp />;
    color = "bg-green-500";
  }

  if (title === "Expenses") {
    icon = <MdTrendingDown />;
    color = "bg-red-500";
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center">

      <div>

        <p className=" text-gray-600">
          {title}
        </p>

        <h2 className="text-2xl font-bold mt-1">
          ${amount}
        </h2>

      </div>

      <div
        className={`${color} text-white p-3 rounded-lg text-2xl`}
      >
        {icon}
      </div>

    </div>
  );
};

export default DashboardCard;