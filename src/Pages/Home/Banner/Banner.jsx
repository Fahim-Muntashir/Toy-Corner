import React, { Children } from "react";
import child from "../../../assets/child.png";

const Banner = () => {
  return (
    <section>
      <div className="dark:bg-gray-900 text-white py-1 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col md:flex-row items-center justify-between md:my-24">
          <div className="flex flex-col w-full lg:w-3/4 justify-center items-start p-8">
            <h1 className="text-4xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              TechFest
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : The Timeless Infinity
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <img
              className="inline-block mt-5 md:mt-0 p-8 md:p-0"
              src={child}
              alt="image2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
