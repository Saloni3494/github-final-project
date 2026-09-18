import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop destination for beautiful, fresh, and vibrant houseplants. Bring nature into your home with our curated collection of indoor plants.</p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Paradise Nursery</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
