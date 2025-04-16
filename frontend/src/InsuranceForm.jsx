import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function InsurancePredictor() {
  const [features, setFeatures] = useState(Array(6).fill(""));
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    try {
      const numericFeatures = features.map(Number);
      const res = await axios.post("http://localhost:5000/predictInsurance", {
        features: numericFeatures,
      });
      setResult(`Estimated Insurance Cost: $${res.data.prediction}`);
    } catch (err) {
      setResult("Error occurred");
    }
  };

  const labels = [
    "Age",
    "Sex (0 = Male, 1 = Female)",
    "BMI",
    "Number of Children",
    "Smoker (0 = Yes, 1 = No)",
    "Region (0 = SE, 1 = SW, 2 = NE, 3 = NW)"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-24 md:py-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-orange-600 flex items-center mb-2">
          <svg
            className="w-6 h-6 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-3 -3v6m9 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Insurance Cost Prediction
        </h2>
        <p className="text-gray-600 mb-6">
          Fill in your details to estimate your health insurance cost.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labels.map((label, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="number"
                value={features[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded cursor-pointer"
            onClick={() => {
              setFeatures(Array(6).fill(""));
              setResult(null);
            }}
          >
            Reset
          </button>
          <button
            className="px-6 py-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        {result && (
          <div className="mt-6 text-center text-xl font-semibold text-orange-700">
            {result}
          </div>
        )}

        <Link to="/">
          <div className="w-full mt-5 p-2 bg-orange-500 hover:bg-orange-700 text-white text-lg font-medium flex items-center justify-center rounded-sm">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InsurancePredictor;
