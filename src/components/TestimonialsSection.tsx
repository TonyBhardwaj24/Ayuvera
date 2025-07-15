import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "After a week, my sugar went from 250 to 170. Feels more energetic too.",
    author: "Ravi Sharma",
    age: "51",
    type: "health"
  },
  {
    quote: "Skin feels cleaner, lighter, and digestion has improved. A blessing!",
    author: "Priya Jain",
    age: "33",
    type: "beauty"
  },
  {
    quote: "My doctor was surprised at my improved blood work after just 3 weeks.",
    author: "Amit Kumar",
    age: "47",
    type: "health"
  },
  {
    quote: "The glow on my face is noticeable. Friends keep asking what I'm using!",
    author: "Meera Patel",
    age: "39",
    type: "beauty"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from real people who've experienced Ayuvera DS
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-md bg-white border-l-4 ${
                testimonial.type === 'health' ? 'border-green-500' : 'border-amber-500'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg className="h-8 w-8 text-gray-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 mb-3">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${
                      testimonial.type === 'health' ? 'bg-green-500' : 'bg-amber-500'
                    } mr-2`}></div>
                    <span className="font-medium text-gray-900">{testimonial.author}, {testimonial.age}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {testimonial.type === 'health' ? 'Diabetes Management' : 'Beauty Enhancement'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-green-700 font-medium">
            Join thousands of satisfied customers who've transformed their health naturally
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
