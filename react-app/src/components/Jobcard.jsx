import React from "react";
import { Link } from "react-router-dom";

const Jobcard = ({ job }) => {

  // Safety Check
  if (!job) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">

      {/* Company & Job Type */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {job.company}
        </h2>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          {job.job_type}
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-xl font-semibold mt-4">
        {job.title}
      </h3>

      {/* Location */}
      <p className="text-gray-500 mt-2">
        📍 {job.location}
      </p>

      {/* Salary */}
      <p className="text-green-600 font-bold mt-2">
        💰 ₹{job.salary.toLocaleString()}
      </p>

      {/* Experience */}
      <p className="text-gray-700 mt-2">
        Experience: {job.experience}
      </p>

      {/* Vacancies */}
      <p className="text-gray-700 mt-2">
        Vacancies: {job.vacancies}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {job.skills?.split(",").map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
          >
            {skill.trim()}
          </span>
        ))}
      </div>

      {/* Deadline */}
      <p className="text-red-500 text-sm mt-4">
        📅 Last Date: {job.deadline}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">

        <Link
            to={`/apply/${job.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-center"
          >
            Apply Now
        </Link>

        <Link
          to={`/job-details/${job.id}`}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default Jobcard;