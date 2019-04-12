import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green tc dib br3 pa1 ma3 grow bw1 shadow-5" >
      <img src={`https://robohash.org/${id}?150x150`} alt="jane-doe-robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;