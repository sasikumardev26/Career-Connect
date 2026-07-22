import React from "react";

const RecruiterStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500">Total Jobs</h3>
        <h1 className="text-4xl font-bold text-blue-600 mt-3">15</h1>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500">Applications</h3>
        <h1 className="text-4xl font-bold text-green-600 mt-3">120</h1>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500">Shortlisted</h3>
        <h1 className="text-4xl font-bold text-yellow-500 mt-3">40</h1>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500">Rejected</h3>
        <h1 className="text-4xl font-bold text-red-500 mt-3">25</h1>
      </div>

    </div>
  );
};

export default RecruiterStats;