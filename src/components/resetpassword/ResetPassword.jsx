import React,{useState} from "react";
import Navbar from "../navbar/Navbar";
import {useHistory} from "react-router-dom"
import {changePassword} from "../../services/auth"

function ResetPassword() {
  const history = useHistory();
  const [error,setError] = useState(false);
  const [border, setBorder] = useState("grey-200");
  const [password,setPassword] =useState({
    password:"",
    confirmPassword:"",
  })

  const handleChange = e =>{
    e.preventDefault();
    const {id,value} = e.target;
    setPassword(prevState=>({
      ...prevState,
      [id]:value,
    }))
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const resetPasswordToken =localStorage.getItem("resetPasswordToken")
    try{
      let obj={
        token:resetPasswordToken,
      }
      await changePassword(password,obj);
      localStorage.removeItem("resetPasswordToken");
      history.push("/login")
    }
     catch (err) {
      setError(true);
      setBorder("incorrect")
     }
  }
  


  return (
    <div className="main relative w-screen h-screen bg-pale-white">
      <div className="blue-gradient w-full h-80">
        <div className="absolute flex flex-col w-screen h-screen bg-transparent">
          <div className="upper-container w-full h-full flex flex-col ">
            <div className="navbar w-full flex justify-center ">
              <Navbar />
            </div>

            <div className="form h-3/5 w-full  mt-24 flex justify-center ">
              <div className="bg-white w-2/5 h-full shadow-xl rounded-3xl p-12 flex-col">
                <h1 className="font-bold text-2xl text-textClr mb-4">
                  Reset Password
                </h1>
                <p className=" text-textClr font-semibold mb-4">
                  Enter your new password below.
                </p>
                <div className="mb-4">
                  <label
                    className=" inline-block text-textClr font-medium mb-2"
                    for="password"
                  >
                    New Password
                  </label>
                  <input
                    value={password.password}
                    onChange={e=>handleChange(e)}
                    type="password"
                    required
                    id="password"
                    placeholder="Enter your password"
                    className={`text-textClr rounded-md border-2 border-${border} focus:outline-none w-full h-10 focus:border-secondary px-3`}
                  />
                </div>
                <div className="mb-10">
                  <label
                    className=" inline-block text-textClr font-medium mb-2"
                    for="confirmPassword"
                  >
                    Confirm new Password
                  </label>
                  <input
                  value={password.confirmPassword}
                    onChange={e=>handleChange(e)}
                    type="password"
                    required
                    id="confirmPassword"
                    placeholder="Enter your password"
                    className={`text-textClr rounded-md border-2 border-${border} focus:outline-none w-full h-10 focus:border-secondary px-3`}
                  />
                </div>
                <div className="flex flex-col items-center  justify-between h-1/4 w-full">
                  <button onClick={handleSubmit} className=" text-xl font-normal text-white bg-secondary border rounded-md px-12 py-2">
                    Reset
                  </button>
                  
                </div>
                {error ? (<p className=" text-incorrect-red text-sm text-center mt-1">Both the passwords must be the same and length must be greater than equal to six</p>):(<></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
