import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message Sent Successfully ✅");

    setContactData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-pink-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-2xl">
                    Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Trichy, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-pink-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-2xl">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 9345063461
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-2xl">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    sasikumar@jobquest.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-gray-500 text-2xl mt-1" />

                <div>
                  <h3 className="font-bold text-2xl">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Friday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h2 className="text-4xl font-bold mb-8">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                rows="6"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;