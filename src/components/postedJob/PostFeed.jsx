import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Navbar from "../navbar/Navbar";
import { getAllJobs } from "../../services/job";
import { HomeIcon } from "@heroicons/react/solid";
import img from "../../constants/images/writing.png";
import Post from "./Post";
import Pagination from "../pagination/Pagination";
import ShowPosts from "./ShowPosts";

function PostFeed() {
  const history = useHistory();
  const [jobArr, setJobArr] = useState([]);
  const [loading,setLoading] = useState(false);

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPagePosts = jobArr.slice(firstPostIndex, lastPostIndex);
  let totalPages = Math.ceil(jobArr.length /postPerPage)
  const paginateNext = () => {
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const paginatePrev = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      let token = localStorage.getItem("token");

      let res = await getAllJobs({
        headers: {
          Authorization: token,
        },
      });
      console.log({ res });
      setJobArr(() => res.data.data.data);
      setLoading(false);
    })();
  }, []);

  const newJob = (e) => {
    e.preventDefault();
    history.push("/createjob");
  };

  return (
    <div className="main relative w-screen h-screen bg-pale-white overflow-hidden">
      <div className="blue-gradient w-full h-64">
        <div className="absolute flex flex-col w-screen h-screen bg-transparent">
          <div className="upper-container w-full h-full flex flex-col ">
            <div className="navbar w-full h-full flex flex-col items-center ">
              <Navbar />
              <div className="flex flex-col w-9/12">
                <div className="flex items-center justify-start my-6 w-full">
                  <HomeIcon className="w-4 text-white " />
                  <p className=" text-white text-left ml-2">Home</p>
                </div>
                <h2 className=" text-white text-3xl font-regular w-full ">
                  Jobs posted by you
                </h2>
              </div>
              {jobArr.length === 0 ? (
                <div className="flex flex-col w-full h-3/5 mt-36 justify-center items-center">
                  <img
                    src={img}
                    className=" object-contain w-28 opacity-30 mb-4"
                  />
                  <h3 className=" text-textClr font-medium text-2xl opacity-70 mb-10">
                    Your posted jobs will show here!
                  </h3>
                  <button
                    onClick={newJob}
                    className=" text-xl font-normal text-white bg-secondary border rounded-md px-8 py-2"
                  >
                    Post a job
                  </button>
                </div>
              ) : (
                <>
                  <ShowPosts posts={currentPagePosts} loading={loading} />
                  <Pagination totalPosts={jobArr.length} currentPage={currentPage} postPerPage={postPerPage} paginateNext={paginateNext} paginatePrev={paginatePrev}/>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFeed;
