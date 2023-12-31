import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="d-flex gap-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/labs"}>Labs</Link>
        <Link to={"/support"}>Support</Link>
      </ul>
    </nav>
  );
};
export default Navbar;
