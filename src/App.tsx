import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

export function App() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Update document title
    document.title = 'Ayuvera - Ayurvedic Care for Health & Beauty';
    
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <Router>
      <AnimatePresence>
        <div className="font-['Poppins',sans-serif] antialiased">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
