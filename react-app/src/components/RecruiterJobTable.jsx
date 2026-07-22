import React from "react";

const RecruiterJobTable = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">
        Posted Jobs
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>
            <tr className="bg-gray-100">

              <th className="text-left p-4">Job Title</th>

              <th className="text-left p-4">Location</th>

              <th className="text-left p-4">Salary</th>

              <th className="text-left p-4">Applications</th>

              <th className="text-left p-4">Action</th>

            </tr>
          </thead>

          <tbody>

            <tr className="border-b hover:bg-gray-50">

              <td className="p-4 font-semibold">
                Frontend Developer
              </td>

              <td className="p-4">
                Bangalore
              </td>

              <td className="p-4">
                ₹8 LPA
              </td>

              <td className="p-4">
                25
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  View
                </button>
              </td>

            </tr>

            <tr className="border-b hover:bg-gray-50">

              <td className="p-4 font-semibold">
                Python Developer
              </td>

              <td className="p-4">
                Chennai
              </td>

              <td className="p-4">
                ₹6 LPA
              </td>

              <td className="p-4">
                18
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  View
                </button>
              </td>

            </tr>

            <tr className="hover:bg-gray-50">

              <td className="p-4 font-semibold">
                Full Stack Developer
              </td>

              <td className="p-4">
                Pune
              </td>

              <td className="p-4">
                ₹10 LPA
              </td>

              <td className="p-4">
                12
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                  View
                </button>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecruiterJobTable;