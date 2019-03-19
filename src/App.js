import React, { Component } from 'react';
import './App.css';

function getNewCat () {
  return `https://cataas.com/cat/gif?rand=${Math.random()}`
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      cats: new Array(5).fill().map(x => getNewCat())
    }
    
    this.addCat.bind(this);
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.addCat()
      }
    };
  }
  
  addCat () {
    let {cats} = this.state
    cats.push(getNewCat());
    this.setState({cats});
  }
  
  render () {
    let {cats} = this.state
    return (
      <div className="App">
        <h1>
          A Random Cat Gif Browser Built on &nbsp;
          <a href="https://reactjs.org/"><code>ReactJS</code></a> &nbsp;
          and&nbsp;
          <a href="https://cataas.com/#/"><code>CATaaS</code></a>
        </h1>
        <header className="App-header">
          {cats.map(cat => <img src={cat} className="App-logo" alt="cat" key={cat}/>)}
        </header>
      </div>
    );
  }
}

export default App;
