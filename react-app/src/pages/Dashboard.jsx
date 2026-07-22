import React from "react";
import Footer from "../components/Footer";
import DashboardStats from "../components/DashboardStats";
import ProfileCard from "../components/ProfileCard";
import ApplicationTable from "../components/ApplicationTable";

const Dashboard = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              User Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Welcome back! Here's an overview of your job applications.
            </p>
          </div>

          {/* Dashboard Stats */}
          <DashboardStats />

          {/* Profile + Applications */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Left */}
            <div>
              <ProfileCard />
            </div>

            {/* Right */}
            <div className="lg:col-span-2">
              <ApplicationTable />
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dashboard;