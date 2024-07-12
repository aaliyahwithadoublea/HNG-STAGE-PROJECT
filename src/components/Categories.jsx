import React from 'react';

const Categories = () => {
    return (
        <section className="categories">
            <h2>Categories</h2>
            <div className="gender">
                <nav className="nav1">
                    <a href="#" className="cols">Men</a>
                    <a href="#" className="cols">Women</a>
                    <a href="#" className="cols">Kids</a>
                </nav>
            </div>
            <br/>
            <div className="product-grid1">

                <div className="product-card1">
                    <div className="product-image"><img src="shoe4.png" alt="Product Image" height="200px" width="220px" /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price">₦74,000</p>
                            </div>
                            <div>
                                <img src="white cart.png" style={{ padding: '20px', borderRadius: '34px' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repeat the product cards similarly for other products */}
                
                <div className="product-card1">
                    <div className="product-image"><img src="shoe5.png" alt="Product Image" height="200px" width="220px" /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price">₦74,000</p>
                            </div>
                            <div>
                                <img src="white cart.png" style={{ padding: '20px', borderRadius: '34px' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repeat the product cards for other products */}
                
                {/* Add more product cards as needed */}
                
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', alignItems: 'center', justifySelf: 'center', marginLeft: '30rem' }} className="clicky">
                <a href="#"><img src="Group 36.png" alt="Click Here" /></a>
            </div>
        </section>
    );
}

export default Categories;
