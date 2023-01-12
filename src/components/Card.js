import React from 'react';

const Card = ({ name, city, code }) => {
  return (
    <div className='tc grow bg-light-blue navy br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${name}?size=150x150`} />
      <div>
        <h2 className='pa3'>{name}</h2>
        <p className='pa2'>{city}</p>
        <p className='pa2'>({code})</p>
      </div>
    </div>
  );
};

export default Card;
