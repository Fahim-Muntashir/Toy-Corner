import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLoggedIn = false; // Example: Check if the user is logged in
  const username = "John Doe"; // Example: User's name

  return (
    <nav className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img className="w-60" src={imgLogo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/all-toys"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                All Toys
              </Link>
              <Link
                to="/blog"
                className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                All Toys
              </Link>
              <Link
                to="/my-toys"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                My Toys
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/add-toy"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Add A Toy
                  </Link>
                  <Link
                    to="/blogs"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                  </Link>
                  <div className="relative">
                    <button
                      type="button"
                      className="flex items-center focus:outline-none"
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/path/to/profile-picture.png"
                        alt="Profile"
                      />
                      <span className="ml-2 text-gray-300 hover:text-white">
                        {username}
                      </span>
                    </button>
                    {/* progile some more design  */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/all-toys"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            All Toys
          </Link>
          <Link
            to="/my-toys"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            My Toys
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/add-toy"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Add A Toy
              </Link>
              <Link
                to="/blogs"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blogs
              </Link>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/path/to/profile-picture.png"
                    alt="Profile"
                  />
                  <span className="ml-2 text-gray-300 hover:text-white">
                    {username}
                  </span>
                </button>
                {/* Dropdown menu for userprofile */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
