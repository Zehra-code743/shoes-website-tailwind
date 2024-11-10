

import Header from '../components/Header';
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-black via-red-600 to-red-500 py-16">
        <div className="container mx-auto text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 transition-all duration-500 transform hover:scale-105">
            Welcome to Nike Shoes
          </h2>
          <p className="text-base sm:text-lg mb-12 opacity-90">
            Discover the best footwear for every occasion.
          </p>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
              <img 
                src="/nike 9.jpg" 
                alt="Running Shoes" 
                className="w-full h-56 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-black mb-2">Running Shoes</h3>
              <p className="text-black">Designed for comfort and performance.</p>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
              <img 
                src="/nike 1.jpg" 
                alt="Casual Sneakers" 
                className="w-full h-56 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-black mb-2">Casual Sneakers</h3>
              <p className="text-black">Perfect for everyday wear.</p>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-red-500">
              <img 
                src="/nike 2.jpg" 
                alt="Boots" 
                className="w-full h-56 object-cover rounded-md mb-4 transition-all duration-300 transform hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-black mb-2">Boots</h3>
              <p className="text-black">Stylish and durable for the colder months.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home
