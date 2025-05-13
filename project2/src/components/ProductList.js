function ProductList(props) {
    const products = [
  { 
    id: 1, 
    name: 'Beats Solo3', 
    price: 87, 
    image: '/images/BeatsSolo3.webp' 
  },
  { 
    id: 2, 
    name: 'Kraken Wired Headset', 
    price: 54, 
    image: '/images/KrakenWiredHeadset.webp' 
  },
  { 
    id: 3, 
    name: 'Sony MDR-XB650BT Wireless Headphones', 
    price: 79, 
    image: '/images/SonyMDRXB650BTWirelessHeadphones.png' 
  },
  {
    id: 4,
    name: 'Raycon Noise Canceling Headphones',
    price: 99,
    image: '/images/noisecancelheadphones.jpg'
  },
  {
    id: 5,
    name: 'Soundcore by Anker Q20i',
    price: 49,
    image: '/images/project2/Images/SoundcorebyAnkerQ20i.jpg'
  }
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
  