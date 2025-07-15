import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  image: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  category, 
  shortDescription, 
  image, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{shortDescription}</p>
        
        <Link 
          to={`/products/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium rounded bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
        >
          View Details
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
