import React, { useState } from 'react';
// import "../Cart.css";
import "../Cart.css";

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile navigation

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="body">
        
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
                        {/* Example of a cart item */}
                        <div className="cart-item">
                            <div className="product">
                                <img src="product-image.jpg" alt="Product" />
                                <div className="product-details">
                                    <p>Product Name</p>
                                    <p>$100.00</p>
                                </div>
                            </div>
                            <div className="quantity">
                                <button>-</button>
                                <span className="count">1</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h2>Order Summary</h2>
                        <div className="totals">
                            <p>Subtotal: $100.00</p>
                            <p>Shipping: $10.00</p>
                            <p>Total: $110.00</p>
                        </div>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
