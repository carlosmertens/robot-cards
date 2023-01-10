export const Card = ({ name, email, id }) => {
  return (
    <div className='tc card-bg dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='Robot Avatar' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
