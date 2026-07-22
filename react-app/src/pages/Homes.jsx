import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FeaturedCategories from "../components/FeaturedCategories";
import LatestJob from "../components/LatestJob";
import Footer from "../components/Footer";
import Instruction from "../assets/instruction.png";

const Homes = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() === "") {
      navigate("/jobs");
    } else {
      navigate(`/jobs?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 font-semibold text-lg mb-3">
              🚀 Find Your Future
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Find Your{" "}
              <span className="text-blue-600">
                Dream Job
              </span>{" "}
              Today
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Discover thousands of verified jobs from top companies across
              India. Search, apply and build your career with confidence.
            </p>

            {/* Search Box */}
            <div className="flex mt-8 shadow-lg rounded-lg overflow-hidden max-w-lg">

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                className="flex-1 px-5 py-4 outline-none"
              />

              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition duration-300"
              >
                Search
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  1000+
                </h2>
                <p className="text-gray-500">
                  Jobs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  500+
                </h2>
                <p className="text-gray-500">
                  Companies
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-600">
                  10K+
                </h2>
                <p className="text-gray-500">
                  Candidates
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src={Instruction}
              alt="Hero"
              className="w-full max-w-137.5 object-contain hover:scale-105 transition duration-500"
            />

          </div>

        </div>
      </section>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Latest Jobs */}
      <LatestJob />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homes;