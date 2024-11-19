import React, { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (stock > 0) {
            onAdd(quantity); // Adiciona a quantidade ao carrinho
        }
    };

    return (
        <div>
            <div className="item-count">
                <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease} disabled={quantity >= stock}>+</button>
            </div>
            <button onClick={handleAddToCart} disabled={stock === 0}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}

export default ItemCount;
