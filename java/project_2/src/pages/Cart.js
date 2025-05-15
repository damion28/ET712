import { useState } from 'react';

function Cart({ cart, setCart }) {
  const [purchased, setPurchased] = useState(false);

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>Your Cart</h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={{ marginBottom: '1.5rem' }}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    backgroundColor: '#5D4037',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <hr style={{ borderTop: '1px solid black', margin: '2rem 0' }} />
            <h2>Total: ${subtotal.toFixed(2)}</h2>

            <button
              onClick={() => {
                setPurchased(true);
                // Optional: Clear cart after purchase
                // setCart([]);
              }}
              style={{
                marginTop: '1.5rem',
                backgroundColor: '#5D4037',
                color: 'white',
                padding: '0.6rem 1.2rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Complete Purchase
            </button>

            {purchased && (
              <p style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
                ✅ Purchase complete! Thank you for shopping.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
