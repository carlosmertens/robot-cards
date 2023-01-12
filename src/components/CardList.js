import { Card } from './Card';

export const CardList = ({ robots }) => {
  const cardsArrray = robots.map((user, i) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{cardsArrray}</div>;
};
