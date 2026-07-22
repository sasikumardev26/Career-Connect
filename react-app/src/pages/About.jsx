import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800">
              About JobQuest
            </h1>

            <p className="text-gray-600 mt-4 text-lg">
              Connecting talented job seekers with top companies across India.
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              JobQuest is an online job portal designed to connect talented
              job seekers with trusted employers. Our mission is to simplify
              the hiring process by providing a secure and user-friendly
              platform for finding jobs and hiring skilled professionals.
            </p>

            <p className="text-gray-600 leading-8 text-lg mt-5">
              Whether you're a fresher looking for your first opportunity or
              an experienced professional searching for your next career move,
              JobQuest helps you discover the right opportunities with ease.
            </p>

          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-white rounded-xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-4">
                🎯 Our Mission
              </h2>

              <p className="text-gray-600 leading-7">
                To build a reliable platform where employers and job seekers
                can connect efficiently and grow together.
              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-4">
                🚀 Our Vision
              </h2>

              <p className="text-gray-600 leading-7">
                To become one of the most trusted online job portals by
                providing quality opportunities and a seamless recruitment
                experience.
              </p>

            </div>

          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-lg p-10 mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Why Choose JobQuest?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>✅ Easy Job Search</div>
              <div>✅ Verified Companies</div>
              <div>✅ Fast Application Process</div>
              <div>✅ User-Friendly Interface</div>
              <div>✅ Secure Platform</div>
              <div>✅ Free for Job Seekers</div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;