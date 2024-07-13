import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BestDeals from './components/BestDeals';
import Categories from './components/Categories';
import Subscription from './components/Subscription';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function MainContent() {
  return (
    <main>
      <Hero />
      <BestDeals />
      <Categories />
      <Subscription />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Define a route for the root path ("/") */}
          <Route path="/" element={<MainContent />} />
          {/* Other routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
