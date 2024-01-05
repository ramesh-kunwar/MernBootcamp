import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "cart");
  return (
    <div>
      <nav className="container py-4 d-flex justify-content-between">
        <h3>
          <Link to={"/"} className="btn btn-secondary">
            Home
          </Link>
        </h3>

        <div>
          <h4>
            <Link to={"/cart"} className="btn btn-primary">
              Cart
            </Link>
          </h4>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
