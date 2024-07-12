import React from 'react';

const Subscription = () => {
    return (
        <section>
            <div className="subscription-container">
                <h2>Subscribe to our letters!</h2>
                <p>To receive updates on latest fashion trends, updates <br />and latest news from us.</p>
                <form>
                    <input type="email" placeholder="Enter Email" required />
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
        </section>
    );
};

export default Subscription;
