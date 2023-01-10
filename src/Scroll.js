export const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '.5px solid black',
        height: '500px',
      }}>
      {children}
    </div>
  );
};
