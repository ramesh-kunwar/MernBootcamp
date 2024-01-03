import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // if (cart.length > 0) {
    //   setTotalAmount(
    //     cart.reduce((acc, curr) => acc + curr.price),
    //     0
    //   );
    // }
    if (cart.length < 1) return;

    const total = cart.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);

    setTotalAmount(total);
  }, [cart]);
  console.log(totalAmount);
  return (
    <div>
      {cart.length <= 0 && (
        <div className="text-center mt-4">
          <h2>Cart is Empty</h2>
          <Link to={"/"}>
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      )}

      <div className="d-flex container justify-content-between">
        <div>
          {cart.map((item, index) => {
            return <CartItem key={index} item={item} itemIndex={index} />;
          })}
        </div>

        <div className="mt-5">
          <h3>Your Cart</h3>
          <h4>Summary</h4>
          <p>Total Items: {cart.length}</p>

          <div>
            <p>Total Amount: {totalAmount} </p>
            <button className="btn btn-primary">Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
