import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const CartContext = createContext();

// Provedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Função para adicionar produtos ao carrinho
  const addToCart = (item, quantity) => {
    if (!item || !item.id) {
        console.error("Erro: Item inválido ao adicionar ao carrinho:", item);
        return;
    }

    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity += quantity;
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...item, quantity }]);
    }
};

  // Função para calcular o total de itens no carrinho
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Função para calcular o total da compra
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (itemId) => {
    setCart(cart.filter(cartItem => cartItem.id !== itemId));
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        getTotalItems, 
        getTotalPrice, 
        removeFromCart, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para consumir o contexto
export const useCart = () => {
  return useContext(CartContext);
};
