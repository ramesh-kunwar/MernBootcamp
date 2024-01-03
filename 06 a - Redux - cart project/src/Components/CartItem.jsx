import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    alert("Remove From cart");
  };

  return (
    <div className="card container my-2 py-4" style={{}}>
      <div>
        <img src={item.image} alt="" style={{ width: "50px" }} />
        <h6>{item.title}</h6>
        {/* <p>{item.description}</p> */}
        <div className="d-flex justify-content-between">
          <p>$ {item.price}</p>
          <button onClick={removeFromCart} className="btn btn-danger btn-sm">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
