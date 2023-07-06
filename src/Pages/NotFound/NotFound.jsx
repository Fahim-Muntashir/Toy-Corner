import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center h-full p-16 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-300">
            404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find New{" "}
            <span className="text-yellow-500"> Toy Car </span> of on our
            homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded dark:bg-yellow-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
