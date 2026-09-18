import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.name} className="cart-item-img" />
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              </div>

              <div className="cart-controls">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Cart Amount: ${totalAmount.toFixed(2)}</h3>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
