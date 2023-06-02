import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../Search/Search";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <Link to="/" onClick={() => props.toggleForm()}>
        <h1 className="logo">News Reader</h1>
      </Link>
      <Search
        query={props.query}
        setQuery={props.setQuery}
        formDisplayed={props.formDisplayed}
      />
    </nav>
  );
};

export default Navbar;
