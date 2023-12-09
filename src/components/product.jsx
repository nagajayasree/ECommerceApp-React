import React from 'react';

function Product({ img, title, desc, price }) {
  return (
    <div>
      <img src={img} alt={title} width={200} height={200} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
