import React from "react";
import {Link} from "react-router-dom"

function CreateAccountModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button
        title=""
        className="inline-flex px-8 py-3 mt-4  text-white transition-all duration-200 bg-[#B40303] border border-transparent rounded-md sm:mt-4 hover:bg-[#f71a1a]"
        onClick={() => setShowModal(true)}
      >
        Create an Account
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
                  <div className="my-3 items-center justify-center ">
                    <div className="mt-2  sm:ml-4 sm:text-left">
                      <div className="w-full flex justify-between">
                        <label>Individual</label>
                        <input
                          className="form-check-input appearance-none border border-gray-300 bg-white checked:bg-[#B40303] checked:border-[#B40303] "
                          type="checkbox"
                        />
                      </div>
                      <br />
                      <div className="w-full flex justify-between">
                        <label>Cooperate</label>
                        <input
                          className="form-check-input appearance-none border border-gray-300 bg-white checked:bg-[#B40303] checked:border-[#B40303]"
                          type="checkbox"
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
                          to="/create-campaign"
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

export default CreateAccountModal;
