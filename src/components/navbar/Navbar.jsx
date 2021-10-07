import React, { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function Navbar() {
  const history = useHistory();
  const [user, setUser] = useState(false);
  const [name, setName] = useState("demo");
  
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
        const user = localStorage.getItem("userName");
        setName(user.slice(0,1).toUpperCase())
      setUser(true);
    }
  },);

  const handleLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <div className="flex flex-row items-center justify-between w-11/12 h-14 border-b-2 border-navy-blue">
      <h5 className="text-white text-left font-bold text-2xl">
        My<span className=" text-secondary text-left text-2xl">Jobs</span>
      </h5>
      {user ? (
        <div className="flex items-center justify-around">
          <NavLink to="/createjob" className=" text-white p-2 mx-4">
            Post a Job
          </NavLink>
          <div className="w-20 h-10 flex items-center justify-evenly mr-4">
          <div class="w-10 h-full relative">
            <div class="w-full h-full rounded-full overflow-hidden flex items-center justify-center text-center bg-avatarBg cursor-pointer">
              <span class="text-textClr text-2xl font-semibold align-middle">
                {name}
              </span>
              </div>
              </div>
              <Dropdown />
          </div>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className=" bg-btn-blue px-3 py-1 opacity-100 border-2 border-secondary text-white rounded-md"
        >
          Login/Signup
        </button>
      )}
    </div>
  );
}

export default Navbar;
