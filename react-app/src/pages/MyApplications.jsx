import React, { useEffect, useState } from "react";
import axios from "axios";

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/job/applications/"
      );

      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          My Applications
        </h1>

        {applications.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold">
              No Applications Found
            </h2>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {applications.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold">
                  {item.application_name}
                </h2>

                <p className="text-gray-600 mt-2">
                  📧 {item.email}
                </p>

                <p className="text-gray-600">
                  📞 {item.phone}
                </p>

                <p className="mt-3">
                  <span className="font-semibold">
                    Status :
                  </span>{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      item.status === "Pending"
                        ? "bg-yellow-500"
                        : item.status === "Accepted"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </p>

                <p className="mt-3 text-gray-500">
                  Applied On :
                  <br />
                  {new Date(item.applied_at).toLocaleDateString()}
                </p>

                {item.resume && (
                  <a
                    href={`http://127.0.0.1:8000${item.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 text-blue-600 font-semibold"
                  >
                    📄 View Resume
                  </a>
                )}
              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default MyApplications;