import React from "react";

const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Shortlisted":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle()}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;