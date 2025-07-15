import { motion } from 'framer-motion';

const AyurvedaBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-16 relative">
      <img 
        src="/new.png" 
        alt="Ayurveda Image" 
        className="absolute left-[10%] top-1/2 -translate-y-1/2 h-80 w-auto object-contain"
      />
      <img 
        src="/new.png" 
        alt="Ayurveda Image" 
        className="absolute right-[10%] top-1/2 -translate-y-1/2 h-80 w-auto object-contain"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800">
            Live Healthier With Every Sip
          </h2>
          <p className="mt-4 text-lg md:text-xl text-green-700 max-w-3xl mx-auto">
            A powerful Ayurvedic blend for sugar balance and radiant skin.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {['Proven Ayurvedic Formula', 'Natural Ingredients', 'Holistic Wellness'].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center px-4 py-2 bg-white bg-opacity-70 rounded-full shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span className="text-green-800">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-green-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 text-sm text-green-600">
                Trusted Ayurvedic Tradition
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AyurvedaBanner;
