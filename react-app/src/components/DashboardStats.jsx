import React from "react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Applications */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500 text-lg">
          Total Applications
        </h3>

        <h1 className="text-4xl font-bold text-blue-600 mt-3">
          12
        </h1>
      </div>

      {/* Active Jobs */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500 text-lg">
          Active Jobs
        </h3>

        <h1 className="text-4xl font-bold text-green-600 mt-3">
          5
        </h1>
      </div>

      {/* Shortlisted */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500 text-lg">
          Shortlisted
        </h3>

        <h1 className="text-4xl font-bold text-yellow-500 mt-3">
          3
        </h1>
      </div>

      {/* Rejected */}
      <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
        <h3 className="text-gray-500 text-lg">
          Rejected
        </h3>

        <h1 className="text-4xl font-bold text-red-500 mt-3">
          4
        </h1>
      </div>

    </div>
  );
};

export default DashboardStats;