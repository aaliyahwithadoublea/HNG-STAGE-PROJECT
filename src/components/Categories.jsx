import React from 'react';
import shoe4 from '../assets/shoe4.png'
import shoe5 from '../assets/shoe5.png'
import shoe6 from '../assets/shoe6.png'
import shoe7 from '../assets/shoe7.png'
import shoe8 from '../assets/shoe8.png'
import shoe9 from '../assets/shoe9.png'
import shoe10 from '../assets/shoe10.png'
import shoe11 from '../assets/shoe11.png'
import shoe12 from '../assets/shoe12.png'
import shoe13 from '../assets/shoe13.png'
import shoe14 from '../assets/shoe14.png'
import price from '../assets/price.png'
import scroll from '../assets/Group 36.png'
import whitecart from '../assets/white cart.png'
import "../Header.css";


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
            <div className="product-grid1" >
                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe4} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1" > 
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                              <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe5} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe6} alt="Product Image" height="200px" width="220px"style={{backgroundColor:'white'}}  /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="product-card1"style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe8} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe8} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe5} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe10} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe11} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe5} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe13} alt="Product Image" height="200px" width="220px" style={{backgroundColor:'white'}} /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe14} alt="Product Image" height="200px" width="220px"style={{backgroundColor:'white'}}  /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-card1" style={{backgroundColor:'white'}}>
                    <div className="product-image"><img src={shoe14} alt="Product Image" height="200px" width="220px"style={{backgroundColor:'white'}}  /></div>
                    <div className="product-info1">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h3>Nike 12</h3>
                                <p className="price"><img src={price} /></p>
                            </div>
                            <div>
                                <img src={whitecart} style={{ padding: '20px', borderRadius: '34px',cursor:'pointer' }} alt="Cart Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}
                
            </div>

            <div style={{ display:'flex', justifyContent:'center', marginTop:'3rem'}} className="clicky">
                <a href="#"><img src={scroll} alt="Click Here" style={{cursor:'pointer'}}/></a>
            </div>
        </section>
    );
}

export default Categories;
