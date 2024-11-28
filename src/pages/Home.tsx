// pages/Home.tsx
import React, { useState } from 'react';
import { useCart } from '../component/context/CartContext';

import './home.css';

// Define Product interface
interface Product {
  id: string;
  name: string;
  code: string;
  offer: string;
  price: number;
  discountedPrice: number;
  qty: number;
  image: string;
}

const Home: React.FC = () => {
  const { addToCart } = useCart(); // Get addToCart from CartContext

  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Princess House® Barbecue Disc Pair',
      code: '40224',
      offer: 'Limited Time Offer!',
      price: 699.90,
      discountedPrice: 349.00,
      qty: 1,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Princess House® Barbecue Disc Pair',
      code: '40224',
      offer: 'Limited Time Offer!',
      price: 699.90,
      discountedPrice: 349.00,
      qty: 1,
      image: 'https://via.placeholder.com/150',
    },{
      id: '2',
      name: 'Princess House® Barbecue Disc Pair',
      code: '40224',
      offer: 'Limited Time Offer!',
      price: 699.90,
      discountedPrice: 349.00,
      qty: 1,
      image: 'https://via.placeholder.com/150',
    },{
      id: '3',
      name: 'Princess House® Barbecue Disc Pair',
      code: '40224',
      offer: 'Limited Time Offer!',
      price: 699.90,
      discountedPrice: 349.00,
      qty: 1,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Call addToCart from CartContext
  };

  return (
    <div className="home">
      <main className="home__content">
        <section className="home__hero">
          <h1>Welcome to WittyCorp!</h1>
          <p>Where ideas spark brighter than your morning coffee and innovation runs wild. Ready to dive in?</p>
        </section>

        <section className="home__products">
          <h2>Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.offer}</p>
                <p>
                  Price: <strong>${product.discountedPrice}</strong>
                </p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;