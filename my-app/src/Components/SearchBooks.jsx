import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchBooks.css';

function SearchBooks({addToCart}) {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data from backend API
    axios.get('http://localhost:7092/api/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );  



  return (
    <div className='product-list'>
      <h1>Book List for You!</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id} className='product-item'>
            <h2 className='product-name'>{product.productName}</h2>
            <p className='product-description'>{product.productDescription}</p>
            <p className='product-price'>Price: ${product.productPrice}</p>
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <button onClick={() => { addToCart(product); navigate('/AddToCart'); }} className='add-to-cart-button'>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBooks;