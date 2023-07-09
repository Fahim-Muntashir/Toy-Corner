import React from "react";
import { motion } from "framer-motion";
import child from "../../../assets/child.png";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center m items-center  bg-gray-900 text-white"
    >
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:py-6 lg:px-8 container my-5 mx-auto flex flex-col md:flex-row items-center justify-between md:my-24"
      >
        <div className="flex flex-col w-full lg:w-3/4 justify-center items-start p-8">
          <motion.h1
            className="text-4xl md:text-5xl p-2 text-yellow-300 tracking-loose"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            TechFest
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Space: The Timeless Buy Toy
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-gray-50 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Explore your favorite Toys and register now to showcase your toy and
            win earn Moneyyy.
          </motion.p>
          <motion.a
            href="#"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Explore Now
          </motion.a>
        </div>
        <motion.div
          className="p-8 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img
            className="inline-block mt-5 md:mt-0 p-8 md:p-0"
            src={child}
            alt="image2"
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Banner;
