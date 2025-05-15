import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        
        {/* Page Content */}
        <div style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
