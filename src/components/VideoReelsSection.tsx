import { motion } from 'framer-motion';

// Sample video data - replace with actual content
const videoReels = [
  {
    id: 1,
    videoUrl: "/1.mp4",

  },
  {
    id: 2,
    thumbnail: "/8608cbec-e216-11ef-bccd-66825970fb27_preview.mp4",
    videoUrl: "/2.mp4",

  },
  {
    id: 3,
    thumbnail: "/8608cbec-e216-11ef-bccd-66825970fb27_preview.mp4", 
    videoUrl: "/3.mp4",

  },
   {
    id: 3,
    thumbnail: "/8608cbec-e216-11ef-bccd-66825970fb27_preview.mp4", 
    videoUrl: "/4.mp4",

  },
];

const VideoReelsSection = () => {
  // Removed video modal functionality as videos now play directly in the grid.

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Watch Ayuvera DS in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover real results and learn how our Ayurvedic formula works
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoReels.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"

            >
              <div className="h-[350px] relative">
                <video
                  src={video.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div>

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
          <a 
            href="/products" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">Explore All Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoReelsSection;
