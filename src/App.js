import React, { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], // initial state of monsters is an empty array
      searchField: "", //initial state of searchField
    };
  }

  // a lifecycle method that runs when the app mounts
  componentDidMount() {
    // return a promise
    fetch("http://jsonplaceholder.typicode.com/users")
      // if promise is successful, it returns a response
      // get response and change format to JSON
      .then((response) => response.json())
      // get the data and change state to update monsters
      .then((data) =>
        this.setState({
          monsters: data,
        })
      );
  }

  //when creating your own class method, you can use a function
  // a function will automatically bind to the class
  handleChange = (e) => {  
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1 className="app-title">Monster Space</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filteredMonsters}
          searchInput={this.state.searchField}
        />
      </div>
    );
  }
}

export default App;
