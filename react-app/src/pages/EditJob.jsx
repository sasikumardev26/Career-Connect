import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaTools,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

const EditJob = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    job_type: "",
    experience: "",
    skills: "",
    vacancies: "",
    deadline: "",
  });

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {

    try {

      const response = await axios.get(
        `http://127.0.0.1:8000/job/jobs/${id}/`
      );

      setJob(response.data);

    } catch (error) {

      console.log(error);

      toast.error("Failed to load job");

    }

  };

  const handleChange = (e) => {

    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });

  };

  const updateJob = async (e) => {

    e.preventDefault();

    try {

      await axios.patch(
        `http://127.0.0.1:8000/job/jobs/${id}/`,
        job
      );

      toast.success("🎉 Job Updated Successfully");

      navigate("/manage-jobs");

    } catch (error) {

      console.log(error);

      toast.error("Failed to Update Job");

    }

  };

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold text-slate-800">
            Edit Job
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Update your existing job posting.
          </p>

        </div>

        {/* Form */}

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <form
            onSubmit={updateJob}
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >

            {/* Job Title */}

            <div>

              <label className="font-semibold text-gray-700">
                Job Title
              </label>

              <div className="relative mt-2">

                <FaBriefcase className="absolute left-4 top-4 text-blue-500" />

                <input
                  type="text"
                  name="title"
                  value={job.title}
                  onChange={handleChange}
                  placeholder="Enter Job Title"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Company */}

            <div>

              <label className="font-semibold text-gray-700">
                Company
              </label>

              <div className="relative mt-2">

                <FaBuilding className="absolute left-4 top-4 text-blue-500" />

                <input
                  type="text"
                  name="company"
                  value={job.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Location */}

            <div>

              <label className="font-semibold text-gray-700">
                Location
              </label>

              <div className="relative mt-2">

                <FaMapMarkerAlt className="absolute left-4 top-4 text-red-500" />

                <input
                  type="text"
                  name="location"
                  value={job.location}
                  onChange={handleChange}
                  placeholder="Job Location"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Salary */}

            <div>

              <label className="font-semibold text-gray-700">
                Salary
              </label>

              <div className="relative mt-2">

                <FaMoneyBillWave className="absolute left-4 top-4 text-green-500" />

                <input
                  type="number"
                  name="salary"
                  value={job.salary}
                  onChange={handleChange}
                  placeholder="Salary"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>
                        {/* Job Type */}

            <div>

              <label className="font-semibold text-gray-700">
                Job Type
              </label>

              <select
                name="job_type"
                value={job.job_type}
                onChange={handleChange}
                className="w-full mt-2 border-2 rounded-xl py-3 px-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">💼 Full Time</option>
                <option value="Part Time">⏰ Part Time</option>
                <option value="Internship">🎓 Internship</option>
                <option value="Remote">🌍 Remote</option>
              </select>

            </div>

            {/* Experience */}

            <div>

              <label className="font-semibold text-gray-700">
                Experience
              </label>

              <div className="relative mt-2">

                <FaUserTie className="absolute left-4 top-4 text-purple-500" />

                <input
                  type="text"
                  name="experience"
                  value={job.experience}
                  onChange={handleChange}
                  placeholder="Experience"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Skills */}

            <div className="md:col-span-2">

              <label className="font-semibold text-gray-700">
                Skills
              </label>

              <div className="relative mt-2">

                <FaTools className="absolute left-4 top-4 text-orange-500" />

                <input
                  type="text"
                  name="skills"
                  value={job.skills}
                  onChange={handleChange}
                  placeholder="React, Django, Python..."
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Vacancies */}

            <div>

              <label className="font-semibold text-gray-700">
                Vacancies
              </label>

              <div className="relative mt-2">

                <FaUsers className="absolute left-4 top-4 text-green-500" />

                <input
                  type="number"
                  name="vacancies"
                  value={job.vacancies}
                  onChange={handleChange}
                  placeholder="Vacancies"
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Deadline */}

            <div>

              <label className="font-semibold text-gray-700">
                Deadline
              </label>

              <div className="relative mt-2">

                <FaCalendarAlt className="absolute left-4 top-4 text-red-500" />

                <input
                  type="date"
                  name="deadline"
                  value={job.deadline}
                  onChange={handleChange}
                  className="w-full border-2 rounded-xl py-3 pl-12 pr-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
                />

              </div>

            </div>

            {/* Description */}

            <div className="md:col-span-2">

              <label className="font-semibold text-gray-700">
                Job Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={job.description}
                onChange={handleChange}
                placeholder="Enter detailed job description..."
                className="w-full mt-2 border-2 rounded-xl p-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none resize-none"
              />

            </div>

            {/* Buttons */}

            <div className="md:col-span-2 flex justify-end gap-4 mt-4">

              <button
                type="button"
                onClick={() => navigate("/manage-jobs")}
                className="px-8 py-3 rounded-xl border-2 border-gray-300 font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-10 py-3 rounded-xl bg-linear-to-r from-green-600 to-emerald-600 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                ✅ Update Job
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
};

export default EditJob;