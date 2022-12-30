import React, { useState, useEffect } from "react";
import Bullet from "../assets/bullet.png";
import AddAccount from "../components/AddAccount";
import CreateCampaignNav from "../components/CreateCampaignNav";
import DatePickerSet from "../components/DatePickerSet";
import NewCampaignModal from "../components/NewCampaignModal";
import PulseLoader from "react-spinners/PulseLoader";
import LoaderImg from "../assets/loading.png";

function CreateCampaign() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="bg-black bg-opacity-40 items-center">
          <div className="flex justify-center items-center h-screen">
            <div className="w-[15rem] h-[15rem] bg-white">
              <img className="mx-auto mt-8 mb-4 w-32" src={LoaderImg} alt="" />
              <div className="flex items-center mx-20">
                <span className="font-semibold">Loading </span>
                <PulseLoader size={5} color={"black"} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CreateCampaignNav />
          <div className="flex bg-white">
            <div className="lg:flex w-2/5 lg:w-1/4 h-[20rem] mt-14 bg-white border-r hidden">
              <div className="mx-auto px-3 py-24">
                <h1 className="text-3xl font-bold my-2 cursor-pointer duration-150">
                  Overview
                </h1>
                <ul>
                  <li className="flex space-x-2 my-2 cursor-pointer duration-150">
                    <span className="font-light">
                      You can change personal details.
                    </span>
                  </li>
                  <li className="flex space-x-2 cursor-pointer my-2  duration-150">
                    <img src={Bullet} alt="" />
                    <span className="font-semibold">Campaign</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-h-screen w-full bg-white">
              <div className="mx-6 lg:mr-36">
                <div className="sm:flex flex-wrap sm:justify-end sm:items-center lg:my-7">
                  <DatePickerSet />
                  <AddAccount />
                </div>
                <div className="md:flex  space-y-3 md:space-y-0 md:space-x-4 mt-6">
                  <div className="h-90  rounded-md border-2 p-4 sm:p-10 m=12">
                    <h1 className="my-2 mb-0 font-semibold text-3xl">
                      Let’s Start creating a new campaign{" "}
                    </h1>
                    <p className="text-2xl mb-0 font-light text-black ">
                      Lorem ipsum dolor sit amet consectetur. Morbi pulvinar
                      sagittis sit id a suspendisse sed scelerisque. Eget etiam
                      a et
                    </p>
                    <NewCampaignModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateCampaign;
