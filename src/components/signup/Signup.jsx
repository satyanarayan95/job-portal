import React from "react";
import Navbar from "../navbar/Navbar";
import "./Signup.css";

function Signup() {
  return (
    <div className="main relative w-screen h-screen bg-pale-white">
      <div className="blue-gradient w-full h-80">
        <div className="absolute flex flex-col w-screen h-screen bg-transparent">
          <div className="upper-container w-full h-full flex flex-col ">
            <div className="navbar w-full flex justify-center ">
              <Navbar />
            </div>

            <div className="form h-4/5 w-full  mt-6 flex justify-center ">
              <div className="bg-white w-1/3 h-full shadow-xl rounded-3xl p-6 flex-col">
                <h1 className="font-semibold text-2xl text-textClr mb-4">Signup</h1>
                <div className="h-16">
                <p className="text-textClr font-medium mb-2">I'm a</p>
                </div>
                <div className="mb-2">
                  <label
                    className=" block text-textClr font-medium mb-2 required-field"
                    for="fullname"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    id="fullname"
                    placeholder="Enter your full name"
                    className=" rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className=" block text-textClr font-medium mb-2"
                    for="email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder="Enter your email"
                    className=" rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                  />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between">
                    <div className="w-1/2 mr-2">
                      <label
                        className=" inline-block text-textClr font-medium mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        id="password"
                        placeholder="Enter your password"
                        className=" rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        className=" inline-block text-textClr font-medium mb-2"
                        for="ConfirmPassword"
                      >
                       Confirm Password
                      </label>
                      <input
                        type="password"
                        required
                        id="ConfirmPassword"
                        placeholder="Enter your password"
                        className=" rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className=" block text-textClr font-medium mb-2"
                    for="skills"
                  >
                    Skills
                  </label>
                  <input
                    type="text"
                    required
                    id="skills"
                    placeholder="Enter comma separeted skills"
                    className=" rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                  />
                </div>
                <div className="flex flex-col items-center  justify-between h-1/6 w-full">
                  <button className=" text-md font-normal text-white bg-secondary border rounded-md px-8 py-2">
                    Signup
                  </button>
                  <p className=" text-textClr font-semibold">
                    Have an account?
                    <a className=" text-secondary">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
