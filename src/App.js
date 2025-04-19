import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Cart from "./Components/Pages/Cart";
import ProductDetails from "./Components/Pages/ProductDetails";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartContext from "./Context/CartContext";

function App(props) {
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState([]); // Add state for cartItems
  const value = { cartItems, setCartItems };
  function searchtext_header(text) {
    setSearchText(text);
  }
  //function to delete from cart
  function deletefromCart(cartItem) {
    setCartItems((cart) => {
      return cart.filter((item) => item != cartItem);
    });
  }
  return (
    <CartContext.Provider value={value}>
      {" "}
      {/* Pass cartItems and setCartItems */}
      <div className="App">
        <Header setsearchtext={searchtext_header} />
        <Routes>
          <Route path="/" element={<Home searchtext={searchText} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route
            path="/Products"
            element={<Products searchtext={searchText} />}
          />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route
            path="/Cart"
            element={<Cart DeletefromCart={deletefromCart} />}
          />
        </Routes>

        <Footer />
      </div>
    </CartContext.Provider>
  );
}
export default App;
