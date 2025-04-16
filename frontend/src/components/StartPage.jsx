import React from 'react';
import { FaHeartbeat, FaTint, FaVirus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const StartPage = () => {

    const navigate = useNavigate();

    const goToChat = () => {
      navigate('/chat');
    };


  return (
    <div id="home" className="min-h-[91vh] bg-gradient-to-b from-white to-blue-100 px-4 py-36">
      <div className=" flex flex-col items-center justify-between gap-10 md:flex-row md:items-center md:justify-around md:gap-x-15">
        
        {/* Left Section */}
        <div className="max-w-xl flex items-center justify-center md:justify-start">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800 mb-4">
            Early Detection, <span className="text-[#23ACEB]">Better Protection</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Welcome to <strong>HealthWise</strong>, your trusted platform for early disease detection. 
            Our AI-powered tools help identify potential health risks for diabetes and heart disease, and also helps to predict the health insurance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#diseaseDetection">
                <button className="bg-[#23ACEB] hover:bg-[#0e9ada] text-white px-5 py-2 rounded text-md font-medium shadow cursor-pointer">
                Start Detection →
                </button>
            </a>
            <button onClick={goToChat}
            className="border border-[#23ACEB] text-[#23ACEB] bg-white hover:bg-blue-200 hover:text-black px-5 py-2 rounded text-md font-medium shadow cursor-pointer">
              Chat with Health Bot
            </button>
          </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-white rounded-xl shadow-lg px-6 py-6 w-full sm:w-[500px] space-y-4">
          <DetectionItem
            icon={<FaHeartbeat className="text-white" />}
            title="Heart Disease"
            subtitle="Risk assessment"
            bg="bg-blue-500"
          />
          <DetectionItem
            icon={<FaTint className="text-white" />}
            title="Diabetes"
            subtitle="Early detection"
            bg="bg-green-500"
          />
          <DetectionItem
            icon={<FaVirus className="text-white" />}
            title="Health Insurance"
            subtitle="Risk evaluation"
            bg="bg-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

const DetectionItem = ({ icon, title, subtitle, bg }) => {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default StartPage;