import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import OrderFooter from '../components/OrderFooter';

const categories = ['All', 'Diabetes', 'Beauty', 'Hair', 'Immunity', 'Metabolism'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);
    
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Ayurvedic Products
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of authentic Ayurvedic formulations for health, beauty, and wellness
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              shortDescription={product.shortDescription}
              image={product.image}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
      {/* New Images Section */}
      <div className="mt-12 grid grid-cols-1 gap-0">
        <img src="/new3.png" alt="New Product 3" className="w-full h-auto object-cover" />
        <img src="/new4.png" alt="New Product 4" className="w-full h-auto object-cover" />
        <img src="/new5.png" alt="New Product 5" className="w-full h-auto object-cover" />
      </div>
      <OrderFooter />
    </div>
  );
};

export default Products;
