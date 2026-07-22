import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/herosection.png";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Side */}
        <div className="flex-1">

          <p className="text-blue-600 font-semibold text-lg mb-3">
            🚀 Find Your Future
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Find Your
            <span className="text-blue-600"> Dream Job </span>
            Today
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
            Explore thousands of job opportunities from top companies.
            Build your career with confidence and apply in just one click.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/jobs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Browse Jobs
            </Link>

            <Link
              to="/register"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Get Started
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
              <p className="text-gray-500">Jobs Available</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">500+</h2>
              <p className="text-gray-500">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
              <p className="text-gray-500">Candidates</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">

          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-lg object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
