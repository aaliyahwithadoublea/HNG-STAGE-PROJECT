import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="font-monda font-bold text-5xl leading-tight">
                Elevate your workout<br /> with <span className="text-gray-700">comfortable and</span><br /> <span className="text-gray-700">stylish</span> trainer shoes.
            </h1>
            <p className="font-monda font-bold text-xl leading-normal">
                Discover our cutting-edge collection of sneakers designed to keep you ahead of<br /> the curve. DashSteps combines innovative technology with modern aesthetics<br /> to deliver unparalleled performance and style.
            </p>
            <button className="shop-now bg-gray-800 text-white px-6 py-3 rounded-lg mt-4">Shop now</button>
        </section>
    );
};

export default Hero;
