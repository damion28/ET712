function ProductList(props) {
    const products = [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Headphones', price: 150 },
      { id: 3, name: 'Phone', price: 500 }
    ];
  
    return (
      <div className="pagewrapper">
        <h2 className="title">Product List</h2>
        {products.map(product => (
          <div key={product.id} className="product">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => props.addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;
  