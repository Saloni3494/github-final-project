import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const products = [
  {
    category: "Air Purifying Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 15, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 2, name: "Spider Plant", price: 12, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 3, name: "Peace Lily", price: 20, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 4, name: "Boston Fern", price: 18, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 5, name: "Rubber Plant", price: 25, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 6, name: "Aloe Vera", price: 10, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    ]
  },
  {
    category: "Aromatic Plants",
    items: [
      { id: 7, name: "Lavender", price: 14, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 8, name: "Rosemary", price: 12, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 9, name: "Mint", price: 8, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 10, name: "Basil", price: 9, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 11, name: "Thyme", price: 11, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 12, name: "Oregano", price: 10, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: 13, name: "Jade Plant", price: 16, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 14, name: "Echeveria", price: 11, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 15, name: "Zebra Plant", price: 13, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 16, name: "Burro's Tail", price: 18, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 17, name: "Panda Plant", price: 14, thumbnail: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
      { id: 18, name: "Haworthia", price: 12, thumbnail: "https://images.unsplash.com/photo-1593691509543-c20fb1209b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-container">
      {products.map((categoryGroup, index) => (
        <div key={index} className="category-section">
          <h2>{categoryGroup.category}</h2>
          <div className="product-grid">
            {categoryGroup.items.map((product) => {
              const isAdded = cartItems.some((item) => item.id === product.id);

              return (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
