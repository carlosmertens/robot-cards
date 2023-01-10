import { Component } from 'react';
import { SearchBox } from './SearchBox';
import { CardList } from './CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
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

    if (this.state.robots.length === 0) {
      return <h1 className='loading-text'>Loading...</h1>;
    } else {
      return (
        <div className='tc'>
          <h1 className='page-title mb5'>Robots Collection</h1>
          <SearchBox
            searchField={this.state.searchField}
            searchChange={this.onSearchChange}
          />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
