import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import RecruiterNavbar from "./components/RecruiterNavbar";
import AdminNavbar from "./components/AdminNavbar";
import AdminDashboard from "./pages/AdminDashboard";
import Homes from "./pages/Homes";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyApplications from "./pages/MyApplications";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";
import ManageJobs from "./pages/ManageJobs";
import EditJob from "./pages/EditJob";
import ViewApplicants from "./pages/ViewApplicants";

function App() {
  const location = useLocation();

  const token = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div>

      {/* Navbar */}

      {!hideNavbar && token && role === "student" && <Navbar />}

      {!hideNavbar && token && role === "recruiter" && (
        <RecruiterNavbar />
      )}

      {!hideNavbar && token && role === "admin" && (
        <AdminNavbar />
      )}

      <Routes>

        {/* Default */}

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Login */}

        <Route
          path="/login"
          element={
            token ? (
              role === "student" ? (
                <Navigate to="/home" replace />
              ) : role === "admin" ? (
                <Navigate to="/admin" replace />
              ) : (
                <Navigate to="/recruiter" replace />
              )
            ) : (
              <Login />
            )
          }
        />

        {/* Register */}

        <Route
          path="/register"
          element={
            token ? (
              role === "student" ? (
                <Navigate to="/home" replace />
              ) : role === "admin" ? (
                <Navigate to="/admin" replace />
              ) : (
                <Navigate to="/recruiter" replace />
              )
            ) : (
              <Register />
            )
          }
        />

        {/* ================= STUDENT ================= */}

        <Route
          path="/home"
          element={
            token && role === "student"
              ? <Homes />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/jobs"
          element={
            token && role === "student"
              ? <Jobs />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/job-details/:id"
          element={
            token && role === "student"
              ? <JobDetails />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/apply/:id"
          element={
            token && role === "student"
              ? <ApplyJob />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/my-applications"
          element={
            token && role === "student"
              ? <MyApplications />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/about"
          element={
            token && role === "student"
              ? <About />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/contact"
          element={
            token && role === "student"
              ? <Contact />
              : <Navigate to="/login" replace />
          }
        />

        {/* ================= RECRUITER ================= */}

        <Route
          path="/recruiter"
          element={
            token && role === "recruiter"
              ? <RecruiterDashboard />
              : <Navigate to="/login" replace />
          }
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            token && role === "admin"
              ? <AdminDashboard />
              : <Navigate to="/login" replace />
          }
        />

        {/* Shared Admin + Recruiter */}

        <Route
          path="/post-job"
          element={
            token &&
            (role === "admin" || role === "recruiter")
              ? <PostJob />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/manage-jobs"
          element={
            token &&
            (role === "admin" || role === "recruiter")
              ? <ManageJobs />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/edit-job/:id"
          element={
            token &&
            (role === "admin" || role === "recruiter")
              ? <EditJob />
              : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/view-applicants"
          element={
            token &&
            (role === "admin" || role === "recruiter")
              ? <ViewApplicants />
              : <Navigate to="/login" replace />
          }
        />

        {/* Invalid Route */}

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>

    </div>
  );
}

export default App;