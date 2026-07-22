import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">
        My Profile
      </h2>

      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
          S
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-4">

        <div>
          <h3 className="text-gray-500 text-sm">
            Full Name
          </h3>

          <p className="text-lg font-semibold">
            Sasi Kumar
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm">
            Email
          </h3>

          <p className="text-lg font-semibold">
            sasikumar@gmail.com
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm">
            Phone
          </h3>

          <p className="text-lg font-semibold">
            +91 93450 XXXXX
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 text-sm">
            Location
          </h3>

          <p className="text-lg font-semibold">
            Trichy, Tamil Nadu
          </p>
        </div>

      </div>

      {/* Edit Button */}
      <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
        Edit Profile
      </button>

    </div>
  );
};

export default ProfileCard;