import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav
      style={{
        padding: '1rem 2rem',
        backgroundColor: '#A1887F', // primary color
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ margin: 0 }}>Headspace Audio</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
