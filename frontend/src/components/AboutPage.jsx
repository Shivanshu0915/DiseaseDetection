import React from "react";

const AboutPage = () => {
  return (
    <div id="about" className="bg-blue-100 px-4 py-24 md:px-20 lg:px-32 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About HealthWise</h2>

      <p className="mb-4 text-center max-w-4xl mx-auto">
        HealthWise is a pioneering platform dedicated to early disease detection and health risk assessment. 
        Our mission is to make preventive healthcare accessible to everyone through technology-driven solutions.
      </p>
      <p className="mb-4 text-center max-w-4xl mx-auto">
        Our platform currently focuses on three significant health concerns: diabetes, heart disease, and COVID-19. 
        By analyzing user-provided parameters, we offer preliminary risk assessments that can help users take proactive 
        steps towards better health management.
      </p>
      <p className="mb-10 text-center max-w-4xl mx-auto">
        We emphasize that our assessments are not medical diagnoses, but rather tools to encourage timely medical 
        consultation and increased health awareness. Our AI chatbot provides educational information to help users 
        better understand these conditions and their risk factors.
      </p>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
        {[
          {
            title: "Early Detection",
            desc: "Identifying potential health issues before they become serious through data-driven assessments.",
            icon: "📈",
          },
          {
            title: "Risk Awareness",
            desc: "Helping users understand their health risk factors through clear, accessible information.",
            icon: "⚠️",
            bg: "bg-purple-50",
          },
          {
            title: "Health Education",
            desc: "Empowering users with knowledge about diseases, prevention, and management.",
            icon: "📘",
          },
          {
            title: "Proactive Care",
            desc: "Encouraging preventive healthcare measures and timely medical consultation.",
            icon: "💬",
            bg: "bg-purple-50",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow-sm ${item.bg || "bg-blue-50"}`}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Approach Section */}
      <h3 className="text-2xl font-bold text-center mb-6">Our Approach</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-10">
        {[
          {
            number: "1",
            title: "Parameter Collection",
            desc: "We collect relevant health parameters through user-friendly forms designed specifically for each condition.",
          },
          {
            number: "2",
            title: "Risk Analysis",
            desc: "Our algorithms analyze the provided parameters against established medical risk factors and patterns.",
          },
          {
            number: "3",
            title: "Recommendations",
            desc: "Based on the analysis, we provide preliminary risk assessments and general recommendations for next steps.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-xl px-6 py-6 bg-white shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">{step.number}</div>
            <h4 className="font-semibold mb-2">{step.title}</h4>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-sm italic text-center text-gray-500 w-full mx-auto border-t pt-4 px-4">
        <strong>Disclaimer:</strong> HealthWise provides informational content only and is not a substitute for professional 
        medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider 
        with any questions you may have regarding a medical condition.
      </p>
    </div>
  );
};

export default AboutPage;
