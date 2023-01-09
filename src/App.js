import { CardList } from './CardList';
import { SearchBox } from './SearchBox';
import { robots } from './robots';

export default function App() {
  return (
    <div className='tc'>
      <h1>Robots Collection</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}
