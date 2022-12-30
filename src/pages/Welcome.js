import React from "react";
import Vector from "../assets/Image Vector.png";
import CreateAccountModal from "../components/CreateAccountModal";
import Navbar from "../components/Navbar";

function LogIn() {
  return (
    <div>
      <Navbar />
      <section className="relative py-12 sm:py-16 ">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-28 xl:pr-20 ">
              <h1 className="mb-0 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight">
                Target your <br />
                Audience
              </h1>
              <CreateAccountModal />
            </div>

            <div className="xl:col-span-1">
              <img className="w-1/2 mx-auto my-2" src={Vector} alt="" />
              <h1 className="mb-0 text-3xl py-2 font-semibold text-gray-900 sm:text-3xl lg:text-4xl lg:px-28 text-center lg:text-left px-0">
                Get Started in one, two, three ...
              </h1>
              <p className="px-0 py-2 mb-0 lg:px-28 text-center font-light lg:text-left">
                Commodo diam vulputate dui proin quis enim nibh. Non integer ac
                libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at
                eu elit. Morbi aliquam porttitor mattis consequat neque, tellus
                blandit.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LogIn;
