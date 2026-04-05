import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const DashBoard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row" >
        <div className="w-full md:w-[20%]">
          <Sidebar />
        </div>

        <div className="w-full md:w-[80%] p-5 space-y-8">
            <DashboardHeader></DashboardHeader>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
