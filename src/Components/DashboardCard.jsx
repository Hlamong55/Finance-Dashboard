const DashboardCard = ({ title, amount }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-gray-500 text-sm mb-2">
        {title}
      </h3>

      <p className="text-3xl font-bold text-gray-800">
        ${amount}
      </p>
    </div>
  );
};

export default DashboardCard;