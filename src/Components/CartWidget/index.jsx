import React from 'react';
import { useCart } from "../../Context/CartContext";

function CartWidget() {
    const { getTotalItems } = useCart();

    const totalItems = getTotalItems();

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <span role="img" aria-label="Carrinho">🛒</span>
            {totalItems > 0 && (
                <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px',
                    fontSize: '12px'
                }}>
                    {totalItems}
                </span>
            )}
        </div>
    );
}

export default CartWidget;


