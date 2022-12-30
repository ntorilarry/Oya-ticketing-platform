import React from "react";
import { Link } from "react-router-dom";
import PayIcon from "../assets/payicon.svg"

function PayModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div>
        <button
          title=""
          className="bg-[#B40303] w-16 text-white py-2 px-2 text-sm rounded-2xl hover:bg-[#f71a1a]"
          onClick={() => setShowModal(true)}
        >
          Pay
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
                        <h2 className="text-xl flex items-center my-2 font-semibold text-gray-800">
                        <img src={PayIcon} alt=""/>  Pay for ticket: <span className="text-[#B40303]">#62fc97d86adf</span>
                        </h2>
                        {/* <form> */}
                        <div className="relative z-0 w-full mb-6 group">
                          <label className="block pb-4 text-sm font-semibold text-gray-500">
                            Choose Payment Network
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
                            Mobile Money Number
                          </label>
                          <input
                            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded-xl"
                            type="text"
                          />
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                          <label className="block pb-4 text-sm font-semibold text-gray-500">
                            Mobile Money Number
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
                            Pay
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
    </div>
  );
}

export default PayModal;
