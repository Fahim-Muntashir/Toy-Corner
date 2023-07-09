import React, { useEffect, useState } from "react";
import "./Tabs.css";

const Tabs = ({ color }) => {
  const [carTabData, setCarTabData] = useState([]);
  // console.log(carTabData);

  useEffect(() => {
    fetch("https://toy-corner-server.onrender.com/toycategory")
      .then((res) => res.json())
      .then((carTabData) => setCarTabData(carTabData));
  }, []);
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-yellow-500")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {carTabData[0]?.category}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-yellow-500")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                {carTabData[1]?.category}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-yellow-500")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                {carTabData[2]?.category}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="card card-side my-7 bg-base-100 shadow-xl glass">
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[0]?.toys[0].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[0]?.toys[0].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[0]?.toys[0].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-start">
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                    <figure>
                      <img
                        src={carTabData[0]?.toys[1].picture}
                        className="h-full"
                      />
                    </figure>
                  </div>
                  <div className="card card-side bg-base-100 shadow-xl glass">
                    <figure className="figure-img">
                      <img
                        src={carTabData[0]?.toys[0].picture}
                        alt="Movie"
                        className="h-full w-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[0]?.toys[1].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[0]?.toys[1].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[0]?.toys[1].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="card card-side bg-base-100 shadow-xl glass">
                    <figure className="figure-img">
                      <img
                        src={carTabData[0]?.toys[0].picture}
                        alt="Movie"
                        className="h-full w-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[1]?.toys[1].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[1]?.toys[1].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[1]?.toys[1].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-side my-7 bg-base-100 shadow-xl glass">
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[1]?.toys[0].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[1]?.toys[0].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[1]?.toys[0].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-start">
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </div>
                    </div>
                    <figure>
                      <img
                        src={carTabData[0]?.toys[1].picture}
                        alt="Movie"
                        className="h-full"
                      />
                    </figure>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="card card-side my-7 bg-base-100 shadow-xl glass">
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[2]?.toys[1].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[2]?.toys[1].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[2]?.toys[1].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-start">
                        <button className="btn btn-warning">
                          View Details
                        </button>
                      </div>
                    </div>
                    <figure>
                      <img
                        src={carTabData[0]?.toys[1].picture}
                        alt="Movie"
                        className="h-full"
                      />
                    </figure>
                  </div>{" "}
                  <div className="card card-side bg-base-100 shadow-xl glass">
                    <figure className="figure-img">
                      <img
                        src={carTabData[0]?.toys[0].picture}
                        alt="Movie"
                        className="h-full w-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {" "}
                        {carTabData[2]?.toys[0].name}
                      </h2>
                      <h2 className="text-2xl">
                        Price:{" "}
                        <span className="text-yellow-400">
                          {carTabData[2]?.toys[0].price}
                        </span>
                      </h2>
                      <h2 className="text-2xl">
                        Ratings:{" "}
                        <span className="text-yellow-400">
                          {carTabData[2]?.toys[0].rating}
                        </span>
                        __star
                      </h2>

                      <p>
                        Click the button to View More Details of Your Next
                        Toys....
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
