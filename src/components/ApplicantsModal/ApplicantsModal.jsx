import React from "react";

export default function ApplicantsModal() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="w-screen h-screen justify-center items-center flex fixed z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 h-90">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-full w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between mx-5 py-3 border-b-2  border-textClr border-opacity-10 rounded-t">
                  <h3 className="text-lg font-bold text-textClr">
                    Applicants for this job
                  </h3>
                </div>
                {/*body*/}
                <p className=" text-textClr mx-5 my-1 text-sm">
                  Total 35 applicants
                </p>
                <div className=" flex mx-4 mb-4 border-2 rounded-lg bg-modalbgclr w-95 h-90" ></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
