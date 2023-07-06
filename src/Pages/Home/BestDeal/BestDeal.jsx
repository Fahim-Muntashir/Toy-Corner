import React from "react";
import car1 from "../../../assets/rcar.png";

const YourComponent = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto py-9 md:py-12 px-4 md:px-6">
      {/* more free and premium Tailwind CSS components at https://tailwinduikit.com/ */}
      <div className="flex items-stretch justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              Best Deal in Remote Car
            </h1>
            <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
              Save upto <span className="font-bold">50%</span>
            </p>
          </div>
          <div className="md:w-2/3 lg:w-3/4 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src={car1} alt="" className="" />
          </div>
        </div>
        <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              Car Remote Console
            </h1>
            <p className="text-base lg:text-xl text-gray-800 dark:text-white">
              Save Upto <span className="font-bold">30%</span>
            </p>
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              className="md:w-20 md:h-20 lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
