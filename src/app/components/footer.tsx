import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-xs">
      {/* First Section: Logo, Subscribe, and Contact Information */}
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 bg-gray-100 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Subscribe */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Hekto</h2>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-2 mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-4 text-sm py-2 border focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <button className="bg-pink-500 text-white text-xs px-4 py-2 mt-2 sm:mt-0 hover:bg-pink-600">
                SignUp
              </button>
            </div>
            <p className="text-violet-400">
              Contact us: <br />
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-violet-400">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2 text-violet-400">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pages</h3>
            <ul className="space-y-2 text-violet-400">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Section: Copyright and Social Media Icons */}
      <div className="bg-slate-400 py-2 mt-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 sm:px-10 lg:px-12">
          <p className="text-white text-sm">
            © Hekto, All Rights Reserved
          </p>
       
          <div className="flex space-x-6 text-white">
  <div className="bg-[#151875] w-10 h-10 flex items-center justify-center rounded-full hover:bg-violet-600 cursor-pointer">
    <FaFacebookF />
  </div>
  <div className="bg-[#151875] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
    <FaTwitter />
  </div>
  <div className="bg-[#151875] w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
    <FaInstagram />
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}
