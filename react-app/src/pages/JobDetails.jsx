import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaUsers,
  FaCalendarAlt,
  FaArrowLeft,
} from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await axios.get(
        `https://career-connect-production-194e.up.railway.app/job/jobs/${id}/`
      );

      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-5">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline"
        >
          <FaArrowLeft />
          Back to Jobs
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-linear-to-r from-blue-700 to-blue-500 text-white p-10">

            <div className="flex flex-col md:flex-row justify-between items-start">

              <div>
                <h1 className="text-4xl font-bold">
                  {job.title}
                </h1>

                <p className="text-xl mt-2 opacity-90">
                  {job.company}
                </p>
              </div>

              <span className="mt-5 md:mt-0 bg-white text-blue-700 px-6 py-2 rounded-full font-bold">
                {job.job_type}
              </span>

            </div>

          </div>

          {/* Body */}
          <div className="p-10">

            {/* Job Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <FaMapMarkerAlt className="text-red-500 text-2xl mx-auto mb-2" />
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">{job.location}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <FaMoneyBillWave className="text-green-500 text-2xl mx-auto mb-2" />
                <p className="font-semibold">Salary</p>
                <p className="text-gray-600">₹{job.salary}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <FaBriefcase className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="font-semibold">Experience</p>
                <p className="text-gray-600">{job.experience}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <FaUsers className="text-purple-500 text-2xl mx-auto mb-2" />
                <p className="font-semibold">Vacancies</p>
                <p className="text-gray-600">{job.vacancies}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <FaCalendarAlt className="text-orange-500 text-2xl mx-auto mb-2" />
                <p className="font-semibold">Deadline</p>
                <p className="text-gray-600">{job.deadline}</p>
              </div>

            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Job Description
              </h2>

              <p className="text-gray-600 leading-8">
                {job.description}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Required Skills
              </h2>

              <div className="flex flex-wrap gap-3">

                {job.skills &&
                  job.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                    >
                      {skill.trim()}
                    </span>
                  ))}

              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-12">

              <Link
                to={`/apply/${job.id}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-center text-white py-4 rounded-xl text-lg font-bold transition duration-300"
              >
                Apply Now 🚀
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;