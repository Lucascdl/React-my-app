import React from 'react';
import { useCart } from '../../Context/CartContext';  // Importando o contexto

function CartWidget() {
    const { getTotalItems } = useCart();  // Consome o total de itens do carrinho

    const totalItems = getTotalItems();  // Obtém o número total de itens no carrinho

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
