import React, { Component } from 'react';
import { SearchBox } from './components/SearchBox';
import { CardList } from './components/CardList';
import { Scroll } from './components/Scroll';
import { Footer } from './components/Footer';
// import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1 className='loading-text'>Loading...</h1>
    ) : (
      <div className='tc'>
        <h1 className='page-title mb5'>Robots Collection</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        <Footer />
      </div>
    );
  }
}

export default App;
