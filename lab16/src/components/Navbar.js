import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/" className="navlink">Products</Link>
      <Link to="/cart" className="navlink">Cart ({props.cartCount})</Link>
    </nav>
  );
}

export default Navbar;
