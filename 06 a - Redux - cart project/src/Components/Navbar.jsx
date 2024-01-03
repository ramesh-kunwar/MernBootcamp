import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Ecom
        </Link>

        <div className="fs-2">
          <Link to={"/cart"}>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
