import { useState } from 'react'
// import './App.css'

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestDeals from './components/BestDeals';
import Categories from './components/Categories';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function Home() {
  return (
    // <Router>
      <div className="App">
          <Header />
          <main>
              <Hero />
              <BestDeals />
              <Categories />
              <Subscription />
              <Footer />
          </main>
      </div>
     
  );
}

export default Home;