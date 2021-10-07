import React from "react";
import {LocationMarkerIcon} from '@heroicons/react/outline'
import {getCandidates} from "../../services/job"

function Post(props) {
    const {title,description,location,id} = props;
    
    const openModal =()=>{
      const token =localStorage.getItem("token");
      let headerObj = {
        headers:{
          Authorization:token
        }
    };

    }
  return (
    <div className="shadow-lg rounded-xl w-80 my-2 h-52 p-4 bg-white relative overflow-hidden">
      <h3 className=" text-textClr text-left font-semibold text-xl mb-2">
        {title}
      </h3>
      <p className=" text-textClr line-clamp-3 leading-5 font-normal opacity-95 ">
        {description}
      </p>
      <div className="mt-8 flex  w-full  ">
        <div className=" w-1/2 h-6 flex  items-center justify-start">
            <LocationMarkerIcon className=" text-secondary  w-6" />
            <p className=" text-textClr truncate ...">{location}</p>
        </div>
        <button onClick ={openModal} className=" text-textClr text-sm outline-none border-0 rounded-md bg-btn-blue w-1/2 h-8 px-1">View Applications</button>
      </div>
    </div>
  );
}

export default Post;
