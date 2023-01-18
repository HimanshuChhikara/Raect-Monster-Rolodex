import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }, () => { }))
  }

  onSearchChange = (event) => {
      const searchString = event.target.value.toLowerCase();
      this.setState(()=> {
        return {searchField : searchString}
      })
    }

  render() {
    const filtermonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (<div className='App'>
      <h1>Monster Rolodex</h1>
    <SearchBox onChangeHandler={this.onSearchChange} placeHolder={'Search monsters'} className={'search-boxk'}/>
    <CardList monster={filtermonster} />
    </div>
    );
  }
}

export default App;
