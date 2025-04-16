import React from 'react';
import { FaTint, FaHeartbeat, FaVirus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DiseaseDetection = () => {
  return (
    <div id="diseaseDetection" className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Disease Detection
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Select a disease to complete a parameter form for risk assessment. Our AI algorithms will analyze your inputs and provide a preliminary risk evaluation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Diabetes */}
          <DetectionCard
            icon={<FaTint className="text-white text-2xl" />}
            title="Diabetes Detection"
            subtitle="Assess your diabetes risk factors"
            description="Our diabetes risk assessment evaluates factors like glucose levels, BMI, age, and family history to assess your potential risk for developing diabetes."
            color="bg-green-400"
            hover="hover:bg-green-600"
            dlink="/diabetes"
          />

          {/* Heart Disease */}
          <DetectionCard
            icon={<FaHeartbeat className="text-white text-2xl" />}
            title="Heart Disease Detection"
            subtitle="Evaluate your heart health factors"
            description="Our heart disease risk assessment analyzes blood pressure, cholesterol, smoking status, and other key factors to evaluate your cardiovascular health."
            color="bg-blue-400"
            hover="hover:bg-blue-600"
            dlink="/heart"
          />

          {/* COVID-19 */}
          <DetectionCard
            icon={<FaVirus className="text-white text-2xl" />}
            title="Insurance coverage Assessment"
            subtitle="Evaluate your health insurance factors"
            description="We analyze your health data, lifestyle, age, and medical history to estimate the potential insurance coverage you may be eligible for."
            color="bg-orange-400"
            hover="hover:bg-orange-600"
            dlink="/insurance"
          />
        </div>
      </div>
    </div>
  );
};

const DetectionCard = ({ icon, title, subtitle, description, color, hover, dlink }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">
      <div className={`flex flex-col items-center text-center p-6 ${color} bg-opacity-10`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="p-6 text-gray-600 text-sm">
        {description}
        <Link to={dlink}>
        <div className="mt-4">
          <button className={`${color} ${hover} text-white font-semibold py-2 px-6 rounded w-full transition cursor-pointer`}>
            Start Assessment
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default DiseaseDetection;
