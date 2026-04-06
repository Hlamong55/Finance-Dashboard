import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 md:ml-64 w-full">

        <DashboardHeader
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* GLOBAL CONTENT SPACING */}
        <main className="p-4 md:p-8 space-y-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;