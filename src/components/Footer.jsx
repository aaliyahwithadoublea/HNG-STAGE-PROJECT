import React from 'react';
import "../Header.css";
import socials from '../assets/Social media.png'

const Footer = () => {
    return (
        
        <footer className="footer" >
            <div className="footer-columns">
                <div className="footer-column">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Shop</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Collection</a>
                </div>
                <div className="footer-column">
                    <a href="#">About Us</a>
                    <a href="#">Return Policy</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Payment Policy</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-column">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Shop</a>
                    <a href="#">Testimonial</a>
                    <a href="#">Collection</a>
                </div>
            </div>
            <br/>
            <div className="social-media">
                <img src={socials} alt="Social Media Icons" />
            </div>
        </footer>
    );
};

export default Footer;
