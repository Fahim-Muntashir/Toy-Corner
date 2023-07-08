import { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

function AllToy() {
  //   const history = useHistory();
  //   const { user, logOut } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //   const handleViewDetails = (toyId) => {
  //     const isLoggedIn = user !== null; // Check if the user is logged in

  //     if (isLoggedIn) {
  //       // Redirect to the Details Page for the specific toyId
  //       history.push(`/toys/${toyId}`);
  //     } else {
  //       // Redirect to the Login Page
  //       history.push("/login");
  //     }
  //   };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <div className="container mx-auto rounded-b-lg dark:bg-gray-900 p-14">
          <h1 className="text-center font-bold text-white text-4xl mb-5">
            Find Your Next Toy Car By Name
          </h1>
          <div className="sm:flex w-1/2 mx-auto items-center bg-white rounded-lg overflow-hidden px-2 py-3 justify-between">
            <input
              value={searchTerm}
              onChange={handleSearch}
              className="text-black font-bold flex-grow outline-none px-6"
              type="text"
              placeholder="Search Your Next Toy Car"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-gray-200 text-lg">
              <tr>
                <th>Toy</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.slice(0, 20).map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <img
                      className="w-44 object-cover h-44"
                      src={toy.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-xs text-white font-bold"
                      onClick={() => handleViewDetails(toy.id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AllToy;
