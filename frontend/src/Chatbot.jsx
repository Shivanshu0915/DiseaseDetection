// import React, { useState } from "react";

// const MedicalChatbot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! I’m your medical assistant. How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const response = await fetch("http://localhost:5000/get", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({ msg: input }),
//       });

//       const data = await response.text();

//       const botMessage = { sender: "bot", text: data };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Sorry, something went wrong." },
//       ]);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div className="flex flex-col h-screen max-w-xl mx-auto p-4 bg-gray-50 rounded-xl shadow-md border border-gray-200">
//       <h2 className="text-xl font-bold text-center mb-2 text-blue-700">🩺 Medical Chatbot</h2>

//       <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-white rounded-lg shadow-inner border">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
//                 msg.sender === "user"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-900"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex">
//         <input
//           type="text"
//           className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Type your symptoms..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <button
//           className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MedicalChatbot;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const MedicalChatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I’m your medical assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ msg: input }),
      });

      const data = await response.text();
      const botMessage = { sender: "bot", text: data };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const goBack = () => navigate("/");

  return (
    <div className="flex flex-col h-screen w-full max-w-3xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={goBack}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
        >
          <ArrowLeftIcon className="h-5 w-5 text-blue-600" />
        </button>
        <h2 className="text-2xl font-bold text-blue-700">Medical Chatbot</h2>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto rounded-lg bg-white shadow-inner p-4 space-y-3 border">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-sm px-4 py-2 rounded-2xl text-sm shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Type your symptoms..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MedicalChatbot;
