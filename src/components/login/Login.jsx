import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { login } from "../../services/auth";
import {jobHeader} from "../../services/api"
import { useHistory,Link } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [border, setBorder] = useState("grey-200");

  const history = useHistory();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userData);
      const token=res.data.data.token;
      const userName =res.data.data.name;
      await jobHeader(token);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      localStorage.setItem("user","true")
      console.log("logged in");
      history.push("/postfeed")

    } catch (err) {
      console.log(err);
      setError(true);
      setBorder("incorrect")
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="main relative w-screen h-screen bg-pale-white">
      <div className=" blue-gradient w-full h-80">
        <div className="absolute flex flex-col w-screen h-screen bg-transparent">
          <div className="upper-container w-full h-full flex flex-col ">
            <div className="navbar w-full flex justify-center ">
              <Navbar />
            </div>

            <div className="form h-3/5 w-full  mt-24 flex justify-center ">
              <div className="bg-white w-2/5 h-full shadow-xl rounded-3xl p-12 flex-col">
                <h1 className="font-bold text-2xl text-textClr mb-4">Login</h1>
                <div className="mb-4">
                  <label
                    className=" block text-textClr font-medium mb-2"
                    for="email"
                  >
                    Email address
                  </label>
                  <input
                    value={userData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    id="email"
                    placeholder="Enter your email"
                    className={`bg-inputClr rounded-md border-2 border-${border} w-full h-12 focus:outline-none  focus:border-seconadry  px-3`}
                  />
                </div>
                <div className="mb-1">
                  <div className="flex justify-between">
                    <label
                      className=" inline-block text-textClr font-medium mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <Link to="/forgotpassword" className=" font-medium text-secondary">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    value={userData.password}
                    onChange={handleChange}
                    type="password"
                    required
                    id="password"
                    placeholder="Enter your password"
                    className={`bg-inputClr rounded-md border-2 border-${border} w-full h-12 focus:outline-none  focus:border-seconadry  px-3`}
                  />
                </div>
                {error ? (<p className=" text-incorrect-red text-xs text-right mb-2">incorrect email or password</p>):(<></>)}
                <div className="flex flex-col items-center  justify-between h-1/3 w-full mt-14">
                  <button onClick={handleLogin} className=" text-xl font-normal text-white bg-secondary border rounded-md px-14 py-2">
                    Login
                  </button>
                  <p className=" text-textClr font-semibold">
                    New to MyJobs?
                    <Link to="/signup" className=" text-secondary">Create an account</Link>
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

export default Login;
