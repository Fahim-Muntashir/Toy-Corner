import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/gallaryImg/image1.png";
import img from "../../../assets/gallaryImg/image.png";
import img2 from "../../../assets/gallaryImg/image2.png";
import img3 from "../../../assets/gallaryImg/image3.png";
import img5 from "../../../assets/gallaryImg/image5.png";
import img4 from "../../../assets/gallaryImg/image4.png";

const Gallery = () => {
  return (
    <div className="container max-w-7xl sm:px-6 lg:px-8 mx-auto py-9 md:py-12 px-4 md:px-6">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <motion.div
            className="w-1/2 p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="w-1/2 p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="w-full p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <motion.div
            className="w-full p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img3}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="w-1/2 p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div
            className="w-1/2 p-1 md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
