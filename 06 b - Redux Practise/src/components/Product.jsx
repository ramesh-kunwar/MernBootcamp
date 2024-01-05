import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(product));

    alert("cart added");
  };
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={product.images[0]}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <div className="d-flex justify-content-between">
            <p>${product.price}</p>
            <button onClick={addToCart} className="btn btn-primary btn-sm">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
