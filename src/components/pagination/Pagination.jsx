import React from "react";
import next from "../../constants/images/next.png"
import back from "../../constants/images/back.png"

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginateNext,
  paginatePrev,
  currentPage,
}) {


  return (
        <nav
          className='flex  h-12 font-medium space-x-2 bottom-5  fixed  w-32 items-center justify-around'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
                paginatePrev();
            }}
            href='#'
            className='flex items-center justify-center opacity-50 w-10 h-10 rounded-md border border-gray-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
          <img src={back} className="h-3 w-3" aria-hidden="true" />
          </a>
            <p className=' text-center flex items-center justify-center w-10 h-10 rounded-sm border border-0 bg-white text-sm font-medium text-gray-500 bg-btn-blue hover:bg-gray-50'>{currentPage}</p>
          <a
            onClick={() => {
                paginateNext();
            }}
            href='#'
            className='flex items-center justify-center opacity-50 w-10 h-10 rounded-md border border-gray-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
          <img src={next} className="h-3 w-3" aria-hidden="true" />
          </a>
        </nav>
  );
        }