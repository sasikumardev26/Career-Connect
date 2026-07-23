import React, { useState } from "react";
import axios from "axios";
import LoginImage from "../assets/image.png";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://career-connect-production-194e.up.railway.app/authentication/login/",
        loginData
      );

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);

      toast.success("🎉 Login Successful");

      setTimeout(() => {

      if (response.data.role === "student") {
       navigate("/home");
       }

      else if (response.data.role === "recruiter") {
       navigate("/recruiter");
      }

      else if (response.data.role === "admin") {
       navigate("/admin");
      }

      }, 1200);

    } catch (error) {
      console.log(error);

      if (error.response) {
        toast.error("❌ Invalid Username or Password");
      } else {
        toast.error("⚠️ Server Error");
      }
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 items-center justify-center p-12">

        <div className="text-center text-white">

          <h1 className="text-5xl font-bold">
            Job
            <span className="text-yellow-300">
              Quest
            </span>
          </h1>

          <img
            src={LoginImage}
            alt="Login"
            className="w-96 mt-10 mx-auto"
          />

        </div>

      </div>

      {/* Right Side */}

      <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">

        <form
          onSubmit={handleLogin}
          className="bg-white shadow-2xl rounded-2xl p-10 w-112.5"
        >

          <h2 className="text-4xl font-bold text-center mb-8">
            Login
          </h2>

          {/* Username */}

          <div className="mb-5">

            <label className="font-semibold">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="w-full mt-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Password */}

          <div className="mb-6">

            <label className="font-semibold">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full p-3 pr-12 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                {showPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Login
          </button>

          {/* Register */}

          <p className="text-center mt-6 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;