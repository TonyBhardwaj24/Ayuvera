import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Take 2 capsules daily',
    description: 'One in the morning and one in the evening for optimal results',
  },
  {
    title: 'Track sugar levels weekly',
    description: 'Monitor your progress to see the positive changes',
  },
  {
    title: 'Eat a balanced diet',
    description: 'Complement Ayuvera DS with nutritious, wholesome foods',
  },
  {
    title: 'Drink 2–3 liters of water daily',
    description: 'Stay hydrated to maximize the benefits of the herbs',
  },
];

const HowToUse = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      <img
        src="/7.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 relative z-10">
            How to Use Ayuvera 
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto relative z-10">
            Simple steps to maximize your health and beauty benefits
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="h-full w-0.5 bg-green-200"></div>
          </div>
          
          <div className="relative space-y-12 z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-xl font-medium text-green-800">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center z-10">
                  <div className="bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
