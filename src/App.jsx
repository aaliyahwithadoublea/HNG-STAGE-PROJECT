import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestDeals from './components/BestDeals';
import Categories from './components/Categories';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
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

export default App;