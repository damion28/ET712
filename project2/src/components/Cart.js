function Cart(props) {
  const cartItems = props.cartItems;

  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pagewrapper">
      <h2 className="title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="product">
              <span>{item.name} - ${item.price}</span>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;