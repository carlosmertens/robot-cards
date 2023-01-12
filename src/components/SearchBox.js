export const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='search robots'
        onChange={searchChange}
        className='pa3 mb3 ba b--green bg-washed-blue'
      />
    </div>
  );
};
