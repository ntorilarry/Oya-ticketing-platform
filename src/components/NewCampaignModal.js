import React from "react";
import { Link } from "react-router-dom";

function NewCampaignModal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button
        title=""
        className="inline-flex px-8 py-3 mt-4  text-white transition-all duration-200 bg-[#B40303] border border-transparent rounded-md sm:mt-4 hover:bg-[#f71a1a]"
        onClick={() => setShowModal(true)}
      >
        + New Campaign
      </button>
      <>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 ">
                <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-md shadow-lg ">
                  <div className="items-center justify-center my-3 ">
                    <div className="mt-2 sm:mx-4 sm:text-left">
                      <h2 className="text-xl text-center font-semibold text-gray-800">
                        Enter Campaign Details
                      </h2>
                      {/* <form> */}
                      <div className="relative z-0 w-full mb-6 group">
                        <label className="block pb-4 text-sm font-semibold text-gray-500">
                          Select Account
                        </label>
                        <select
                          type="text"
                          name="role"
                          id="floating_role"
                          className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                          placeholder=" "
                          required
                        >
                          <option>0.003 ETH</option>
                          <option>0.004 ETH</option>
                          <option>0.005 ETH</option>
                          <option>0.006 ETH</option>
                          <option>0.007 ETH</option>
                        </select>
                      </div>

                      <div className="relative z-0 w-full mb-6 group">
                        <label className="block pb-4 text-sm font-semibold text-gray-500">
                          Ad Campaign Title
                        </label>
                        <input
                          className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                          type="text"
                        />
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <div className="flex items-center justify-center w-full">
                          <label
                            for="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Upload Campaign
                                </span>{" "}
                                images
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>

                      <div className="relative z-0 w-full mb-6 group">
                        <label className="block pb-4 text-sm font-semibold text-gray-500">
                          Ad Campaign Start Date
                        </label>
                        <input
                          className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                          type="date"
                        />
                      </div>

                      <div className="relative z-0 w-full mb-6 group">
                        <label className="block pb-4 text-sm font-semibold text-gray-500">
                          Ad Campaign End Date
                        </label>
                        <input
                          className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                          type="date"
                        />
                      </div>

                      <div className="relative z-0 w-full mb-6 group">
                        <label className="block pb-4 text-sm font-semibold text-gray-500">
                          Amount Willing to spend
                        </label>
                        <input
                          className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                          type="text"
                        />
                      </div>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full block mt-2 p-2.5 flex-1 text-center text-black border-2 border-[#B40303] rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <Link
                          to="/campaign-created"
                          className="w-full text-center block mt-2 p-2.5 flex-1 bg-[#B40303] text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        >
                          Confirm
                        </Link>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default NewCampaignModal;
