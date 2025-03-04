import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Kilos', category: 'Food' },
  { id: 2, name: 'Mobiles', category: 'Electronics' },
  { id: 3, name: 'Fashion', category: 'Clothing' },
  { id: 4, name: 'Electronics', category: 'Gadgets' },
  { id: 5, name: 'Home & Furniture', category: 'Home' },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list">
      <h1 className="text-2xl font-bold">Product List</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 cursor-pointer" onClick={() => handleProductClick(product.id)}>
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
