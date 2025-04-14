import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DiabetesPredictor() {
  const [features, setFeatures] = useState(Array(8).fill(""));
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    try {
      const numericFeatures = features.map(Number);
      const res = await axios.post("http://localhost:5000/predict", {
        features: numericFeatures,
      });
      setResult(res.data.prediction === 1 ? "Diabetic" : "Not Diabetic");
    } catch (err) {
      setResult("Error occurred");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-6 py-24 md:py-6">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-green-700 flex items-center mb-2">
          <svg
            className="w-6 h-6 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Diabetes Risk Assessment
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your parameters below for a preliminary risk assessment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Pregnancies (if applicable)",
            "Glucose Level (mg/dL)",
            "Blood Pressure (mm Hg)",
            "Skin Thickness (mm)",
            "Insulin Level (μU/mL)",
            "BMI",
            "Diabetes Pedigree Function",
            "Age",
          ].map((label, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="number"
                value={features[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder={`e.g., ${
                  i === 0 ? "2" : i === 1 ? "85" : i === 2 ? "80" : i === 3 ? "35" : i === 4 ? "94" : i === 5 ? "26.6" : i === 6 ? "0.627" : "50"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded cursor-pointer"
            onClick={() => {
              setFeatures(Array(8).fill(""));
              setResult(null);
            }}
          >
            Reset
          </button>
          <button
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Submit Assessment
          </button>
        </div>
        
        {result && (
          <div className="mt-6 text-center text-xl font-semibold text-blue-700">
            Result: {result}
          </div>
        )}

        <Link to="/">
        <div className="bg-green=500 w-full mt-5 py-2 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded flex items-center justify-center">
          Go Back
        </div>
        </Link>
      </div>
    </div>
  );
}

export default DiabetesPredictor;
