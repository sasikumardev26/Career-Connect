import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Jobcard from "../components/Jobcard";
import Loading from "../components/Loading";

const Jobs = () => {
  const locationData = useLocation();

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  // Read search from Home page
  useEffect(() => {
    const params = new URLSearchParams(locationData.search);
    const keyword = params.get("search");

    if (keyword) {
      setSearch(keyword);
    }
  }, [locationData]);

  useEffect(() => {
    filterJobs();
  }, [search, location, jobType, jobs]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/job/jobs/"
      );

      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    let data = [...jobs];

    // Search
    if (search.trim() !== "") {
      const keyword = search.toLowerCase();

      data = data.filter(
        (job) =>
          job.title?.toLowerCase().includes(keyword) ||
          job.company?.toLowerCase().includes(keyword) ||
          job.location?.toLowerCase().includes(keyword) ||
          job.skills?.toLowerCase().includes(keyword)
      );
    }

    // Location
    if (location !== "") {
      data = data.filter(
        (job) =>
          job.location?.toLowerCase() ===
          location.toLowerCase()
      );
    }

    // Job Type
    if (jobType !== "") {
      data = data.filter(
        (job) =>
          job.job_type?.toLowerCase() ===
          jobType.toLowerCase()
      );
    }

    setFilteredJobs(data);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Find Your Dream Job
        </h1>

        {/* Search & Filters */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">

          <div className="grid md:grid-cols-3 gap-5">

            <input
              type="text"
              placeholder="🔍 Search Job..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              <option>Chennai</option>
              <option>Coimbatore</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Remote</option>
            </select>

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Job Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>

          </div>

        </div>

        {/* Jobs Count */}

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            {filteredJobs.length} Job(s) Found
          </h2>
        </div>

        {/* Job Cards */}

        {filteredJobs.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredJobs.map((job) => (
              <Jobcard
                key={job.id}
                job={job}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl shadow-lg py-20 text-center">

            <h2 className="text-3xl font-bold text-gray-700">
              😔 No Jobs Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try changing your search or filters.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default Jobs;