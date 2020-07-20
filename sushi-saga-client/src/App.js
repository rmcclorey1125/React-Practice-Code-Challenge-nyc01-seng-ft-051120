import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushis => {
      this.setState({sushis})
    })
  }
  
  render() {
    // console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;