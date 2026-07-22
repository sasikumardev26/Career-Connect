import React from "react";

const FilterSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Job Type */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">
          Job Type
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            <span>Full Time</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            <span>Part Time</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            <span>Internship</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            <span>Remote</span>
          </label>

        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">
          Experience
        </h3>

        <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All</option>
          <option>Fresher</option>
          <option>1 - 2 Years</option>
          <option>3 - 5 Years</option>
          <option>5+ Years</option>
        </select>
      </div>

      {/* Salary */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-3">
          Salary
        </h3>

        <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Any Salary</option>
          <option>₹3 LPA+</option>
          <option>₹5 LPA+</option>
          <option>₹8 LPA+</option>
          <option>₹10 LPA+</option>
          <option>₹15 LPA+</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-lg font-semibold mb-3">
          Location
        </h3>

        <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Locations</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Hyderabad</option>
          <option>Pune</option>
          <option>Remote</option>
        </select>
      </div>

      {/* Clear Filters Button */}
     <button className="w-full bg-red-500 text-white py-3 rounded-lg mt-6 hover:bg-red-600 transition">
  Clear Filters
     </button>

    </div>
  );
};

export default FilterSidebar;