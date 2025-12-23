import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Images from  "../assets/images"
const DashLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  



  return (
    <div className="w-full min-h-screen bg-gray-800">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-transparent backdrop-blur-md shadow-lg flex justify-between items-center px-6 z-50">

        {/* LOGO */}
        <div>
          <h1 className="text-xl md:text-3xl text-white font-semibold">
            Abhi Foodie
          </h1>
        </div>

        {/* DESKTOP MENU + SEARCH */}
        <div className="hidden lg:flex gap-16 items-center">
          <ul className="flex gap-8">
            <li className="text-md font-semibold text-white cursor-pointer hover:text-red-500 transition">
              Home
            </li>
            <li className="text-md font-semibold text-white cursor-pointer hover:text-red-500 transition">
              About
            </li>
            <li className="text-md font-semibold text-white cursor-pointer hover:text-red-500 transition">
              Menu
            </li>
            <li className="text-md font-semibold text-white cursor-pointer hover:text-red-500 transition">
              Contact
            </li>
          </ul>

          <form
            className="flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search"
              className="py-1 px-4 border border-gray-300 rounded-l-lg text-white bg-transparent placeholder:text-gray-300"
            />
            <button className="bg-red-500 text-white px-3 py-1.5 rounded-r-lg hover:bg-red-600 transition">
              Search
            </button>
          </form>
        </div>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden lg:flex gap-4">
          <button className="bg-red-500 text-white hover:bg-red-600 px-5 py-2 font-semibold rounded-lg transition">
            Login
          </button>
          <button className="border border-white text-white px-5 py-2 font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Sign Up
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full bg-gray-800 z-40 flex flex-col items-center gap-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4 text-center">
            <li className="text-white font-semibold hover:text-red-500">
              Home
            </li>
            <li className="text-white font-semibold hover:text-red-500">
              About
            </li>
            <li className="text-white font-semibold hover:text-red-500">
              Menu
            </li>
            <li className="text-white font-semibold hover:text-red-500">
              Contact
            </li>
          </ul>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex"
          >
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 rounded-l-md bg-transparent border text-white placeholder:text-gray-300"
            />
            <button className="bg-red-500 px-4 rounded-r-md text-white">
              Search
            </button>
          </form>

          <div className="flex gap-4">
            <button className="bg-red-500 px-5 py-2 rounded-lg text-white">
              Login
            </button>
            <button className="border border-white px-5 py-2 rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}

      <div>
        <Outlet />
      </div>

     

<div className="fixed bottom-0 w-full flex h-14 mt-8 text-center justify-center bg-red-800">
  footer Section
</div>


    </div>
  );
};

export default DashLayout;
