// ProductDisplayPage.js
import React from 'react';
import Product from './Product';
import products from './data'; // Import the array of objects

const ProductDisplayPage = () => {
  return (
    <div className="product-display-page">
      <header>
        <h1>Product Display Page</h1>
      </header>
      <div className="product-container">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <footer>
        <button>View Cart</button>
      </footer>
    </div>
  );
};

export default ProductDisplayPage;
