import React, { useState } from 'react';

function Item({ id, title, description, price, pictureUrl }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="Item" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <img
        src={pictureUrl}
        alt={title}
        style={{
          width: '200px',
          height: '300px',
          objectFit: 'contain',
          objectPosition: 'center',
          marginBottom: '10px'
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontWeight: 'bold' }}>Preço: R$ {price.toFixed(2)}</p>

      {}
      <button
        onClick={toggleDetails}
        style={{
          textDecoration: 'underline',
          border: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          color: '#000',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px',
          borderRadius: '4px',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
      >
        Saiba mais
      </button>


      {}
      {showDetails && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content" style={modalContentStyle}>
            <span className="close" onClick={toggleDetails}>&times;</span>
            <img
              src={pictureUrl}
              alt={title}
              style={{ width: '250px', height: 'auto', objectFit: 'contain', marginBottom: '10px' }}
            />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p style={{ fontWeight: 'bold' }}>Preço: R$ {price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '9999',
  transition: 'all 0.3s ease',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  width: '80%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  textAlign: 'center',
};

export default Item;
