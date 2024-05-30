import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md p-4 relative">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <div className="relative">
        <img src={product.image} alt={product.name} />
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
