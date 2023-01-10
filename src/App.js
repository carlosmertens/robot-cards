import { Component } from 'react';
import { SearchBox } from './SearchBox';
import { CardList } from './CardList';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: '',
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='page-title'>Robots Collection</h1>
        <SearchBox
          searchField={this.state.searchField}
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
