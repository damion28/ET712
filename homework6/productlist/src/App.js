import React from 'react';
import './App.css';
import ProductCard from './ProductCard';

function App() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      inStock: true,
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 199.99,
      inStock: false,
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 49.99,
      inStock: true,
    },
    {
      id: 4,
      name: 'Portable Charger',
      price: 29.99,
      inStock: true,
    }
  ];

  return (
    <div className="App">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;