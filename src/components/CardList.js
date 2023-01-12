import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            name={robot.lastName}
            city={robot.address.city}
            code={robot.username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
