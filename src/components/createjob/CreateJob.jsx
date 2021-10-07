import React,{useState} from 'react'
import Navbar from "../navbar/Navbar"
import {useHistory} from 'react-router-dom'
import {createjob} from "../../services/job";


function CreateJob() {
    const history = useHistory();
    const [job,setJob] =useState({
        title: "",
	    description: "",
	    location: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setJob((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
          let token = localStorage.getItem("token");
          let headerObj = {
              headers:{
                Authorization:token
              }
          };
        try{
            await createjob(job,headerObj);
            history.push("/postfeed")
        }
        catch(err){
            console.log(err);
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

            <div className="form h-2/3 w-full mt-16 flex justify-center ">
              <div className="bg-white w-1/3 h-full shadow-xl rounded-3xl p-6 flex-col">
                <h1 className="font-bold text-2xl text-textClr mb-2">
                  Post a Job
                </h1>
                <div className="mb-2">
                  <label
                    className=" inline-block text-textClr font-medium mb-2"
                    htmlFor="title"
                  >
                    Job title
                  </label>
                  <input
                    value={job.title}
                    onChange={e=>handleChange(e)}
                    type="text"
                    required
                    id="title"
                    placeholder="Enter job title"
                    className=" bg-inputClr rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className=" inline-block text-textClr font-medium mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea value={job.description}
                  onChange={e=>handleChange(e)} id="description" placeholder="Enter job description" className="w-full px-3 py-2 bg-inputClr border rounded-lg focus:outline-none resize-none" rows="4"></textarea>
                </div>
                <div className="mb-8">
                  <label
                    className=" inline-block text-textClr font-medium mb-2"
                    htmlFor="location"
                  >
                  Location
                  </label>
                  <input
                  value={job.location}
                    onChange={e=>handleChange(e)}
                    type="text"
                    required
                    id="location"
                    placeholder="Enter location"
                    className=" bg-inputClr rounded-md border-2 border-gray-200 w-full h-10 focus:border-secondary px-3"
                  />
                </div>
                <div className="flex flex-col items-center  justify-between h-1/3 w-full">
                  <button onClick={handleSubmit} className=" text-lg font-semibold text-white bg-secondary border rounded-md px-10 py-2">
                    Post
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

export default CreateJob
