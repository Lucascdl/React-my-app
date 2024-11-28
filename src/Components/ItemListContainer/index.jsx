import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../Services/firebase";
import ItemList from "../ItemList";
import { useCart } from "../../Context/CartContext";

function ItemListContainer({ greeting, selectedCategory, isHomePage }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let itemQuery;

        if (isHomePage) {
          
          const featuredProducts = ["kGkdlXxFNiDdzZ4wxma0", "sIZ9KuBUlOrq4S24CtYb", "I0cIT9GcMcIa2vtsvSD6", "MoNR1fPlraZFNleGSnJD"];

          itemQuery = query(
            collection(db, "produtos"),
            where("__name__", "in", featuredProducts)
          );
        } else if (selectedCategory) {
          itemQuery = query(
            collection(db, "produtos"),
            where("title", "==", selectedCategory)
          );
        } else {
          itemQuery = collection(db, "produtos");
        }

        const querySnapshot = await getDocs(itemQuery);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(products);
      } catch (error) {
        console.error("Erro ao buscar os produtos: ", error);
      }
    };

    fetchItems();
  }, [isHomePage, selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(items.filter((item) => item.title === selectedCategory));
    } else {
      setFilteredItems(items);
    }
  }, [items, selectedCategory]);

  const handleAddToCart = (item, quantity) => {
    addToCart(item, quantity);
    console.log(`Adicionado ao carrinho: ${item.title} - Quantidade: ${quantity}`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={filteredItems} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;
