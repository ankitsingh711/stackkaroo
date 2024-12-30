import React from "react";

const LogoSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-[#1A3B32] rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-12 w-12"
        >
          <polygon points="50,10 70,40 50,40" fill="white" />
          <polygon points="50,10 30,40 50,40" fill="white" />
          <polygon points="30,60 50,40 50,60" fill="white" />
          <polygon points="70,60 50,40 50,60" fill="white" />
        </svg>
      </div>
      <h1 className="text-3xl font-semibold mt-4">Payment Gateway</h1>
      <span className="text-gray-500 mt-2">Enter school location details!</span>
    </div>
  );
};

export default LogoSection;
