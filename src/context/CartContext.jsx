import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Define the Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isBumped, setIsBumped] = useState(false); // Used for the Header pulse animation

  // Function to add items to the cart
  const addToCart = (product, size, color) => {
    setCart((prevCart) => {
      // Check if the exact shoe (same ID and same Size) exists
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItemIndex > -1) {
        // If it exists, increase quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }
      
      // If it's new, add to the array
      return [...prevCart, { ...product, size, color, quantity: 1 }];
    });

    // Trigger the "Pulse" animation for the cart icon
    setIsBumped(true);
    setTimeout(() => setIsBumped(false), 300); 
  };

  const removeFromCart = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal, isBumped }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Define the Custom Hook (This was the cause of your Home.jsx error)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

