// component/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCart: (productId: string, qty: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        // Product already exists, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].qty += 1;
        return updatedCart;
      }
      // Add new product to cart
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCart = (productId: string, qty: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        updatedCart[productIndex].qty = qty;
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};