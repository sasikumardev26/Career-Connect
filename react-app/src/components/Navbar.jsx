import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Job from "../assets/job.png";
import Logout from "../assets/logout.png";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("access");
  const role = localStorage.getItem("role");

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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <NavLink to="/home" className="flex items-center gap-3 group">

          <img
            src={Job}
            alt="JobQuest Logo"
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-slate-900">Job</span>
              <span className="text-blue-600">Quest</span>
            </h1>

            <p className="text-xs text-gray-500">
              Find Your Dream Career
            </p>
          </div>

        </NavLink>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          <NavLink to="/home" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={navLinkStyle}>
            Jobs
          </NavLink>

          <NavLink to="/my-applications" className={navLinkStyle}>
            My Applications
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

        </nav>

        {/* Logout */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 px-5 py-2 rounded-xl hover:bg-red-100 transition"
          >
            <img
              src={Logout}
              alt="Logout"
              className="w-5 h-5"
            />

            <span className="font-semibold text-red-600">
              Logout
            </span>
          </button>
        )}

      </div>

    </header>
  );
};

export default Navbar;