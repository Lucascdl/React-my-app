import React from 'react';
import { useCart } from '../Context/CartContext';

function CartPage() {
  const { cart, getTotalPrice, clearCart } = useCart();

  console.log("Carrinho na página de carrinho:", cart);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x R$ {item.price.toFixed(2)} = R$ {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: R$ {getTotalPrice().toFixed(2)}</h3>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
