import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaUserTie,
  FaUserShield,
  FaBriefcase,
  FaFileAlt,
  FaArrowUp,
  FaArrowDown,
  FaClock,
  FaPlusCircle,
  FaUserCheck,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const usersResponse = await axios.get(
        "http://127.0.0.1:8000/authentication/users/"
      );

      const jobsResponse = await axios.get(
        "http://127.0.0.1:8000/job/jobs/"
      );

      const applicationResponse = await axios.get(
        "http://127.0.0.1:8000/job/applications/"
      );

      setUsers(usersResponse.data);
      setJobs(jobsResponse.data);
      setApplications(applicationResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const students = users.filter(
    (user) => user.role === "student"
  ).length;

  const recruiters = users.filter(
    (user) => user.role === "recruiter"
  ).length;

  const admins = users.filter(
    (user) => user.role === "admin"
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-extrabold text-slate-800">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Welcome back! Here's your complete portal overview.
            </p>

          </div>

          <div className="mt-6 md:mt-0 bg-white shadow-xl rounded-3xl px-8 py-6">

            <h4 className="text-gray-500">
              Total Users
            </h4>

            <h1 className="text-5xl font-bold text-blue-600 mt-2">
              {users.length}
            </h1>

          </div>

        </div>

        {/* Stats */}

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">

          {/* Students */}

          <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl hover:scale-105 duration-300">

            <div className="flex justify-between">

              <FaUsers size={45} />

              <FaArrowUp />

            </div>

            <h1 className="text-5xl font-bold mt-8">
              {students}
            </h1>

            <p className="mt-2 text-lg">
              Students
            </p>

          </div>

          {/* Recruiters */}

          <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl hover:scale-105 duration-300">

            <div className="flex justify-between">

              <FaUserTie size={45} />

              <FaArrowUp />

            </div>

            <h1 className="text-5xl font-bold mt-8">
              {recruiters}
            </h1>

            <p className="mt-2 text-lg">
              Recruiters
            </p>

          </div>

          {/* Admin */}

          <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl hover:scale-105 duration-300">

            <div className="flex justify-between">

              <FaUserShield size={45} />

              <FaArrowUp />

            </div>

            <h1 className="text-5xl font-bold mt-8">
              {admins}
            </h1>

            <p className="mt-2 text-lg">
              Admins
            </p>

          </div>

          {/* Jobs */}

          <div className="bg-linear-to-r from-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl hover:scale-105 duration-300">

            <div className="flex justify-between">

              <FaBriefcase size={45} />

              <FaArrowUp />

            </div>

            <h1 className="text-5xl font-bold mt-8">
              {jobs.length}
            </h1>

            <p className="mt-2 text-lg">
              Total Jobs
            </p>

          </div>

          {/* Applications */}

          <div className="bg-linear-to-r from-cyan-500 to-blue-500 rounded-3xl p-6 text-white shadow-xl hover:scale-105 duration-300">

            <div className="flex justify-between">

              <FaFileAlt size={45} />

              <FaArrowUp />

            </div>

            <h1 className="text-5xl font-bold mt-8">
              {applications.length}
            </h1>

            <p className="mt-2 text-lg">
              Applications
            </p>

          </div>

        </div>
                {/* Quick Actions */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <FaPlusCircle className="text-5xl text-blue-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Add Job
            </h2>

            <p className="text-gray-500 mt-2">
              Post a new job opening
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <FaUsers className="text-5xl text-green-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Users
            </h2>

            <p className="text-gray-500 mt-2">
              Manage all users
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <FaUserCheck className="text-5xl text-purple-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Recruiters
            </h2>

            <p className="text-gray-500 mt-2">
              Verify recruiters
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <FaFileAlt className="text-5xl text-orange-600 mb-4" />

            <h2 className="text-2xl font-bold">
              Applications
            </h2>

            <p className="text-gray-500 mt-2">
              Review applications
            </p>
          </div>

        </div>

        {/* Performance Overview */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Recent Activity */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-6">

              <FaClock className="text-blue-600 text-3xl" />

              <h2 className="text-3xl font-bold">
                Recent Activity
              </h2>

            </div>

            <div className="space-y-5">

              <div className="flex justify-between border-b pb-3">

                <div>

                  <h3 className="font-semibold">
                    New Student Registered
                  </h3>

                  <p className="text-gray-500 text-sm">
                    A new student joined the portal.
                  </p>

                </div>

                <span className="text-green-600 font-semibold">
                  Today
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <div>

                  <h3 className="font-semibold">
                    New Job Posted
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Recruiter posted a React Developer job.
                  </p>

                </div>

                <span className="text-blue-600 font-semibold">
                  Today
                </span>

              </div>

              <div className="flex justify-between border-b pb-3">

                <div>

                  <h3 className="font-semibold">
                    Application Submitted
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Candidate applied for Python Developer.
                  </p>

                </div>

                <span className="text-purple-600 font-semibold">
                  2 hrs ago
                </span>

              </div>

              <div className="flex justify-between">

                <div>

                  <h3 className="font-semibold">
                    Recruiter Approved
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Admin approved recruiter account.
                  </p>

                </div>

                <span className="text-red-600 font-semibold">
                  Yesterday
                </span>

              </div>

            </div>

          </div>

          {/* Performance Card */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Performance
            </h2>

            <div className="space-y-8">

              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold">
                    User Growth
                  </span>

                  <span className="text-blue-600 font-bold">
                    85%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div className="bg-blue-600 h-4 rounded-full w-10/12"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold">
                    Job Posts
                  </span>

                  <span className="text-green-600 font-bold">
                    70%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div className="bg-green-600 h-4 rounded-full w-8/12"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span className="font-semibold">
                    Applications
                  </span>

                  <span className="text-purple-600 font-bold">
                    92%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4">

                  <div className="bg-purple-600 h-4 rounded-full w-11/12"></div>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Recent Jobs & Latest Users */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Recent Jobs */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
              <h2 className="text-2xl font-bold">
                Recent Job Posts
              </h2>
            </div>

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Title</th>

                  <th className="p-4 text-left">Company</th>

                  <th className="p-4 text-left">Location</th>

                  <th className="p-4 text-left">Type</th>

                </tr>

              </thead>

              <tbody>

                {jobs.slice(0,5).map((job) => (

                  <tr
                    key={job.id}
                    className="border-b hover:bg-blue-50 transition"
                  >

                    <td className="p-4 font-semibold">
                      {job.title}
                    </td>

                    <td className="p-4">
                      {job.company}
                    </td>

                    <td className="p-4">
                      {job.location}
                    </td>

                    <td className="p-4">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                        {job.job_type}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Latest Users */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white px-6 py-4">

              <h2 className="text-2xl font-bold">
                Latest Users
              </h2>

            </div>

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">
                    Username
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.slice(0,5).map((user) => (

                  <tr
                    key={user.id}
                    className="border-b hover:bg-green-50 transition"
                  >

                    <td className="p-4 font-semibold">
                      {user.username}
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : user.role === "recruiter"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >

                        {user.role}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Latest Applications */}

        <div className="mt-10 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-4">

            <h2 className="text-2xl font-bold">
              Latest Applications
            </h2>

          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

              </tr>

            </thead>

            <tbody>

              {applications.slice(0,5).map((application) => (

                <tr
                  key={application.id}
                  className="border-b hover:bg-cyan-50 transition"
                >

                  <td className="p-4 font-semibold">
                    {application.application_name}
                  </td>

                  <td className="p-4">
                    {application.email}
                  </td>

                  <td className="p-4">
                    {application.phone}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
                {/* Footer */}

        <div className="mt-10 bg-linear-to-r from-slate-800 to-slate-900 rounded-3xl text-white p-8 shadow-xl">

          <div className="grid md:grid-cols-3 gap-8">

            {/* Portal Summary */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Job Portal
              </h2>

              <p className="text-gray-300 leading-7">
                Manage students, recruiters, jobs and applications
                from one powerful admin dashboard.
              </p>

            </div>

            {/* Statistics */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                Summary
              </h2>

              <ul className="space-y-2 text-gray-300">

                <li>Total Users : {users.length}</li>

                <li>Total Jobs : {jobs.length}</li>

                <li>Total Applications : {applications.length}</li>

                <li>Recruiters : {recruiters}</li>

                <li>Students : {students}</li>

              </ul>

            </div>

            {/* Status */}

            <div>

              <h2 className="text-2xl font-bold mb-4">
                System Status
              </h2>

              <div className="flex items-center gap-3 mb-3">

                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                <span>Server Running</span>

              </div>

              <div className="flex items-center gap-3 mb-3">

                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                <span>Database Connected</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>

                <span>Admin Logged In</span>

              </div>

            </div>

          </div>

          <hr className="my-8 border-slate-700" />

          <div className="text-center text-gray-400">

            © {new Date().getFullYear()} Job Portal Admin Dashboard.
            All Rights Reserved.

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;