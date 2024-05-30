import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductCard;
