import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaBriefcase,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaPlusCircle,
  FaArrowUp,
} from "react-icons/fa";

const RecruiterDashboard = () => {

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const jobsResponse = await axios.get(
        "http://127.0.0.1:8000/job/jobs/"
      );

      const applicationResponse = await axios.get(
        "http://127.0.0.1:8000/job/applications/"
      );

      setJobs(jobsResponse.data);
      setApplications(applicationResponse.data);

    } catch (error) {

      console.log(error);

    }

  };

  const activeJobs = jobs.filter(
    (job) => new Date(job.deadline) >= new Date()
  ).length;

  const closedJobs = jobs.filter(
    (job) => new Date(job.deadline) < new Date()
  ).length;

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-extrabold text-slate-800">
              Recruiter Dashboard
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              Welcome back. Here's your recruitment overview.
            </p>

          </div>

          <div className="mt-6 lg:mt-0 bg-white rounded-2xl shadow-xl px-8 py-5">

            <p className="text-gray-500 text-sm">
              Today's Summary
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              {jobs.length} Jobs
            </h2>

          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

          {/* Total Jobs */}

          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-3xl shadow-xl p-7">

            <div className="flex justify-between items-center">

              <FaBriefcase size={45} />

              <FaArrowUp className="opacity-70" />

            </div>

            <h2 className="text-5xl font-bold mt-6">
              {jobs.length}
            </h2>

            <p className="mt-2 text-blue-100">
              Total Jobs
            </p>

          </div>

          {/* Applications */}

          <div className="bg-linear-to-r from-green-500 to-emerald-600 text-white rounded-3xl shadow-xl p-7">

            <div className="flex justify-between items-center">

              <FaUsers size={45} />

              <FaArrowUp className="opacity-70" />

            </div>

            <h2 className="text-5xl font-bold mt-6">
              {applications.length}
            </h2>

            <p className="mt-2 text-green-100">
              Applications
            </p>

          </div>

          {/* Active Jobs */}

          <div className="bg-linear-to-r from-purple-600 to-fuchsia-600 text-white rounded-3xl shadow-xl p-7">

            <div className="flex justify-between items-center">

              <FaCheckCircle size={45} />

              <FaArrowUp className="opacity-70" />

            </div>

            <h2 className="text-5xl font-bold mt-6">
              {activeJobs}
            </h2>

            <p className="mt-2 text-purple-100">
              Active Jobs
            </p>

          </div>

          {/* Closed Jobs */}

          <div className="bg-linear-to-r from-red-500 to-rose-600 text-white rounded-3xl shadow-xl p-7">

            <div className="flex justify-between items-center">

              <FaTimesCircle size={45} />

              <FaArrowUp className="opacity-70" />

            </div>

            <h2 className="text-5xl font-bold mt-6">
              {closedJobs}
            </h2>

            <p className="mt-2 text-red-100">
              Closed Jobs
            </p>

          </div>

        </div>
                {/* Quick Actions */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <Link
            to="/post-job"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-600"
          >
            <FaPlusCircle className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold">
              Post New Job
            </h3>
            <p className="text-gray-500 mt-2">
              Create and publish a new job opening.
            </p>
          </Link>

          <Link
            to="/manage-jobs"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600"
          >
            <FaBriefcase className="text-4xl text-green-600 mb-4" />
            <h3 className="text-2xl font-bold">
              Manage Jobs
            </h3>
            <p className="text-gray-500 mt-2">
              Edit or remove existing job postings.
            </p>
          </Link>

          <Link
            to="/view-applicants"
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-purple-600"
          >
            <FaUsers className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold">
              View Applicants
            </h3>
            <p className="text-gray-500 mt-2">
              Review and manage candidate applications.
            </p>
          </Link>

        </div>

        {/* Recent Jobs */}

        <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-5">

            <h2 className="text-2xl font-bold text-white">
              Recent Job Posts
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left px-6 py-4">
                    Job Title
                  </th>

                  <th className="text-left px-6 py-4">
                    Company
                  </th>

                  <th className="text-left px-6 py-4">
                    Location
                  </th>

                  <th className="text-left px-6 py-4">
                    Type
                  </th>

                </tr>

              </thead>

              <tbody>

                {jobs.length > 0 ? (

                  jobs.slice(0, 5).map((job) => (

                    <tr
                      key={job.id}
                      className="border-b hover:bg-slate-50 transition"
                    >

                      <td className="px-6 py-4 font-semibold">
                        {job.title}
                      </td>

                      <td className="px-6 py-4">
                        🏢 {job.company}
                      </td>

                      <td className="px-6 py-4">
                        📍 {job.location}
                      </td>

                      <td className="px-6 py-4">

                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                          {job.job_type}
                        </span>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="4"
                      className="text-center py-12 text-gray-500"
                    >
                      No Jobs Posted Yet
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruiterDashboard;