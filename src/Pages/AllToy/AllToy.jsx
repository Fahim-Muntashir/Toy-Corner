import { useState, useEffect } from 'react';

function AllToy() {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchToys('http://localhost:5000/alltoy');
  }, []);

  const fetchToys = async () => {
    try {
      // Fetch toys data from the backend API
      const response = await fetch('/api/toys');
      const data = await response.json();
      setToys(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching toys:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in
    const isLoggedIn = /* Check if the user is logged in */;

    if (isLoggedIn) {
      // Redirect to the Details Page for the specific toyId
      // You can use react-router-dom or a similar routing library for this
      // Example: history.push(`/toys/${toyId}`);
    } else {
      // Redirect to the Login Page
      // Example: history.push('/login');
    }
  };

  return (
    <div>
      <h1>All Toys</h1>
      <input type="text" placeholder="Search by Toy name" value={searchTerm} onChange={handleSearch} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0, 20).map((toy) => (
              <tr key={toy.id}>
                <td>{toy.seller}</td>
                <td>{toy.name}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <button onClick={() => handleViewDetails(toy.id)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllToy;