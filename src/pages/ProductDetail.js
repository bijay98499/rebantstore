import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  // Flatten products from the new structure and find the product
  const allProducts = Object.values(productsData.products).flat();
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Enhanced algorithm to find similar products
  const getSimilarProducts = (currentProduct) => {
    const allProductsForSimilarity = Object.values(productsData.products).flat().filter(p => p.id !== currentProduct.id);
    
    // Score products based on similarity
    const scoredProducts = allProductsForSimilarity.map(product => {
      let score = 0;
      
      // Same category gets highest priority (50 points)
      if (product.category === currentProduct.category) {
        score += 50;
      }
      
      // Similar price range (within 30% gets 20 points, within 50% gets 10 points)
      const priceDiff = Math.abs(product.price - currentProduct.price) / currentProduct.price;
      if (priceDiff <= 0.3) {
        score += 20;
      } else if (priceDiff <= 0.5) {
        score += 10;
      }
      
      // Shared features (5 points per shared feature)
      const sharedFeatures = product.features.filter(feature => 
        currentProduct.features.some(currentFeature => 
          currentFeature.toLowerCase().includes(feature.toLowerCase()) ||
          feature.toLowerCase().includes(currentFeature.toLowerCase())
        )
      );
      score += sharedFeatures.length * 5;
      
      // Similar name keywords (10 points per shared keyword)
      const currentKeywords = currentProduct.name.toLowerCase().split(' ');
      const productKeywords = product.name.toLowerCase().split(' ');
      const sharedKeywords = currentKeywords.filter(keyword => 
        productKeywords.includes(keyword) && keyword.length > 3
      );
      score += sharedKeywords.length * 10;
      
      return { ...product, similarityScore: score };
    });
    
    // Sort by score and return top 6 products
    return scoredProducts
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, 6);
  };

  const similarProducts = getSimilarProducts(product);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "9779842358515";
    const message = `Hi! I'm interested in ordering the ${product.name} (₹${product.price}). Can you provide more details and help me place an order?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const category = productsData.categories.find(c => c.id === product.category);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-primary-600">Products</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                {category?.name}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-bold text-primary-600">
                  ₹{product.price}
                </span>
                {product.discount && (
                  <div className="flex flex-col">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.discount}% OFF
                    </span>
                    <span className="text-lg text-gray-500 line-through mt-1">
                      ₹{Math.round(product.price / (1 - product.discount / 100))}
                    </span>
                  </div>
                )}
              </div>
              {product.discount && (
                <p className="text-green-600 font-medium mt-2">
                  You save ₹{Math.round((product.price / (1 - product.discount / 100)) - product.price)}!
                </p>
              )}
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Button */}
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
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

        {/* Similar Products */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Similar Products</h2>
            <Link 
              to="/products" 
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              View All Products →
            </Link>
          </div>
          
          {similarProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.slice(0, 3).map((relatedProduct) => (
                  <div key={relatedProduct.id} className="card p-6 hover:shadow-lg transition-shadow">
                    <div className="relative mb-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      {relatedProduct.category === product.category && (
                        <span className="absolute top-2 right-2 bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                          Same Category
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    
                    {/* Similarity indicators */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {relatedProduct.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {relatedProduct.features.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{relatedProduct.features.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <Link
                        to={`/product/${relatedProduct.id}`}
                        className="btn-primary text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Show more similar products if available */}
              {similarProducts.length > 3 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">More Similar Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {similarProducts.slice(3, 6).map((relatedProduct) => (
                      <div key={relatedProduct.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {relatedProduct.name}
                            </h4>
                            <Link
                              to={`/product/${relatedProduct.id}`}
                              className="text-xs text-primary-600 hover:text-primary-700"
                            >
                              View Details →
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No similar products found.</p>
              <Link to="/products" className="btn-primary">
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
