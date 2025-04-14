import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {/* Left Column */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">HealthWise</h3>
          <p className="text-sm mb-3 leading-relaxed">
            Early disease detection and risk assessment platform for diabetes, heart disease, and COVID-19. Empowering
            users with health knowledge and preventive care tools.
          </p>
          <div className="flex items-center text-sm text-blue-300 space-x-2 mt-2">
            <FaHeart className="text-blue-400" />
            <span>Made with care for your health</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Disease Detection</a></li>
            <li><a href="#" className="hover:underline">Health Assistant</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Health Articles</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="mb-4 md:mb-0">© 2025 HealthWise. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
