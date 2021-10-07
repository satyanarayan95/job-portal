import React from "react";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div className="main relative w-screen h-screen bg-pale-white">
      <div className=" blue-gradient w-full h-80">
        <div className="absolute flex flex-col w-screen h-screen bg-transparent">
          <div className="upper-container w-full h-1/2 flex flex-col">
            <div className="navbar w-full flex justify-center ">
              <Navbar />
            </div>
            <div className="btn-text w-1/2 h-1/2 flex  flex-col items-center justify-around">
              <div className="w-1/2 h-1/2 flex flex-col text-white text-5xl font-bold ">
              <p>Welcome to</p>
              <p>
                My<span className="text-secondary">Jobs</span>
              </p>
              </div>
              <div className="btn w-1/2">
              <button className="bg-secondary border-2 border-white text-white rounded-md p-1">Get Started</button>
              </div>
            </div>
          </div>
          <div className="lower-container w-full h-1/2 flex flex-col items-center justify-around">
            <div className="h-2/5 w-3/4 bg-gray-200"></div>
            <div className="h-1/3 w-3/4 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
