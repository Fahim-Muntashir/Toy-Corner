import React from "react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="card lg:card-side my-14 bg-base-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl"
    >
      <figure>
        <img
          src={data.pictureUrl}
          className="h-100 w-100 object-cover"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-400">{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex justify-between items-cente">
          <div>
            <p>Seller: {data.sellerName}</p>
            <p>Email: {data.sellerEmail}</p>
          </div>
          <div className="text-lg">
            <p>Price: ${data.price}</p>
            <p>Rating: {data.rating}</p>
            <p>Quantity: {data.quantity}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewDetails;
