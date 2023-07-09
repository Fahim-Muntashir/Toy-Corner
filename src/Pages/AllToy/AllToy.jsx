import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function AllToy() {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://toy-corner-server.onrender.com/alltoy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setIsLoading(false);
      });
  }, [user]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleViewDetails = (toyId) => {
    const isLoggedIn = user !== null;
    console.log(toyId);

    if (isLoggedIn) {
      // Redirect to the Details Page for the specific toyId
      navigate(`/all-toys/${toyId}`);
    } else {
      navigate("/login");
    }
  };

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
        <div class="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
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
            <tbody className="text-lg">
              {filteredToys.slice(0, 20).map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <img
                      className="w-44 object-cover h-44"
                      src={toy.pictureUrl}
                      alt="toy picture"
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
                      onClick={() => handleViewDetails(toy._id)}
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
