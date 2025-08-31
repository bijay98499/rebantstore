import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const Categories = () => {
  const categories = productsData.categories;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h1>
          <p className="text-lg text-gray-600">
            Browse our comprehensive range of smart home automation products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categoryProducts = productsData.products.filter(
              product => product.category === category.id
            );

            return (
              <div key={category.id} className="card p-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {categoryProducts.length} products
                  </span>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="btn-primary"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
