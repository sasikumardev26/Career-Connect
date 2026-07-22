import React from "react";
import StatusBadge from "./StatusBadge";

const ApplicationTable = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">
        My Applications
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="text-left p-4">Company</th>

              <th className="text-left p-4">Job Role</th>

              <th className="text-left p-4">Location</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-gray-50">

              <td className="p-4 font-semibold">
                Google
              </td>

              <td className="p-4">
                Frontend Developer
              </td>

              <td className="p-4">
                Bangalore
              </td>

              <td className="p-4">
                <StatusBadge status="Pending" />
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  View
                </button>
              </td>

            </tr>

            <tr className="border-b hover:bg-gray-50">

              <td className="p-4 font-semibold">
                TCS
              </td>

              <td className="p-4">
                Python Developer
              </td>

              <td className="p-4">
                Chennai
              </td>

              <td className="p-4">
                <StatusBadge status="Shortlisted" />
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  View
                </button>
              </td>

            </tr>

            <tr className="hover:bg-gray-50">

              <td className="p-4 font-semibold">
                Infosys
              </td>

              <td className="p-4">
                Full Stack Developer
              </td>

              <td className="p-4">
                Pune
              </td>

              <td className="p-4">
                <StatusBadge status="Rejected" />
              </td>

              <td className="p-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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

export default ApplicationTable;