import React from 'react';
import "../Header.css";
import yeezy from '../assets/yeezy.png'
import puma from '../assets/puma.png'
import shoe3 from '../assets/shoe3.png'
import nike from '../assets/nike1.png'
import star from '../assets/Vector (1).png'

const BestDeals = () => {
  return (
    <section className="best-deals">
      <h2>Best Deals Today!</h2>
      <div className="product-list red-div">
        <div className="product-card">
          <div className="product-image"><img src={yeezy} alt="Yeezy 450" /></div>
          <div className="product-info">
            <h3>Yeezy 450</h3>
            <p><img src="Vector (1).png" alt="Rating" /> 4.9</p>
            <img src="price.png" alt="Price Icon" />
            <p className="price">₦74,000</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"><img src={puma} alt="PUMA Cali Court" /></div>
          <div className="product-info">
            <h3>PUMA Cali Court</h3>
            <p><img src="Vector (1).png" alt="Rating" /> 4.9</p>
            <img src="price.png" alt="Price Icon" />
            <p className="price">₦74,000</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"><img src={nike} alt="Nike May 12" /></div>
          <div className="product-info">
            <h3>Nike May 12</h3>
            <p><img src="Vector (1).png" alt="Rating" /> 4.9</p>
            <img src="price.png" alt="Price Icon" />
            <p className="price">₦74,000</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"><img src={shoe3} alt="Nike June 12" /></div>
          <div className="product-info">
            <h3>Nike June 12</h3>
            <p><img src="Vector (1).png" alt="Rating" /> 4.9</p>
            <img src="price.png" alt="Price Icon" />
            <p className="price">₦74,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
