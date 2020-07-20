import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    numOfSushi: 4
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => {
      this.setState({sushis})
    })
  }

  showMoreSushi = () => {
    this.setState({numOfSushi: this.state.numOfSushi + 4})
  }
  
  render() {
    // console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis} 
        numOfSushi={this.state.numOfSushi}
        showMoreSushi={this.showMoreSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;