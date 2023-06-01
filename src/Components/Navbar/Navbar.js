import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="logo">News Reader</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
