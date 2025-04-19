import Product_card from "../ProductCard";
import { useEffect, useState } from "react";

function Products(props) {
  const [prods, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch products from the API
  function loadProducts() {
    setLoading(true); // Set loading to true before fetching
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error); // Set error if the fetch fails
        setLoading(false);
      });
  }

  // Fetch products whenever search text changes
  function loadSearchedProducts() {
    if (props.searchtext.trim() === "") {
      loadProducts(); // If search is empty, load all products
      return;
    }

    setLoading(true); // Set loading to true before fetching
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(props.searchtext.toLowerCase())
        );
        setProducts(filteredProducts);
        setLoading(false); // Set loading to false after filtering
      })
      .catch((error) => {
        setError(error); // Set error if the fetch fails
        setLoading(false);
      });
  }

  // Initial fetch when component mounts
  useEffect(() => {
    loadProducts();
  }, []);

  // Fetch searched products when searchtext changes
  useEffect(() => {
    loadSearchedProducts();
  }, [props.searchtext]);

  const location = "Products_page";

  if (loading) {
    return <div>Loading...</div>; // Loading indicator while fetching data
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>; // Error handling
  }

  return (
    <div>
      <Product_card
        prodDetails={prods}
        location={location}
        searchtext={props.searchtext}
      />
    </div>
  );
}

export default Products;
