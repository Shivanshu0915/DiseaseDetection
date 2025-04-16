import React from "react";
import {
  FaUserAlt,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const teamMembers = [
  {
    name: "Saurabh Kumar Singh",
    section: "D",
    branch: "Computer Science",
    regNo: "20233256",
  },
  {
    name: "Shubhranshu Mishra",
    section: "D",
    branch: "Computer Science",
    regNo: "20233272",
  },
  {
    name: "Shivanshu Pathak",
    section: "D",
    branch: "Computer Science",
    regNo: "20233267",
  },
  {
    name: "Suresh Choudhary",
    section: "D",
    branch: "Computer Science",
    regNo: "20233281",
  },
  {
    name: "Shashwat Mishra",
    section: "D",
    branch: "Computer Science",
    regNo: "20233261",
  }
];

const TeamPage = () => {
  return (
    <div id="members" className="bg-white py-24 px-6 md:px-20">
      <div className="text-center mb-10">
        {/* <h2 className="text-3xl font-bold text-blue-500 mb-2">Our Team</h2> */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Team</h2>
        {/* <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-transparent mb-4" /> */}
        <p className="text-gray-700 max-w-2xl mx-auto">
          HealthWise is developed by a team of dedicated students passionate about healthcare technology and
          preventive medicine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Initial Circle */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-300 flex items-center justify-center text-white text-xl font-semibold">
              {member.name.charAt(0)}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>

            <div className="mt-4 text-left space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <MdOutlineGroups className="text-blue-500 mr-2" />
                <span className="font-medium">Section:</span>&nbsp;{member.section}
              </div>
              <div className="flex items-center">
                <FaLaptopCode className="text-green-500 mr-2" />
                <span className="font-medium">Branch:</span>&nbsp;
                <span className="font-semibold text-gray-900">{member.branch}</span>
              </div>
              <div className="flex items-center">
                <FaGraduationCap className="text-orange-500 mr-2" />
                <span className="font-medium">Reg No:</span>&nbsp;
                <span className="font-semibold text-gray-900">{member.regNo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
