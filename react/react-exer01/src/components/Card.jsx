import React from 'react';

const Card = ({ title, category, content, image }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #000', borderRadius: '8px', padding: '15px', width: '500px' }}>
      {image && <img src={image} alt={title} style={{ objectFit: 'cover', width: '100%', height: '250px', border: '1px solid #308e1d' }} />}
      <h1>{title}</h1>
      <h4>{category}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Card;