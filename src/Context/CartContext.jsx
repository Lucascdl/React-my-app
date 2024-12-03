import React, { createContext, useContext, useState } from "react";
import { addDoc, collection, writeBatch, doc, getDoc } from "firebase/firestore";
import db from "../Services/firebase";

const checkAndUpdateStock = async (cart) => {
  const batch = writeBatch(db);

  for (const item of cart) {
    console.log("Buscando produto com id:", String(item.id));
    debugger
    const itemRef = doc(db, "produtos", String(item.id));
    const itemSnapshot = await getDoc(itemRef);

    if (itemSnapshot.exists()) {
      
      const currentStock = itemSnapshot.data().stock || 0;
      if (currentStock < item.quantity) {
        throw new Error(`Estoque insuficiente para o item: ${item.title}`);
      }
      batch.update(itemRef, { stock: currentStock - item.quantity });
    } else {
      throw new Error(`Item não encontrado: ${item.title}`);
    }
  }

  await batch.commit();
};

const createOrder = async (buyer, cart, getTotalPrice) => {
  if (cart.length === 0) {
    throw new Error("O carrinho está vazio. Não é possível criar uma ordem.");
  }

  const order = {
    buyer,
    items: cart.map(({ id, title, price, quantity }) => ({
      id,
      title,
      price,
      quantity,
    })),
    date: new Date().toISOString(),
    total: getTotalPrice(),
  };

  try {
    await checkAndUpdateStock(cart);

    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar a ordem:", error);
    throw error;
  }
};

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === String(item.id));
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === String(item.id) ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevCart, { ...item, id: String(item.id), image: item.pictureUrl, description: item.description, quantity }];
    });
  };

  const removeFromCart = (id) => setCart((prevCart) => prevCart.filter((item) => item.id !== id));

  const clearCart = () => setCart([]);

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalItems,
        createOrder: (buyer) => createOrder(buyer, cart, getTotalPrice),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);


