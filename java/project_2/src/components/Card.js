import { useState } from 'react';

function Card({ product, onAddToCart, onShowModal }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart({ ...product, quantity: parseInt(quantity) });
  };

  return (
    <div
      style={{
        backgroundColor: 'white', // White card background
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '250px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', marginBottom: '1rem' }}
        onClick={() => onShowModal(product)}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Qty: </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ width: '50px', marginLeft: '0.5rem' }}
        />
      </div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Card;
