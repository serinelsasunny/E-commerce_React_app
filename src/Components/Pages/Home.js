import { useState, useEffect } from "react";
import Product_card from "../ProductCard";

function Home(props) {
  const location = "home_page";
  const [prods, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function loadProducts() {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((data) => {
        setError(error);
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
  //hook needs to be ececuted to load the products initially
  useEffect(loadProducts, []);
  //hook needs to be executed whenever search text is changed
  useEffect(loadSearchedProducts, [props.searchtext]);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div
          class="carousel-inner"
          style={{ height: "350px", width: "500rem" }}
        >
          <div
            class="carousel-item active"
            style={{ height: "500rem", width: "100rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="First slide"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>My Caption Title (1st Image)</h5>
            </div>
          </div>
          <div
            class="carousel-item "
            style={{ height: "350px", width: "500rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div
            class="carousel-item"
            style={{ height: "350px", width: "500rem" }}
          >
            <img
              class="d-block w-100"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Third slide"
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div>
        <h2 className="text-center">NEW ARRIVALS</h2>
        <Product_card
          prodDetails={prods}
          location={location}
          searchtext={props.searchtext}
        />
      </div>
    </div>
  );
}

export default Home;
