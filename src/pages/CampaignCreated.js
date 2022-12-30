import React,{useState, useEffect} from "react";
import Bullet from "../assets/bullet.png";
import CreateCampaignNav from "../components/CreateCampaignNav";
import DatePickerSet from "../components/DatePickerSet";
import Table, { StatusPill } from "../components/AccountTable";
import AddAccount from "../components/AddAccount";
import PulseLoader from "react-spinners/PulseLoader";
import LoaderImg from "../assets/loading.png";
import PayModal from "../components/PayModal";

const getData = () => {
  const data = [
    {
      id: "1",
      campaign: "Bank Campaign",
      budget: "GHC 1200",
      startDate: "Dec 23, 2021",
      endDate: "Jan 23, 2022",
      accType: "Individual",
      approval: "pending",
    },

    {
      id: "2",
      campaign: "Music Campaign",
      budget: "GHC 5000",
      startDate: "Dec 24, 2021",
      endDate: "Jan 24, 2022",
      accType: "Cooperate",
      approval: "Success",
    },

    {
      id: "3",
      campaign: "Promotion Campaign",
      budget: "GHC 4000",
      startDate: "Dec 25, 2021",
      endDate: "Jan 25, 2022",
      accType: "Cooperate",
      approval: "Failed",
    },
  ];
  return [...data, ];
};

function CampaignCreated() {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Campaign",
        accessor: "campaign",
      },
      {
        Header: "Budget",
        accessor: "budget",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "End Date",
        accessor: "endDate",
      },
      {
        Header: "Account Type",
        accessor: "accType",
      },
      {
        Header: "Approval",
        accessor: "approval",
        Cell: StatusPill,
      },

      {
        Header: "Action",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <div>
           <PayModal/>
          </div>
        ),
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
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
                <span className="font-light">You can change personal details.</span>
              </li>
              <li className="flex space-x-2 cursor-pointer my-2 duration-150">
                <img src={Bullet} alt="" />
                <span className="font-semibold">Campaign</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="min-h-screen w-full bg-white">
          <div className="mx-6 lg:mr-14">
            <div className="sm:flex flex-wrap sm:justify-end sm:items-center lg:m-7">
              <DatePickerSet />
              <AddAccount />
            </div>
            <div className="min-h-screen text-gray-900 lg:mx-12 bgr">
              <main className="px-4 mx-auto bg-white max-w-8xl sm:px-6 ">
                <div className="mt-6">
                  <Table columns={columns} data={data} />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      </div>
      )}
    </div>
  );
}

export default CampaignCreated;
