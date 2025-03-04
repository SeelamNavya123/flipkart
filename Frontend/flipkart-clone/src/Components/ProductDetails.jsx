import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Kilos', description: 'High-quality food items.', price: '$10' },
  { id: 2, name: 'Mobiles', description: 'Latest smartphones.', price: '$300' },
  { id: 3, name: 'Fashion', description: 'Trendy clothing and accessories.', price: '$50' },
  { id: 4, name: 'Electronics', description: 'Gadgets and devices.', price: '$150' },
  { id: 5, name: 'Home & Furniture', description: 'Furniture and home decor.', price: '$200' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl">{product.price}</p>
      <button className="bg-green-400 p-2 mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
