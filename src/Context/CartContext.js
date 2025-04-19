import { createContext } from "react";

const initialParameters = {
  cartItems: [],
  setCartItems: () => {}
};
const CartContext = createContext(initialParameters);

export default CartContext;
