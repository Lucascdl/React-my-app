import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from '../Services/firebase';
import ItemDetail from './ItemDetail.jsx';
import { useCart } from '../Context/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchItemFromFirestore = async () => {
      try {
        const docRef = doc(db, "produtos", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setItem({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error("Documento não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar item do Firestore:", error);
      }
    };

    fetchItemFromFirestore();
  }, [id]);

  const handleAddToCart = (quantity) => {
    if (item) {
      addToCart(item, quantity);
      console.log(`Produto adicionado ao carrinho:`, item, `Quantidade:`, quantity);
    }
  };

  return (
    <div>
      {item ? (
        <ItemDetail item={item} onAddToCart={handleAddToCart} />
      ) : (
        <p>Carregando item...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

