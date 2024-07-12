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
            <div className="product-grid1">
                {/* Product cards for categories */}
            </div>
            <div className="clicky">
                <a href="#"><img src="Group 36.png" alt="Arrow" /></a>
            </div>
        </section>
    );
};

export default Categories;
