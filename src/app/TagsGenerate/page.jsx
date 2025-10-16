"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loader from "@/components/Loader";
const Page = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted with:", input);

    if (!input.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:5000/api/generate-tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: input }),
      });

      const data = await response.json();
      setResult(data.content || "No content found");
    } catch (err) {
      console.error("Error:", err);
      setResult("Something went wrong 😢");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="bg-black flex flex-col justify-between w-[70%] h-[900px] m-auto rounded-2xl mt-5 p-5">
      {/* Output Section */}
      <div className="output w-full h-[90%] bg-[#303030] p-5 rounded-2xl overflow-auto text-white">
        {loading ? (
          <div className="loader flex justify-center items-center h-full">
            <div className="loader flex justify-center items-center h-full">
           <Loader />
          
          </div>
          </div>
        ) : result ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 style={{ fontWeight: "bold", fontSize: "38px" }} {...props} />
              ),
            
              h2: ({ node, ...props }) => (
                <h2 style={{ fontWeight: "bold", fontSize: "34px" }} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 style={{ fontWeight: "bold", fontSize: "22px" }} {...props} />
              ),
              p: ({ node, ...props }) => (
                <p style={{ fontSize: "18px", marginBottom: "0.3rem" }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li style={{ marginBottom: "0.5rem" }} {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong style={{ fontWeight: "bold" }} {...props} />
              ),
            }}
          >
            {result}
          </ReactMarkdown>
        ) : (
          <p className="text-gray-400">Your Tags will appear here...</p>
        )}
      </div>

      {/* Input Section */}
      <form
        onSubmit={handleSubmit}
        className="w-[90%] h-[10%] mt-5 rounded-2xl flex m-auto p-3 items-center gap-3"
      >
        <div className="relative group w-full">
          <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
          <input
            type="text"
            id="input"
            placeholder="Write Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-white bg-black border border-gray-600 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent"
          />
          <label
            htmlFor="input"
            className="absolute left-6 top-3.5 text-sm text-gray-500 transition-all duration-200 ease-in-out 
            peer-placeholder-shown:top-3.5 
            peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-gray-400 
            peer-focus:top-1 
            peer-focus:text-sm 
            peer-focus:text-indigo-500 
            peer-focus:font-semibold cursor-text"
          >
            Write Here
          </label>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-200 active:scale-95"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Page;
