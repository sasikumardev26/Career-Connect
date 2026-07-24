import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImage from "../assets/image.png";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    role: "student",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        
        "https://career-connect-production-194e.up.railway.app/authentication/register/",
        {
          username: formData.username.trim(),
          email: formData.email.trim(),
          phone_number: formData.phone_number.trim(),
          role: formData.role,
          password: formData.password,
        }
      );

      toast.success("🎉 Account Created Successfully");

      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);

      if (error.response?.data) {
        const errors = error.response.data;

        if (errors.username) {
          toast.error(errors.username[0]);
        } else if (errors.email) {
          toast.error(errors.email[0]);
        } else if (errors.phone_number) {
          toast.error(errors.phone_number[0]);
        } else if (errors.password) {
          toast.error(errors.password[0]);
        } else {
          toast.error("Registration Failed");
        }
      } else {
        toast.error("Server Error");
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 items-center justify-center p-12">
        <div className="text-center text-white max-w-md">

          <img
            src={LoginImage}
            alt="Register"
            className="w-80 mx-auto mb-8"
          />

          <h1 className="text-4xl font-bold mb-4">
            Join CareerConnect
          </h1>

          <p className="text-lg text-blue-100 leading-relaxed">
            Create your account and discover thousands of job opportunities.
            Start building your dream career today.
          </p>

        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Register to continue
          </p>

          <form onSubmit={handleRegister} className="space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="student">Student</option>
                
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-700 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;