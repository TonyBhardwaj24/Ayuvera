import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 sm:block lg:w-1/3">
        <svg
          className="absolute inset-0 h-full w-full text-green-50"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="leaf-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(25)"
            >
              <path
                d="M25,60 a20,35 0 1,0 0,-45 a20,35 0 1,0 0,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <img 
            src="https://mocha-cdn.com/0197c1fb-f560-79a3-8573-d720ae56e601/Screenshot_2025-06-30_230753-Artguru.png" 
            alt="Ayuvera DS Logo" 
            className="mx-auto sm:mx-0 h-20 md:h-30 mb-4"
          />
          <img 
            src="/5.png" 
            alt="New Image" 
            className="absolute right-[-10%] top-[10%] h-full w-1/2 object-cover"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 max-w-3xl"
          >
            Naturally Manage Diabetes & Enhance Beauty with Ayurveda
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0"
          >
            A powerful blend of authentic Ayurvedic herbs that helps maintain healthy blood sugar levels while enhancing your natural beauty from within.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a 
              href="https://wa.me/9315569475?text=I want to order Ayuvera products" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Order on WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
