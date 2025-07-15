import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaFire, FaSun, FaAppleAlt, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  {
    health: 'Lowers sugar levels',
    beauty: 'Enhances skin glow',
    icon: FaLeaf,
  },
  {
    health: 'Improves metabolism',
    beauty: 'Reduces acne & blemishes',
    icon: FaFire,
  },
  {
    health: 'Increases energy',
    beauty: 'Slows aging naturally',
    icon: FaSun,
  },
  {
    health: 'Natural herbs, no side effects',
    beauty: 'Detoxifies skin & body',
    icon: FaHeart,
  },
  {
    health: 'Better digestion',
    beauty: 'Nourishes from within',
    icon: FaAppleAlt,
  },
  {
    health: 'Immune boost',
    beauty: 'Reduces inflammation',
    icon: FaShieldAlt,
  }
];

const BenefitsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Dual Benefits for Health & Beauty
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the power of ancient Ayurvedic wisdom in every capsule of Ayuvera DS
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              
              <div className="border-b border-green-200 pb-4 mb-4">
                <h3 className="text-lg font-medium text-green-800">Health Benefit</h3>
                <p className="mt-2 text-gray-700">{benefit.health}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-amber-800">Beauty Benefit</h3>
                <p className="mt-2 text-gray-700">{benefit.beauty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
