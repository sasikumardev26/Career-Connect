import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold">
            <span className="text-white">Job</span>
            <span className="text-blue-500">Quest</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            JobQuest is a modern job portal that connects talented job seekers
            with top companies across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/jobs" className="text-gray-400 hover:text-white transition">
                Jobs
              </Link>
            </li>

            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Trichy, Tamil Nadu
          </p>

          <p className="text-gray-400 mt-3">
             📧 sasikumar@gmail.com
          </p>

          <p className="text-gray-400 mt-3">
            📞 +91 9345063461
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl mt-4">

          <a href="#">
            <FaFacebook className="text-gray-400 hover:text-blue-500 transition duration-300" />
          </a>

          <a href="#">
            <FaInstagram className="text-gray-400 hover:text-pink-500 transition duration-300" />
          </a>

          <a href="#">
            <FaLinkedin className="text-gray-400 hover:text-blue-400 transition duration-300" />
          </a>

          <a href="#">
            <FaGithub className="text-gray-400 hover:text-white transition duration-300" />
          </a>

        </div>

        

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 JobQuest. All rights reserved. Designed by Sasi Kumar.
      </div>
      </div>

    </footer>
    
  );
};

export default Footer;