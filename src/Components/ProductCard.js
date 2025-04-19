import { useNavigate, useNavigation } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
function Product_card(props) {
  //const navigation = useNavigation();
  const navigate = useNavigate();
  let products = props.prodDetails; // Use 'let' instead of 'const'
  const location = props.location;
  const searchtext = props.searchtext;

  // Filtering products based on search text (if any)
  if (searchtext != null) {
    const filtered_prod_list = products.filter((p) =>
      p.title.toLowerCase().includes(searchtext.toLowerCase())
    );
    products = filtered_prod_list; // Now we can reassign products
  }

  if (location === "Products_page") {
    return (
      <div className="container py-5">
        <div className="row">
          {products.map((p) => (
            <div className="col-lg-4 d-flex align-items-stretch" key={p.id}>
              <div className="card d-flex txt-black shadow-0 border rounded-1 justify-content-between align-items-center space-around">
                <img
                  className="card-img-top justify-content"
                  style={{ height: "20rem", width: "20rem" }}
                  src={p.image}
                  alt={p.title}
                />
                <div className="card-body">
                  <div className="text-center mt-1 d-flex flex-column align-items-stretch text-wrap">
                    <h4 className="card-title">{p.category}</h4>
                    <h6 className="text-primary mb-1 pb-3 text-wrap">
                      {p.title}
                    </h6>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        // Navigate to ProductDetails page and pass the product data
                        navigate("/ProductDetails", {
                          state: { Product: p },
                        });
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (location == "home_page") {
    return (
      <div className="container py-5  ">
        <div class="row ">
          {products.map((p) => {
            return (
              <div class=" col-lg-4 d-flex align-items-stretch ">
                <div className="card d-flex txt-black shadow-0 border rounded-1 justify-content-between align-items-center space-around">
                  <img
                    className="card-img-top justify-content"
                    style={{ height: "20rem", width: "20rem" }}
                    src={p.image}
                  />
                  <div className="card-body ">
                    <div className="text-center mt-1 d-flex flex-column align-items-stretch text-wrap">
                      <h4 className="card-title">{p.category}</h4>
                      <h6 className="text-primary mb-1 pb-3 text-wrap">
                        {p.title}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default Product_card;
