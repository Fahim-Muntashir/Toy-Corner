import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function Update() {
  const { id } = useParams();
  console.log("id", id);
  const navigate = useNavigate();
  const [toy, setToy] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://toy-corner-server.onrender.com/alltoy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setIsLoading(false);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`https://toy-corner-server.onrender.com/alltoy/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Toy updated successfully");
        navigate("/my-toys");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update toy");
      });
  };

  if (isLoading) {
    return (
      <span className="loading loading-infinity loading-lg mx-auto"></span>
    );
  }

  return (
    <div className="flex mx-auto dark:bg-gray-900 justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
          <div className="flex mx-auto">
            <h1 className="font-bold uppercase text-5xl">
              Update <span className="text-yellow-500">Toy</span>
            </h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Price"
                value={toy.price}
                onChange={(e) => setToy({ ...toy, price: e.target.value })}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Quantity"
                value={toy.quantity}
                onChange={(e) => setToy({ ...toy, quantity: e.target.value })}
              />
              <textarea
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Description"
                value={toy.description}
                onChange={(e) =>
                  setToy({ ...toy, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <input
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                value="Update Data"
              />{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
