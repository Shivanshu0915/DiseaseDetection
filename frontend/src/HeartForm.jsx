import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HeartPredictor() {
  const [features, setFeatures] = useState(Array(13).fill(""));
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async () => {
    try {
      const numericFeatures = features.map(Number);
      const res = await axios.post("http://localhost:5000/predictHeart", {
        features: numericFeatures,
      });
      setResult(res.data.prediction === 1 ? "Heart Disease Detected" : "No Heart Disease");
    } catch (err) {
      setResult("Error occurred");
    }
  };

  const labels = [
    "Age", "Sex (1=Male, 0=Female)", "Chest Pain Type (cp)", "Resting BP (trestbps)",
    "Cholesterol (chol)", "Fasting Blood Sugar > 120 (fbs)", "Rest ECG (restecg)",
    "Max Heart Rate (thalach)", "Exercise Induced Angina (exang)",
    "Oldpeak", "Slope", "Major Vessels (ca)", "Thal"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-24 md:py-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-blue-700 flex items-center mb-2">
          <svg
            className="w-6 h-6 mr-2 text-blue-500"
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
          Heart Disease Risk Assessment
        </h2>
        <p className="text-gray-600 mb-6">
          Enter your medical parameters below for a preliminary heart disease prediction.
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded cursor-pointer"
            onClick={() => {
              setFeatures(Array(13).fill(""));
              setResult(null);
            }}
          >
            Reset
          </button>
          <button
            className="px-6 py-2 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded cursor-pointer"
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
        <div className="w-full mt-5 p-2 bg-blue-500 hover:bg-blue-700 text-white text-lg font-medium flex items-center justify-center rounded-sm">
          Go Back
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HeartPredictor;
