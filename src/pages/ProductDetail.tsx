import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  tagline: string;
  fullDescription: string;
  price: string;
  duration: string;
  image: string;
  benefits: string[];
  ingredients: string[];
  dosage: string;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProduct = productsData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct as Product);
    }
  }, [productId]);
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Not Found</h2>
          <Link 
            to="/products"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm text-gray-500"
        >
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-green-600 transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </motion.div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden shadow-lg h-[400px]"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-white bg-opacity-90 text-green-800 text-sm font-medium rounded-full">
              {product.category}
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-lg text-green-700 mb-4">{product.tagline}</p>
            <p className="text-gray-600 mb-6">{product.fullDescription}</p>
            
            <div className="mb-6 flex items-center">
              <div className="text-2xl font-bold text-gray-800 mr-4">{product.price}</div>
              <div className="text-sm text-gray-500">{product.duration}</div>
            </div>
            
            <a 
              href={`https://wa.me/9315569475?text=I want to order ${product.name}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Order on WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
            </a>
            
            <div className="mt-4 text-sm text-green-600">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"></path>
                </svg>
                <span>Free Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Product Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-4">Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-4">Key Ingredients</h2>
            <ul className="space-y-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-amber-500 mr-2 mt-2"></div>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* How to Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-4">How to Use</h2>
            <p className="text-gray-700">{product.dosage}</p>
            
            <div className="mt-6">
              <h3 className="font-medium text-green-700 mb-2">For Best Results:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-gray-700">Take consistently for at least 30 days</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  <span className="text-gray-700">Follow a balanced diet</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="text-gray-700">Consult with Ayurvedic practitioner</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  category={relatedProduct.category}
                  shortDescription={relatedProduct.shortDescription}
                  image={relatedProduct.image}
                  delay={index * 0.1}
                />
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
