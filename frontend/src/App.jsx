import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import DiabetesPredictor from "./DiabetesForm";
import HeartPredictor from "./HeartForm";
import MedicalChatbot from "./Chatbot";
const App = createBrowserRouter(
  createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>} /> 
        <Route path="/diabetes" element={<DiabetesPredictor/>} /> 
        <Route path="/heart" element={<HeartPredictor/>} />
        <Route path="/chat" element={<MedicalChatbot/>} />
      </>
  )
);

export default App;
