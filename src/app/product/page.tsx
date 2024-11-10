

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Product: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-black via-red-600 to-red-500 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 4.jpg" 
                alt="Running Shoes"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">Running Shoes</h3>
              <p className="text-gray-600">Price: $99.99</p>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 5.jpg" 
                alt="Casual Sneakers"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">Casual Sneakers</h3>
              <p className="text-gray-600">Price: $79.99</p>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 6.jpg" 
                alt="Boots"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">Boots</h3>
              <p className="text-gray-600">Price: $119.99</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 7.jpg" 
                alt="Boots"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">Our shoes</h3>
              <p className="text-gray-600">Price: $22.99</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 8.jpg" 
                alt="Boots"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">Book Now</h3>
              <p className="text-gray-600">Price: $44.99</p>
            </div> <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src="/nike 9.jpg" 
                alt="Boots"
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black">shoes</h3>
              <p className="text-gray-600">Price: $110.99</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
