import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaBriefcase,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://career-connect-production-194e.up.railway.app/job/jobs/"
      );

      setJobs(response.data);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load jobs");
    }
  };

  const deleteJob = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `https://career-connect-production-194e.up.railway.app/job/jobs/${id}/`
      );

      toast.success("Job Deleted Successfully");

      fetchJobs();

    } catch (error) {

      console.log(error);

      toast.error("Delete Failed");

    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-extrabold text-gray-800">
              Manage Jobs
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all job postings from one place.
            </p>

          </div>

          <div className="mt-6 lg:mt-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl px-8 py-5 text-white">

            <div className="flex items-center gap-4">

              <FaBriefcase size={34} />

              <div>

                <p className="text-sm">
                  Total Jobs
                </p>

                <h2 className="text-3xl font-bold">
                  {jobs.length}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="relative mb-8">

          <FaSearch
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by Job Title or Company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl py-3 pl-12 pr-5 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow-xl">

          <table className="w-full">

            <thead className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">

              <tr>

                <th className="p-5 text-left">
                  Job Title
                </th>

                <th className="p-5 text-left">
                  Company
                </th>

                <th className="p-5 text-left">
                  Location
                </th>

                <th className="p-5 text-left">
                  Salary
                </th>

                <th className="p-5 text-left">
                  Type
                </th>

                <th className="p-5 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>
                            {filteredJobs.length > 0 ? (

                filteredJobs.map((job) => (

                  <tr
                    key={job.id}
                    className="border-b hover:bg-slate-50 transition-all duration-300"
                  >

                    <td className="p-5 font-semibold text-gray-800">
                      {job.title}
                    </td>

                    <td className="p-5">
                      <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                        {job.company}
                      </span>
                    </td>

                    <td className="p-5 text-gray-600">
                      {job.location}
                    </td>

                    <td className="p-5">
                      <span className="font-bold text-green-600 text-lg">
                        ₹ {job.salary}
                      </span>
                    </td>

                    <td className="p-5">
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {job.job_type}
                      </span>
                    </td>

                    <td className="p-5">

              <div className="flex justify-center gap-4">

                <Link
                  to={`/edit-job/${job.id}`}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-500 hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  <FaEdit />
                  Edit
                </Link>

                <button
                  onClick={() => deleteJob(job.id)}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-16"
                  >

                    <div className="flex flex-col items-center">

                      <FaBriefcase
                        className="text-gray-300 mb-4"
                        size={60}
                      />

                      <h2 className="text-2xl font-bold text-gray-500">
                        No Jobs Found
                      </h2>

                      <p className="text-gray-400 mt-2">
                        Try searching with another keyword.
                      </p>

                    </div>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ManageJobs;