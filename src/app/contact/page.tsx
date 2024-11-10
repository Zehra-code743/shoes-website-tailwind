

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-16">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-600 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-600 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-600 transition duration-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-md transition duration-300 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
