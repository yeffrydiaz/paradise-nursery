/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
