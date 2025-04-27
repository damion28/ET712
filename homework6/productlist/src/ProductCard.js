import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
      <h2 className="product-name">{props.name}</h2>
      <p className="product-price">Price: ${props.price}</p>
      <p className="product-status">
        {props.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

export default ProductCard;