import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import {resetPassword} from '../../services/auth'
import {useHistory} from 'react-router-dom'
import './style.css';

export default function ForgotPassword() {
  const history = useHistory();
  const [email,setEmail] =useState("");
  const [error,setError] =useState(false);
  const [border, setBorder] = useState("grey-200");

  const handleSubmit = async() => {
    try{
      const res = await resetPassword(email);
      const resetPasswordToken =res.data.data.token
    localStorage.setItem("resetPasswordToken",resetPasswordToken);
    history.push("/resetpassword")
  }
  catch(err){
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

            <div className="form h-80 w-full  mt-20 flex justify-center ">
              <div className="bg-white w-2/5 h-full shadow-xl rounded-3xl p-6 flex-col">
                <h1 className="font-bold text-2xl text-textClr mb-4">Forgot yor password?</h1>
                <p className=" text-textClr font-medium mb-4">
                Enter the email associated with your account and we'll send you instructions to reset your password.
                </p>
                <div className="mb-1">
                  <label
                    className= "block text-textClr font-medium mb-2"
                    for="email"
                  >
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={e=>{
                      e.preventDefault();
                      setEmail(e.target.value)
                    }}
                    type="email"
                    required
                    id="email"
                    placeholder="Enter your email"
                    className= {`text-textClr rounded-md border-2 border-${border} focus:outline-none w-full h-10 focus:border-secondary px-3`}
                  />
                </div>
                {error ? (<p className=" text-incorrect-red text-xs text-right mb-2">No user found with the provided email</p>):(<></>)}
                
                
                  <div className="flex w-full items-center justify-center mt-7">
                  <button onClick={handleSubmit} className=" text-lg font-normal text-white bg-secondary border rounded-md px-10 py-2">
                  Submit
                </button>
                  </div>
                  
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
