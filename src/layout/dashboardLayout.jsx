import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col bg-black ">
      <header
        className="fixed bottom-0 left-0 w-full h-10
        bg-black/60 backdrop-blur-md
        text-white flex items-center justify-center text-sm z-20">
        <h1 className="text-lg font-semibold tracking-wide">
          Abhi Foodie
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-14">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full h-10
        bg-black/50 backdrop-blur-md
        text-white flex items-center justify-center text-sm z-20">
        © 2025 Abhi Foodie
      </footer>

    </div>
  );
};

export default DashboardLayout;
