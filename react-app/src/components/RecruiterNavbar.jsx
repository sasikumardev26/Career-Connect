import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Job from "../assets/job.png";
import Logout from "../assets/logout.png";

const RecruiterNavbar = () => {
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) =>
    `relative font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
      isActive
        ? "text-blue-600 after:w-full"
        : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    }`;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <NavLink
          to="/recruiter"
          className="flex items-center gap-3"
        >
          <img
            src={Job}
            alt="JobQuest"
            className="w-14 h-14"
          />

          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-slate-900">Job</span>
              <span className="text-blue-600">Quest</span>
            </h1>

            <p className="text-xs text-gray-500">
              Recruiter Panel
            </p>
          </div>

        </NavLink>

        {/* Recruiter Menu */}
        <nav className="flex items-center gap-10">

          <NavLink
            to="/recruiter"
            className={navLinkStyle}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/post-job"
            className={navLinkStyle}
          >
            Post Job
          </NavLink>

          <NavLink
            to="/manage-jobs"
            className={navLinkStyle}
          >
            Manage Jobs
          </NavLink>

          <NavLink
            to="/view-applicants"
            className={navLinkStyle}
          >
            Applicants
          </NavLink>

        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 px-5 py-2 rounded-xl hover:bg-red-100"
        >
          <img
            src={Logout}
            alt="Logout"
            className="w-5 h-5"
          />

          <span className="text-red-600 font-semibold">
            Logout
          </span>

        </button>

      </div>

    </header>
  );
};

export default RecruiterNavbar;