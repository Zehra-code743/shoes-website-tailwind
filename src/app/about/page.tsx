

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-black via-green-600 to-red-500 py-16">
        <div className="container mx-auto text-center">
          
          <img
            src="/nike 3.jpg" 
            alt="About Nike Shoes"
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
          <p className="text-lg text-white mb-12">
            At Nike Shoes, we believe in providing the best quality shoes that combine comfort, style, and durability. Our mission is to offer a variety of footwear for every occasion.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
