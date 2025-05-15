// src/pages/Home.js
import { useState } from 'react';
import products from '../data/products';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';

function Home({ cart, setCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
  };

  return (
  <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
    <div style={{ maxWidth: '1100px', width: '100%' }}>
      <h1 style={{ textAlign: 'center' }}>Our Headphones</h1>

      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'center', margin: '1rem 0 2rem' }}>
        Welcome to <strong>Headspace Audio</strong>, your #1 destination for premium headphones.
        Whether you're a music lover, gamer, or audio professional, we've got the perfect pair 
        to expand your sound experiences. Explore our collection of the best headphones on the market 
        selected for quality, performance, and style.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onShowModal={handleShowModal}
          />
        ))}
      </div>

      {selectedProduct && (
        <ModalWindow
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  </div>
);

}

export default Home;
