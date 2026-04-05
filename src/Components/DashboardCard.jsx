const DashboardCard = ({ title, amount }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-gray-500 text-sm mb-2">
        {title}
      </h3>

      <p className="text-2xl font-bold text-gray-800">
        ${amount}
      </p>
    </div>
  );
};

export default DashboardCard;