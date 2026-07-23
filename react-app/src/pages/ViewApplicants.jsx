import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FaUserTie,
  FaUsers,
  FaGoogle,
  FaBuilding,
  FaBriefcase,
  FaFileAlt,
  FaCheck,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const ViewApplicants = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const applicantsPerPage = 5;

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "https://career-connect-production-194e.up.railway.app/job/applications/"
      );

      setApplications(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load applicants");
    }
  };

  const updateStatus = async (id, status) => {
    const confirmMessage =
      status === "Accepted"
        ? "Are you sure you want to accept this application?"
        : "Are you sure you want to reject this application?";

    if (!window.confirm(confirmMessage)) return;

    try {
      await axios.patch(
        `https://career-connect-production-194e.up.railway.app/job/applications/${id}/`,
        { status }
      );

      fetchApplications();

      toast.success(
        status === "Accepted"
          ? "Application Accepted Successfully"
          : "Application Rejected Successfully"
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to update application");
    }
  };

  const filteredApplications = applications.filter((app) =>
    app.application_name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant =
    indexOfLastApplicant - applicantsPerPage;

  const currentApplicants = filteredApplications.slice(
    indexOfFirstApplicant,
    indexOfLastApplicant
  );

  const totalPages = Math.ceil(
    filteredApplications.length / applicantsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Applicants Management
            </h1>

            <p className="text-gray-500 mt-2">
              Review and manage all job applicants
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-8 py-5 flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <FaBuilding className="text-4xl text-blue-600" />
            </div>

            <div>
              <p className="text-gray-500">
                Total Applicants
              </p>

              <h2 className="text-3xl font-bold text-blue-600">
                {applications.length}
              </h2>
            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-2xl shadow-lg p-5 mb-8">

          <div className="relative">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search Applicant..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600"
            />

          </div>

        </div>

        {/* Table Starts Here */}
        <div className="w-full overflow-x-auto rounded-2xl bg-white shadow-lg">

  <table className="min-w-full table-auto">

    <thead className="bg-slate-800 text-white">

      <tr>
        <th className="px-6 py-4 text-left">Company</th>
        <th className="px-6 py-4 text-left">Applicant</th>
        <th className="px-6 py-4 text-left">Email</th>
        <th className="px-6 py-4 text-left">Phone</th>
        <th className="px-6 py-4 text-center">Status</th>
        <th className="px-6 py-4 text-center">Resume</th>
        <th className="px-6 py-4 text-center">Actions</th>
      </tr>

    </thead>

    <tbody>

      {currentApplicants.length > 0 ? (

        currentApplicants.map((app) => (

          <tr
            key={app.id}
            className="border-b hover:bg-slate-50 transition duration-300"
          >

            {/* Company */}

            <td className="px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">

                  {app.company?.toLowerCase() === "google" ? (
                    <FaGoogle className="text-red-500 text-2xl" />
                  ) : app.company?.toLowerCase() === "amazon" ? (
                    <FaBuilding className="text-yellow-600 text-2xl" />
                  ) : (
                    <FaBriefcase className="text-blue-600 text-2xl" />
                  )}

                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {app.company}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {app.job_title}
                  </p>

                </div>

              </div>

            </td>

            {/* Applicant */}

            <td className="px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUserTie className="text-blue-600" />
                </div>

                <span className="font-medium">
                  {app.application_name}
                </span>

              </div>

            </td>

            {/* Email */}

            <td className="px-6 py-5">
              {app.email}
            </td>

            {/* Phone */}

            <td className="px-6 py-5">
              {app.phone}
            </td>

            {/* Status */}

            <td className="px-6 py-5 text-center">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  app.status === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {app.status}
              </span>

            </td>

            {/* Resume */}

            <td className="px-6 py-5 text-center">

              <a
                href={app.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
              >
                <FaFileAlt />
                Resume
              </a>

            </td>

            {/* Actions */}

            <td className="px-3 py-2 text-sm">

              <div className="flex justify-center gap-3">

                <button
                  onClick={() => updateStatus(app.id, "Accepted")}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
                >
                  <FaCheck />
                  Accept
                </button>

                <button
                  onClick={() => updateStatus(app.id, "Rejected")}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
                >
                  <FaTimes />
                  Reject
                </button>

              </div>

            </td>

          </tr>

        ))

      ) : (
                <tr>
          <td
            colSpan="7"
            className="text-center py-16 text-gray-500 text-lg"
          >
            No Applicants Found
          </td>
        </tr>

      )}

    </tbody>

  </table>

  {/* Footer */}

  <div className="flex flex-col md:flex-row justify-between items-center gap-5 border-t bg-slate-50 px-8 py-6">

    <p className="text-gray-600 font-medium">
      Showing{" "}
      {filteredApplications.length === 0
        ? 0
        : indexOfFirstApplicant + 1}
      {" - "}
      {Math.min(indexOfLastApplicant, filteredApplications.length)}
      {" of "}
      {filteredApplications.length} Applicants
    </p>

    <div className="flex items-center gap-2">

      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded-lg font-semibold transition ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next */}

      <button
        disabled={
          currentPage === totalPages || totalPages === 0
        }
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className={`px-4 py-2 rounded-lg border transition ${
          currentPage === totalPages || totalPages === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        Next
      </button>

    </div>

  </div>

</div>

      </div>

    </div>
  );
};

export default ViewApplicants;