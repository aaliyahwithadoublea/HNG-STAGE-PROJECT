import React, { useState } from 'react';
import '/Cart.css'; // Import your CSS file

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile navigation

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="body">
            <header className="header">
                <div className="logo"><img src="./DASHSTEPS.png" alt="Logo" /></div>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <a href="#">Listing Page</a>
                    <a href="cart.html">Cart</a>
                    <a href="checkout.html">Checkout</a>
                </nav>
                <div className="search-cart">
                    <input type="text" placeholder="Search" style={{ width: '300px' }} />
                    <div className="icons">
                        {/* Your icon elements here */}
                    </div>
                    <div className="hamburger" id="hamburger" onClick={toggleNav}>☰</div>
                </div>
            </header>
            <div className="container">
                <h1>Cart</h1>
                <div className="steps">
                    <div className="step">
                        <span className="step-number">1</span>
                        <span className="step-label">Shopping Cart</span>
                    </div>
                    <div className="step">
                        <span className="step-number">2</span>
                        <span className="step-label">Checkout Details</span>
                    </div>
                </div>
                <div className="cart-container">
                    <div className="cart-items">
                        {/* Your cart items here */}
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div>
                            <input type="radio" id="pickup" name="delivery" value="pickup" checked />
                            <label htmlFor="pickup">Pickup</label>
                        </div>
                        <div>
                            <input type="radio" id="shipping" name="delivery" value="shipping" />
                            <label htmlFor="shipping">Shipping</label>
                        </div>
                        <div className="totals">
                            <div>Subtotal: ₦92,000</div>
                            <div>Total: ₦92,000</div>
                        </div>
                        <button className="checkout-button">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
