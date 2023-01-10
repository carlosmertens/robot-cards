export const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        type='search'
        placeholder='search robots'
        onChange={searchChange}
        className='pa3 ba b--green bg-washed-blue'
      />
    </div>
  );
};
