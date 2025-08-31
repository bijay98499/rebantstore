import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';
import UnbeatableOffers from '../components/UnbeatableOffers';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const categories = productsData.categories;
  
  // Flatten products from the new structure
  const allProducts = Object.values(productsData.products).flat();
  const featuredProducts = allProducts.slice(0, 6);
  
  // Get all product names and categories for suggestions
  const allSuggestions = [
    ...allProducts.map(product => product.name),
    ...productsData.categories.map(category => category.name),
    'Water Level Controller', 'Smart Home Automation', 'Alexa Control', 'Voice Control',
    'Automatic Pump Control', 'Tank Level Monitor', 'Smart Water Management'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleQuickSearch = (term) => {
    navigate(`/products?search=${encodeURIComponent(term)}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 1) {
      const filteredSuggestions = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 6);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    navigate(`/products?search=${encodeURIComponent(suggestion)}`);
  };

  const handleInputFocus = () => {
    if (searchQuery.length > 1 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const quickSearchTerms = ['Water Level Controller', 'Domestic Solutions', 'Industrial Automation', 'Smart Water Pumps', 'Energy Saving Devices'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Main Heading with Icons */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-full animate-pulse">
                 
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Smart Water Control
                </h1>
                
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-blue-200 mb-6">
                + Alexa Voice Control
              </h2>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-full mr-3">
                    <span className="text-xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold">Automatic Water Management</h3>
                </div>
                <p className="text-blue-100">
                  Smart controllers for tanks, pumps & overflow protection - from homes to industries
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-full mr-3">
                    <span className="text-xl">🗣️</span>
                  </div>
                  <h3 className="text-xl font-bold">Alexa Voice Control</h3>
                </div>
                <p className="text-blue-100">
                  "Alexa, turn on water pump" - Control all your smart devices with voice commands
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the future of home automation with intelligent water management and voice control
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 pr-10 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-48 text-black appearance-none"
                >
                  <option value="">All Products</option>
                  <option value="lights">Lights</option>
                  <option value="wires">Wires</option>
                  <option value="smart-devices">Smart Devices</option>
                  <option value="water-controllers">Automatic Water Controllers</option>
                  <option value="fans-motors">Fans & Motors</option>
                  <option value="ldr-sensors">LDR Sensors</option>
                </select>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory('')}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search water level controllers, smart automation..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(false);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
                
                {/* Auto-suggestions dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 text-black border-b border-gray-100 last:border-b-0 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="truncate">{suggestion}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Water Level Controller Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fully Automatic Water Level Controller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.products['water-controllers'].map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-center">
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unbeatable Offers */}
      <UnbeatableOffers />

      {/* Domestic to Industrial Solutions */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">From Domestic to Industrial Water Solutions</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Complete automatic water level control systems designed for every scale - from home water tanks to large industrial facilities
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Domestic Solutions */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">🏠 Domestic Water Control</h3>
              <p className="text-blue-100 mb-4">
                Smart water level controllers for home water tanks, overhead tanks, and underground reservoirs.
              </p>
              <ul className="text-blue-100 mb-6 space-y-2">
                <li>• Automatic pump start/stop</li>
                <li>• Dry run protection</li>
                <li>• Mobile app monitoring</li>
                <li>• Energy efficient operation</li>
              </ul>
              <Link 
                to="/products?category=Water Level Controllers" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Domestic Solutions →
              </Link>
            </div>
            
            {/* Industrial Solutions */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">🏭 Industrial Water Management</h3>
              <p className="text-green-100 mb-4">
                Heavy-duty automatic water level control systems for industries, hotels, hospitals, and commercial buildings.
              </p>
              <ul className="text-green-100 mb-6 space-y-2">
                <li>• Multi-tank management</li>
                <li>• SCADA integration</li>
                <li>• Remote monitoring & control</li>
                <li>• Fail-safe backup systems</li>
              </ul>
              <Link 
                to="/products?category=Industrial Solutions" 
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Industrial Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water & Electricity Savings Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💰 Save Water & Electricity with Smart Automation</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our automatic water level controllers help you save both water and electricity while ensuring continuous water supply
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Water Conservation</h3>
              <p className="text-gray-600">Prevents overflow and wastage with precise water level monitoring</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Energy Efficiency</h3>
              <p className="text-gray-600">Automatic pump control reduces electricity consumption by 30-40%</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Pump Protection</h3>
              <p className="text-gray-600">Dry run protection extends pump life and reduces maintenance costs</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Smart Monitoring</h3>
              <p className="text-gray-600">Real-time alerts and remote control via mobile app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Tools Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Electrical Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Smart Home Automation</h3>
              <p className="text-blue-100 mb-6">
                Transform your home with our complete range of smart switches, sensors, and controllers. 
                Professional installation and support included.
              </p>
              <Link
                to="/products?category=smart-devices"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Explore Smart Devices
              </Link>
            </div>
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Electrical Wiring Solutions</h3>
              <p className="text-green-100 mb-6">
                High-quality wires, cables, and electrical components for residential and commercial projects. 
                Bulk orders available with competitive pricing.
              </p>
              <Link
                to="/products?category=wires"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Shop Wiring Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Installation Package</h3>
              <p className="text-gray-300">End-to-end installation with setup, testing, and training included in every purchase.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">All products come with manufacturer warranty and our quality assurance.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock customer support via WhatsApp and phone for technical assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Contact */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Electrical Solutions</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get notifications about new products, deals, and electrical safety tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/9779842358515?text=Hi! I'm interested in your electrical products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
