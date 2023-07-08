import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToyPage = () => {
  const { user } = useContext(AuthContext);

  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const toys = {
    pictureUrl,
    name,
    sellerName,
    sellerEmail: user.email,
    subCategory,
    price,
    rating,
    quantity,
    description,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission and send the data to the server
    setPictureUrl("");
    setName("");
    setSellerName("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setQuantity("");
    setDescription("");

    fetch("http://localhost:5000/alltoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your TOy added succesfully");
        }
      });
  };

  return (
    <div className="flex mx-auto dark:bg-gray-900 justify-center items-center">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
          <div className="flex mx-auto">
            <h1 className="font-bold uppercase text-5xl">
              Add A <span className="text-yellow-500">Car</span>{" "}
            </h1>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Picture URL*"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Seller Name"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Seller Email"
                value={user.email}
                unchanged
              />

              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Sub-category*"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Price*"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Available Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Detail Description"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToyPage;
