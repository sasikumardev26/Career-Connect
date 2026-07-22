import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaBriefcase,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import Job from "../assets/job.png";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  const navStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <NavLink
          to="/recruiter"
          className="flex items-center gap-3"
        >
          <img
            src={Job}
            alt="JobQuest"
            className="w-12 h-12"
          />

          <div>
            <h1 className="text-3xl font-extrabold">
              <span className="text-black">Job</span>
              <span className="text-blue-600">Quest</span>
            </h1>

            <p className="text-xs text-gray-500">
              Admin Panel
            </p>
          </div>
        </NavLink>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-3">

          <NavLink
            to="/recruiter"
            className={navStyle}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            to="/post-job"
            className={navStyle}
          >
            <FaPlusCircle />
            Post Job
          </NavLink>

          <NavLink
            to="/manage-jobs"
            className={navStyle}
          >
            <FaBriefcase />
            Manage Jobs
          </NavLink>

          <NavLink
            to="/view-applicants"
            className={navStyle}
          >
            <FaUsers />
            Applicants
          </NavLink>

        </nav>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
};

export default AdminNavbar;