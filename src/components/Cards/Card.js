import React from 'react';
import './Card.css';

const Card = ({ backgroundImage }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div>
            <h2>Lorem Ipsum </h2>
            <p> Doda Ispac Kuntom </p>
        </div>
    </div>
  );
}

export default Card;