import React from "react";
import './App.css';

import MultistepForm from "./components/MultistepForm"

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white shadow overflow-hidden">
      <div className="w-[70vw] p-6 bg-white shadow rounded px-4 py-5 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium ml-6 text-gray-900">
          Resume Builder
        </h3>
        <MultistepForm />
      </div>
    </div>
  );
};

export default App;