import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [application, setApplication] = useState({
    application_name: "",
    email: "",
    phone: "",
    cover_letter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setApplication({
        ...application,
        resume: files[0],
      });
    } else {
      setApplication({
        ...application,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("application_name", application.application_name);
    formData.append("email", application.email);
    formData.append("phone", application.phone);
    formData.append("cover_letter", application.cover_letter);
    formData.append("resume", application.resume);
    formData.append("job", id);

    try {
      await axios.post(
        "http://127.0.0.1:8000/job/applications/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Application Submitted Successfully 🚀");

      navigate("/my-applications");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Apply");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-5">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Apply For Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="application_name"
              value={application.application_name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={application.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={application.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-semibold">
              Cover Letter
            </label>

            <textarea
              rows="5"
              name="cover_letter"
              value={application.cover_letter}
              onChange={handleChange}
              placeholder="Write a short cover letter..."
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="font-semibold">
              Upload Resume (PDF)
            </label>

            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border rounded-xl"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-bold transition"
          >
            Submit Application 🚀
          </button>

        </form>

      </div>

    </div>
  );
};

export default ApplyJob;