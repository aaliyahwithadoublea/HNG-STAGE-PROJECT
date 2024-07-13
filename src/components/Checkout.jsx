import React, { useState } from 'react';
import search from '../assets/search icon.png'
import love from '../assets/love icon.png'
import cart from '../assets/cart icon.png'
import logo from '../assets/DASHSTEPS.png'
import "../Checkout.css";

const Checkout = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // State to track if nav is open

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <header className="header">
                <div className="logo"><img src="./DASHSTEPS.png" alt="DASHSTEPS" /></div>
                <nav className={`nav ${isNavOpen ? 'open' : ''}`} style={{ color: '#E23E57' }}>
                    <a href="#">Listing Page</a>
                    <a href="cart.html">Cart</a>
                    <a href="checkout.html">Checkout</a>
                </nav>
                <div className="search-cart">
                    <input type="text" placeholder="Search" style={{ width: '300px' }} />
                    <div className="icons">
                        <i className="fa fa-search"><img src="search icon.png" alt="Search" /></i>
                        <i className="fa fa-heart"><img src="love icon.png" alt="Love" /></i>
                        <i className="fa fa-shopping-cart"><img src="cart icon.png" alt="Cart" /></i>
                    </div>
                    <div className="hamburger" id="hamburger" onClick={toggleNav}>
                        ☰
                    </div>
                </div>
            </header>
            <main className="checkout">
                <h1>Checkout</h1>
                <div className="checkout-details">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <form>
                            <input type="text" placeholder="First name" required />
                            <input type="text" placeholder="Last name" required />
                            <input type="text" placeholder="Phone number" required />
                            <input type="email" placeholder="Email" required />
                        </form>
                    </div>
                    <div className="payment-info">
                        <h2>Payment Information</h2>
                        <div className="saved-card">
                            <input type="radio" name="payment-method" id="saved-card" checked />
                            <label htmlFor="saved-card"> <img src="mastercard.png" alt="MasterCard" /> 2300 **** **** 9876  Exp: 12/28 Tosin Semilorem</label>
                        </div>
                        <div className="new-card">
                            <input type="radio" name="payment-method" id="new-card" />
                            <label htmlFor="new-card">New Payments Card</label>
                            <form>
                                <input type="text" placeholder="Name on card" />
                                <input type="text" placeholder="Card Number" />
                                <input type="text" placeholder="MM/YY" />
                                <input type="text" placeholder="Security Code" />
                                <label><input type="checkbox" /> Remember this card</label>
                            </form>
                        </div>
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="items">
                            <div className="item">
                                <img src="Rectangle 63.png" alt="Minimus Trail" />
                                <div className="item-details">
                                    <p>Minimus Trail</p>
                                    <p>₦60,000</p>
                                    <div className="quantity">Qty: <input type="number" value="1" min="1" /></div>
                                </div>
                            </div>
                            <div className="item">
                                <img src="Rectangle 64.png" alt="Minimus Trail" />
                                <div className="item-details">
                                    <p>Minimus Trail</p>
                                    <p>₦42,000</p>
                                    <div className="quantity">Qty: <input type="number" value="2" min="1" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="pricing">
                            <p>Subtotal: ₦110,000</p>
                            <p>Discount: 10%</p>
                            <div className="apply-discount">
                                <input type="text" placeholder="Enter code" />
                                <button>Apply</button>
                            </div>
                            <p>Total: ₦112,000</p>
                            <button className="complete-payment">Complete Payment</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Checkout;
