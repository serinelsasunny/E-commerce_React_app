import { useContext } from "react";
import CartContext from "../../Context/CartContext";

function Cart(props) {
  const { cartItems, setCartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className="container py-5">
      <h2>CART</h2>

      {cartItems.map((p) => {
        function onDelete() {
          props.DeletefromCart(p);
        }
        return (
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src={p.image} className="w-100" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{p.title}</h5>
                    </div>

                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${p.price}</h4>
                        <span className="text-danger">
                          <s>M.R.P:${p.price * 2}</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-sm"
                          onClick={onDelete}
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
