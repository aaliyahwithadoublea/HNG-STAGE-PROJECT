import search from '../assets/search icon.png'
import love from '../assets/love icon.png'
import cart from '../assets/cart icon.png'
import logo from '../assets/DASHSTEPS.png'
import "../Header.css";

import React, { useState } from 'react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile navigation

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="nav" style={{ color: '#E23E57' }}>
                <a href="/">Listing Page</a>
                <a href="./cart">Cart</a>
                <a href="./checkout">Checkout</a>
            </nav>
            <div className="search-cart">
                <input type="text" placeholder="Search" style={{ width: '300px' }} />
                <div className="icons">
               <i> <img src={search} alt="Search Icon" /> </i>
               <i> <img src={love} alt="Love Icon" /></i>
               <i> <img src={cart} alt="Cart Icon" /></i>
                </div>
                <div className="hamburger" id="hamburger">
                    ☰
                </div>
            </div>
        </header>
    );
};

export default Header;
