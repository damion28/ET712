function ModalWindow({ product, onClose }) {
  // Don't render the modal if no product is selected
  if (!product) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', margin: '1rem 0' }}
        />
        <p>{product.description}</p>
        <button onClick={onClose} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
