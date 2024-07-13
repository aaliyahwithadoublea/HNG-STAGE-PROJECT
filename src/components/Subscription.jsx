import React from 'react';
import "../Header.css";
// import "../"

const Subscription = () => {
    return (
        <section style={{backgroundColor:'white'}}>
            <div className="subscription-container">
                <h2>Subscribe to our letters!</h2>
                <p>To receive updates on latest fashion trends, updates <br />and latest news from us.</p>
                <form>
                    <input type="email" placeholder="Enter Email" required />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
            <br/> <br/>
        </section>
    );
};

export default Subscription;
