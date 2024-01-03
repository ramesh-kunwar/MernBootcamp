import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add, remove } from "../redux/slices/cartSlice";

const Product = ({ product }) => {
  const { title, description, image, price } = product;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(product.id));
    alert("Remove From cart");
  };
  const addToCart = () => {
    dispatch(add(product));

    alert("cart added");
  };

  return (
    <div className="d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <img className={"card-img-top"} src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between ">
            <p>${price}</p>

            {cart.some((p) => p.id === product.id) ? (
              <button onClick={removeFromCart} className="btn">
                <Link href="#" className="btn btn-danger">
                  Remove
                </Link>
              </button>
            ) : (
              <button onClick={addToCart} className="btn">
                <Link href="#" className="btn btn-primary">
                  Add To cart
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
