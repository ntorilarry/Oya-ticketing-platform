import React from "react";

function LogIn() {
  return (
    <div>
      <div className="h-[100vh] md:h-full lg:h-[100vh] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex items-center justify-center">
        <div className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className=" lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6">
                Get Started
                <br className=" md:block" />
                Create an Ad
              </h2>
              <button
                type="button"
                className="text-white bg-[#B40303] hover:bg-[#8B0000] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2"
              >
                Login
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
              <img
                className="object-cover"
                src="https://kitwind.io/assets/kometa/one-girl-phone.png"
                alt=""
              />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img
                className="object-cover"
                src="https://kitwind.io/assets/kometa/two-girls-phone.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
