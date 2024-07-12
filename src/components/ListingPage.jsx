import React from 'react';

const ListingPage = () => {
  // Example data (replace with actual product data or fetch from an API)
  const products = [
    { id: 1, name: 'Trainer Shoes', price: '$99.99', image: 'shoes1.jpg' },
    { id: 2, name: 'Running Shoes', price: '$89.99', image: 'shoes2.jpg' },
    { id: 3, name: 'Sports Shoes', price: '$79.99', image: 'shoes3.jpg' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ListingPage;
