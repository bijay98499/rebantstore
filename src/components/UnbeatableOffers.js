import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UnbeatableOffers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const phoneNumber = "+9779842358515";

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Hi! I'm interested in ordering:

*${product.name}*
Price: ₹${product.offerPrice} (${product.discount}% OFF)
Original Price: ₹${product.originalPrice}

Please provide more details about availability and delivery.`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const offerProducts = [
    {
      id: "alexa-echo-dot",
      name: "Amazon Echo Dot (5th Gen)",
      originalPrice: 16000,
      offerPrice: 12999,
      discount: 33,
      image: "https://m.media-amazon.com/images/I/81lGxS2ZisL._SX425_.jpg",
      description: "Smart speaker with Alexa - Control your smart home devices with voice commands",
      features: ["Voice Control", "Smart Home Hub", "Music Streaming", "Built-in Speaker"],
      category: "smart-devices",
    },
    {
      id: "smart-retrofit-switch",
      name: "Smart Retrofit 3+1 Node",
      originalPrice: 2500,
      offerPrice: 1899,
      discount: 24,
      image: "https://m.media-amazon.com/images/I/51I3Z93JJRL._SL1080_.jpg",
      description: "Convert any regular switch to smart switch make home smart - No rewiring required",
      features: ["Easy Installation", "WiFi Enabled", "App Control", "Voice Compatible"],
      category: "smart-devices",
    },
    {
      id: "alexa-smart-plug",
      name: "Alexa Smart Plug",
      originalPrice: 1299,
      offerPrice: 899,
      discount: 31,
      image: "https://m.media-amazon.com/images/I/51YifSJsjCL._SL1500_.jpg",
      description: "Control any device with Alexa voice commands - Perfect for lamps and appliances",
      features: ["Alexa Compatible", "Remote Control", "Timer Function", "Energy Monitoring"],
      category: "smart-devices",
    },
    {
      id: "water-controller-alexa",
      name: "Alexa Water Controller Pro",
      originalPrice: 4500,
      offerPrice: 3299,
      discount: 27,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop",
      description: "Voice-controlled water level management with Alexa integration",
      features: ["Alexa Voice Control", "Auto Start/Stop", "Mobile App", "Overflow Protection"],
      category: "water-controllers",
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🔥 Unbeatable Offers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited time deals on Alexa-enabled smart devices and retrofit solutions. 
            Transform your home into a smart home today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Badge */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.discount}% OFF
                  </span>
                </div>
                
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{product.offerPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    You save ₹{product.originalPrice - product.offerPrice}!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 px-4 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center group"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-4 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center group"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Smart Devices
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b bg-gray-50">
              <div>
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {selectedProduct.discount}% OFF - Limited Time!
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Product Details */}
                <div>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProduct.category === 'smart-devices' ? 'Smart Devices' : 
                       selectedProduct.category === 'water-controllers' ? 'Water Controllers' : 
                       selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                    </span>
                  </div>

                  {/* Pricing Section */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-4xl font-bold text-green-600">
                        ₹{selectedProduct.offerPrice}
                      </span>
                      <span className="text-2xl text-gray-500 line-through">
                        ₹{selectedProduct.originalPrice}
                      </span>
                    </div>
                    <p className="text-lg text-green-600 font-medium">
                      🎉 You save ₹{selectedProduct.originalPrice - selectedProduct.offerPrice}!
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WhatsApp Order Button */}
                  <div className="space-y-4">
                    <button
                      onClick={() => handleWhatsAppOrder(selectedProduct)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center text-lg"
                    >
                      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Order on WhatsApp
                    </button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      Click to chat with us on WhatsApp for instant ordering and support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UnbeatableOffers;
